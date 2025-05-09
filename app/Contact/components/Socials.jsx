import React from "react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    id: 1,
    social: "IG",
    link: "",
  },
  {
    id: 2,
    social: "FB",
    link: "",
  },
  {
    id: 3,
    social: "TT",
    link: "",
  },
];

const Socials = () => {
  return (
    <section className="lg:h-screen w-full flex flex-col lg:flex-row py-12">
      <div className="lg:w-3/5 p-20">
        <Image
          src="/assets/contact.jpeg"
          alt="mulbet"
          width={1000}
          height={1000}
        />
      </div>

      <div className="lg:w-2/5 flex flex-col gap-20 items-center justify-center">
        <div className="flex flex-row gap-x-16">
          {socials.map((socials) => (
            <Link key={socials.social} href={socials.link}>
              <h1 className="font-anonymous text-5xl md:text-6xl hover:text-purple">
                {socials.social}
              </h1>
            </Link>
          ))}
        </div>

        <div className="font-anonymous text-2xl md:text-4xl">
          <h1>Cel. 5547857232</h1>
          <h1>Cel. 5613624632</h1>
        </div>
      </div>
    </section>
  );
};

export default Socials;
