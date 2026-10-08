import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/admin.jpg";

const skillCategories = [
  {
    label: "Languages",
    skills: ["C", "C++", "Dart", "JavaScript", "Python", "PHP"],
  },
  {
    label: "Mobile & API",
    skills: ["Flutter (Android & iOS)", "REST API Integration"],
  },
  {
    label: "Databases",
    skills: ["Oracle", "MS SQL Server", "MongoDB", "MS Access", "MySQL"],
  },
  {
    label: "Dev Tools",
    skills: ["Git & GitHub", "Postman", "VS Code", "Android Studio"],
  },
  {
    label: "AI & Tech",
    skills: ["AI Tools & Generative AI", "AI-Assisted Development"],
  },
];

function AboutMe() {
  const [activeTab, setActiveTab] = useState("Languages");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const active = skillCategories.find((c) => c.label === activeTab);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* ── HERO ── */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* Photo */}
            <div data-aos="fade-right" className="relative flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* glow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 blur-2xl opacity-30 scale-110" />
                <img
                  src={profileImg}
                  alt="SEyha"
                  className="relative w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl"
                />
                {/* badge */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap bg-zinc-900 border border-white/10 rounded-full px-5 py-2 flex items-center gap-2 shadow-xl">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-zinc-300">Open to Internship</span>
                </div>
              </div>
            </div>

            {/* Text */}
            <div className="space-y-6" data-aos="fade-left" data-aos-delay="150">
              <p className="text-sm font-semibold uppercase tracking-widest text-violet-400">About Me</p>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">SEyha</span>
              </h1>
              <p className="text-zinc-400 leading-relaxed text-lg">
                I'm a senior Software Development student at Norton University, Cambodia. 
                I love building modern, full-stack web and mobile applications that are 
                both beautiful and functional.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                My goal is to become a professional web developer and eventually found 
                my own tech product. I turn ideas into elegant digital solutions that 
                deliver real user value.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/contactme"
                  className="px-7 py-3 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 active:scale-95 transition-all"
                >
                  Contact Me
                </Link>
                <a
                  href="https://www.canva.com/design/DAHLffEaN_k/78TUUStPioLtDbfO1ctN4Q/edit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-7 py-3 border border-white/20 hover:border-white/50 font-semibold rounded-full transition-all"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="py-14 border-y border-white/10" data-aos="fade-up">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "9+", label: "Projects Built" },
              { value: "2+", label: "Happy Clients" },
              { value: "3+", label: "Years Learning" },
              { value: "100%", label: "Commitment" },
            ].map((stat, i) => (
              <div key={i} className="bg-white/5 border border-white/10 rounded-2xl py-8 px-4 hover:border-violet-500/30 transition-all">
                <p className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">{stat.value}</p>
                <p className="text-zinc-400 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className="py-20 px-6" data-aos="fade-up">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-2 text-center">What I Know</p>
          <h2 className="text-4xl font-bold text-center mb-10">Technical Skills</h2>

          {/* Tab Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {skillCategories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setActiveTab(cat.label)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                  activeTab === cat.label
                    ? "bg-violet-600 border-violet-600 text-white"
                    : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Skills Pills */}
          <div className="flex flex-wrap justify-center gap-3 min-h-[80px]">
            {active?.skills.map((skill, i) => (
              <span
                key={i}
                className="px-5 py-2.5 bg-white/5 border border-white/10 rounded-full text-sm font-medium hover:border-violet-500/50 hover:bg-violet-500/10 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutMe;
