import React from "react";
import Image from "next/image";
import { Card } from "@heroui/card";
import { Button, ButtonGroup } from "@heroui/button";

const cards = [
  {
    id: 1,
    title: "CICLO DE PIPETEO",
    description:
      "La técnica usada afecta directamente la calidad y repetibilidad de sus resultados.",
    img: "/assets/ciclo.jpg",
  },
  {
    id: 2,
    title: "TIPS DE PIPETEO",
    description:
      "De todos los factores que contribuyen al buen funcionamiento de una pipeta, el más crítico es la habilidad del operador",
    img: "/assets/tips.jpg",
  },
  {
    id: 3,
    title: "ERGONOMÍA",
    description:
      "De todos los factores que contribuyen al buen funcionamiento de una pipeta, el más crítico es la habilidad del operador",
    img: "/assets/ergonomia.jpeg",
  },
];

const Findings = () => {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-3 mb-5">
        <div>
          <h1 className="text-blue text-5xl md:text-6xl font-semibold">Recomendaciones</h1>
          <div className="w-64 h-2 justify-self-center bg-orange"></div>
        </div>

        <p className="text-xl md:text-3xl">Mejore sus resultados.</p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row justify-around xl:gap-0">
        {cards.map((items) => (
          <Card
            key={items.id}
            className="relative m-3 lg:m-0s lg:w-72 lg:h-64 2xl:w-96 flex flex-col gap-5 justify-center p-10 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${items.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col gap-4">
              <h1 className="text-4xl font-semibold">{items.title}</h1>
              <p className="text-sm">{items.description}</p>
              <Button color="primary" className="self-end">
                Conoce Más
              </Button>
              ;
            </div>
          </Card>
        ))}
      </div>

      <div className="pt-10 px-5 md:px-20 text-center">
        <p>
          Lograr resultados confiables al pipetear depende en gran medida de las
          habilidades del usuario.
        </p>

        <p>
          Los errores generados por las malas técnicas de pipeteo pueden afectar
          significativamente sus resultados. El pipeteo adecuado juega un papel
          importante para lograr resultados precisos y mediciones repetibles.
          Estos son algunos consejos sobre cómo pipetear correctamente.
        </p>
      </div>
    </div>
  );
};

export default Findings;
