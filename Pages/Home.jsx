import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaMapMarkerAlt,FaHtml5,FaReact,FaCss3Alt ,FaBootstrap, FaCode, FaPhone} from 'react-icons/fa';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { IoLogoJavascript } from "react-icons/io5";
import { TbBrandCSharp, TbBrandVite,TbBrandTailwind}  from "react-icons/tb";
import logo from '../src/assets/logo - Copy.jpg'
import cv from '../src/assets/cv.1.pdf';

import giza from '../src/assets/giza.jpg'
import h1 from '../src/assets/hagerr.jpg'



const SkillIcon = ({ name, icon }) => (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-card/50 p-6 rounded-xl flex flex-col items-center gap-2 backdrop-blur-sm"
    >
      {typeof icon === "string" ? (
        <img src={icon} alt={name} className="w-12 h-12" />
      ) : (
        <div className="text-4xl text-primary">{icon}</div>
      )}
      <p className="text-sm font-medium">{name}</p>
    </motion.div>
  );
  
  SkillIcon.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.oneOfType([
      PropTypes.string,       // for image path
      PropTypes.element       // for JSX icon
    ]).isRequired,
  };


const Home = () => {
    const skills = {
        languages: [
          { name: "HTML5", icon: <FaHtml5 /> },
          { name: "CSS3", icon: <FaCss3Alt /> },
          { name: "JavaScript", icon: <IoLogoJavascript />},
          { name: "C#", icon: <TbBrandCSharp />}
        ],
        frameworks: [
          { name: "React", icon: <FaReact /> },
          { name: "Vite", icon:<TbBrandVite />},
          { name: "Tailwind", icon: <TbBrandTailwind />},
          { name: "Bootstrap", icon: <FaBootstrap />}
        ]
      };
      useEffect(() => {
        if (window.location.hash) {
          const el = document.querySelector(window.location.hash);
          if (el) {
            setTimeout(() => {
              el.scrollIntoView({ behavior: 'smooth' });
            }, 100); // delay to allow layout to finish rendering
          }
        }
      }, []);
  return (
    <div className="min-h-screen bg-background text-white w-full">
      {/* Navbar */}
      <nav className="w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-12">
            <div className="flex items-center gap-2">
              <FaCode className="text-primary text-xl" />
              <span className="font-semibold">Hager Sameh</span>
            </div>
            <div className="flex flex-wrap justify-center gap-4 md:gap-12">
             <a href="#home" className="hover:text-primary transition-colors">Home</a>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>

            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home">
  <div className="relative min-h-screen flex items-center justify-between px-4 pt-20 scroll-mt-20">
    
    {/* Background Blur Circles */}
    <div className="absolute top-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl z-0" />
    <div className="absolute bottom-20 left-0 w-96 h-96 bg-secondary/50 rounded-full blur-3xl z-0" />
    
    <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center z-10 relative">
      
      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <div className="space-y-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="text-xl">Hi, I&apos;m</span>
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-primary">
              Hager Sameh
            </h1>
          </div>
          <p className="text-xl text-gray-400">Frontend Web Developer</p>

          {/* Download CV Button */}
          <div className="flex justify-center md:justify-start z-10 relative">
            <a 
              href={cv}
              download="Hager_Sameh_CV.pdf"
              className="z-20 inline-block px-6 py-2 bg-gradient-primary rounded-full hover:opacity-90 transition-opacity"
            >
              Download CV
            </a>
          </div>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex justify-center items-center"
      >
        <div className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[2rem] overflow-hidden flex justify-center items-center z-10">
          <img 
            src={h1} 
            alt="Hager Sameh" 
            className="w-[250px] h-[250px] md:w-[400px] md:h-[400px] object-cover"
          />
        </div>
      </motion.div>

    </div>
  </div>
</section>

      {/* About Section */}
      <section id='about' className="scroll-mt-20" >
        <div className="py-20 px-4 relative ">
        <div  className="absolute inset-0 bg-primary/5 rounded-[3rem]" />
        <div className="max-w-6xl mx-auto relative">
         
            <h2 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-primary">
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              Passionate and dedicated frontend developer with a strong foundation in HTML, CSS, JavaScript, and React.js.
              Currently pursuing a degree in Management Information Systems at El Shorouk Academy (expected graduation: 2025).
              Experienced in building responsive web interfaces using modern tools like Vite and Tailwind CSS. 
              Adept at version control with Git and GitHub, and familiar with MySQL, MongoDB, and Python for data analysis.
              Proven team player through volunteer work and teaching experience with AIESEC and IEEE. 
              Eager to contribute to real-world projects, grow within a dynamic development team, 
              and apply both creative and technical skills to deliver great user experiences.
            </p>
          
        </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-mt-20 ">
  <div className="py-20 px-4 relative">
    <div className="absolute inset-0 bg-secondary/5 rounded-[3rem]" />
    <div className="max-w-6xl mx-auto relative">
      <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-primary">
        My Skills
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6"
      >
        {[...skills.languages, ...skills.frameworks].map((skill) => (
          <SkillIcon key={skill.name} {...skill} />
        ))}
      </motion.div>
    </div>
  </div>
</section>


      {/* Portfolio Section */}
      <section id="portfolio" className="scroll-mt-20 ">
        <div className="py-20 px-4 "> 
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-primary">
            Portfolio
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Add your portfolio items here */}
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#1a1a2e] rounded-lg overflow-hidden"
            >
              <a 
                href={"https://hagersameh111.github.io/plants/"}
               
              >
                <div className="h-48 relative">
                  <img 
                    src={logo} 
                    alt="Eyes on Plants Cover" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Eyes on Plants</h3>
                  <p className="text-gray-400">A website for a plant shop, made with React and Tailwind CSS.</p>
                </div>
              </a>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-[#1a1a2e] rounded-lg overflow-hidden"
            >
              <a 
                href={"https://hagersameh111.github.io/Hsafer/"}
                
              >
                <div className="h-48 relative">
                  <img 
                    src={giza} 
                    alt="giza" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" />
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Hsafer project</h3>
                  <p className="text-gray-400">A travel agency website, made with React and Tailwind CSS. ps:not mobile friendly yet</p>
                </div>
              </a>
            </motion.div>
            
           
          </div>
        </div>
        </div> 
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 scroll-mt-20 ">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-transparent bg-clip-text bg-gradient-primary">
            Contact Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
           
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <FaEnvelope className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-400">hager_sharaf236@yahoo.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-gray-400">Future city, Shorouk, Cairo</p>
                </div>
               
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <FaPhone className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold">Number</h3>
                  <p className="text-gray-400">+201017774339</p>
                </div>
               
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <FaLinkedin className="text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/hagersameh111/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    linkedin.com/in/hagersamehh111
                  </a>
                </div>
              </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;