import React, { useRef, useEffect, useState } from "react";

// PAGES & COMPONENT
import Navbar from "./components/Navbar";
import Music from "./components/Music";
import Profile from "./pages/Profile";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Certificate from "./pages/Certificate";
import Experience from "./pages/Experience";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// ICONS
import { CiLight, CiDark } from "react-icons/ci";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  const profileRef = useRef(null);
  const skillsRef = useRef(null);
  const experienceRef = useRef(null);
  const projectsRef = useRef(null);
  const certificateRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    profile: profileRef,
    skills: skillsRef,
    experience: experienceRef,
    projects: projectsRef,
    certificate: certificateRef,
    contact: contactRef,
  };

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <div className="bg-color-1 dark:bg-color-3 text-color-4 dark:text-color-1 font-poppins">
      <button
        onClick={toggleDarkMode}
        className="flex gap-2 items-center px-4 py-3 rounded-full bg-color-4 text-color-1 dark:bg-color-1 dark:text-color-3 fixed right-10 bottom-10 z-50 duration-700"
      >
        <div>{darkMode ? <CiDark size={20} /> : <CiLight size={20} />}</div>
        <div className="md:block hidden">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </div>
      </button>
      <div className="fixed bottom-10 left-10 z-50 ">
        <Music />
      </div>
      <Navbar sectionRefs={sectionRefs} />
      <section ref={profileRef}>
        <Profile />
      </section>
      <section ref={skillsRef}>
        <Skills />
      </section>
      <section ref={experienceRef}>
        <Experience />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={certificateRef}>
        <Certificate />
      </section>
      <section ref={contactRef}>
        <Contact />
      </section>
    </div>
  );
}

export default App;
