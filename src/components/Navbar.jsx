import React, { useState, useEffect } from "react";
import { HiMoon } from "react-icons/hi";

const Navbar = ({ sectionRefs }) => {
  const Links = [
    { name: "Profile", refKey: "profile" },
    { name: "Skills", refKey: "skills" },
    { name: "Experience", refKey: "experience" },
    { name: "Projects", refKey: "projects" },
    { name: "Certificate", refKey: "certificate" },
    { name: "Contact", refKey: "contact" },
  ];

  const [open, setOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToSection = (refKey) => {
    console.log("Navigating to:", refKey);
    const targetRef = sectionRefs[refKey];
    if (targetRef && targetRef.current) {
      targetRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setOpen(false);
  };

  return (
    <div className="fixed z-50 w-full duration-300 ease-in-out">
      <nav
        className={`flex justify-between p-6 ${
          isSticky
            ? "sticky top-0 left-0 right-0 bg-color-1 dark:bg-color-3 border-b dark:border-color-4 duration-150"
            : ""
        }`}
      >
        {/* LOGO */}
        <div>
          <a href="/" className="flex gap-2 font-bold text-2xl items-center">
            <HiMoon />
            RLSMP
          </a>
        </div>

        <div
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 cursor-pointer md:hidden"
        >
          <ion-icon name={open ? "close" : "menu"}></ion-icon>
        </div>

        {/* MENU */}
        <div
          className={`md:flex-row md:gap-6 md:bg-transparent md:static md:p-0 md:translate-x-0 md:opacity-100 md:translate-y-0 transform  rounded-b-xl absolute flex flex-col gap-10 top-20 p-5 items-center right-0 left-0 transition-all duration-150 ease-in ${
            open ? "block bg-color-1 dark:bg-color-3" : "translate-x-[200vh]"
          }`}
        >
          {Links.map((link, index) => (
            <button
              key={index}
              className="hover:underline duration-500"
              onClick={() => handleScrollToSection(link.refKey)}
            >
              {link.name}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
