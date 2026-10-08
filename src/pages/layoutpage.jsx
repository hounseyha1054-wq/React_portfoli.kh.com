import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/service", label: "Service" },
  { to: "/aboutme", label: "About Me" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contactme", label: "Contact" },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/hounseyha1054-wq" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/houn-seyha-28712637b/" },
  { label: "Instagram", href: "https://www.instagram.com/suzey.ha" },
];

const LayoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-zinc-950 text-white flex flex-col min-h-screen">

      {/* ══════════════════ NAVBAR ══════════════════ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg shadow-violet-500/30">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-2xl font-semibold tracking-tight">SEyha</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Hire Me — Desktop */}
          <Link
            to="/contactme"
            className="hidden md:block px-6 py-2.5 bg-white text-zinc-950 font-semibold rounded-full text-sm hover:bg-zinc-100 active:scale-95 transition-all shadow-lg shadow-white/10"
          >
            Hire Me
          </Link>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden border-t border-white/10 bg-zinc-950 py-6">
            <div className="flex flex-col items-center gap-5 text-base font-medium">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contactme"
                onClick={() => setIsOpen(false)}
                className="mt-2 px-8 py-3 bg-white text-zinc-950 font-semibold rounded-full text-sm active:scale-95 transition-all"
              >
                Hire Me
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* ══════════════════ PAGE CONTENT ══════════════════ */}
      <main className="flex-1 pt-[72px]">
        <Outlet />
      </main>

      {/* ══════════════════ FOOTER ══════════════════ */}
      <footer className="border-t border-white/10 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <div className="grid md:grid-cols-3 gap-10 mb-12">

            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">S</span>
                </div>
                <span className="text-xl font-semibold tracking-tight">SEyha</span>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed max-w-xs">
                Creative Developer & Designer based in Cambodia. Building modern web and mobile experiences.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">Pages</p>
              <ul className="space-y-3">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-zinc-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-5">Contact</p>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>
                  <a href="mailto:hounseyha1054@gmail.com" className="hover:text-white transition-colors">
                    hounseyha1054@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:+855016903850" className="hover:text-white transition-colors">
                    +855 016 903 850
                  </a>
                </li>
                <li>Phnom Penh, Cambodia</li>
                <li className="pt-2">
                  <Link
                    to="/contactme"
                    className="inline-block px-5 py-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-semibold rounded-full hover:opacity-90 transition-all"
                  >
                    Send a Message →
                  </Link>
                </li>
              </ul>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600">
            <p>© {new Date().getFullYear()} SEyha. All rights reserved.</p>
            <p>Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default LayoutPage;
