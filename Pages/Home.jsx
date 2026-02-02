import { useEffect, useRef } from "react";
import {
  FaDocker,
  FaLinkedin,
  FaGithub,
  FaFigma,
  FaPython,
  FaHtml5,
  FaReact,
  FaCss3Alt,
  FaEnvelope,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import {
  TbBrandCSharp,
  TbBrandVite,
  TbBrandTailwind,
  TbBrandDjango,
} from "react-icons/tb";
import map from "../src/assets/map.png"
import pl from "../src/assets/pl.png"
import therapy from "../src/assets/therapy.png"
import game from "../src/assets/game.png"


/* ===================== DATA ===================== */

const radius = window.innerWidth < 768 ? 180 : 290;

const skills = [
  { name: "React", icon: FaReact, color: "text-cyan-400" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
  { name: "JavaScript", icon: IoLogoJavascript, color: "text-yellow-400" },
  { name: "Tailwind", icon: TbBrandTailwind, color: "text-sky-400" },
  { name: "GitHub", icon: FaGithub, color: "text-gray-700" },
  { name: "Docker", icon: FaDocker, color: "text-blue-400" },
  { name: "Python", icon: FaPython, color: "text-yellow-500" },
  { name: "Figma", icon: FaFigma, color: "text-pink-500" },
  { name: "Vite", icon: TbBrandVite, color: "text-purple-400" },
  { name: "C#", icon: TbBrandCSharp, color: "text-violet-500" },
  { name: "Django", icon: TbBrandDjango, color: "text-green-600" },
];

const aboutLines = [
  "Passionate Full-Stack Developer with a strong focus on Front-End development and UI/UX design.",
  "Experienced in building scalable and responsive web applications using modern technologies.",
  "Proficient in React, JavaScript, HTML5, CSS3, and Tailwind CSS for frontend development.",
  "Hands-on experience with Django, PostgreSQL, REST APIs, and backend integration.",
  "ITI Full-Stack Web & Generative AI Development graduate with real-world project experience.",
  "A collaborative team player with strong communication skills and a continuous learning mindset.",
];


/* ===================== HOOK ===================== */

function useRevealOnScroll() {
  const refs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-active");
          } else {
            entry.target.classList.remove("reveal-active");
          }
        });
      },
      { threshold: 0.35 }
    );

    refs.current.forEach(el => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return refs;
}

/* ===================== COMPONENT ===================== */

export default function Home() {
  const revealRefs = useRevealOnScroll();

  return (
    <main className="min-h-screen px-10 py-24 text-[#45495d] mt-28">
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative flex items-center justify-center mt-24 group"
      >
        {/* ROTATING ICON CIRCLE */}
        <div className="absolute w-[720px] h-[720px] animate-spin-slow">
          {skills.map((skill, i) => {
            const angle = (360 / skills.length) * i;
            const Icon = skill.icon;

            return (
              <div
                key={skill.name}
                className="absolute top-1/2 left-1/2 group/icon"
                style={{
                  transform: `rotate(${angle}deg) translate(${radius}px) rotate(-${angle}deg)`,
                }}
              >
                <Icon
                  className={`text-3xl ${skill.color}
                    cursor-pointer
                    transition-transform duration-300
                    hover:scale-125
                    hover:drop-shadow-[0_0_10px_currentColor]
                  `}
                />

                {/* Skill Card */}
                <div
                  className="absolute left-1/2 top-full mt-3 -translate-x-1/2
                             opacity-0 scale-95
                             group-hover/icon:opacity-100
                             group-hover/icon:scale-100
                             transition
                             bg-white rounded-xl px-3 py-1 text-sm shadow-lg whitespace-nowrap"
                >
                  {skill.name}
                </div>
              </div>
            );
          })}
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-10 p-10 text-center">
          <span className="text-2xl">Hi, I&apos;m</span>
          <h1 className="text-6xl font-bold">Hager Sameh</h1>
          <p className="text-2xl text-gray-400 mt-2">
            Full Stack Web Developer (React & Django)
          </p>
          <button className="
           bg-orange-400 text-white text-lg
           rounded-full px-8 py-2 mt-4
           transition-all duration-300
           hover:scale-105 hover:bg-orange-500
           ">
            <a
              href="/hager.port/HagerSamehCv.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View CV
            </a>
          </button>

        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about" className="mt-56">
        <div className="py-28 px-4 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem]" />

          <div className="max-w-6xl mx-auto relative">
            <h2 className="text-center text-4xl md:text-5xl font-bold mb-16 text-grey-400">
              About Me
            </h2>

            <div className="space-y-8 text-2xl md:text-3xl text-center leading-relaxed">
              {aboutLines.map((line, i) => (
                <p
                  key={i}
                  ref={el => (revealRefs.current[i] = el)}
                  className="reveal-line"
                >
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* ================= PROJECTS ================= */}
      <section id="portfolio" className="scroll-mt-20 mt-56">
        <div className="py-28 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
              <h2 className="text-5xl font-bold">Projects</h2>

            </div>



            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

              {/* ===== Project 1 ===== */}
              <a
                href="/hager.port/Therapy-aiDocumentation.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={therapy}
                    alt="Hsafer"
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-black text-white rounded-full p-3">
                      ↗
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">
                    Therapy AI
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Full-stack platform built to automate therapists’ documentation workflows
                    and improve productivity. Developed as an ITI graduation project.
                  </p>

                  <div className="flex gap-2 mt-3 text-xs">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">React</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Django</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">AWS</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Celery</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">PostgreSQL</span>

                  </div>
                </div>
              </a>


              {/* ===== Project 2 ===== */}
              <a
                href="https://hagersameh111.github.io/plants/"
                target="_blank"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={pl}
                    alt="Eyes on Plants"
                    className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                  />

                 
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-black text-white rounded-full p-3">
                      ↗
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">
                    Eyes on Plants
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    Graduation project for a plant e-commerce platform with clean UI
                    and responsive design.
                  </p>

                  <div className="flex gap-2 mt-3 text-xs">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">React</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Tailwind</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Axios</span>
                  </div>
                </div>
              </a>


              {/* ===== Project 3 ===== */}
              <a
                href="https://hagersameh111.github.io/Hsafer/"
                target="_blank"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={map}
                    alt="Hsafer"
                    className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-black text-white rounded-full p-3">
                      ↗
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">
                    Hsafer
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    UI/UX-focused travel agency website with map-based navigation
                    and destination exploration.
                  </p>

                  <div className="flex gap-2 mt-3 text-xs">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">React</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Tailwind</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Web</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">UI & UX</span>

                  </div>
                </div>
              </a>


              {/* ===== Project 4 ===== */}
              <a
                href="https://aserelnaghy.github.io/breakout-game/"
                target="_blank"
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={game}
                    alt="Eyes on Plants"
                    className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-700"
                  />

                  {/* Hover icons */}
                  <div className="absolute inset-0 flex items-end justify-end p-4 opacity-0 group-hover:opacity-100 transition">
                    <div className="bg-black text-white rounded-full p-3">
                      ↗
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-semibold">
                    Break out Game
                  </h3>
                  <p className="text-gray-400 text-sm mt-1">
                    A simple web-based implementation of the classic Breakout arcade game,
                    developed as part of ITI coursework.
                  </p>

                  <div className="flex gap-2 mt-3 text-xs">
                    <span className="px-2 py-1 bg-gray-100 rounded-full">Web & Ui</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">HTML</span>
                    <span className="px-2 py-1 bg-gray-100 rounded-full">CSS</span>

                    <span className="px-2 py-1 bg-gray-100 rounded-full">JaveScript</span>
                  </div>
                </div>
              </a>


            </div>
          </div>
        </div>
      </section>
      {/* ================= CONTACT ================= */}
      <section id="contact" className="mt-56 scroll-mt-20">
        <div className="py-28 px-4 relative">
          <div className="absolute inset-0 bg-primary/5 rounded-[3rem]" />

          <div className="max-w-4xl mx-auto relative text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Contact Me
            </h2>

            <p className="text-gray-400 mb-12 text-lg">
              Feel free to reach out for collaborations, opportunities, or just to say hi.
            </p>

            {/* Social Links */}
            <div className="flex justify-center gap-8 mb-16">
              <a
                href="https://www.linkedin.com/in/hagersameh111/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
              >
                <FaLinkedin />

              </a>

              <a
                href="https://github.com/hagersameh111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-3xl text-gray-400 hover:text-orange-500 transition-transform duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>

              <a
                href="mailto:hager_sharaf236@yahoo.com"
                className="text-3xl text-gray-400 hover:text-orange-500 transition-transform duration-300 hover:scale-110"
              >
                <FaEnvelope />
              </a>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const email = form.email.value;
                const message = form.message.value;

                window.location.href =
                  `mailto:hager_sharaf236@yahoo.com?subject=Contact from Portfolio&body=` +
                  `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0A${message}`;
              }}
              className="max-w-xl mx-auto space-y-6"
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-5 py-3 rounded-xl bg-white/80 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />

              <button
                type="submit"
                className="bg-orange-400 text-white text-lg px-10 py-3 rounded-full
                     transition-all duration-300
                     hover:bg-orange-500 hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>




    </main>
  );
}
