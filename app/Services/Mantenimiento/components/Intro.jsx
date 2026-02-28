"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@heroui/card";
import { motion, useInView, useAnimation } from "framer-motion";
import { Droplet, SprayCan, CheckCircle, ChevronRight } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Limpieza",
    img: "/assets/limpieza.jpg",
    description:
      "Apertura, limpieza y engrase de pistones, conos de punta y cualquier sello asociado.",
    icon: <Droplet className="text-primary-500" size={32} />,
    color: "primary",
    gradient: "from-primary-500 to-primary-600",
    bgLight: "bg-primary-50",
    borderColor: "border-primary-200",
    textColor: "text-primary-600",
  },
  {
    id: 2,
    title: "Desinfección",
    img: "/assets/desinfeccion.jpg",
    description:
      "Desinfectamos con una solución electrolizada de superoxidación que tiene una acción germicida de amplio espectro contra virus, hongos y bacterias, incluso contra esporas.",
    icon: <SprayCan className="text-accent-500" size={32} />,
    color: "accent",
    gradient: "from-accent-500 to-accent-600",
    bgLight: "bg-accent-50",
    borderColor: "border-accent-200",
    textColor: "text-accent-600",
  },
  {
    id: 3,
    title: "Comprobación",
    img: "/assets/comprobacion.jpg",
    description:
      "Comprobación de la exactitud y precisión de la pipeta con diez mediciones por volumen en tres puntos de la escala (generalmente seleccionando el mínimo o 10%, 50% y 100% del volumen nominal de la pipeta).",
    icon: <CheckCircle className="text-success-500" size={32} />,
    color: "success",
    gradient: "from-success-500 to-success-600",
    bgLight: "bg-success-50",
    borderColor: "border-success-200",
    textColor: "text-success-600",
  },
];

const Intro = () => {
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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const titleVariants = {
    hidden: { y: -30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
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
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Nuestro Proceso
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-800 mb-8 max-w-5xl">
            El{" "}
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent">
              MANTENIMIENTO
            </span>{" "}
            QUE REALIZAMOS CONSISTE EN:
          </h2>

          <div className="relative">
            <div className="absolute -left-4 top-0 bottom-0 w-2 bg-gradient-to-b from-primary-500 via-accent-500 to-success-500 rounded-full" />
            <div className="pl-8 max-w-4xl">
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed">
                Todos los fabricantes de pipetas recomiendan programas de
                mantenimiento preventivo para mantener resultados fiables y
                maximizar la vida útil de la pipeta.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid de servicios */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative h-[450px] perspective-1000"
            >
              {/* Efecto de fondo en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />

              {/* Card principal */}
              <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200">
                {/* Imagen de fondo con overlay */}
                <div className="absolute inset-0">
                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t from-${card.color}-900/90 via-${card.color}-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />
                </div>

                {/* Contenido - visible siempre */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  {/* Icono circular */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-2xl ${card.bgLight} flex items-center justify-center mb-4 border ${card.borderColor} group-hover:bg-gradient-to-br ${card.gradient} group-hover:border-white/30 transition-all duration-500 shadow-lg`}
                  >
                    <div className="group-hover:text-white transition-colors duration-500">
                      {card.icon}
                    </div>
                  </motion.div>

                  {/* Título */}
                  <h3
                    className={`text-3xl font-bold mb-3 ${card.textColor} group-hover:text-white transition-colors duration-500`}
                  >
                    {card.title}
                  </h3>

                  {/* Descripción - visible en hover */}
                  <p className="text-neutral-600 text-sm leading-relaxed group-hover:text-white/90 transition-all duration-500 line-clamp-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0">
                    {card.description}
                  </p>

                  {/* Indicador de hover */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Borde decorativo */}
                <div
                  className={`absolute inset-0 border-2 border-transparent group-hover:border-${card.color}-500/30 rounded-3xl transition-all duration-500`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Estadísticas de servicio */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 rounded-3xl shadow-2xl"
        >
          {[
            { number: "1000+", label: "Pipetas mantenidas" },
            { number: "15+", label: "Años de experiencia" },
            { number: "100%", label: "Calidad garantizada" },
            { number: "24/7", label: "Soporte técnico" },
          ].map((stat, index) => (
            <div key={index} className="text-center text-white">
              <div className="text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm opacity-90">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Beneficios adicionales */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Mayor vida útil",
              description: "Prolonga la vida de tus pipetas hasta un 50%",
              color: "primary",
            },
            {
              title: "Precisión garantizada",
              description: "Resultados confiables en cada medición",
              color: "accent",
            },
            {
              title: "Ahorro económico",
              description: "Reduce costos de reemplazo innecesarios",
              color: "success",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className={`bg-${benefit.color}-50 p-6 rounded-2xl border border-${benefit.color}-200`}
            >
              <h4
                className={`text-lg font-bold text-${benefit.color}-600 mb-2`}
              >
                {benefit.title}
              </h4>
              <p className="text-neutral-600 text-sm">{benefit.description}</p>
            </div>
          ))}
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

export default Intro;
