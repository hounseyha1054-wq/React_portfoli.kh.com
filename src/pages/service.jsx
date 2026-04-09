import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Service() {

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-zinc-950 text-white min-h-screen py-20 px-6">
      
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h1 className="text-5xl font-bold mb-4">My Services</h1>
          <p className="text-zinc-400">
            What I can do for you
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition" data-aos="fade-up">
            <div className="text-4xl mb-4">💻</div>
            <h2 className="text-xl font-semibold mb-3">Web Development</h2>
            <p className="text-zinc-400">
              Build modern and responsive websites using React and Tailwind CSS.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition" data-aos="fade-up" data-aos-delay="200">
            <div className="text-4xl mb-4">🎨</div>
            <h2 className="text-xl font-semibold mb-3">UI/UX Design</h2>
            <p className="text-zinc-400">
              Create beautiful and user-friendly interfaces with modern design trends.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 p-8 rounded-2xl hover:bg-white/10 transition" data-aos="fade-up" data-aos-delay="400">
            <div className="text-4xl mb-4">⚙️</div>
            <h2 className="text-xl font-semibold mb-3">Backend Development</h2>
            <p className="text-zinc-400">
              Develop secure backend systems using Laravel and APIs.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Service;