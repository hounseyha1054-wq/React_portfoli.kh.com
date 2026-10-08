// pages/Portfolio.jsx
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Web Development",
    description: "Modern e-commerce UI for Kidstar with product listings, cart, and clean responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    tech: ["Vue.js", "Tailwind CSS", "JavaScript"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 2,
    title: "Shopping App",
    category: "Mobile App",
    description: "A Flutter mobile app for easy product browsing and category-based shopping.",
    image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80",
    tech: ["Flutter", "Dart"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 3,
    title: "Instagram Clone",
    category: "Mobile App",
    description: "A Flutter-built social media clone with photo feed, stories, and profile screens.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
    tech: ["Flutter", "Dart"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 4,
    title: "Hotel Management System",
    category: "Backend System",
    description: "A professional admin panel system for managing hotel bookings, rooms, and guests.",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    tech: ["C#", "MS SQL Server"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 5,
    title: "E-Commerce App",
    category: "Mobile App",
    description: "A complete buying app with clean UI, product catalog, and smooth checkout flow.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    tech: ["Flutter", "Dart"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 6,
    title: "Cafe App",
    category: "Mobile App",
    description: "A food and beverage ordering app with menu browsing and order management.",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    tech: ["Flutter", "Laravel"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 7,
    title: "Emerald Bistro",
    category: "Web Development",
    description: "A full-featured cafe website with an online menu, ordering system, and elegant UI.",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80",
    tech: ["React.js", "Tailwind CSS", "Node.js"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 8,
    title: "Student Guidance",
    category: "Web App",
    description: "A smart platform helping students navigate academics with course planning and career advice.",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80",
    tech: ["Python", "Flask", "SQLite", "Tailwind CSS"],
    link: "https://github.com/hounseyha1054-wq",
  },
  {
    id: 9,
    title: "Movie App",
    category: "Mobile App",
    description: "Browse, search, and discover movies with trending lists, ratings, and a personal watchlist.",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
    tech: ["Flutter", "Dart", "REST API"],
    link: "https://github.com/hounseyha1054-wq",
  },
];

const categories = ["All", "Web Development", "Mobile App", "Web App", "Backend System"];

function Portfolio() {
  const [active, setActive] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out-cubic", offset: 60 });
  }, []);

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="bg-zinc-950 text-white min-h-screen">

      {/* ── HEADER ── */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto text-center relative" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-3">My Work</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-5">
            My Portfolio
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Selected works I'm proud of. Each project tells a different story.
          </p>
        </div>
      </section>

      {/* ── FILTER TABS ── */}
      <div className="max-w-7xl mx-auto px-6 pb-12" data-aos="fade-up">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                active === cat
                  ? "bg-violet-600 border-violet-600 text-white"
                  : "border-white/10 text-zinc-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* ── GRID ── */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-delay={index * 60}
              className="group bg-zinc-900 rounded-3xl overflow-hidden border border-white/10 hover:border-violet-500/50 hover:-translate-y-2 transition-all duration-400 flex flex-col"
            >
              {/* Image — fixed height so all cards match */}
              <div className="relative h-52 overflow-hidden shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                {/* dark overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-zinc-950/80 backdrop-blur-sm border border-white/10 rounded-full text-xs font-medium text-violet-400">
                    {project.category}
                  </span>
                </div>

                {/* hover CTA */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white text-zinc-950 font-semibold rounded-2xl text-sm hover:bg-zinc-100 active:scale-95 transition-all"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>

              {/* Info */}
              <div className="p-7 flex flex-col flex-1">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-violet-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>
                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs bg-white/5 text-zinc-400 border border-white/10 px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-zinc-600 text-lg">No projects in this category yet.</div>
        )}
      </div>

      {/* ── CTA ── */}
      <div className="border-t border-white/10 py-24 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/20 to-fuchsia-950/20 pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative" data-aos="fade-up">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-400 mb-4">Next Step</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-5">
            Have a project in mind?
          </h2>
          <p className="text-zinc-400 text-lg mb-10 max-w-xl mx-auto">
            Let's work together and build something extraordinary.
          </p>
          <Link
            to="/contactme"
            className="inline-block px-10 py-4 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 active:scale-95 transition-all shadow-lg shadow-white/10"
          >
            Let's Talk →
          </Link>
        </div>
      </div>

    </div>
  );
}

export default Portfolio;
