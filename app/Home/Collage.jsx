"use client";
import Image from "next/image";

const topImages = [
  "/assets/collage/img1.JPG",
  "/assets/collage/img5.JPG",
  "/assets/collage/img3.JPG",
  "/assets/collage/img6.JPG",
];

const bottomImages = [
  "/assets/collage/img2.JPG",
  "/assets/collage/img4.JPG",
  "/assets/collage/img7.JPG",
  "/assets/collage/img8.JPG",
];

const Collage = () => {
  return (
    <section className="w-full bg-black py-20 items-center overflow-hidden">
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

export default Collage;
