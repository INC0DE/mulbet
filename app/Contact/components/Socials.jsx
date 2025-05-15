"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const socials = [
  {
    id: 1,
    social: "IG",
    link: "https://www.instagram.com/mulbet_oficial/",
  },
  {
    id: 2,
    social: "FB",
    link: "https://www.facebook.com/search/top?q=mulbet",
  },
  {
    id: 3,
    social: "TT",
    link: "https://www.tiktok.com/@mulbett",
  },
];

const Socials = () => {
  const imageRef = useRef(null);
  const linksRef = useRef([]);
  const phonesRef = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current, {
        opacity: 0,
        x: -100,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });

      // Enlaces
      linksRef.current.forEach((el, i) => {
        if (el) {
          gsap.from(el, {
            opacity: 0,
            y: 100,
            rotate: -15,
            scale: 0.8,
            duration: 1,
            delay: i * 0.2,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none reset",
            },
          });
        }
      });

      // Teléfonos
      gsap.from(phonesRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: phonesRef.current,
          start: "top 80%",
          toggleActions: "restart none none none",
        },
      });
    });

    return () => ctx.revert();
  }, [pathname]);

  return (
    <section className="lg:h-screen w-full flex flex-col lg:flex-row py-12">
      <div ref={imageRef} className="lg:w-3/5 p-20">
        <Image
          src="/assets/contact.jpeg"
          alt="mulbet"
          width={1000}
          height={1000}
        />
      </div>

      <div className="lg:w-2/5 flex flex-col gap-20 items-center justify-center">
        <div className="flex flex-row gap-x-16">
          {socials.map((social, index) => (
            <Link key={social.id} href={social.link} target="_blank">
              <h1
                ref={(el) => (linksRef.current[index] = el)}
                className="font-anonymous text-5xl md:text-6xl hover:text-purple transition duration-300 transform hover:scale-105"
              >
                {social.social}
              </h1>
            </Link>
          ))}
        </div>

        <div ref={phonesRef} className="font-anonymous text-2xl md:text-4xl">
          <h1 className="hover:text-purple transition duration-300">
            Cel. 5547857232
          </h1>
          <h1 className="hover:text-purple transition duration-300">
            Cel. 5613624632
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Socials;
