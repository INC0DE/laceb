"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const Introduction = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const cards = [
    {
      id: 1,
      icon: "/assets/acreditacion.png",
      title: "ACREDITACIÓN ISO 17025:2017",
      text: "Cumplimos con altos estándares de calidad para proporcionarle un servicio seguro y confiable. Acreditado como Laboratorio de Calibración bajo la norma NMX-EC-17025-IMNC-2018 ISO/IEC 17025:2017.",
      gradientFrom: "from-primary-500",
      gradientTo: "to-primary-600",
      lightBg: "bg-primary-50",
      borderColor: "border-primary-200",
      iconColor: "text-primary-600",
    },
    {
      id: 2,
      icon: "/assets/calificado.png",
      title: "PERSONAL ALTAMENTE CALIFICADO",
      text: "Contamos con un excelente equipo humano profesional, capacitado y comprometido con la labor que cada uno desempeña, complementado con equipos de alta calidad metrológica.",
      gradientFrom: "from-accent-500",
      gradientTo: "to-accent-600",
      lightBg: "bg-accent-50",
      borderColor: "border-accent-200",
      iconColor: "text-accent-600",
    },
  ];

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
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado principal */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center lg:text-left mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Nuestros Servicios
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="text-neutral-900">Mantenimiento y</span>
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              calibración
            </span>
            <span className="text-neutral-900"> de pipetas de pistón</span>
          </h2>

          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-6" />

            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed">
              Realizamos nuestras calibraciones por el método gravimétrico de
              conformidad con las Normas{" "}
              <span className="font-semibold text-primary-600">
                NMX-EC-17025-IMNC-2018 ISO/IEC 17025:2017
              </span>
              , requisitos generales para la competencia de los laboratorios de
              ensayo y calibración e{" "}
              <span className="font-semibold text-accent-600">ISO 8655-6</span>{" "}
              Gravimetric methods for the determination of measurement.
            </p>
          </div>
        </motion.div>

        {/* Cards con animaciones */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative"
            >
              {/* Efecto de fondo en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl`}
              />

              {/* Card principal */}
              <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200">
                {/* Barra superior con gradiente */}
                <div
                  className={`h-2 w-full bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo}`}
                />

                <div className="p-8 lg:p-10">
                  {/* Icono con efecto de glow */}
                  <div className="relative mb-8">
                    <div
                      className={`absolute inset-0 ${card.lightBg} rounded-2xl blur-2xl`}
                    />
                    <div
                      className={`relative w-24 h-24 ${card.lightBg} rounded-2xl p-5 flex items-center justify-center border ${card.borderColor} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Image
                        src={card.icon}
                        alt={card.title}
                        width={80}
                        height={80}
                        className="w-auto h-16 object-contain"
                      />
                    </div>
                  </div>

                  {/* Título */}
                  <h3
                    className={`text-2xl lg:text-3xl font-bold ${card.iconColor} mb-6`}
                  >
                    {card.title}
                  </h3>

                  {/* Contenido con línea decorativa */}
                  <div className="flex gap-4">
                    <div
                      className={`w-1.5 bg-gradient-to-b ${card.gradientFrom} ${card.gradientTo} rounded-full flex-shrink-0`}
                    />
                    <p className="text-neutral-600 text-base lg:text-lg leading-relaxed">
                      {card.text}
                    </p>
                  </div>

                  {/* Badge de calidad */}
                  <div className="mt-6 flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${card.iconColor.replace(
                        "text",
                        "bg"
                      )} animate-pulse`}
                    />
                    <span className="text-xs text-neutral-500">
                      Certificado oficial
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl border border-neutral-200"
        >
          {[
            { label: "Acreditación", value: "ISO 17025", icon: "✅" },
            { label: "Método", value: "Gravimétrico", icon: "⚖️" },
            { label: "Normas", value: "ISO 8655-6", icon: "📋" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-md">
                {item.icon}
              </div>
              <div>
                <div className="text-sm text-neutral-500">{item.label}</div>
                <div className="text-lg font-semibold text-neutral-800">
                  {item.value}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
            <span className="relative z-10">Solicitar información</span>
            <svg
              className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
