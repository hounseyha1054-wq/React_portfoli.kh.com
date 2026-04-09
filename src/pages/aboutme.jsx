import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
              src="https://scontent.fpnh2-2.fna.fbcdn.net/v/t39.30808-6/481190517_1172762821187220_3341195592931429518_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=53a332&_nc_eui2=AeFkzWO69srQLi31PHR23iFJAg1rCDKsV3sCDWsIMqxXe8ECxyvDgXFkS3KYbKJZhM_yv7QPWurJRM0mAlQ6mQpE&_nc_ohc=YB3NYxXnOzoQ7kNvwHKEjnb&_nc_oc=AdpofzmmVApBb6gDKJHZ-OaZMNDreAU4jf_eRmXhSf3MU-Fb9qDYZY8gKiTntFlU378&_nc_zt=23&_nc_ht=scontent.fpnh2-2.fna&_nc_gid=1lMTemN3oB-Zn-s1GAcONg&_nc_ss=7a3a8&oh=00_Af3hfZY8AGuInH3A9mIoM71GpbbknhjvBatpDNGsLZIHNQ&oe=69DAF0C5"
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
              <h3 className="text-xl font-semibold mb-3">Skills</h3>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-white/10 rounded-full">React</span>
                <span className="px-4 py-2 bg-white/10 rounded-full">Tailwind</span>
                <span className="px-4 py-2 bg-white/10 rounded-full">JavaScript</span>
                <span className="px-4 py-2 bg-white/10 rounded-full">Flutter</span>
                <span className="px-4 py-2 bg-white/10 rounded-full">Nodejs</span>
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