"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Button } from "@heroui/button";

const cards = [
  {
    id: 1,
    title: "CICLO DE PIPETEO",
    description:
      "La técnica usada afecta directamente la calidad y repetibilidad de sus resultados.",
    img: "/assets/ciclo.jpg",
    icon: "💧",
    color: "primary",
    gradientFrom: "from-primary-500",
    gradientTo: "to-primary-600",
    lightBg: "bg-primary-50",
    textColor: "text-primary-600",
    content: [
      "Pulse el émbolo de la pipeta hasta el primer tope.",
      "Sostenga la pipeta verticalmente cuando aspire el líquido.",
      "Sumerja la punta en el líquido de muestra a la profundidad adecuada.",
      "Suelte lentamente el émbolo para que el líquido entre en la punta sin la creación de burbujas.",
      "Espere un segundo antes de retirar la punta del líquido.",
      "Colocar el extremo de la punta contra la pared interior del contenedor.",
      "Dosifique el líquido presionando el émbolo hasta el segundo tope para eliminar el residuo que queda en la punta después de la dispensación.",
      "Retire del contenedor y expulse la punta.",
    ],
    steps: 8,
  },
  {
    id: 2,
    title: "TIPS DE PIPETEO",
    description:
      "De todos los factores que contribuyen al buen funcionamiento de una pipeta, el más crítico es la habilidad del operador",
    img: "/assets/tips.jpg",
    icon: "💡",
    color: "accent",
    gradientFrom: "from-accent-500",
    gradientTo: "to-accent-600",
    lightBg: "bg-accent-50",
    textColor: "text-accent-600",
    content: [
      "Seleccione la pipeta apropiada: Cuando desee pipetear 10 μL, use una pipeta de 0,5 a 10 μL en lugar de una de 10 a 100 μL.",
      "Preste atención a las condiciones ambientales: El volumen varía con la temperatura. Todo debe estar entre 20 y 22°C.",
      "Considere el humedecimiento previo de la punta: Aspire y dispense al menos tres veces antes de usarla.",
      "Minimice la manipulación: Evite calentar la pipeta con la mano. Déjela en el soporte entre usos.",
      "Limpie y calibre su pipeta regularmente: Use alcohol isopropílico y calibre al menos una vez al año.",
    ],
    steps: 5,
  },
  {
    id: 3,
    title: "ERGONOMÍA",
    description: "El cansancio en manos y cuerpo puede provocar errores.",
    img: "/assets/ergonomia.jpeg",
    icon: "🪑",
    color: "success",
    gradientFrom: "from-success-500",
    gradientTo: "to-success-600",
    lightBg: "bg-success-50",
    textColor: "text-success-600",
    content: [
      "Mantenga una postura relajada durante el pipeteo.",
      "Utilice pipetas ergonómicas que se adapten a su mano.",
      "Tome descansos regulares para evitar la fatiga muscular.",
      " alterne las manos si realiza pipeteo prolongado.",
      "Ajuste la altura de la silla y la mesa para una posición cómoda.",
    ],
    contentimg: "/assets/tipsmodal.png",
    steps: 5,
  },
];

const Findings = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = (id) => setSelectedCard(id);
  const handleClose = () => setSelectedCard(null);

  if (!mounted) return null;

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Guía Práctica
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6">
            <span className="text-brand-blue">Recomendaciones</span>
            <span className="text-neutral-900"> para mejorar</span>
            <br />
            <span className="bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
              tus resultados
            </span>
          </h2>

          <div className="flex justify-center mb-6">
            <div className="w-24 h-1.5 bg-brand-orange rounded-full" />
          </div>

          <p className="text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Mejore sus resultados con estas técnicas probadas
          </p>
        </motion.div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 xl:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              onHoverStart={() => setHoveredCard(card.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group relative h-[500px] perspective-1000"
            >
              {/* Efecto de fondo en hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}
              />

              {/* Card principal */}
              <div className="relative h-full bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-neutral-200">
                {/* Imagen de fondo con overlay */}
                <div className="absolute inset-0">
                  <Image
                    src={card.img}
                    alt={card.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      card.color === "primary"
                        ? "from-primary-900/90 via-primary-900/50 to-transparent"
                        : card.color === "accent"
                        ? "from-accent-900/90 via-accent-900/50 to-transparent"
                        : "from-success-900/90 via-success-900/50 to-transparent"
                    }`}
                  />
                </div>

                {/* Contenido */}
                <div className="relative h-full flex flex-col justify-end p-8 text-white">
                  {/* Icono decorativo */}
                  <div className="absolute top-6 right-6 text-6xl opacity-20">
                    {card.icon}
                  </div>

                  {/* Badge de pasos */}
                  <div className="mb-4">
                    <span
                      className={`inline-block px-3 py-1 ${card.lightBg} ${card.textColor} text-xs font-semibold rounded-full backdrop-blur-sm bg-opacity-90`}
                    >
                      {card.steps} pasos
                    </span>
                  </div>

                  {/* Título */}
                  <h3 className="text-3xl lg:text-4xl font-bold mb-3">
                    {card.title}
                  </h3>

                  {/* Descripción */}
                  <p className="text-white/90 text-sm lg:text-base mb-6 line-clamp-2">
                    {card.description}
                  </p>

                  {/* Botón CTA */}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleOpen(card.id)}
                    className="group/btn relative self-end overflow-hidden rounded-xl"
                  >
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
                    <div className="relative px-6 py-3 flex items-center gap-2 text-white font-medium">
                      <span>Conocer más</span>
                      <svg
                        className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                    </div>
                  </motion.button>

                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Texto informativo adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-3xl p-8 lg:p-10 border border-neutral-200">
            <p className="text-lg lg:text-xl text-neutral-700 mb-4">
              Lograr resultados confiables al pipetear depende en gran medida de
              las habilidades del usuario.
            </p>

            <p className="text-neutral-600 leading-relaxed">
              Los errores generados por las malas técnicas de pipeteo pueden
              afectar significativamente sus resultados. El pipeteo adecuado
              juega un papel importante para lograr resultados precisos y
              mediciones repetibles. Estos son algunos consejos sobre cómo
              pipetear correctamente.
            </p>

            {/* Estadísticas rápidas */}
            <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-200">
              <div>
                <div className="text-2xl font-bold text-primary-600">98%</div>
                <div className="text-xs text-neutral-500">Precisión</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-600">15+</div>
                <div className="text-xs text-neutral-500">Años</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-success-600">1000+</div>
                <div className="text-xs text-neutral-500">Clientes</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal mejorado */}
      <AnimatePresence>
        {selectedCard && (
          <Modal
            size="3xl"
            isOpen={true}
            onOpenChange={handleClose}
            className="bg-transparent"
            motionProps={{
              variants: {
                enter: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    duration: 0.3,
                    ease: "easeOut",
                  },
                },
                exit: {
                  y: -20,
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    ease: "easeIn",
                  },
                },
              },
            }}
          >
            <ModalContent className="bg-white rounded-3xl shadow-2xl">
              {(onClose) => {
                const card = cards.find((c) => c.id === selectedCard);
                return (
                  <>
                    <ModalHeader className="flex flex-col gap-1 p-6 border-b border-neutral-200">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} flex items-center justify-center text-white text-xl`}
                        >
                          {card.icon}
                        </div>
                        <div>
                          <span
                            className={`text-sm font-semibold ${card.textColor}`}
                          >
                            {card.title}
                          </span>
                          <h3 className="text-2xl font-bold text-neutral-800">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                    </ModalHeader>

                    <ModalBody className="p-6 max-h-[60vh] overflow-y-auto">
                      {Array.isArray(card.content) ? (
                        <div className="space-y-4">
                          {card.content.map((text, idx) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="flex gap-3"
                            >
                              <div
                                className={`flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br ${card.gradientFrom} ${card.gradientTo} flex items-center justify-center text-white text-xs font-bold`}
                              >
                                {idx + 1}
                              </div>
                              <p className="text-neutral-600 flex-1">{text}</p>
                            </motion.div>
                          ))}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <p className="text-neutral-600">{card.content}</p>
                          {card.contentimg && (
                            <div className="relative h-64 rounded-xl overflow-hidden">
                              <Image
                                src={card.contentimg}
                                alt="Guía ergonómica"
                                fill
                                className="object-cover"
                              />
                            </div>
                          )}
                        </div>
                      )}
                    </ModalBody>

                    <ModalFooter className="p-6 border-t border-neutral-200">
                      <Button
                        color="danger"
                        variant="light"
                        onPress={onClose}
                        className="px-6"
                      >
                        Cerrar
                      </Button>
                      <Button
                        className={`bg-gradient-to-r ${card.gradientFrom} ${card.gradientTo} text-white px-6`}
                        onPress={onClose}
                      >
                        Entendido
                      </Button>
                    </ModalFooter>
                  </>
                );
              }}
            </ModalContent>
          </Modal>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Findings;
