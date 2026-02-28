"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState([]);

  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const dividerRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonRef = useRef(null);
  const servicesRef = useRef(null);
  const imageRef = useRef(null);
  const floatingElementsRef = useRef(null);
  const statsRef = useRef(null);

  // Generar partículas solo en cliente
  useEffect(() => {
    setMounted(true);
    const newParticles = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: Math.random() * 2,
      duration: 4 + Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (
      !heroRef.current ||
      !titleRef.current ||
      !subtitleRef.current ||
      !dividerRef.current ||
      !descriptionRef.current ||
      !buttonRef.current ||
      !servicesRef.current ||
      !imageRef.current
    ) {
      return;
    }

    const ctx = gsap.context(() => {
      // Timeline de entrada - SOLO UNA VEZ al cargar
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
      });

      tl.fromTo(
        imageRef.current,
        { scale: 1.4, filter: "blur(12px) brightness(0.6)" },
        { scale: 1, filter: "blur(0px) brightness(1)", duration: 1.5 }
      )
        .fromTo(
          titleRef.current,
          { y: 100, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=1.2"
        )
        .fromTo(
          subtitleRef.current,
          { y: 80, opacity: 0 },
          { y: 0, opacity: 1, duration: 1 },
          "-=0.9"
        )
        .fromTo(
          dividerRef.current,
          { width: 0, opacity: 0 },
          { width: "6rem", opacity: 1, duration: 0.8 },
          "-=0.7"
        )
        .fromTo(
          descriptionRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.6"
        )
        .fromTo(
          buttonRef.current,
          { y: 30, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6 },
          "-=0.5"
        )
        .fromTo(
          servicesRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          statsRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6 },
          "-=0.3"
        );

      // Efecto parallax SOLO en la imagen de fondo (no en los textos)
      gsap.to(imageRef.current, {
        y: "20%",
        scale: 1.1,
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Animación de partículas
      if (floatingElementsRef.current && particles.length > 0) {
        const particles_elements = floatingElementsRef.current.children;
        gsap.to(particles_elements, {
          y: "random(-20, 20)",
          x: "random(-20, 20)",
          duration: "random(3, 6)",
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          stagger: 0.1,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [mounted, particles]);

  if (!mounted) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 bg-neutral-900" />
      </section>
    );
  }

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-900"
    >
      {/* Partículas decorativas */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 z-5 pointer-events-none"
        aria-hidden="true"
      >
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute w-1 h-1 bg-primary-400/20 rounded-full"
            style={{
              left: particle.left,
              top: particle.top,
            }}
          />
        ))}
      </div>

      {/* Imagen de fondo */}
      <div ref={imageRef} className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Laboratorio LACEB"
          fill
          priority
          quality={100}
          className="object-cover"
          sizes="100vw"
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-900/30 via-transparent to-primary-900/30" />
      </div>

      {/* Badge de acreditación */}
      <div
        className={`absolute top-8 right-8 z-20 hidden lg:block transition-all duration-1000 ${
          isLoaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
        }`}
      >
        <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
          <span className="text-white/90 text-sm font-medium flex items-center gap-2">
            <span className="w-2 h-2 bg-success-500 rounded-full animate-pulse" />
            Acreditado ISO 17025
          </span>
        </div>
      </div>

      {/* Contenido principal - SIEMPRE VISIBLE */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto text-center">
          {/* Título principal - NUNCA desaparece */}
          <h1 className="space-y-4">
            <span
              ref={titleRef}
              className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white via-white to-primary-200 bg-clip-text text-white drop-shadow-2xl"
            >
              LACEB S.A. DE C.V.
            </span>
            <span
              ref={subtitleRef}
              className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-accent-400 drop-shadow-xl"
            >
              LABORATORIO DE CALIBRACIÓN
            </span>
          </h1>

          {/* Línea divisoria */}
          <div className="flex justify-center mt-8 mb-10">
            <div
              ref={dividerRef}
              className="h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full shadow-lg"
              style={{ width: 0 }}
            />
          </div>

          {/* Descripción */}
          <p
            ref={descriptionRef}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white/90 font-light mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Especializados en calibración de{" "}
            <span className="text-accent-400 font-medium">
              pipetas de pistón
            </span>
          </p>

          {/* Botón CTA */}
          <div ref={buttonRef} className="inline-block">
            <Link href="/Contact">
              <Button
                size="lg"
                className="bg-primary-DEFAULT hover:bg-primary-600 text-white font-semibold px-10 py-7 text-lg rounded-xl shadow-2xl transition-all duration-300 group"
              >
                <span className="flex items-center gap-2">
                  Cantactanos Ahora
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </Button>
            </Link>
          </div>

          {/* Servicios */}
          <div
            ref={servicesRef}
            className="mt-16 flex flex-wrap justify-center gap-4"
          >
            {[
              { label: "Calibración", icon: "📊" },
              { label: "Mantenimiento", icon: "🔧" },
              { label: "Volumen", icon: "🧪" },
            ].map((service) => (
              <div
                key={service.label}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
              >
                <span className="text-white/90 font-medium flex items-center gap-2">
                  {service.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex flex-col items-center gap-3">
          <span className="text-white/40 text-xs tracking-widest uppercase animate-pulse">
            Scroll
          </span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-gradient-to-b from-accent-400 to-primary-400 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
