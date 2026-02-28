"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const Industries = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const industries = [
    {
      id: 1,
      name: "Alimentaria",
      icon: "/assets/industries/alimentaria.png",
      gradientFrom: "from-primary-400",
      gradientTo: "to-primary-600",
      bgLight: "bg-primary-50",
      borderColor: "border-primary-200",
      textColor: "text-primary-600",
      description: "Calibración para procesos alimentarios",
      stats: "45+ empresas",
    },
    {
      id: 2,
      name: "Farmacéutica",
      icon: "/assets/industries/farmaceutica.png",
      gradientFrom: "from-accent-400",
      gradientTo: "to-accent-600",
      bgLight: "bg-accent-50",
      borderColor: "border-accent-200",
      textColor: "text-accent-600",
      description: "Cumplimiento con normas GMP",
      stats: "30+ laboratorios",
    },
    {
      id: 3,
      name: "Química",
      icon: "/assets/industries/quimica.png",
      gradientFrom: "from-success-400",
      gradientTo: "to-success-600",
      bgLight: "bg-success-50",
      borderColor: "border-success-200",
      textColor: "text-success-600",
      description: "Precisión en análisis químicos",
      stats: "25+ plantas",
    },
    {
      id: 4,
      name: "Cosmética",
      icon: "/assets/industries/cosmetica.png",
      gradientFrom: "from-primary-400",
      gradientTo: "to-primary-600",
      bgLight: "bg-primary-50",
      borderColor: "border-primary-200",
      textColor: "text-primary-600",
      description: "Control de calidad cosmética",
      stats: "20+ marcas",
    },
    {
      id: 5,
      name: "Veterinaria",
      icon: "/assets/industries/veterinaria.png",
      gradientFrom: "from-accent-400",
      gradientTo: "to-accent-600",
      bgLight: "bg-accent-50",
      borderColor: "border-accent-200",
      textColor: "text-accent-600",
      description: "Calibración para laboratorios veterinarios",
      stats: "15+ clínicas",
    },
    {
      id: 6,
      name: "Clínica",
      icon: "/assets/industries/clinico.png",
      gradientFrom: "from-success-400",
      gradientTo: "to-success-600",
      bgLight: "bg-success-50",
      borderColor: "border-success-200",
      textColor: "text-success-600",
      description: "Equipos de diagnóstico clínico",
      stats: "50+ centros",
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
        staggerChildren: 0.1,
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
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
      {/* Elementos decorativos de fondo con tus colores */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado con tus colores */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center lg:text-left mb-16 lg:mb-20"
        >
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-brand-blue">
              Industrias
            </h2>
            <div className="h-1.5 w-32 lg:w-48 bg-brand-orange rounded-full mt-2 mx-auto lg:mx-0" />
          </div>

          <p className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mt-6 max-w-3xl mx-auto lg:mx-0">
            Trabajamos para la industria que necesitas con soluciones de
            calibración especializadas
          </p>
        </motion.div>

        {/* Grid de industrias - Diseño tipo cards con tus colores */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.id}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-neutral-200"
            >
              {/* Barra de color superior con gradiente */}
              <div
                className={`h-2 w-full bg-gradient-to-r ${industry.gradientFrom} ${industry.gradientTo}`}
              />

              <div className="p-6 lg:p-8">
                {/* Icono con efecto de glow usando tus colores */}
                <div className="relative mb-6">
                  <div
                    className={`absolute inset-0 ${industry.bgLight} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}
                  />
                  <div
                    className={`relative w-24 h-24 mx-auto bg-neutral-800 rounded-2xl p-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border ${industry.borderColor}`}
                  >
                    <Image
                      src={industry.icon}
                      alt={industry.name}
                      width={80}
                      height={80}
                      className="w-auto h-16 object-contain"
                    />
                  </div>
                </div>

                {/* Contenido */}
                <h3
                  className={`text-xl lg:text-2xl font-bold ${industry.textColor} text-center mb-2`}
                >
                  {industry.name}
                </h3>

                <p className="text-sm text-neutral-600 text-center mb-4">
                  {industry.description}
                </p>

                {/* Estadística con tus colores */}
                <div className="flex items-center justify-center gap-2 text-sm">
                  <span
                    className={`w-2 h-2 rounded-full ${industry.textColor.replace(
                      "text",
                      "bg"
                    )} animate-pulse`}
                  />
                  <span className="text-neutral-500">{industry.stats}</span>
                </div>

                {/* Efecto de borde en hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-all duration-300" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Sección de estadísticas adicionales con gradiente usando tus colores */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-gradient-to-r from-brand-blue to-brand-green rounded-3xl shadow-2xl"
        >
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">15+</div>
            <div className="text-sm opacity-90">Años de experiencia</div>
          </div>
          <div className="text-center text-white border-l border-r border-white/20">
            <div className="text-4xl font-bold mb-2">500+</div>
            <div className="text-sm opacity-90">Clientes satisfechos</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-90">Certificados emitidos</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Industries;
