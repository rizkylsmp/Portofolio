import React from "react";
import RPL1 from "../assets/images/experience/rpl_work1.jpeg";
import RPL_Icon from "../assets/images/icons/raindo.png";

const Experience = () => {
  return (
    <div className="border-t-2 dark:border-color-4 md:px-36 p-10 items-center py-24">
      <div
        data-aos="fade-up"
        className="font-bold md:text-5xl text-4xl p-10 text-center"
      >
        EXPERIENCE
      </div>
      <div
        data-aos="flip-left"
        className="flex lg:flex-row flex-col xl:gap-10 lg:gap-8 gap-4 justify-center border-color-1 dark:border-color-4 border rounded-xl p-10"
      >
        <div className="font-bold text-3xl lg:block hidden">&#10022;</div>
        <div className="lg:h-full lg:w-1/4 w-full">
          <img
            src={RPL1}
            alt="Working - Raindo Putra Lestari"
            className="object-cover rounded-md hover:scale-105 duration-150 w-full h-full"
          />
        </div>
        <div className="flex flex-col gap-2 lg:w-3/4">
          <div className="flex items-center gap-3 font-semibold text-2xl">
            PT RAINDO PUTRA LESTARI{" "}
            <img src={RPL_Icon} alt="RPL Icon" className="w-10 h-8" />
          </div>
          <div className="flex items-center gap-2">
            <div className="text-xl font-semibold">Staff IT</div>
            <div className="text-xl">||</div>
            <div className="text-lg">Juli 2024 - Sekarang</div>
          </div>
          <ul className="list-disc list-inside">
            <li className="pl-6 -indent-6">
              Mengelola dan memperbarui data laporan export & import barang ke
              dalam sistem guna memastikan kelancaran keluar dan masuk barang
              kedalam maupun luar negeri.
            </li>
            <li className="pl-6 -indent-6">
              Memberikan dukungan teknis kepada pengguna terkait masalah
              hardware, software, dan jaringan agar dapat meningkatkan
              kelancaran pekerjaan.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
