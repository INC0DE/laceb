import React from "react";
import Image from "next/image";
import { Button, ButtonGroup } from "@heroui/button";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/assets/heromante.jpg"
        alt="herolaceb"
        layout="fill"
        objectFit="cover"
        className="brightness-50 w-full"
        priority
      />

      <div className="absolute inset-0 flex flex-col gap-5 justify-center px-1 md:px-8">
        <h1 className="text-5xl md:text-6xl lg:text-8xl text-white font-medium">MANTENIMIENTO</h1>
        <div className="w-72 h-2 bg-orange"></div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-white">
          Preventivo . Pipeteo
        </h1>
      </div>
    </section>
  );
};

export default Hero;
