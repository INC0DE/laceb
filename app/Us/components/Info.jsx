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
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-neutral-50"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Texto introductorio */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="max-w-5xl mx-auto text-center mb-20"
        >
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Quiénes Somos
            </span>
          </div>

          <p className="text-lg md:text-xl lg:text-2xl text-neutral-700 leading-relaxed">
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

          {/* Estadísticas rápidas */}
          <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
            {[
              { number: "2012", label: "Año de fundación" },
              { number: "35+", label: "Laboratorios" },
              { number: "100%", label: "Compromiso" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-bold text-primary-600">
                  {stat.number}
                </div>
                <div className="text-xs text-neutral-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards de Misión y Visión */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-32"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative h-[400px] perspective-1000"
            >
              {/* Efecto de fondo en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
              />

              {/* Card principal */}
              <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200">
                {/* Barra superior con gradiente */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${card.gradient}`}
                />

                <div className="p-8 lg:p-10">
                  {/* Icono con efecto de glow */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 ${card.bgLight} rounded-2xl blur-2xl`}
                    />
                    <div
                      className={`relative w-24 h-24 ${card.bgLight} rounded-2xl flex items-center justify-center border ${card.borderColor} group-hover:bg-gradient-to-br ${card.gradient} group-hover:border-white/30 transition-all duration-500`}
                    >
                      {card.icon}
                    </div>
                  </div>

                  {/* Título */}
                  <h3
                    className={`text-4xl font-bold mb-6 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent group-hover:text-black transition-colors duration-500`}
                  >
                    {card.title}
                  </h3>

                  {/* Contenido con línea decorativa */}
                  <div className="flex gap-4">
                    <div
                      className={`w-1.5 bg-gradient-to-b ${card.gradient} rounded-full flex-shrink-0 group-hover:bg-white transition-colors duration-500`}
                    />
                    <p className="text-neutral-600 text-lg leading-relaxed group-hover:text-black transition-colors duration-500">
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
          {/* Título de valores */}
          <motion.div variants={titleVariants} className="mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-neutral-900">En </span>
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent">
                LACEB S.A. DE C.V.
              </span>
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-800">
              somos fieles a nuestros{" "}
              <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent">
                VALORES
              </span>
            </h3>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 rounded-full mx-auto mt-6" />
          </motion.div>

          {/* Grid de valores */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
            {valores.map((valor, index) => (
              <motion.div
                key={valor.id}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${valor.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}
                />

                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200">
                  <div
                    className={`h-2 w-full bg-gradient-to-r ${valor.gradient}`}
                  />

                  <div className="p-8">
                    {/* Icono circular con gradiente */}
                    <div
                      className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${valor.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                    >
                      {valor.icon}
                    </div>

                    {/* Título del valor */}
                    <h4
                      className={`text-2xl font-bold mb-3 bg-gradient-to-r ${valor.gradient} bg-clip-text text-transparent`}
                    >
                      {valor.title}
                    </h4>

                    {/* Descripción */}
                    <p className="text-sm text-neutral-600">
                      {valor.description}
                    </p>

                    {/* Efecto de borde en hover */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-all duration-300" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Frase de cierre */}
          <motion.p
            variants={itemVariants}
            className="mt-16 text-lg text-neutral-600 max-w-3xl mx-auto italic"
          >
            "La calidad no es un acto, es un hábito que practicamos cada día"
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default Info;
