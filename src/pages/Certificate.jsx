import React from "react";
import SertifBNSP from "../assets/images/certificate/s_bnsp/certif_bnsp.jpg";
import SertifACA from "../assets/images/certificate/s_alibaba/Sertifikat ACA.jpg";
import SertifAlibaba from "../assets/images/certificate/s_alibaba/Sertifikat Alibaba.jpg";
import SertifMSIB from "../assets/images/certificate/s_msib/Sertifikat MSIB 5_1.jpg";
import SertifMSIB2 from "../assets/images/certificate/s_msib/Sertifikat MSIB 5_2.jpg";
import SertifICEI1 from "../assets/images/certificate/s_icei/Sertifikat ICEI Introduction to Unity Game Engine.jpg";
import SertifICEI2 from "../assets/images/certificate/s_icei/Sertifikat ICEI Pong 2D.jpg";
import SertifICEI3 from "../assets/images/certificate/s_icei/Sertifikat ICEI Top-Down Shooter 2D.jpg";
import SertifICEI4 from "../assets/images/certificate/s_icei/Sertifikat ICEI Side Scrolling Platformer 2D.jpg";
import SertifICEI5 from "../assets/images/certificate/s_icei/Sertifikat ICEI FPS 3D.jpg";
import SertifICEI6 from "../assets/images/certificate/s_icei/Sertifikat ICEI TPS 3D.jpg";
import SertifICEI7 from "../assets/images/certificate/s_icei/Sertifikat ICEI Game Monetization.jpg";
import SertifCP1 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan HTML_1.jpg";
import SertifCP2 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan CSS_1.jpg";
import SertifCP3 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan Javascript_1.jpg";
import SertifCP4 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan Javascript Konsep OOP_1.jpg";
import SertifCP5 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan Javascript DOM_1.jpg";
import SertifCP6 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan Javascript Asynchronous_1.jpg";
import SertifCP7 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan AJAX & Web API_1.jpg";
import SertifCP8 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan Bootstrap_1.jpg";
import SertifCP9 from "../assets/images/certificate/s_codepolitan/Sertifikat Codepolitan ReactJS.jpg";
import SertifCP10 from "../assets/images/certificate/s_codepolitan/s-cp-tw.jpg";

const Certificate = () => {
  const Certificate = [
    {
      src: [SertifBNSP],
      alt: "Sertifikat Kompetensi BNSP",
      style: "md:h-64 lg:h-52 xl:h-80 h-full items-start",
    },
    {
      src: [SertifAlibaba, SertifACA],
      alt: "Sertifikat Alibaba Cloud",
      style: "items-center",
    },
    {
      src: [SertifMSIB, SertifMSIB2],
      alt: "Sertifikat MSIB 5",
      style: "items-center",
    },
    {
      src: [
        SertifICEI1,
        SertifICEI2,
        SertifICEI3,
        SertifICEI4,
        SertifICEI5,
        SertifICEI6,
        SertifICEI7,
      ],
      alt: "Sertifikat ICEI",
      style: "items-center",
    },
    {
      src: [
        SertifCP1,
        SertifCP2,
        SertifCP3,
        SertifCP4,
        SertifCP5,
        SertifCP6,
        SertifCP7,
        SertifCP8,
        SertifCP9,
        SertifCP10,
      ],
      alt: "Sertifikat Codepolitan",
      style: "items-center",
    },
  ];
  return (
    <div className="border-t-2 dark:border-color-4 p-10 py-28">
      <div className="p-5 flex flex-col gap-10">
        <div
          data-aos="fade-up"
          className="font-bold md:text-5xl text-4xl text-center"
        >
          CERTIFICATE
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 ">
          {Certificate.map((c) => (
            <div
              data-aos="zoom-out"
              className="p-2 overflow-hidden bg-white dark:bg-color-4 rounded"
            >
              <div
                className={`flex flex-shrink-0 overflow-auto gap-2 h-full  ${c.style}`}
              >
                {c.src.map((image) => (
                  <img src={image} alt={c.alt} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
