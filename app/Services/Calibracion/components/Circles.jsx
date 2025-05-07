import React from "react";

const cards = [
  {
    title: "Micropipetas de pistón",
    description:
      "Cálculo de resultados y comparación con los límites de aprobación/rechazo.",
    background: "/assets/micro.jpg",
  },
  {
    title: "Monocanal y multicanal",
    description:
      "Cálculo de resultados y comparación con los límites de aprobación/rechazo.",
    background: "/assets/mono.jpeg",
  },
  {
    title: "Volumen fijo y variable",
    description:
      "Cálculo de resultados y comparación con los límites de aprobación/rechazo.",
    background: "/assets/volumen.jpg",
  },
  {
    title: "Automáticas y semiautomátricas",
    description:
      "Cálculo de resultados y comparación con los límites de aprobación/rechazo.",
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
            {/* Imagen de fondo visible solo en hover */}
            <img
              src={card.background}
              alt="Background"
              className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-70 transition-opacity duration-300"
            />

            {/* Contenido */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-4">
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
              <p className="text-sm text-gray-600 mt-2">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Circles;
