import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative h-screen w-screen">
      {/* Fondo izquierdo */}
      <div className="absolute left-0 top-0 w-full md:w-1/3 h-full z-0">
        <Image
          src="/assets/fondoizquierdo.png"
          alt="fondo izquierdo"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Fondo derecho */}
      <div className="absolute hidden md:flex right-0 top-0 w-1/2 md:w-1/3 h-full z-0">
        <Image
          src="/assets/fondoderecho.png"
          alt="fondo derecho"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Imagen principal centrada */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <Image
          src="/assets/mulbetnonbg.png"
          alt="hero"
          width={800}
          height={1000}
          className="object-contain max-w-full px-4 brightness-100"
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
