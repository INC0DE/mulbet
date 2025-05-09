import Image from "next/image";

const Mulbet = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center p-5 md:p-20">
      <div className="lg:w-1/2 p-5">
        <Image
          src="/assets/FOTOPENDEJA.jpeg"
          alt="mulbet1"
          width={1000}
          height={1000}
        />
      </div>

      <p className="lg:w-1/2 p-8 font-anonymous self-end">
        Mulbet es una banda creada en 2020, originaria de Nezahualcóyotl, Estado
        de México formada por Diego Badka, Braulio Silva, Aldair Dipla y Fabio
        Silva, cada uno con diferentes influencias musicales e ideas para así
        buscar crear un sonido original e inovador.
      </p>
    </section>
  );
};

export default Mulbet;
