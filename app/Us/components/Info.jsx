"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@heroui/card";
import { motion, useInView, useAnimation } from "framer-motion";
import { Star, Eye, User, Target, Heart, Shield, Award } from "lucide-react";

const Info = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cards = [
    {
      id: 1,
      icon: (
        <Target
          size={60}
          className="text-primary-500 group-hover:text-white transition-colors"
        />
      ),
      title: "Misión",
      description:
        "Proporcionar servicios de calibración de pipetas de pistón precisos, confiables y consistentes a través de un equipo de trabajo comprometido con el cumplimiento de las necesidades y expectativas de nuestros clientes.",
      gradient: "from-primary-500 to-primary-600",
      bgLight: "bg-primary-50",
      borderColor: "border-primary-200",
    },
    {
      id: 2,
      icon: (
        <Eye
          size={60}
          className="text-accent-500 group-hover:text-white transition-colors"
        />
      ),
      title: "Visión",
      description:
        "Ser un laboratorio de calibración en micro y pequeño volumen líder en México por proporcionar resultados altamente confiables, servir mejor a nuestros clientes, ser relevantes en sus servicios y generar relaciones duraderas.",
      gradient: "from-accent-500 to-accent-600",
      bgLight: "bg-accent-50",
      borderColor: "border-accent-200",
    },
  ];

  const valores = [
    {
      id: 1,
      title: "HONESTIDAD",
      icon: <Heart className="text-white" size={40} />,
      color: "primary",
      gradient: "from-primary-500 to-primary-600",
      description: "Actuamos con transparencia y ética",
    },
    {
      id: 2,
      title: "INTEGRIDAD",
      icon: <Shield className="text-white" size={40} />,
      color: "accent",
      gradient: "from-accent-500 to-accent-600",
      description: "Coherencia entre lo que decimos y hacemos",
    },
    {
      id: 3,
      title: "RESPONSABILIDAD",
      icon: <Award className="text-white" size={40} />,
      color: "success",
      gradient: "from-success-500 to-success-600",
      description: "Compromiso con nuestros clientes",
    },
  ];

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
      className="relative py-16 sm:py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-neutral-50"
    >
      {/* Elementos decorativos de fondo - responsive */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-primary-500/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-accent-500/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-success-500/5 rounded-full blur-2xl sm:blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Texto introductorio - responsive */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4 sm:mb-6">
            <span className="text-xs sm:text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full">
              Quiénes Somos
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed px-2 sm:px-4">
            Empresa mexicana especializada en la{" "}
            <span className="font-bold text-primary-600">
              calibración de pipetas de pistón
            </span>{" "}
            desde el año <span className="font-bold text-accent-600">2012</span>
            , con una cartera de clientes conformada por más de{" "}
            <span className="font-bold text-success-600">
              35 laboratorios clínicos públicos y privados
            </span>
            , laboratorios farmacéuticos, laboratorios químicos y distribuidores
            de reactivos.
          </p>

          {/* Estadísticas rápidas - responsive */}
          <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-8 sm:mt-12 max-w-2xl mx-auto">
            {[
              { number: "2012", label: "Año de fundación" },
              { number: "35+", label: "Laboratorios" },
              { number: "100%", label: "Compromiso" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-primary-600">
                  {stat.number}
                </div>
                <div className="text-[10px] sm:text-xs text-neutral-500">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards de Misión y Visión - responsive */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-24 sm:mb-28 lg:mb-32"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative h-[450px] sm:h-[400px] md:h-[380px] lg:h-[400px] xl:h-[420px] perspective-1000"
            >
              {/* Efecto de fondo en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}
              />

              {/* Card principal */}
              <div className="relative h-full bg-white rounded-2xl sm:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200">
                {/* Barra superior con gradiente */}
                <div
                  className={`h-1.5 sm:h-2 w-full bg-gradient-to-r ${card.gradient}`}
                />

                <div className="p-6 sm:p-8 lg:p-10 h-full flex flex-col">
                  {/* Icono con efecto de glow */}
                  <div className="relative mb-4 sm:mb-6 lg:mb-8">
                    <div
                      className={`absolute inset-0 ${card.bgLight} rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl`}
                    />
                    <div
                      className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 ${card.bgLight} rounded-xl sm:rounded-2xl flex items-center justify-center border ${card.borderColor} group-hover:bg-gradient-to-br ${card.gradient} group-hover:border-white/30 transition-all duration-500`}
                    >
                      <div className="scale-75 sm:scale-90 lg:scale-100">
                        {card.icon}
                      </div>
                    </div>
                  </div>

                  {/* Título - SIEMPRE VISIBLE */}
                  <h3
                    className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-5 lg:mb-6 text-neutral-900 transition-colors duration-500`}
                  >
                    {card.title}
                  </h3>

                  {/* Contenido con línea decorativa - SIEMPRE VISIBLE */}
                  <div className="flex gap-3 sm:gap-4 flex-1">
                    <div
                      className={`w-1 sm:w-1.5 bg-gradient-to-b ${card.gradient} rounded-full flex-shrink-0 transition-colors duration-500`}
                    />
                    <p className="text-sm sm:text-base lg:text-lg text-neutral-600 leading-relaxed transition-colors duration-500 line-clamp-6 sm:line-clamp-5 lg:line-clamp-none">
                      {card.description}
                    </p>
                  </div>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de Valores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="text-center"
        >
          {/* Título de valores - responsive */}
          <motion.div
            variants={titleVariants}
            className="mb-12 sm:mb-14 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 px-2">
              <span className="text-neutral-900">En </span>
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent block sm:inline text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                LACEB S.A. DE C.V.
              </span>
            </h2>
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-neutral-800 px-2">
              somos fieles a nuestros{" "}
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent block sm:inline text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                VALORES
              </span>
            </h3>
            <div className="w-16 sm:w-20 lg:w-24 h-1 sm:h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 rounded-full mx-auto mt-4 sm:mt-5 lg:mt-6" />
          </motion.div>

          {/* Grid de valores - responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 xl:gap-8 max-w-5xl mx-auto px-2">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.id}
                variants={itemVariants}
                whileHover={{
                  y: -6,
                  scale: 1.02,
                }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${valor.gradient} rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-lg sm:blur-xl`}
                />

                <div className="relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200">
                  <div
                    className={`h-1.5 sm:h-2 w-full bg-gradient-to-r ${valor.gradient}`}
                  />

                  <div className="p-5 sm:p-6 lg:p-8">
                    {/* Icono circular con gradiente */}
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-5 lg:mb-6 rounded-xl sm:rounded-2xl bg-gradient-to-br ${valor.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="scale-75 sm:scale-90 lg:scale-100">
                        {valor.icon}
                      </div>
                    </div>

                    {/* Título del valor - SIEMPRE NEGRO */}
                    <h4
                      className={`text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 text-neutral-900 transition-colors duration-300`}
                    >
                      {valor.title}
                    </h4>

                    {/* Descripción - SIEMPRE GRIS */}
                    <p className="text-xs sm:text-sm text-neutral-600 px-1 transition-colors duration-300">
                      {valor.description}
                    </p>

                    {/* Efecto de borde en hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-xl sm:rounded-2xl transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Frase de cierre - responsive */}
          <motion.p
            variants={itemVariants}
            className="mt-12 sm:mt-14 lg:mt-16 text-base sm:text-lg text-neutral-600 max-w-3xl mx-auto italic px-4"
          >
            "La calidad no es un acto, es un hábito que practicamos cada día"
          </motion.p>
        </motion.div>
      </div>

      {/* Estilos para line-clamp */}
      <style jsx>{`
        .line-clamp-6 {
          display: -webkit-box;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-5 {
          display: -webkit-box;
          -webkit-line-clamp: 5;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @media (min-width: 1024px) {
          .line-clamp-none {
            -webkit-line-clamp: unset;
          }
        }
      `}</style>
    </section>
  );
};

export default Info;
