"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Mulbet = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Animación para la imagen
    gsap.from(imageRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });

    // Animación para el texto
    gsap.from(textRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-center p-5 md:p-20">
      <div ref={imageRef} className="lg:w-1/2 p-5">
        <Image
          src="/assets/FOTOPENDEJA.jpeg"
          alt="mulbet1"
          width={1000}
          height={1000}
        />
      </div>

      <p ref={textRef} className="lg:w-1/2 p-8 font-anonymous self-end">
        Mulbet es una banda creada en 2020, originaria de Nezahualcóyotl, Estado
        de México formada por Diego Badka, Braulio Silva, Aldair Dipla y Fabio
        Silva, cada uno con diferentes influencias musicales e ideas para así
        buscar crear un sonido original e inovador.
      </p>
    </section>
  );
};

export default Mulbet;
