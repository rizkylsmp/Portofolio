import ProfilePict from "../assets/images/profile/Profile.JPG";
import styles from "../assets/styles/bubble.module.css";
import { IoIosMail } from "react-icons/io";
import {
  FaExternalLinkAlt,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
// import CV from "../assets/doc/CV_Rizky Lanang Sadana Mulyono Putra.pdf";

const Profile = () => {
  // const onButtonClick = () => {
  //   const pdfUrl = CV;
  //   const link = document.createElement("a");
  //   link.href = pdfUrl;
  //   link.download = "CV_Rizky Lanang Sadana Mulyono Putra.pdf";
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  const Media = [
    { icon: <IoIosMail />, href: "mailto:rizkylsmp@gmail.com" },
    { icon: <FaWhatsapp />, href: "https://wa.link/379fob" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/rizkylsmp/" },
    { icon: <FaGithub />, href: "https://github.com/rizkylsmp" },
    { icon: <FaInstagram />, href: "https://instagram.com/rizky.ls" },
  ];

  return (
    <>
      <div className="md:px-44 p-20">
        <div className="flex md:flex-col lg:flex-row flex-col gap-16 py-20 justify-center items-center">
          <div className="" data-aos="fade-right">
            <img
              src={ProfilePict}
              alt="..."
              className="min-h-80 max-w-56 object-cover rounded-full hover:scale-105 hover:shadow-xl duration-300"
            />
          </div>
          <div
            className="flex flex-col md:text-md lg:text-lg gap-5"
            data-aos="fade-left"
          >
            <div className="flex flex-col gap-2">
              <div>
                <BubbleText />
              </div>
              <div className="">
                a Junior <b>Web & Game Developer</b>
              </div>
              <p className="text-justify group hover:p-5 p-0 relative transition-all duration-500">
                Lulusan D-III Teknologi Informasi di Politeknik Negeri Malang
                dengan ketertarikan mengembangkan aplikasi berbasis website
                serta berpengalaman sabagai IT support. Pekerja keras dan mampu
                bekerja dibawah tekanan serta memiliki rasa ingin tahu yang
                tinggi.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                {Media.map((media) => (
                  <a
                    href={media.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-black text-color-1 dark:bg-color-1 dark:text-color-4 px-2 py-2 hover:shadow-[-1px_-1px_5px_rgba(255,_255,_255,_0.6),_1px_1px_5px_rgba(0,_0,_0,_0.3),inset_-2px_-2px_5px_rgba(255,_255,_255,_1),inset_2px_2px_4px_rgba(0,_0,_0,_0.3)]"
                  >
                    {media.icon}
                  </a>
                ))}
              </div>
              <span className="pt-2">
                <a
                  href="https://www.cake.me/rizkylsmp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1 w-fit bg-white dark:bg-color-5 rounded-xl border-color-2 border-[0.1px] shadow-[,_5px_5px_10px_rgba(0,_0,_0,_0.25)] hover:shadow-[-1px_-1px_3px_rgba(255,_255,_255,_255),_1px_1px_3px_rgba(0,_0,_0,_0),inset_-1px_-1px_3px_rgba(255,_255,_255,_0),inset_1px_1px_3px_rgba(0,_0,_0,_0)] before:ease relative h-12 overflow-hidden text-black dark:text-white transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-blue-300 dark:before:bg-white before:opacity-10 before:duration-500 hover:shadow-gray-300 dark:hover:shadow-white hover:before:-translate-x-40"
                >
                  Resume
                  <FaExternalLinkAlt />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-4xl font-bold">
      {"RIZKY LANANG SADANA MULYONO PUTRA".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Profile;
