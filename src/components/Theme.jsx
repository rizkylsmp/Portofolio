import React, { useState } from "react";

// ICONS
import { CiLight, CiDark } from "react-icons/ci";

const Theme = () => {
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
    <div>
      <button
        onClick={toggleDarkMode}
        className="flex gap-2 items-center px-4 py-3 rounded-full bg-color-4 text-color-1 dark:bg-color-1 dark:text-color-3 fixed right-10 bottom-10 z-50 duration-700"
      >
        <div>{darkMode ? <CiDark size={20} /> : <CiLight size={20} />}</div>
        <div className="md:block hidden">
          {darkMode ? "Dark Mode" : "Light Mode"}
        </div>
      </button>
    </div>
  );
};

export default Theme;
