"use client";
import React from "react";
import { Card } from "@heroui/card";
import { motion } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "Limpieza",
    img: "/assets/limpieza.jpg",
    description:
      "Apertura, limpieza y engrase de pistones, conos de punta y cualquier sello asociado. ",
  },
  {
    id: 2,
    title: "Desinfección",
    img: "/assets/desinfeccion.jpg",
    description:
      "Desinfectamos con una solución  electrolizada de superoxidación que tiene una acción germicida de amplio espectro contra virus, hongos y bacterias, incluso contra esporas.",
  },
  {
    id: 3,
    title: "Comprobación",
    img: "/assets/comprobacion.jpg",
    description:
      "Comprobación de la exactitud y precisión de la pipeta con diez mediciones por volumen en tres puntos de la escala (generalmente seleccionando el mínimo o 10%, 50% y 100% del volumen nominal de la pipeta). ",
  },
];

const Intro = () => {
  return (
    <section className="flex flex-col gap-20 py-10">
      <div className="flex flex-col gap-10">
        <h1 className="text-4xl lg:text-6xl font-medium text-center">
          El  {""}
          <span className="text-blue font-bold text-5xl lg:text-8xl">
            MANTENIMIENTO {""}
          </span>
          QUE REALIZAMOS CONSISTE EN:
        </h1>

        <div className="w-2/3 bg-bg p-16 rounded-r-full">
          <p className="md:text-2xl">
            Todos los fabricantes de pipetas recomiendan programas de
            mantenimiento preventivo para mantener resultados fiables
            y maximizar la vida útil de la pipeta.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row justify-around xl:gap-0">
        {cards.map((items) => (
          <motion.div
            key={items.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="group/card relative m-3 lg:m-0 lg:w-72 lg:h-64 2xl:w-80 flex flex-col justify-center p-10 bg-cover bg-center text-white rounded-2xl overflow-hidden"
            style={{ backgroundImage: `url(${items.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover/card:bg-opacity-60 transition duration-300 rounded-2xl" />

            <div className="relative z-10 flex flex-col gap-4">
              <h1 className="text-4xl font-medium text-blue group-hover/card:text-white transition-colors duration-300">
                {items.title}
              </h1>

              <p className="text-sm opacity-0 translate-y-2 group-hover/card:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                {items.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Intro;
