"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { usePathname } from "next/navigation";

const Hero = () => {
  const leftBgRef = useRef(null);
  const rightBgRef = useRef(null);
  const mainImageRef = useRef(null);

  const pathname = usePathname();

  const animateHero = () => {
    gsap.fromTo(
      leftBgRef.current,
      { x: "-100%" },
      {
        x: "0%",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      rightBgRef.current,
      { x: "100%" },
      {
        x: "0%",
        duration: 1.5,
        ease: "power3.out",
      }
    );

    gsap.fromTo(
      mainImageRef.current,
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
      }
    );
  };

  useEffect(() => {
    animateHero();
  }, [pathname]);

  return (
    <section className="relative h-screen w-screen overflow-hidden">
      {/* Fondo izquierdo */}
      <div
        ref={leftBgRef}
        className="absolute left-0 top-0 w-full md:w-1/3 h-full z-0"
      >
        <Image
          src="/assets/fondoizquierdo.png"
          alt="fondo izquierdo"
          fill
          className="object-cover brightness-100"
          priority
        />
      </div>

      {/* Fondo derecho */}
      <div
        ref={rightBgRef}
        className="absolute hidden md:flex right-0 top-0 w-1/2 md:w-1/3 h-full z-0"
      >
        <Image
          src="/assets/fondoderecho.png"
          alt="fondo derecho"
          fill
          className="object-cover brightness-100"
          priority
        />
      </div>

      {/* Imagen principal centrada */}
      <div
        ref={mainImageRef}
        className="relative z-10 flex items-center justify-center h-full"
      >
        <Image
          src="/assets/mulbetnonbg.png"
          alt="hero"
          width={900}
          height={1000}
          className="object-contain max-w-full px-4 brightness-100"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
