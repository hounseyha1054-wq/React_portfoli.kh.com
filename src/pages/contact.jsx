import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

function ContactMe() {

  const [sent, setSent] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-20 px-6">
      
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">Contact Me</h1>
          <p className="text-zinc-400">
            Let's work together
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Contact Info */}
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-2xl font-semibold">Get in touch</h2>

            <p className="text-zinc-400">
              Feel free to contact me for any project or collaboration.
            </p>

            <div className="space-y-3">
              <p>📧 Email: hounseyha1054@example.com</p>
              <p>📞 Phone: +855 016903850</p>
              <p>📍 Location: Cambodia</p>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-6" data-aos="fade-left" onSubmit={handleSubmit}>
            
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              required
              className="w-full p-4 rounded-lg bg-white/5 border border-white/10 focus:outline-none focus:border-blue-500"
            ></textarea>

            {sent ? (
              <div className="w-full py-4 bg-emerald-600 rounded-lg text-center font-semibold text-white">
                ✅ Message sent! I'll get back to you soon.
              </div>
            ) : (
              <button
                type="submit"
                className="w-full py-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition font-semibold"
              >
                Send Message
              </button>
            )}

          </form>

        </div>

      </div>
    </div>
  );
}

export default ContactMe;