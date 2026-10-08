import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Service() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true, easing: "ease-out-cubic" });
  }, []);

  const services = [
    {
      icon: "💻",
      title: "Web Development",
      desc: "Build modern, responsive, and fast websites using React.js, Vue.js, and Tailwind CSS.",
      tags: ["React.js", "Vue.js", "Tailwind CSS", "HTML5 / CSS3"],
    },
    {
      icon: "🎨",
      title: "UI/UX Design",
      desc: "Design clean, user-friendly interfaces with attention to detail and great user experience.",
      tags: ["Figma", "Wireframing", "Prototyping"],
    },
    {
      icon: "📱",
      title: "Mobile App Development",
      desc: "Develop cross-platform mobile apps for Android and iOS using Flutter and Dart.",
      tags: ["Flutter", "Dart", "Android", "iOS"],
    },
    {
      icon: "🔧",
      title: "Backend Development",
      desc: "Build secure and scalable backend systems and REST APIs using Node.js, Express, and Laravel.",
      tags: ["Node.js", "Express.js", "Laravel", "PHP", "REST API"],
    },
    {
      icon: "🗄️",
      title: "Database Design",
      desc: "Design and manage databases for web and mobile apps with both SQL and NoSQL solutions.",
      tags: ["MySQL", "MongoDB", "MS SQL Server", "Oracle"],
    },
    {
      icon: "🤖",
      title: "AI-Assisted Development",
      desc: "Leverage modern AI tools and generative AI to accelerate development and build smarter solutions.",
      tags: ["AI Tools", "Generative AI", "Python"],
    },
  ];

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-20 px-6">
      
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">My Services</h1>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Here's what I can build and deliver for you.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 hover:border-violet-500/40 transition-all duration-300"
            >
              <div className="text-5xl mb-5 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h2 className="text-xl font-semibold mb-3">{service.title}</h2>
              <p className="text-zinc-400 text-sm leading-relaxed mb-5">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-xs bg-white/10 text-zinc-300 px-3 py-1 rounded-full border border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20" data-aos="fade-up">
          <p className="text-zinc-400 text-lg mb-6">Interested in working together?</p>
          <Link
            to="/contactme"
            className="inline-block px-10 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 active:scale-95 transition-all"
          >
            Let's Talk
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Service;
