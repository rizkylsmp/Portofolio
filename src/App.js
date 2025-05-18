import React, { useRef, useEffect } from "react";

// PAGES & COMPONENT
import Theme from "./components/Theme";
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

  return (
    <div className="bg-color-1 dark:bg-color-3 text-color-4 dark:text-color-1 font-poppins">
      <Theme />
      <div className="fixed bottom-10 left-10 z-50">
        <Music />
      </div>

      <Navbar sectionRefs={sectionRefs} />

      <div>
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
    </div>
  );
}

export default App;
