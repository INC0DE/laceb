"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { motion, useInView, useAnimation } from "framer-motion";

const Brands = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const items = [
    { src: "/assets/brands/Accumax.png", title: "Accumax" },
    { src: "/assets/brands/biohit.png", title: "Biohit" },
    { src: "/assets/brands/brand.png", title: "Brand" },
    { src: "/assets/brands/capp.png", title: "Capp" },
    { src: "/assets/brands/htl.png", title: "Htl" },
    { src: "/assets/brands/labsystems.png", title: "Labsystems" },
    { src: "/assets/brands/mettler.png", title: "Mettler" },
    { src: "/assets/brands/rainin.png", title: "Rainin" },
    { src: "/assets/brands/sartorius.png", title: "Sartorius" },
    { src: "/assets/brands/scincemed.png", title: "Scincemed" },
    { src: "/assets/brands/thermoFisher.png", title: "ThermoFisher" },
    { src: "/assets/brands/gilson.png", title: "Gilson" },
    { src: "/assets/brands/eppendorf.png", title: "Eppendorf" },
    { src: "/assets/brands/jencons.png", title: "Jencons" },
  ];

  // Organizar marcas por categorías para mejor presentación
  const categories = [
    {
      name: "Líderes Globales",
      brands: items.slice(0, 5),
    },
    {
      name: "Especialistas en Pipetas",
      brands: items.slice(5, 10),
    },
    {
      name: "Precisión Científica",
      brands: items.slice(10, 14),
    },
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

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
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
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
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          variants={titleVariants}
          initial="hidden"
          animate={controls}
          className="text-center lg:text-left mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Confianza Internacional
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="text-brand-blue">Marcas</span>
            <span className="text-neutral-900"> que confían en nosotros</span>
          </h2>

          <div className="max-w-3xl mx-auto lg:mx-0">
            <div className="w-24 h-1.5 bg-brand-orange rounded-full mb-6" />
            <p className="text-lg lg:text-xl text-neutral-600">
              Calibramos pipetas de las marcas más prestigiosas del mercado,
              garantizando precisión y confiabilidad en cada medición.
            </p>
          </div>
        </motion.div>

        {/* Grid de marcas por categorías */}
        <div className="space-y-16">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + categoryIndex * 0.2 }}
            >
              <h3 className="text-xl font-semibold text-neutral-700 mb-8 flex items-center gap-3">
                <span
                  className={`w-8 h-8 rounded-lg bg-gradient-to-br ${
                    categoryIndex === 0
                      ? "from-primary-500 to-primary-600"
                      : categoryIndex === 1
                      ? "from-accent-500 to-accent-600"
                      : "from-success-500 to-success-600"
                  } flex items-center justify-center text-white text-sm`}
                >
                  {categoryIndex + 1}
                </span>
                {category.name}
              </h3>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={controls}
                className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6"
              >
                {category.brands.map((brand, index) => (
                  <motion.div
                    key={brand.title}
                    variants={itemVariants}
                    whileHover={{
                      y: -8,
                      scale: 1.02,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      },
                    }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-accent-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

                    <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-neutral-200">
                      <div className="aspect-square flex items-center justify-center">
                        <Image
                          src={brand.src}
                          alt={`Logo de ${brand.title}`}
                          width={150}
                          height={150}
                          className="w-auto h-20 object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>

                      {/* Tooltip con nombre */}
                      <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-neutral-800 text-white text-xs py-1 px-3 rounded-full whitespace-nowrap">
                          {brand.title}
                        </div>
                      </div>

                      {/* Indicador de hover */}
                      <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/30 rounded-2xl transition-all duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Carrusel infinito mejorado */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-20"
        >
          <div className="relative">
            {/* Gradientes laterales para efecto fade */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

            <div className="overflow-hidden">
              <motion.div
                animate={{ x: [0, -1920] }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 30,
                    ease: "linear",
                  },
                }}
                className="flex gap-8"
              >
                {[...items, ...items, ...items].map((item, index) => (
                  <div
                    key={`scroll-${index}`}
                    className="flex-shrink-0 w-32 h-20 bg-white rounded-xl shadow-md p-4 flex items-center justify-center hover:shadow-xl transition-all duration-300 border border-neutral-200"
                  >
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={80}
                      height={40}
                      className="w-auto h-10 object-contain opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Estadísticas de confianza */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6 p-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl shadow-2xl"
        >
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">14+</div>
            <div className="text-sm opacity-90">Marcas certificadas</div>
          </div>
          <div className="text-center text-white border-l border-r border-white/20">
            <div className="text-4xl font-bold mb-2">1000+</div>
            <div className="text-sm opacity-90">Pipetas calibradas</div>
          </div>
          <div className="text-center text-white">
            <div className="text-4xl font-bold mb-2">98%</div>
            <div className="text-sm opacity-90">Precisión garantizada</div>
          </div>
          <div className="text-center text-white border-l border-white/20">
            <div className="text-4xl font-bold mb-2">24/7</div>
            <div className="text-sm opacity-90">Soporte técnico</div>
          </div>
        </motion.div>

        {/* CTA para más información */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <button className="group relative inline-flex items-center gap-2 px-8 py-4 bg-white text-brand-blue font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-neutral-200">
            <span className="relative z-10">Ver todas las marcas</span>
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
            <div className="absolute inset-0 bg-gradient-to-r from-primary-50 to-accent-50 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
