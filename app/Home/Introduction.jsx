"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const Introduction = () => {
  const linesRef = useRef([]);
  const pathname = usePathname();

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    gsap.from(linesRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.3,
      ease: "power3.out",
      scrollTrigger: {
        trigger: linesRef.current[0]?.parentNode,
        start: "top 80%",
        toggleActions: "restart none none none",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);

  return (
    <section className="py-20 text-right font-inter font-extrabold text-gray text-3xl md:text-6xl lg:text-7xl xl:text-9xl">
      <h1 ref={(el) => (linesRef.current[0] = el)}>
        LO QUE <span className="text-purple">CALLAMOS</span>
      </h1>
      <h1 ref={(el) => (linesRef.current[1] = el)}>
        <span className="underline decoration-purple">MIRANDO</span> A LOS OJOS,
      </h1>
      <h1 ref={(el) => (linesRef.current[2] = el)}>
        LA <span className="text-purple">MÚSICA</span> LO GRITA
      </h1>
      <h1
        ref={(el) => (linesRef.current[3] = el)}
        className="underline decoration-purple"
      >
        EN SILENCIO.
      </h1>
    </section>
  );
};

export default Introduction;
