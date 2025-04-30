import React from "react";
import Image from "next/image";

const items = [
  {
    src: "/assets/brands/Accumax.png",
    title: "Accumax",
  },
  {
    src: "/assets/brands/biohit.png",
    title: "Biohit",
  },
  {
    src: "/assets/brands/brand.png",
    title: "Brand",
  },
  {
    src: "/assets/brands/capp.png",
    title: "Capp",
  },
  {
    src: "/assets/brands/htl.png",
    title: "Htl",
  },
  {
    src: "/assets/brands/labsystems.png",
    title: "Labsystems",
  },
  {
    src: "/assets/brands/mettler.png",
    title: "Mettler",
  },
  {
    src: "/assets/brands/rainin.png",
    title: "Rainin",
  },
  {
    src: "/assets/brands/sartorius.png",
    title: "Sartorius",
  },
  {
    src: "/assets/brands/scincemed.png",
    title: "Scincemed",
  },
  {
    src: "/assets/brands/thermoFisher.png",
    title: "ThermoFisher",
  },
  {
    src: "/assets/brands/gilson.png",
    title: "Gilson",
  },
  {
    src: "/assets/brands/eppendorf.png",
    title: "Eppendorf",
  },
  {
    src: "/assets/brands/jencons.png",
    title: "Jencons",
  },
];

const Brands = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col gap-3 p-10">
        <div>
          <h1 className="text-5xl lg:text-6xl 2xl:text-8xl text-blue font-medium lg:px-10">
            Marcas
          </h1>
          <div className="w-60 lg:w-64 2xl:w-80 h-2 bg-orange"></div>
        </div>

        <p className="text-gray lg:text-2xl lg:px-10">Marcas que calibramos.</p>
      </div>

      <div className="relative overflow-hidden w-full py-10">
        <div className="flex w-max animate-scroll gap-16">
          {[...items, ...items].map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center flex-shrink-0 lg:w-[300px]"
            >
              <Image
                src={item.src}
                alt={item.title}
                width={500}
                height={300}
                className="rounded-lg shadow-lg w-[200px] h-[100px] lg:w-[300px] lg:h-[200px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
