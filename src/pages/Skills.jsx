const Skills = () => {
  const Images = [
    {
      name: "HTML",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      alt: "html",
    },
    {
      name: "CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      alt: "css",
    },
    {
      name: "Javascript",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
      alt: "javascript",
    },
    {
      name: "ReactJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      alt: "reactjs",
    },
    {
      name: "NextJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
      alt: "nextjs",
    },
    {
      name: "NodeJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg",
      alt: "NodeJS",
    },
    {
      name: "ExpressJS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
      alt: "ExpressJS",
    },
    {
      name: "Tailwind CSS",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
      alt: "TailwindCSS",
    },
    {
      name: "Bootstrap",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg",
      alt: "Bootstrap",
    },
    {
      name: "C#",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
      alt: "C#",
    },
    {
      name: "MySQL",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg",
      alt: "MySQL",
    },
    {
      name: "MongoDB",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg",
      alt: "MongoDB",
    },
    {
      name: "Unity",
      src: "https://cdn-icons-png.flaticon.com/512/5969/5969347.png",
      alt: "unity",
    },
  ];

  return (
    <div
      className="p-8 border-t-2 dark:border-color-4 py-28"
      data-aos="fade-up"
    >
      <div className="flex flex-col gap-4 items-center">
        <div className="text-center font-bold md:text-5xl text-4xl">SKILLS</div>
        <div className="flex flex-wrap justify-around gap-14 p-8">
          {Images.map((img) => (
            <img
              src={img.src}
              alt={img.alt}
              className="lg:max-h-32 md:max-h-28 max-h-24"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
