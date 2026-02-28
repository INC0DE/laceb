"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);
  const containerRef = useRef(null);

  // SOLUCIÓN: Generar partículas UNA SOLA VEZ después del montaje en cliente
  useEffect(() => {
    setIsClient(true);

    // Generar partículas con valores fijos (solo en cliente)
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 5 + i,
      delay: i * 0.5,
    }));
    setParticles(newParticles);
  }, []);

  // useScroll solo se usa en cliente
  const { scrollYProgress } = useScroll({
    target: isClient ? containerRef : undefined,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  // Durante SSR, renderizar versión simplificada SIN partículas
  if (!isClient) {
    return (
      <section className="relative w-full h-screen bg-gradient-to-b from-neutral-900 to-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Imagen de fondo */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <Image
          src="/assets/herous.jpg"
          alt="Laboratorio LACEB"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-primary-900/30" />
      </motion.div>

      {/* Elementos decorativos flotantes - AHORA CON VALORES FIJOS */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, 15, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
            }}
          />
        ))}
      </div>

      {/* Contenido principal */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center space-y-8"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white">
            <span className="bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text text-transparent">
              SOMOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-primary-300 via-accent-400 to-primary-300 bg-clip-text text-transparent">
              LACEB S.A. DE C.V.
            </span>
          </h1>

          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full" />
          </div>

          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.6,
            }}
            className="relative inline-block"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/30 to-accent-500/30 rounded-full blur-3xl" />
            <div className="relative bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20">
              <Image
                src="/Favicon.png"
                alt="Logo LACEB"
                width={200}
                height={200}
                priority
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 object-contain"
              />
            </div>
          </motion.div>

          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/80">
            Laboratorio de Calibración Acreditado · Precisión y Confianza
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-white/50 text-xs tracking-widest uppercase">
              Scroll
            </span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center"
            >
              <div className="w-1 h-2 bg-gradient-to-b from-accent-400 to-primary-400 rounded-full mt-2" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
