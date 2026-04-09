import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const LayoutPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" bg-zinc-950 text-white">
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-500 flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-2xl">S</span>
            </div>
            <h1 className="text-3xl font-semibold tracking-tighter">SEyha</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            <ul className="flex items-center gap-9 text-[15px] font-medium">
              <li>
                <Link 
                  to="/" 
                  className="hover:text-white text-zinc-400 transition-colors duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/service" 
                  className="hover:text-white text-zinc-400 transition-colors duration-300"
                >
                  Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/aboutme" 
                  className="hover:text-white text-zinc-400 transition-colors duration-300"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link 
                  to="/portfolio" 
                  className="hover:text-white text-zinc-400 transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  to="/contactme" 
                  className="hover:text-white text-zinc-400 transition-colors duration-300"
                >
                  Contact me
                </Link>
              </li>
            </ul>
          </nav>

          {/* Hire Me Button - Desktop */}
          <button 
            type="button"
            className="hidden md:block px-7 py-3 bg-white text-zinc-950 font-semibold rounded-full hover:bg-zinc-100 active:scale-95 transition-all duration-300 shadow-lg shadow-white/10"
          >
            Hire Me
          </button>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-white p-2"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-zinc-950 border-t border-white/10 py-8">
            <div className="flex flex-col items-center gap-8 text-lg font-medium">
              <Link 
                to="/" 
                onClick={() => setIsOpen(false)}
                className="hover:text-white text-zinc-400 transition-colors"
              >
                Home
              </Link>
              <Link 
                to="/service" 
                onClick={() => setIsOpen(false)}
                className="hover:text-white text-zinc-400 transition-colors"
              >
                Service
              </Link>
              <Link 
                to="/aboutme" 
                onClick={() => setIsOpen(false)}
                className="hover:text-white text-zinc-400 transition-colors"
              >
                About me
              </Link>
              <Link 
                to="/portfolio" 
                onClick={() => setIsOpen(false)}
                className="hover:text-white text-zinc-400 transition-colors"
              >
                Portfolio
              </Link>
              <Link 
                to="/contactme" 
                onClick={() => setIsOpen(false)}
                className="hover:text-white text-zinc-400 transition-colors"
              >
                Contact me
              </Link>

              <button 
                type="button"
                className="mt-4 px-10 py-3.5 bg-white text-zinc-950 font-semibold rounded-full text-base"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-24">
        <Outlet />
      </main>
    </div>
  );
};

export default LayoutPage;