import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const contactInfo = [
  {
    icon: "📧",
    label: "Email",
    value: "hounseyha1054@gmail.com",
    href: "mailto:hounseyha1054@gmail.com",
  },
  {
    icon: "📞",
    label: "Phone",
    value: "+855 016 903 850",
    href: "tel:+855016903850",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Phnom Penh, Cambodia",
    href: null,
  },
  {
    icon: "💼",
    label: "GitHub",
    value: "github.com/hounseyha1054-wq",
    href: "https://github.com/hounseyha1054-wq",
  },
];

function ContactMe() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mrpeqyzd", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSent(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch {
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 px-6 text-center" data-aos="fade-up">
        <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Get In Touch</p>
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-4">
          Let's Work Together
        </h1>
        <p className="text-zinc-400 text-lg max-w-xl mx-auto">
          Have a project in mind or just want to say hi? My inbox is always open.
        </p>
      </section>

      {/* ── MAIN GRID ── */}
      <section className="pb-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">

          {/* ── LEFT: Contact Info ── */}
          <div className="md:col-span-2 space-y-6" data-aos="fade-right">

            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 space-y-6">
              <h2 className="text-xl font-semibold">Contact Details</h2>

              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="text-sm font-medium text-zinc-200 hover:text-violet-400 transition-colors break-all">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm font-medium text-zinc-200">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8">
              <h2 className="text-xl font-semibold mb-5">Follow Me</h2>
              <div className="flex gap-4">
                {[
                  { label: "GitHub", href: "https://github.com/hounseyha1054-wq" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/houn-seyha-28712637b/" },
                  { label: "Instagram", href: "https://www.instagram.com/suzey.ha" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="flex-1 text-center py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm font-medium hover:bg-violet-600/20 hover:border-violet-500/50 transition-all">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Form ── */}
          <div className="md:col-span-3" data-aos="fade-left" data-aos-delay="150">
            <div className="bg-zinc-900 border border-white/10 rounded-3xl p-8 md:p-10">
              <h2 className="text-xl font-semibold mb-8">Send a Message</h2>

              {sent ? (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-4xl">
                    ✅
                  </div>
                  <h3 className="text-2xl font-bold">Message Sent!</h3>
                  <p className="text-zinc-400 max-w-sm">
                    Thanks for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-4 px-6 py-2.5 border border-white/20 rounded-full text-sm hover:border-white/50 transition-all"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all text-sm placeholder:text-zinc-600"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all text-sm placeholder:text-zinc-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's this about?"
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all text-sm placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-zinc-500 uppercase tracking-widest mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="Tell me about your project or idea..."
                      required
                      className="w-full px-4 py-3.5 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:border-violet-500 focus:bg-violet-500/5 transition-all text-sm placeholder:text-zinc-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-500 hover:to-fuchsia-500 rounded-xl font-semibold transition-all active:scale-95 disabled:opacity-60 flex items-center justify-center gap-2"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"/>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      "Send Message →"
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}

export default ContactMe;
