import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import profileImg from "../assets/admin.jpg";

function AboutMe() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-20 px-6">
      
      <div className="max-w-6xl mx-auto">

    
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">About Me</h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Passionate developer creating modern and beautiful web experiences.
          </p>
        </div>

         <div className="grid md:grid-cols-2 gap-12 items-center">
          
           <div data-aos="fade-right">
            <img
              src={profileImg}
              alt="profile"
              className="rounded-3xl shadow-lg"
            />
          </div>

           <div className="space-y-6" data-aos="fade-left">
            <h2 className="text-3xl font-semibold">
              Hi, I'm <span className="text-blue-500">SEyha</span>
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              I am a creative developer who loves building modern UI/UX designs
              and full-stack applications. I enjoy turning ideas into real
              digital products that people love to use.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              I have experience in web development using modern technologies like
              React, Tailwind CSS, and backend systems.
            </p>

             <div>
              <h3 className="text-xl font-semibold mb-4">Skills</h3>
              <div className="space-y-4">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">Programming Languages</p>
                  <div className="flex flex-wrap gap-2">
                    {["C", "C++", "Dart", "JavaScript", "Python", "PHP"].map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">Mobile & API</p>
                  <div className="flex flex-wrap gap-2">
                    {["Flutter (Android & iOS)", "REST API Integration"].map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">Databases</p>
                  <div className="flex flex-wrap gap-2">
                    {["Oracle", "MS SQL Server", "MongoDB", "MS Access", "MySQL"].map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">Tools & Dev Environment</p>
                  <div className="flex flex-wrap gap-2">
                    {["Git & GitHub", "Postman", "VS Code", "Android Studio"].map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400 mb-2">AI & Emerging Tech</p>
                  <div className="flex flex-wrap gap-2">
                    {["AI Tools & Generative AI", "AI-Assisted Software Development"].map((s, i) => (
                      <span key={i} className="px-3 py-1 bg-white/10 rounded-full text-sm">{s}</span>
                    ))}
                  </div>
                </div>

              </div>
            </div>

             <a href="/contactme" className="mt-4 px-6 py-3 bg-blue-600 rounded-full hover:bg-blue-700 transition">
              Contact Me
            </a>
          </div>

        </div>

         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 text-center" data-aos="fade-up">
          <div className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="text-zinc-400">Projects</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">Find Internship</h2>
            <p className="text-zinc-400">Not yet for experiene</p>
          </div>    
          <div className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">2+</h2>
            <p className="text-zinc-400">Clients</p>
          </div>
          <div className="bg-white/5 p-6 rounded-2xl">
            <h2 className="text-3xl font-bold">100%</h2>
            <p className="text-zinc-400">Satisfaction</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AboutMe;