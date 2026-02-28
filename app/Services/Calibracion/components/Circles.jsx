"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";
import { Pipette, Layers, Settings, Zap, ChevronRight } from "lucide-react";

const cards = [
  {
    title: "Micropipetas de pistón",
    description:
      "Las micropipetas de pistón se utilizan generalmente para transferir volúmenes de líquido en el rango de microlitros",
    background: "/assets/micro.jpg",
    icon: <Pipette className="text-primary-500" size={32} />,
    color: "primary",
    gradient: "from-primary-500 to-primary-600",
    bgLight: "bg-primary-50",
    borderColor: "border-primary-200",
    textColor: "text-primary-600",
  },
  {
    title: "Monocanal y multicanal",
    description:
      "Las micropipetas monocanal utilizan un solo canal para realizar la transferencia, mientras que la multicanal puede aspirar y dispensar simultáneamente varias muestras a través de múltiples canales (8 o 12 canales)",
    background: "/assets/mono.jpeg",
    icon: <Layers className="text-accent-500" size={32} />,
    color: "accent",
    gradient: "from-accent-500 to-accent-600",
    bgLight: "bg-accent-50",
    borderColor: "border-accent-200",
    textColor: "text-accent-600",
  },
  {
    title: "Volumen fijo y variable",
    description:
      "Las pipetas de volumen fijo aspiran y dispensan un volumen predefinido, mientras que las de volumen variable permiten ajustar el volumen a transferir",
    background: "/assets/micro.jpg",
    icon: <Settings className="text-success-500" size={32} />,
    color: "success",
    gradient: "from-success-500 to-success-600",
    bgLight: "bg-success-50",
    borderColor: "border-success-200",
    textColor: "text-success-600",
  },
  {
    title: "Automáticas y semiautomáticas",
    description:
      "Micropipetas que funcionan mediante un sistema de aspiración y dispensado controlado electrónica o manualmente",
    background: "/assets/auto.jpg",
    icon: <Zap className="text-primary-500" size={32} />,
    color: "primary",
    gradient: "from-primary-500 to-primary-600",
    bgLight: "bg-primary-50",
    borderColor: "border-primary-200",
    textColor: "text-primary-600",
  },
];

const Circles = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.8, opacity: 0, y: 30 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-neutral-50"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-800 mb-4">
            Tipos de{" "}
            <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
              Pipetas
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 rounded-full mx-auto" />
          <p className="text-lg text-neutral-600 mt-6 max-w-2xl mx-auto">
            Conoce los diferentes tipos de micropipetas que calibramos con
            precisión y confiabilidad
          </p>
        </motion.div>

        {/* Grid de cards circulares */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 xl:gap-8"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                transition: { type: "spring", stiffness: 300, damping: 15 },
              }}
              className="group relative perspective-1000"
            >
              {/* Efecto de glow en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />

              {/* Card circular */}
              <div className="relative w-full aspect-square rounded-full bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border-4 border-white">
                {/* Imagen de fondo con overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={card.background}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-${card.color}-900/90 via-${card.color}-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>

                {/* Contenido - siempre visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                  {/* Icono circular */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${card.bgLight} flex items-center justify-center mb-4 border ${card.borderColor} group-hover:bg-gradient-to-br ${card.gradient} group-hover:border-white/30 transition-all duration-500 shadow-lg`}
                  >
                    <div className="group-hover:text-white transition-colors duration-500">
                      {card.icon}
                    </div>
                  </div>

                  {/* Título */}
                  <h3
                    className={`text-xl font-bold mb-2 ${card.textColor} group-hover:text-white transition-colors duration-500`}
                  >
                    {card.title}
                  </h3>

                  {/* Descripción - visible solo en hover en móvil, siempre en desktop */}
                  <p className="text-sm text-neutral-600 group-hover:text-white/90 transition-all duration-500 line-clamp-3 lg:opacity-100 opacity-0 group-hover:opacity-100">
                    {card.description}
                  </p>

                  {/* Indicador de hover */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ChevronRight className="w-5 h-5 text-white rotate-90" />
                  </div>
                </div>

                {/* Borde decorativo */}
                <div
                  className={`absolute inset-0 rounded-full border-2 border-transparent group-hover:border-${card.color}-500/30 transition-all duration-500`}
                />
              </div>

              {/* Número indicador */}
              <div
                className={`absolute -top-2 -right-2 w-8 h-8 rounded-full bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white font-bold text-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              >
                {index + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Línea de tiempo decorativa */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <div className="flex items-center gap-4">
            {cards.map((card, index) => (
              <div key={index} className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full bg-gradient-to-br ${card.gradient}`}
                />
                {index < cards.length - 1 && (
                  <div className="w-12 h-0.5 bg-gradient-to-r from-neutral-300 to-neutral-300" />
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <button className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300">
            <span>Solicitar información</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>
      </div>

      {/* Estilos para line-clamp */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Circles;
