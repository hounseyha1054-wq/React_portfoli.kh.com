// pages/Home.jsx
import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImg from "../assets/admin.jpg";

const services = [
  { icon: "💻", title: "Web Development", desc: "Fast, responsive websites using React, Vue, and modern CSS frameworks." },
  { icon: "🎨", title: "UI/UX Design", desc: "Beautiful, user-friendly interfaces with attention to every detail." },
  { icon: "📱", title: "Mobile App", desc: "Cross-platform Android & iOS apps built with Flutter and Dart." },
];

const skillGroups = [
  { label: "Office Tools", skills: ["Microsoft Word", "Excel", "PowerPoint"] },
  { label: "Languages", skills: ["C", "C++", "Dart", "JavaScript", "Python", "PHP"] },
  { label: "Web & Frameworks", skills: ["HTML5", "CSS3", "Node.js", "Express.js", "React.js", "Vue.js", "Laravel"] },
  { label: "Mobile & API", skills: ["Flutter (Android & iOS)", "REST API Integration"] },
  { label: "Databases", skills: ["Oracle", "MS SQL Server", "MongoDB", "MS Access", "MySQL"] },
  { label: "Dev Tools", skills: ["Git & GitHub", "Postman", "VS Code", "Android Studio"] },
  { label: "AI & Emerging Tech", skills: ["AI Tools & Generative AI", "AI-Assisted Software Development"] },
  { label: "Soft Skills", skills: ["Project Management", "Public Relations", "Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking", "Digital Marketing"] },
];

function Home() {
  useEffect(() => {
    AOS.init({ duration: 900, once: true, easing: "ease-out-cubic", offset: 60 });
  }, []);

  return (
    <div className="bg-zinc-950 text-white overflow-hidden">

      {/* ══════════════════ HERO ══════════════════ */}
      <section className="min-h-screen flex items-center relative overflow-hidden">

        {/* subtle bg glow */}
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-28 w-full">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* ── Left ── */}
            <div className="space-y-8">
              <div data-aos="fade-up" data-aos-delay="100"
                className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-zinc-400">Available for Internship</span>
              </div>

              <h1 data-aos="fade-up" data-aos-delay="180"
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tighter">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                  SEyha
                </span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="260"
                className="text-lg sm:text-xl text-zinc-400 font-light max-w-md leading-relaxed">
                Creative Developer &amp; Designer crafting beautiful digital experiences for the web and mobile.
              </p>

              <div data-aos="fade-up" data-aos-delay="340" className="flex flex-wrap gap-4">
                <Link to="/portfolio"
                  className="px-7 py-3.5 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 transition-all active:scale-95 text-base shadow-lg shadow-white/10">
                  View My Work
                </Link>
                <a href="https://www.canva.com/design/DAHLffEaN_k/78TUUStPioLtDbfO1ctN4Q/edit"
                  target="_blank" rel="noopener noreferrer"
                  className="px-7 py-3.5 border border-white/20 hover:border-white/50 font-semibold rounded-full transition-all text-base">
                  Download CV
                </a>
              </div>

              <div data-aos="fade-up" data-aos-delay="420" className="flex flex-wrap gap-5 pt-2">
                {[
                  { label: "Instagram", href: "https://www.instagram.com/suzey.ha?rpxt=dzMxOWZwbng0MXEw&utm_source=qr" },
                  { label: "LinkedIn", href: "https://www.linkedin.com/in/houn-seyha-28712637b/" },
                  { label: "GitHub", href: "https://github.com/hounseyha1054-wq" },
                ].map((s, i) => (
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors font-medium">
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* ── Right: Photo ── */}
            <div data-aos="fade-left" data-aos-delay="200" className="relative flex justify-center md:justify-end">
              <div className="relative w-72 w-full max-w-sm">

                {/* glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 rounded-3xl blur-2xl scale-110" />

                <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                  <img src={profileImg} alt="SEyha" className="w-full h-full object-cover" />
                  {/* gradient overlay bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
                </div>

                {/* floating card — top right */}
                <div data-aos="fade-up" data-aos-delay="500"
                  className="absolute -top-5 -right-5 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
                  <p className="text-xs text-zinc-500">Status</p>
                  <p className="font-semibold text-sm mt-0.5">Seeking Internship 🎯</p>
                </div>

                {/* floating card — bottom left */}
                <div data-aos="fade-up" data-aos-delay="600"
                  className="absolute -bottom-5 -left-5 bg-zinc-900/90 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-xl">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🚀</span>
                    <div>
                      <p className="text-xs text-zinc-500">Projects Built</p>
                      <p className="font-bold text-lg leading-none mt-0.5">9+</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* ══════════════════ ABOUT SNIPPET ══════════════════ */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5" data-aos="fade-right">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">Who I Am</p>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">About Me</h2>
              <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded" />
            </div>
            <div className="md:col-span-7 space-y-5 text-zinc-400 text-lg leading-relaxed" data-aos="fade-left" data-aos-delay="150">
              <p>
                I'm a senior Software Development student at Norton University, Cambodia.
                I'm passionate about building full-stack web and mobile apps that are both beautiful and functional.
              </p>
              <p>
                My goal is to become a professional web developer and eventually lead my own tech product.
                I turn ideas into elegant digital solutions that deliver real user value.
              </p>
              <Link to="/aboutme" className="inline-block text-violet-400 hover:text-violet-300 font-medium transition-colors mt-2">
                More about me →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════ SERVICES ══════════════════ */}
      <section className="py-24 bg-zinc-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">What I Do</p>
            <h2 data-aos="fade-up" data-aos-delay="80" className="text-4xl md:text-5xl font-bold tracking-tight">What I Offer</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={100 + i * 120}
                className="group bg-zinc-950 border border-white/10 rounded-3xl p-10 hover:border-violet-500/40 hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">{s.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10" data-aos="fade-up">
            <Link to="/service" className="text-sm text-violet-400 hover:text-violet-300 font-medium transition-colors">
              See all services →
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════════════ SKILLS ══════════════════ */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p data-aos="fade-up" className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">My Stack</p>
            <h2 data-aos="fade-up" data-aos-delay="80" className="text-4xl md:text-5xl font-bold tracking-tight">Skills & Technologies</h2>
          </div>

          <div className="space-y-8">
            {skillGroups.map((group, gi) => (
              <div key={gi} data-aos="fade-up" data-aos-delay={gi * 60}>
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-3">{group.label}</p>
                <div className="flex flex-wrap gap-2.5">
                  {group.skills.map((skill, si) => (
                    <span key={si}
                      className="bg-zinc-900 border border-white/10 rounded-full px-4 py-2 text-sm font-medium text-zinc-300 hover:border-violet-500/50 hover:text-white transition-all cursor-default">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════ CTA ══════════════════ */}
      <section className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-transparent to-fuchsia-950/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center px-6 relative" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">Open to Work</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-5 leading-tight">
            Let's create something<br className="hidden sm:block" /> amazing together
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto">
            I'm currently open for new opportunities, internships, and collaborations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contactme"
              className="px-10 py-4 bg-white text-zinc-950 font-semibold text-base rounded-full hover:bg-zinc-100 active:scale-95 transition-all shadow-lg shadow-white/10">
              Hire Me Now
            </Link>
            <Link to="/portfolio"
              className="px-10 py-4 border border-white/20 hover:border-white/50 font-semibold text-base rounded-full transition-all">
              See My Work
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
