import React from "react";
import Image from "next/image";
import Link from "next/link";

const song = [
  {
    id: 1,
    title: "Y tu (y yo)",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus sollicitudin per pretium quis senectus sodales tortor, lacinia magnis inceptos enim placerat etiam. Nam velit torquent nascetur etiam suspendisse sodales diam dignissim aenean, tempor lacus lacinia senectus nullam lectus leo tortor. Mollis turpis odio in erat phasellus sodales fringilla tempus, fusce inceptos nam hac habitant bibendum praesent.",
    img: "/assets/songs/ytu.jpeg",
  },
  {
    id: 2,
    title: "¿Puedes?",
    year: "2024",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus sollicitudin per pretium quis senectus sodales tortor, lacinia magnis inceptos enim placerat etiam. Nam velit torquent nascetur etiam suspendisse sodales diam dignissim aenean, tempor lacus lacinia senectus nullam lectus leo tortor. Mollis turpis odio in erat phasellus sodales fringilla tempus, fusce inceptos nam hac habitant bibendum praesent.",
    img: "/assets/songs/puedes.jpeg",
  },
  {
    id: 3,
    title: "Rosa Lisergico",
    year: "2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus sollicitudin per pretium quis senectus sodales tortor, lacinia magnis inceptos enim placerat etiam. Nam velit torquent nascetur etiam suspendisse sodales diam dignissim aenean, tempor lacus lacinia senectus nullam lectus leo tortor. Mollis turpis odio in erat phasellus sodales fringilla tempus, fusce inceptos nam hac habitant bibendum praesent.",
    img: "/assets/songs/rosa.jpeg",
  },
  {
    id: 4,
    title: "Mulbet",
    year: "2023",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus sollicitudin per pretium quis senectus sodales tortor, lacinia magnis inceptos enim placerat etiam. Nam velit torquent nascetur etiam suspendisse sodales diam dignissim aenean, tempor lacus lacinia senectus nullam lectus leo tortor. Mollis turpis odio in erat phasellus sodales fringilla tempus, fusce inceptos nam hac habitant bibendum praesent.",
    img: "/assets/songs/mulbet.jpeg",
  },
  {
    id: 5,
    title: "Regresa a mi",
    year: "2022",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit, vivamus sollicitudin per pretium quis senectus sodales tortor, lacinia magnis inceptos enim placerat etiam. Nam velit torquent nascetur etiam suspendisse sodales diam dignissim aenean, tempor lacus lacinia senectus nullam lectus leo tortor. Mollis turpis odio in erat phasellus sodales fringilla tempus, fusce inceptos nam hac habitant bibendum praesent.",
    img: "/assets/songs/regresa.jpeg",
  },
];

const Songs = () => {
  return (
    <section className="py-20 px-8 md:px-10 flex flex-col gap-14">
      <h1 className="text-gray underline decoration-purple text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold p-5 ">
        Canciones
      </h1>

      {song.map((song) => (
        <div
          key={song.id}
          className="flex flex-col border-1 md:border-0 md:flex-row gap-10 xl:w-3/5"
        >
          <div className="md:w-[1500px]">
            <a href="https://distrokid.com/hyperfollow/mulbet/y-t-y-yo">
              <Image
                src={song.img}
                alt={song.title}
                width={400}
                height={1000}
              />
            </a>
          </div>

          <div className="flex flex-col justify-between">
            <div className="flex flex-col lg:flex-row md:gap-4 text-3xl font-bold font-anonymous">
              <h1 className="">{song.title} -</h1>
              <h1 className="text-purple">{song.year}</h1>
            </div>

            <p className="text-sm font-anonymous self-end">
              {song.description}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Songs;
