"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Menu, X } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  const headerRef = useRef(null);
  const logoRef = useRef(null);
  const menuRef = useRef(null);
  const badgeRef = useRef(null);
  const progressBarRef = useRef(null);

  // Detectar si es móvil
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      if (progressBarRef.current) {
        const winScroll =
          document.body.scrollTop || document.documentElement.scrollTop;
        const height =
          document.documentElement.scrollHeight -
          document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBarRef.current.style.width = scrolled + "%";
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(headerRef.current, {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      })
        .from(
          logoRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 0.8,
            ease: "backOut(1.7)",
          },
          "-=0.6"
        )
        .from(
          menuRef.current?.children,
          {
            y: -20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        )
        .from(
          badgeRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.4"
        );

      ScrollTrigger.create({
        start: "top -50px",
        end: "bottom top",
        onUpdate: (self) => {
          const progress = self.progress;
          gsap.to(headerRef.current, {
            backdropFilter: `blur(${progress * 12}px)`,
            backgroundColor: `rgba(255, 255, 255, ${0.85 + progress * 0.15})`,
            boxShadow:
              progress > 0 ? "0 10px 30px -10px rgba(0, 0, 0, 0.15)" : "none",
            borderBottom:
              progress > 0 ? "1px solid rgba(229, 231, 235, 0.5)" : "none",
            duration: 0.2,
          });
        },
      });
    }, headerRef);

    return () => ctx.revert();
  }, []);

  const isActive = (route) => pathname === route;
  const isServicesActive = pathname?.startsWith("/Services");

  const menuItems = [
    { label: "Inicio", href: "/", icon: "🏠" },
    { label: "Nosotros", href: "/Us", icon: "👥" },
    { label: "Contacto", href: "/Contact", icon: "📞" },
  ];

  const serviceItems = [
    {
      label: "Calibración",
      href: "/Services/Calibracion",
      description: "Servicios de calibración con precisión ISO",
      icon: "📊",
      color: "from-blue-500 to-blue-600",
    },
    {
      label: "Mantenimiento",
      href: "/Services/Mantenimiento",
      description: "Mantenimiento preventivo y correctivo",
      icon: "🔧",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <>
      {/* Barra de progreso */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-neutral-200">
        <div
          ref={progressBarRef}
          className="h-full bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 transition-all duration-300"
          style={{ width: "0%" }}
        />
      </div>

      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "py-2 sm:py-2" : "py-3 sm:py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo principal */}
            <Link
              href="/"
              className="relative z-10 group flex-shrink-0"
              ref={logoRef}
              onMouseEnter={() => setHoveredItem("logo")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                animate={
                  hoveredItem === "logo"
                    ? { scale: 1.05 }
                    : { scale: isScrolled ? 0.9 : 1 }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative"
              >
                <Image
                  src="/LACEB.png"
                  alt="LACEB - Laboratorio de Calibración"
                  width={isMobile ? 140 : 200}
                  height={isMobile ? 70 : 100}
                  priority
                  className="w-auto h-10 sm:h-12 md:h-14 lg:h-16 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </motion.div>
            </Link>

            {/* Menú desktop */}
            <nav className="hidden md:block" ref={menuRef}>
              <ul className="flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="relative group"
                      onMouseEnter={() => setHoveredItem(item.label)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      <div
                        className={`relative px-3 lg:px-4 py-2 text-xs lg:text-sm xl:text-base font-medium rounded-xl transition-all duration-300 flex items-center gap-1 lg:gap-2 ${
                          isActive(item.href)
                            ? "text-primary-DEFAULT bg-primary-50"
                            : "text-neutral-600 hover:text-primary-DEFAULT hover:bg-primary-50/50"
                        }`}
                      >
                        <span>{item.label}</span>
                      </div>

                      {isActive(item.href) && (
                        <motion.div
                          layoutId="activeNav"
                          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                          initial={{ opacity: 0, scaleX: 0 }}
                          animate={{ opacity: 1, scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      )}
                    </Link>
                  </li>
                ))}

                {/* Dropdown Servicios desktop */}
                <li className="relative hidden lg:block">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    onMouseEnter={() => {
                      setServicesOpen(true);
                      setHoveredItem("servicios");
                    }}
                    onMouseLeave={() => {
                      setServicesOpen(false);
                      setHoveredItem(null);
                    }}
                    className="group relative"
                  >
                    <div
                      className={`flex items-center gap-1 lg:gap-2 px-3 lg:px-4 py-2 text-xs lg:text-sm xl:text-base font-medium rounded-xl transition-all duration-300 ${
                        isServicesActive
                          ? "text-primary-DEFAULT bg-primary-50"
                          : "text-neutral-600 hover:text-primary-DEFAULT hover:bg-primary-50/50"
                      }`}
                    >
                      <span>Servicios</span>
                      <motion.svg
                        animate={{ rotate: servicesOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-3 h-3 lg:w-4 lg:h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </motion.svg>
                    </div>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-3 w-64 xl:w-72 bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden"
                        onMouseEnter={() => setServicesOpen(true)}
                        onMouseLeave={() => setServicesOpen(false)}
                      >
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500" />

                        <div className="p-2">
                          {serviceItems.map((service, index) => (
                            <motion.div
                              key={service.href}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                            >
                              <Link
                                href={service.href}
                                className="block p-3 rounded-xl hover:bg-gradient-to-r hover:from-primary-50 hover:to-accent-50 transition-all duration-300 group"
                                onClick={() => setServicesOpen(false)}
                              >
                                <div className="flex items-start gap-3">
                                  <div
                                    className={`w-8 h-8 lg:w-10 lg:h-10 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-lg lg:text-xl shadow-lg`}
                                  >
                                    {service.icon}
                                  </div>
                                  <div className="flex-1">
                                    <p
                                      className={`text-sm lg:text-base font-semibold ${
                                        isActive(service.href)
                                          ? "text-primary-DEFAULT"
                                          : "text-neutral-800 group-hover:text-primary-DEFAULT"
                                      }`}
                                    >
                                      {service.label}
                                    </p>
                                    <p className="text-xs text-neutral-500 mt-1">
                                      {service.description}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </motion.div>
                          ))}
                        </div>

                        <div className="p-3 bg-neutral-50 border-t border-neutral-100">
                          <p className="text-xs text-center text-neutral-500">
                            Servicios con certificación ISO 17025
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                {/* Versión móvil del dropdown */}
                <li className="relative lg:hidden">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex items-center gap-1 px-3 py-2 text-xs font-medium rounded-xl transition-all duration-300 text-black"
                  >
                    <span>Servicios</span>
                    <motion.svg
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      className="w-3 h-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </motion.svg>
                  </button>
                </li>
              </ul>
            </nav>

            {/* Badge de acreditación */}
            <div
              ref={badgeRef}
              className="hidden sm:block perspective-1000 flex-shrink-0"
              onMouseEnter={() => setHoveredItem("badge")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <motion.div
                animate={
                  hoveredItem === "badge"
                    ? {
                        rotateY: 10,
                        scale: 1.05,
                        boxShadow:
                          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                      }
                    : {
                        rotateY: 0,
                        scale: isScrolled ? 0.85 : 1,
                        boxShadow: "none",
                      }
                }
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-lg lg:rounded-xl p-1.5 lg:p-2 ${
                  isScrolled ? "shadow-md" : ""
                }`}
              >
                <Image
                  src="/assets/emacredition.png"
                  alt="Acreditación EMAC"
                  width={isMobile ? 120 : 190}
                  height={isMobile ? 60 : 100}
                  priority
                  className="w-auto h-8 sm:h-10 lg:h-12"
                />
              </motion.div>
            </div>

            {/* Botón menú móvil - AHORA VISIBLE */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center rounded-xl bg-primary-500 hover:bg-primary-600 transition-colors duration-300 shadow-lg"
              aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-gradient-to-b from-white to-neutral-50 z-50 shadow-2xl md:hidden overflow-y-auto"
            >
              {/* Header del menú móvil */}
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 p-4 sm:p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <Image
                      src="/LACEB.png"
                      alt="LACEB"
                      width={100}
                      height={50}
                      priority
                      className="brightness-0 invert w-auto h-8 sm:h-10"
                    />
                    <p className="text-white/80 text-xs sm:text-sm mt-1 sm:mt-2">
                      Laboratorio de Calibración
                    </p>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                  >
                    <X className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </button>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                {/* Badge de acreditación en móvil */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="mb-6 sm:mb-8 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-lg border border-neutral-100"
                >
                  <Image
                    src="/assets/emacredition.png"
                    alt="Acreditación EMAC"
                    width={120}
                    height={60}
                    priority
                    className="mx-auto w-auto h-10 sm:h-12"
                  />
                </motion.div>

                {/* Items del menú móvil */}
                <nav className="space-y-1 sm:space-y-2">
                  {menuItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 + index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className={`flex items-center gap-2 sm:gap-3 p-3 sm:p-4 rounded-lg sm:rounded-xl transition-all duration-300 ${
                          isActive(item.href)
                            ? "bg-gradient-to-r from-primary-50 to-accent-50 text-primary-DEFAULT border-l-4 border-primary-DEFAULT"
                            : "hover:bg-neutral-100 text-neutral-700"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-xl sm:text-2xl">{item.icon}</span>
                        <span className="text-base sm:text-lg font-medium">
                          {item.label}
                        </span>
                      </Link>
                    </motion.div>
                  ))}

                  {/* Servicios en móvil */}
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="space-y-1"
                  >
                    <div className="flex items-center gap-2 sm:gap-3 p-3 sm:p-4 text-neutral-500">
                      <span className="text-xl sm:text-2xl">⚙️</span>
                      <span className="text-base sm:text-lg font-medium">
                        Servicios
                      </span>
                    </div>
                    {serviceItems.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        className={`flex items-start gap-2 sm:gap-3 pl-8 sm:pl-12 pr-3 sm:pr-4 py-2 sm:py-3 rounded-lg sm:rounded-xl transition-all duration-300 ${
                          isActive(service.href)
                            ? "bg-primary-50 text-primary-DEFAULT"
                            : "hover:bg-neutral-50 text-neutral-600"
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span className="text-lg sm:text-xl">
                          {service.icon}
                        </span>
                        <div className="flex-1">
                          <p className="text-sm sm:text-base font-medium">
                            {service.label}
                          </p>
                          <p className="text-xs text-neutral-500 mt-0.5 sm:mt-1">
                            {service.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                </nav>

                {/* Footer del menú móvil */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-neutral-200"
                >
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-3 sm:p-4 rounded-lg sm:rounded-xl">
                    <p className="text-xs sm:text-sm text-neutral-600 text-center font-medium">
                      📍 Calidad y precisión certificada
                    </p>
                    <p className="text-xs text-neutral-500 text-center mt-1 sm:mt-2">
                      ISO 17025 · 15 años de experiencia
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
