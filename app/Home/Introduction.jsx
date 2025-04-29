import React from "react";
import Image from "next/image";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

const cards = [
  {
    id: 1,
    icon: "/assets/acreditacion.png",
    title: "ACREDITACIÓN ISO 17025:2017",
    text: "Cumplimos con altos estándares de calidad para proporcionarle un servicio seguro y confiable. Acreditado como Laboratorio de Calibración bajo la norma NMX-EC-17025-IMNC-2018 ISO/IEC 17025:2017. ",
  },
  {
    id: 2,
    icon: "/assets/pipeta.png",
    title: "PERSONAL ALTAMENTE CALIFICADO",
    text: "Contamos con un excelente equipo humano profesional, capacitado y comprometido con la labor que cada uno desempeña, complementado con equipos de alta calidad metrológica. ",
  },
];

const Introduction = () => {
  return (
    <section className="bg-blue flex flex-col gap-20 px-3 lg:px-10 py-16">
      <div className="flex flex-col text-white">
        <h1 className="text-5xl lg:text-7xl 2xl:text-9xl">Mantenimiento y</h1>
        <h1 className="text-5xl lg:text-7xl 2xl:text-8xl font-semibold">
          <span className="text-green">CALIBRACIÓN</span> DE PIPETAS DE PISTÓN
        </h1>
        <p className="lg:w-1/2 self-center text-center text-xl mt-10">
          Realizamos nuestras calibraciones por el método gravimétrico de
          conformidad con las Normas NMX-EC-17025-IMNC-2018 ISO/IEC 17025:2017.
          Requisitos generales para la competencia de los laboratorios de ensayo
          y calibración e ISO 8655-6 Gravimetric methods for the determination
          of measurement.
        </p>
      </div>

      <div className="flex flex-col gap-3 lg:flex-row lg:justify-around">
        {cards.map((items) => (
          <Card
            key={items.id}
            className="lg:w-80 lg:h-72 2xl:w-96 flex flex-col gap-5 justify-center p-10"
          >
            <Image
              src={items.icon}
              alt={items.title}
              width={100}
              height={100}
              priority
            />
            <h1 className="text-4xl font-bold">{items.title}</h1>
            <div className="flex flex-row gap-3">
              <div className="w-2 h-24 bg-orange"></div>
              <p className="text-gray text-sm self-center">{items.text}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Introduction;
