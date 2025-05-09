import React from "react";
import Image from "next/image";

const member = [
  {
    id: 1,
    rol: "Baterista",
    name: "Diego Badka",
    img: "/assets/members/diego.JPG",
  },
  {
    id: 2,
    rol: "Guitarra y Voz",
    name: "Aldair Dipla",
    img: "/assets/members/aldair.JPG",
  },
  {
    id: 3,
    rol: "Bajo",
    name: "Braulio Silva",
    img: "/assets/members/braulio.JPG",
  },
  {
    id: 4,
    rol: "Teclados y Guitarra",
    name: "Fabio Silva",
    img: "/assets/members/fabio.JPG",
  },
];

const Members = () => {
  return (
    <section className="xl:h-screen content-center">
      <h1 className="text-gray underline decoration-purple text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold p-5 ">INTEGRANTES</h1>

      <div className="flex flex-wrap justify-center gap-3 md:gap-7 lg:gap-8 2xl:gap-14 px-5 py-10">
        {member.map((member) => (
          <div key={member.id} className="relative group">
            <div
              className="bg-white group-hover:brightness-50 w-[310px] h-72"
              style={{
                backgroundImage: `url(${member.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <h1 className="text-2xl font-bold font-anonymous group-hover:text-white">
                  {member.name}
                </h1>
              </div>
            </div>
            <h1 className="font-anonymous mt-2">{member.rol}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Members;
