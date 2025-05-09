import Image from "next/image";

function Flyer() {
  return (
    <section className="py-20 justify-items-center">
      <Image src="/assets/flyer.jpeg" alt="Flyer" width={800} height={1000} />
    </section>
  );
}

export default Flyer;
