import React from "react";

const cards = [
  {
    title: "Micropipetas de pistón",
    description:
      "Las micropipetas de pistón se utilizan generalmente para transferir volúmenes de líquido en el rango de microlitros",
    background: "/assets/micro.jpg",
  },
  {
    title: "Monocanal y multicanal",
    description:
      "Las micropipetas monocanal utilizan un solo canal para realizar la transferencia, mientras que la multicanal puede aspirar y dispensar simultáneamente varias muestras a través de múltiples canales (8 o 12 canales)",
    background: "/assets/mono.jpeg",
  },
  {
    title: "Volumen fijo y variable",
    description:
      ": Las pipetas de volumen fijo aspiran y dispensan un volumen predefinido, mientras que las de volumen variable permiten ajustar el volumen a transferir",
    background: "/assets/micro.jpg",
  },
  {
    title: "Automáticas y semiautomáticas",
    description:
      "micropipetas que funcionan mediante un sistema de aspiración y dispensado controlado electrónica o manualmente",
    background: "/assets/auto.jpg",
  },
];

const Circles = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center gap-8 p-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="relative w-64 h-64 rounded-full shadow-lg overflow-hidden group bg-white transition-all duration-300"
          >
            <img
              src={card.background}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
              <h3 className="text-lg font-semibold">
                {card.title}
              </h3>
              <p className="text-sm mt-2  opacity-0 group-hover:opacity-100">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circles;
