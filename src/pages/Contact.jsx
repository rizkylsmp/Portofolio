import React from "react";
import IMG from "../assets/images/profile/Footer.jpg";

const Contact = () => {
  return (
    <div className="bg-color-3 dark:bg-color-5 text-color-1 py-5">
      <div className="flex md:flex-row flex-col justify-between gap-8 p-10">
        <div className="flex flex-col text-xl font-bold items-center gap-5">
          Rizky Lanang Sadana Mulyono Putra
          <img
            src={IMG}
            alt="GIMME ALMOND TOFU!!"
            className="h-48 rounded-full"
          />
        </div>
        <div className="flex gap-14 text-lg justify-between px-20">
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-xl">Connect With Me</div>
            <a
              href="https://www.instagram.com/rizky.ls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/rizkylsmp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/rizkylsmp"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
          </div>
          <div className="flex flex-col gap-5">
            <div className="font-semibold text-xl">Contact Me</div>
            <a
              href="mailto:rizkylsmp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Email
            </a>
            <a
              href="https://wa.link/379fob"
              target="_blank"
              rel="noopener noreferrer"
            >
              Whatsapp
            </a>
          </div>
        </div>
      </div>
      <div className="text-end px-8 pt-5 border-t">© 2024 Rizky Lanang</div>
    </div>
  );
};

export default Contact;
