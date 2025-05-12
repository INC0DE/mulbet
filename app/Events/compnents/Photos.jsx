"use client";
import Image from "next/image";

const topImages = [
  "/assets/collage/img9.jpeg",
  "/assets/collage/img10.jpeg",
  "/assets/collage/img11.jpeg",
];

const bottomImages = [
  "/assets/collage/img12.jpeg",
  "/assets/collage/img13.jpeg",
  "/assets/collage/img14.jpeg",
  "/assets/collage/img15.jpeg",
];

const Photos = () => {
  return (
    <section className="w-full bg-black py-20 items-center overflow-hidden">
<h1 className="text-gray underline decoration-purple text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold p-5 ">EVENTOS</h1>

      {/* Fila superior */}
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="animate-slide-left inline-flex">
          {[...topImages, ...topImages].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`top-img-${index}`}
              width={400}
              height={200}
              className="object-cover m-2 rounded-lg"
            />
          ))}
        </div>
      </div>

      {/* Fila inferior */}
      <div className="relative w-full overflow-hidden whitespace-nowrap mt-5">
        <div className="animate-slide-right inline-flex">
          {[...bottomImages, ...bottomImages].map((src, index) => (
            <Image
              key={index}
              src={src}
              alt={`bottom-img-${index}`}
              width={200}
              height={200}
              className="object-cover m-2 rounded-lg"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Photos;
