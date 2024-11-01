import React, { useState } from "react";
import { FaReact, FaNodeJs, FaUnity } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMysql, SiCsharp } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

// WEBSITE IMPORT IMAGE
import ButikRenwa_1 from "../assets/images/projects/Website_ButikRenWa_1.png";
import ButikRenwa_2 from "../assets/images/projects/Website_ButikRenWa_2.png";
import ButikRenwa_3 from "../assets/images/projects/Website_ButikRenWa_3.png";
import DaftarPegawai_1 from "../assets/images/projects/Website_DaftarPegawai_1.png";
import Sertikom_1 from "../assets/images/projects/Website_Sertikom_1.png";
import Sertikom_2 from "../assets/images/projects/Website_Sertikom_2.png";
import Sertikom_3 from "../assets/images/projects/Website_Sertikom_3.png";
import KychiStory_1 from "../assets/images/projects/Website_KychiStory.jpg";

// GAME IMPORT IMAGE
import PaketExpress_1 from "../assets/images/projects/Game_PaketExpress_1.png";
import PaketExpress_2 from "../assets/images/projects/Game_PaketExpress_2.jpeg";
import PONG2D_1 from "../assets/images/projects/Game_Pong2D_1.png";
import PONG2D_2 from "../assets/images/projects/Game_Pong2D_2.png";
import PONG2D_3 from "../assets/images/projects/Game_Pong2D_3.png";
import SS2D_1 from "../assets/images/projects/Game_SS2D_1.png";
import SS2D_2 from "../assets/images/projects/Game_SS2D_2.png";
import SS2D_3 from "../assets/images/projects/Game_SS2D_3.png";

const Projects = () => {
  const [isSwitch, setIsSwitch] = useState(false);

  const WebsiteCards = [
    {
      images: [ButikRenwa_1, ButikRenwa_2, ButikRenwa_3],
      alt: "Pencatatan Butik Renwa",
      judul: "Pencatatan Butik RenWa",
      ket: "Website untuk merubah metode pencatatan yang ada pada toko Butik RenWa Kab. Jember menjadi digital guna mempermudah pencatatan agar lebih tepat dan flexibel.",
      icon: [
        <FaReact />,
        <FaNodeJs />,
        <SiExpress />,
        <SiTailwindcss />,
        <SiMysql />,
      ],
      link: "https://butikrenwa.xyz/",
      button: "LIVE VIEW",
      aos: "fade-right",
    },
    {
      images: [Sertikom_1, Sertikom_2, Sertikom_3],
      alt: "Pelatihan Sertifikasi Kompetensi",
      judul: "Pelatihan Sertifikasi Kompetensi",
      ket: "Website yang dikerjakan saat pelatihan sertifikasi kompetensi. Aplikasi ini merupakan website CRUD pengarsipan surat.",
      icon: [
        <FaReact />,
        <FaNodeJs />,
        <SiExpress />,
        <SiTailwindcss />,
        <SiMysql />,
      ],
      link: "https://github.com/rizkylsmp/Sertikom",
      button: "SOURCE CODE",
      aos: "fade-left",
    },
    {
      images: [DaftarPegawai_1],
      alt: "Daftar Nama Pegawai",
      judul: "Daftar Nama Pegawai",
      ket: "Website CRUD daftar nama pegawai.",
      icon: [
        <FaReact />,
        <FaNodeJs />,
        <SiExpress />,
        <SiTailwindcss />,
        <SiMysql />,
      ],
      link: "https://github.com/rizkylsmp/DaftarPegawai",
      button: "SOURCE CODE",
      aos: "fade-right",
    },
    {
      images: [KychiStory_1],
      alt: "Kychi Story",
      judul: "Kychi Story",
      ket: "Website novel dan manga menggunakan data rest api open source.",
      icon: [<RiNextjsLine />, <SiTailwindcss />],
      link: "https://kychistory.my.id",
      button: "LIVE VIEW",
      aos: "fade-left",
    },
  ];

  const GameCards = [
    {
      images: [PaketExpress_1, PaketExpress_2],
      alt: "Paket Express: Tantang Waktu",
      judul: "Paket Express: Tantang Waktu",
      ket: "Game 3D simulasi menjadi seorang kurir yang mengantar paket ke tujuan dengan waktu yang sudah ditentukan.",
      icon: [<FaUnity />, <SiCsharp />],
      link: "https://rockmoon.itch.io/paket-express-tantang-waktu",
      aos: "fade-right",
    },
    {
      images: [PONG2D_1, PONG2D_2, PONG2D_3],
      alt: "Pong 2D",
      judul: "Battle of Pong 2D",
      ket: "Game ping pong yang dapat dimainkan secara multiplayer atau singleplayer dalam 2D.",
      icon: [<FaUnity />, <SiCsharp />],
      link: "https://rizkylsmp.itch.io/battle-of-pong-2d",
      aos: "fade-left",
    },
    {
      images: [SS2D_1, SS2D_2, SS2D_3],
      alt: "Side Scrolling 2D",
      judul: "Side Scrolling 2D",
      ket: "Game basic side scrolling / platformer yang dapat dimainkan dalam 2D dengan mengkonfigurasi animasi, tilemap, dan mekanik game seperti movement, health system, dan attack.",
      icon: [<FaUnity />, <SiCsharp />],
      link: "#",
      aos: "fade-right",
    },
  ];

  return (
    <div className="border-t-2 dark:border-color-4 p-10 py-28">
      <div className="p-5 flex flex-col gap-8">
        <div
          data-aos="fade-up"
          className="font-bold md:text-5xl text-4xl text-center"
        >
          PROJECTS
        </div>
        <div data-aos="fade-up" className="flex justify-center">
          <div className=" bg-color-4 rounded-full p-2 font-semibold">
            <button
              className={`px-4 py-2 mr-2 rounded-full ${
                !isSwitch ? "bg-color-1 text-color-5" : "text-color-2"
              }`}
              onClick={() => setIsSwitch(false)}
            >
              Website
            </button>
            <button
              className={`px-4 py-2 rounded-full ${
                isSwitch ? "bg-color-1 text-color-5" : "text-color-2"
              }`}
              onClick={() => setIsSwitch(true)}
            >
              Game
            </button>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 overflow-hidden">
          {!isSwitch &&
            WebsiteCards.map((card, cardIndex) => (
              <div
                data-aos={card.aos}
                key={cardIndex}
                className="bg-white dark:bg-color-5 bg-cover shadow-lg rounded-xl flex flex-col"
              >
                <div className="relative overflow-hidden pt-3 h-full">
                  <div className="flex flex-shrink-0 overflow-x-auto items-center gap-2 h-full">
                    {card.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={card.alt}
                        className="h-fit min-w-full max-w-full"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-between p-6 h-fit md:h-56 lg:h-44">
                  <div>
                    <div className="font-bold text-xl">{card.judul}</div>
                    <div className="text-justify text-sm">{card.ket}</div>
                  </div>
                  <div className="flex sm:flex-row flex-col gap-3 justify-between items-center">
                    <div className="flex gap-2 text-xl">{card.icon}</div>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center text-sm rounded-lg border border-black bg-white dark:border-color-1 dark:bg-color-5 px-3 py-2 font-semibold uppercase  transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                    >
                      {card.button}
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          {isSwitch &&
            GameCards.map((card, cardIndex) => (
              <div
                data-aos={card.aos}
                key={cardIndex}
                className="bg-white dark:bg-color-5 bg-cover shadow-lg rounded-xl flex flex-col"
              >
                <div className="relative overflow-hidden pt-3 ">
                  <div className="flex flex-shrink-0 overflow-x-auto gap-2 items-center">
                    {card.images.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        alt={card.alt}
                        className="h-fit min-w-full max-w-full"
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-3 justify-between p-6 h-fit md:h-56 lg:h-44">
                  <div>
                    <div className="font-bold text-xl">{card.judul}</div>
                    <div className="text-justify text-sm">{card.ket}</div>
                  </div>
                  <div className="flex sm:flex-row flex-col gap-3 justify-between items-center">
                    <div className="flex gap-2 text-xl">{card.icon}</div>
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-1 items-center text-sm rounded-lg border border-black bg-white dark:border-color-1 dark:bg-color-5 px-3 py-2 font-semibold uppercase transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                    >
                      View
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
