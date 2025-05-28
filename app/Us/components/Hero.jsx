import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative w-full h-screen">
      <Image
        src="/assets/herous.jpg"
        alt="herous"
        layout="fill"
        objectFit="cover"
        className="brightness-50 w-full"
        priority
      />

      <div className="absolute inset-0 flex flex-col gap-5 justify-center items-center px-4 md:px-8">
        <h1 className="text-4xl text-center md:text-6xl lg:text-8xl text-white font-medium">
          SOMOS LACEB S.A. DE C.V.
        </h1>
        <Image
          src="/Favicon.png"
          alt="logo"
          width={200}
          height={200}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
