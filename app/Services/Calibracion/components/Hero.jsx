"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Beaker, Droplet, Microscope, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar plugin de ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  // Refs para los elementos a animar
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);
  const titleRef = useRef(null);
  const lineRef = useRef(null);
  const subtitleRef = useRef(null);
  const featuresRef = useRef(null);
  const buttonRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const floatingIconsRef = useRef([]);

  const floatingIcons = [
    { Icon: Beaker, delay: 0, x: "10%", y: "20%", color: "text-primary-400" },
    { Icon: Droplet, delay: 1, x: "80%", y: "30%", color: "text-accent-400" },
    {
      Icon: Microscope,
      delay: 2,
      x: "85%",
      y: "70%",
      color: "text-success-400",
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    // Timeline principal de entrada
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    // Animación de la imagen de fondo
    tl.fromTo(
      imageRef.current,
      { scale: 1.4, filter: "blur(10px)" },
      { scale: 1, filter: "blur(0px)", duration: 1.5 }
    )
      // Badge superior
      .fromTo(
        badgeRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=1.2"
      )
      // Título principal
      .fromTo(
        titleRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1 },
        "-=0.8"
      )
      // Línea decorativa
      .fromTo(
        lineRef.current,
        { width: 0, opacity: 0 },
        { width: "18rem", opacity: 1, duration: 0.8 },
        "-=0.6"
      )
      // Subtítulo
      .fromTo(
        subtitleRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8 },
        "-=0.5"
      )
      // Características
      .fromTo(
        featuresRef.current?.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1 },
        "-=0.4"
      )
      // Botón CTA
      .fromTo(
        buttonRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.3"
      )
      // Scroll indicator
      .fromTo(
        scrollIndicatorRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.2"
      );

    // Animación de iconos flotantes
    floatingIconsRef.current.forEach((icon, index) => {
      if (icon) {
        gsap.to(icon, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          rotation: "random(-15, 15)",
          duration: "random(4, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.5,
        });
      }
    });

    // Efecto parallax en scroll - SOLO EN LA IMAGEN
    gsap.to(imageRef.current, {
      y: "20%",
      scale: 1.1,
      ease: "none",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    // ❌ ELIMINADO: Efecto de fade en el contenido al hacer scroll
    // El contenido permanece visible siempre

    // Hover effect en el botón
    const button = buttonRef.current;
    if (button) {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, {
          scale: 1.05,
          boxShadow:
            "0 20px 25px -5px rgba(249, 115, 22, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.2)",
          duration: 0.3,
          ease: "power2.out",
        });
      });

      button.addEventListener("mouseleave", () => {
        gsap.to(button, {
          scale: 1,
          boxShadow:
            "0 10px 15px -3px rgba(249, 115, 22, 0.3), 0 4px 6px -2px rgba(0, 0, 0, 0.1)",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    }

    // Cleanup
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [mounted]);

  if (!mounted) {
    return (
      <section className="relative w-full h-screen bg-gradient-to-b from-primary-900 to-primary-800" />
    );
  }

  return (
    <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div
        ref={imageRef}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <div className="relative w-full h-full">
          <Image
            src="/assets/herocalib.jpeg"
            alt="Laboratorio de calibración LACEB"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 via-primary-900/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
      </div>

      {/* Iconos flotantes */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {floatingIcons.map(({ Icon, color, x, y }, index) => (
          <div
            key={index}
            ref={(el) => (floatingIconsRef.current[index] = el)}
            className={`absolute ${color} opacity-20`}
            style={{ left: x, top: y }}
          >
            <Icon size={60} />
          </div>
        ))}
      </div>

      {/* Contenido principal - SIEMPRE VISIBLE */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-5xl">
          {/* Badge */}
          <div ref={badgeRef} className="mb-6">
            <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20">
              <span className="w-2 h-2 bg-accent-400 rounded-full animate-pulse" />
              Especialistas en calibración de precisión
            </span>
          </div>

          {/* Título */}
          <h1
            ref={titleRef}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold text-white mb-4 leading-none"
          >
            CALIBRACIÓN
          </h1>

          {/* Línea decorativa */}
          <div
            ref={lineRef}
            className="h-2 bg-gradient-to-r from-accent-500 via-accent-400 to-primary-500 rounded-full mb-8"
            style={{ width: 0 }}
          />

          {/* Subtítulo */}
          <div ref={subtitleRef} className="space-y-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white/90 font-light">
              Volumen · Micropipetas
            </h2>
            <p className="text-lg sm:text-xl text-white/60 max-w-2xl">
              Calibración de alta precisión con método gravimétrico certificado
              bajo norma ISO 17025
            </p>
          </div>

          {/* Características */}
          <div ref={featuresRef} className="mt-12 flex flex-wrap gap-4">
            {[
              { label: "ISO 17025", color: "bg-primary-500" },
              { label: "Método gravimétrico", color: "bg-accent-500" },
              { label: "Certificado oficial", color: "bg-success-500" },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} px-4 py-2 rounded-full text-white text-sm font-medium shadow-lg cursor-default`}
              >
                {item.label}
              </div>
            ))}
          </div>

          {/* Botón */}
          <div ref={buttonRef} className="mt-12">
            <Link href="/Contact">
              <button className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-accent-500 to-accent-600 text-white font-semibold px-8 py-4 rounded-xl overflow-hidden shadow-2xl">
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar calibración
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent-600 to-accent-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">
            Descubre más
          </span>
          <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-gradient-to-b from-accent-400 to-primary-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>

      {/* Badge de precisión */}
      <div className="absolute top-8 right-8 z-10 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <span className="text-white/90 text-sm flex items-center gap-2">
            <span className="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
            Precisión ±0.5%
          </span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
