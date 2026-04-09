// pages/Portfolio.jsx
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Portfolio() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development • UI/UX",
      description: "Modern Ui with  Kidstar.",
      image: "https://www.shutterstock.com/shutterstock/photos/1051641830/display_1500/stock-vector-kidstar-logo-icon-1051641830.jpg",
      tech: ["Vue", "Tailwind","Javascript"],
      link: "#"
    },
    {
      id: 2,
      title: "SaaS Dashboard",
      category: "Dashboard • Web App",
      description: "Powerful analytics dashboard for business intelligence.",
      image: "https://picsum.photos/id/106/800/600",
      tech: ["Next.js", "TypeScript", "Recharts", "Supabase"],
      link: "#"
    },
    {
      id: 3,
      title: "Brand Identity Website",
      category: "Branding • Landing Page",
      description: "Elegant portfolio website for a luxury fashion brand.",
      image: "https://picsum.photos/id/201/800/600",
      tech: ["React", "Framer Motion", "Tailwind"],
      link: "#"
    },
    {
      id: 4,
      title: "Back-end",
      category: "Hotel Management System",
      description: "Clean and Profesional UI",
      image: "https://thumbs.dreamstime.com/b/hotel-icon-creative-element-design-tourism-icons-collection-pixel-perfect-web-apps-software-print-usage-152846189.jpg",
      tech: ["C#"],
      link: "#"
    },
    {
      id: 5,
      title: "Restaurant Booking System",
      category: "Full Stack • Booking",
      description: "Real-time table reservation platform with payment integration.",
      image: "https://picsum.photos/id/292/800/600",
      tech: ["React", "Express", "MongoDB", "Socket.io"],
      link: "#"
    },
    {
      id: 6,
      title: "AI Productivity Tool",
      category: "AI • SaaS",
      description: "Smart task manager powered by artificial intelligence.",
      image: "https://picsum.photos/id/367/800/600",
      tech: ["Next.js", "OpenAI", "Tailwind", "Prisma"],
      link: "#"
    },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen pt-8">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-6 py-20 border-b border-white/10">
        <div className="text-center" data-aos="fade-up">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-4">
            My Portfolio
          </h1>
          <p className="text-2xl text-zinc-400 max-w-2xl mx-auto">
            Selected works that I'm proud of. Each project tells a different story.
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/50 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Project Image */}
              <div className="relative h-80 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* View Project Button Overlay */}
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                  <a
                    href={project.link}
                    className="block w-full py-4 bg-white text-zinc-950 font-semibold rounded-2xl text-center hover:bg-zinc-100 active:scale-95 transition-all"
                  >
                    View Project
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8">
                <div className="text-sm text-violet-400 mb-2 font-medium">
                  {project.category}
                </div>
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-[15px] leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-white/5 text-zinc-300 px-3 py-1 rounded-full border border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="border-t border-white/10 py-24">
        <div className="max-w-4xl mx-auto text-center px-6" data-aos="fade-up">
          <h2 className="text-5xl font-bold tracking-tight mb-6">
            Have a project in mind?
          </h2>
          <p className="text-2xl text-zinc-400 mb-10">
            Let's work together and create something extraordinary.
          </p>
          <a
            href="/contactme"
            className="inline-block px-12 py-5 bg-white text-zinc-950 font-semibold text-xl rounded-full hover:bg-zinc-100 active:scale-95 transition-all"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;