// pages/Home.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <div className="bg-zinc-950 text-white overflow-hidden">

      {/* ==================== HERO SECTION ==================== */}
      <section className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-6 pt-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-8">
              <div data-aos="fade-up" data-aos-delay="100" className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md px-5 py-2 rounded-full border border-white/10">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-zinc-400">Available for freelance</span>
              </div>

              <h1 data-aos="fade-up" data-aos-delay="200" className="text-6xl md:text-7xl font-bold leading-tight tracking-tighter">
                Hi, I'm <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">SEyha</span>
              </h1>

              <p data-aos="fade-up" data-aos-delay="300" className="text-2xl text-zinc-400 font-light max-w-lg">
                Creative Developer &amp; Designer crafting beautiful digital experiences.
              </p>

              <div data-aos="fade-up" data-aos-delay="400" className="flex flex-wrap gap-4 pt-6">
                <a href="/portfolio" className="px-8 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 transition-all active:scale-95 text-lg">
                  View My Work
                </a>
                <button className="px-8 py-4 border border-white/30 hover:border-white/60 font-semibold rounded-full transition-all text-lg">
                  Download CV
                </button>
              </div>

              <div data-aos="fade-up" data-aos-delay="500" className="flex gap-6 pt-8">
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">Twitter</a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-zinc-400 hover:text-white transition-colors">LinkedIn</a>
                <a href="https://github.com/hounseyha1054-wq" className="text-zinc-400 hover:text-white transition-colors">GitHub</a>
              </div>
            </div>

            <div data-aos="fade-left" data-aos-delay="300" className="relative flex justify-center md:justify-end">
              <div className="relative w-full max-w-md">
                <div data-aos="zoom-in" data-aos-delay="400" className="aspect-square rounded-3xl overflow-hidden border-8 border-zinc-900 shadow-2xl">
                  <img 
                    src="https://scontent.fpnh2-3.fna.fbcdn.net/v/t39.30808-6/639922968_1452403366556496_2077576067980808105_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFQdtdLEF93wkh8NvSv-o0eH4ehN3jPxdQfh6E3eM_F1MWe9DZpiBRCpKbcrmPGgZ7GWBFvZU1vGdaYVv4fQeMt&_nc_ohc=T_-tGU6Ub0oQ7kNvwF_Sh4g&_nc_oc=AdrfjIS-Wzm3miccRmLLCRVr1ZKiCoHBuMb8fP9HXkVaJjMyfnY98WCnbcc_pbEe_5E&_nc_zt=23&_nc_ht=scontent.fpnh2-3.fna&_nc_gid=tubw4KgQJYHCPqDAWrBxBA&_nc_ss=7a3a8&oh=00_Af1674vZCFGyxdXdh06752OkP9Xex6cbc6k2bhr5m-_hsQ&oe=69DAF982" 
                    alt="SEyha"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div data-aos="fade-up" data-aos-delay="600" className="absolute -top-6 -right-6 bg-zinc-900 border border-white/10 rounded-2xl p-5 backdrop-blur-xl">
                  <p className="text-sm text-zinc-400">Currently find job for intership</p>
                  <p className="font-semibold text-lg"> find career Platform</p>
                </div>

                <div data-aos="fade-up" data-aos-delay="700" className="absolute -bottom-6 -left-6 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">🚀</div>
                    <div>
                      <p className="text-xs text-zinc-400">Intership!</p>
                      <p className="font-semibold">Just Find work</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" data-aos-delay="800" className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs tracking-widest text-zinc-500">SCROLL TO EXPLORE</span>
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-zinc-500 to-transparent"></div>
        </div>
      </section>

      {/* ==================== ABOUT ME SECTION ==================== */}
      <section className="py-24 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5" data-aos="fade-right">
              <h2 className="text-5xl font-bold tracking-tight mb-6">About Me</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded"></div>
            </div>

            <div className="md:col-span-7 space-y-6 text-lg text-zinc-300" data-aos="fade-left" data-aos-delay="200">
              <p>
                I'm a senior student  at norton university, and my major's software development.
                Well, In the furture i want to be a profesional  web developer and founder lead on programing!
              </p>
              <p>
                My goal is to turn ideas into elegant digital solutions that not only look great but also deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SERVICES SECTION ==================== */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="text-5xl font-bold tracking-tight">What I Offer</h2>
            <p data-aos="fade-up" data-aos-delay="100" className="mt-4 text-zinc-400 text-xl">Services I provide</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Web Development", desc: "Fast, responsive, and scalable websites using modern technologies.", icon: "💻" },
              { title: "UI/UX Design", desc: "Beautiful interfaces with great user experience and attention to detail.", icon: "🎨" },
              { title: "Mobile App ", desc: "Completed a best ui for app .", icon: "✨" },
            ].map((service, index) => (
              <div 
                key={index}
                data-aos="fade-up" 
                data-aos-delay={100 + index * 150}
                className="bg-zinc-950 border border-white/10 rounded-3xl p-10 hover:border-violet-500/30 transition-all group"
              >
                <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-zinc-400">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 data-aos="fade-up" className="text-5xl font-bold text-center mb-16">Skills & Technologies</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["React", "Tailwind CSS", "JavaScript", "Php", "Node.js", "Figma", "Dart", "Python"].map((skill, i) => (
              <div 
                key={i}
                data-aos="zoom-in" 
                data-aos-delay={i * 80}
                className="bg-zinc-900 border border-white/10 rounded-2xl p-8 text-center hover:border-white/30 transition-all"
              >
                <p className="font-semibold text-xl">{skill}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== FEATURED PORTFOLIO ==================== */}
      <section className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 data-aos="fade-up" className="text-5xl font-bold">Featured Projects</h2>
            </div>
            <a href="/portfolio" className="text-violet-400 hover:text-violet-300 transition-colors flex items-center gap-2" data-aos="fade-left">
              View All Projects →
            </a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,2,3].map((n, i) => (
              <div 
                key={i}
                data-aos="fade-up" 
                data-aos-delay={i * 150}
                className="group bg-zinc-950 rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all"
              >
                <div className="h-64 bg-zinc-800 relative overflow-hidden">
                  <img 
                    src={`https://picsum.photos/id/${40 + i}/800/600`} 
                    alt="Project" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="font-semibold text-2xl mb-2">Project Title {n}</h3>
                  <p className="text-zinc-400">Web Application • UI/UX Design</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-32 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center px-6" data-aos="fade-up">
          <h2 className="text-6xl font-bold tracking-tight mb-6">Let's create something amazing together</h2>
          <p className="text-2xl text-zinc-400 mb-10">I'm currently open for new opportunities and collaborations.</p>
          
          <a href="/aboutme" className="px-12 py-5 bg-white text-zinc-950 font-semibold text-xl rounded-full hover:bg-zinc-100 active:scale-95 transition-all">
            Hire Me Now
          </a>
        </div>
      </section>

    </div>
  );
}

export default Home;