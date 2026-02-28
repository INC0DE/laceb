import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button, ButtonGroup } from "@heroui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/assets/hero.jpg"
        alt="herolaceb"
        layout="fill"
        objectFit="cover"
        className="brightness-50 w-full"
        priority
      />

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
        <h1 className="font-semibold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white  mb-4">
          <span className="text-[33px] md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
            LACEB S.A. DE C.V.
          </span>{" "}
        </h1>
        <h1 className="text-[35px] font-semibold md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl text-white  mb-4">
          LABORATORIO DE CALIBRACIÓN
        </h1>

        <div className="bg-orange w-1/2 h-1 xl:h-2"></div>

        <p className="text-lg text-white md:text-3xl lg:text-4xl xl:text-5xl mb-6">
          Especializados en pipetas de pistón
        </p>

        <Link href="/Contact">
          <Button className="bg-blue text-white" size="lg">
            Cotiza Ahora
          </Button>
        </Link>

        <div className="mt-10 text-base md:text-xl lg:text-3xl text-white">
          Calibración | Mantenimiento | Volumenedfvdfvf
        </div>
      </div>
    </section>
  );
};

export default Hero;
