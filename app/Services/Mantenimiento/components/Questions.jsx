"use client";

import React, { useState, useEffect, useRef } from "react";
import { Plus, Minus, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer, isOpen, onClick, index }) => {
  // Colores alternados para cada pregunta
  const colors = [
    {
      border: "border-primary-200",
      bg: "bg-primary-50",
      text: "text-primary-600",
      gradient: "from-primary-500 to-primary-600",
    },
    {
      border: "border-accent-200",
      bg: "bg-accent-50",
      text: "text-accent-600",
      gradient: "from-accent-500 to-accent-600",
    },
    {
      border: "border-success-200",
      bg: "bg-success-50",
      text: "text-success-600",
      gradient: "from-success-500 to-success-600",
    },
  ];

  const colorScheme = colors[index % colors.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="rounded-2xl overflow-hidden mb-4 bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200"
    >
      <button
        onClick={onClick}
        className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 ${
          isOpen ? colorScheme.bg : "bg-white hover:bg-neutral-50"
        }`}
      >
        <div
          className={`flex items-center gap-4 flex-1 ${
            isOpen ? colorScheme.text : "text-neutral-700"
          }`}
        >
          <div
            className={`flex-shrink-0 w-8 h-8 rounded-xl ${
              isOpen ? colorScheme.bg : "bg-neutral-100"
            } flex items-center justify-center border ${
              isOpen ? colorScheme.border : "border-neutral-200"
            } transition-colors duration-300`}
          >
            <HelpCircle
              className={`w-4 h-4 ${
                isOpen ? colorScheme.text : "text-neutral-500"
              }`}
            />
          </div>
          <span className="font-semibold text-lg lg:text-xl flex-1">
            {question}
          </span>
        </div>

        <div
          className={`flex-shrink-0 w-8 h-8 rounded-full ${
            isOpen
              ? `bg-gradient-to-r ${colorScheme.gradient}`
              : "bg-neutral-100"
          } flex items-center justify-center transition-all duration-300`}
        >
          {isOpen ? (
            <Minus className="w-4 h-4 text-white" />
          ) : (
            <Plus className="w-4 h-4 text-neutral-600" />
          )}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div
              className={`px-6 py-6 ${colorScheme.bg} border-t ${colorScheme.border}`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-1.5 self-stretch bg-gradient-to-b ${colorScheme.gradient} rounded-full`}
                />
                <p className="text-neutral-700 text-base lg:text-lg leading-relaxed">
                  {answer}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const Questions = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const faqs = [
    {
      question: "¿CUÁNTO ES SU TIEMPO DE ENTREGA?",
      answer: "A partir de cinco días hábiles.",
    },
    {
      question: "¿QUÉ MARCAS DE PIPETAS CALIBRAN?",
      answer:
        "Calibramos todas las marcas del mercado, incluyendo las más reconocidas internacionalmente.",
    },
    {
      question: "¿QUÉ INSTRUMENTOS CALIBRAN?",
      answer:
        "Somos un laboratorio especializado en la calibración de pipetas de pistón, incluyendo modelos monocanal, multicanal, de volumen fijo y variable.",
    },
    {
      question: "¿CUENTAN CON ALGUNA ACREDITACIÓN?",
      answer:
        "Sí, somos un laboratorio acreditado bajo la norma ISO 17025:2017 ante la Entidad Mexicana de Acreditación (EMA).",
    },
    {
      question: "¿PROPORCIONAN SERVICIO A TODA LA REPÚBLICA MEXICANA?",
      answer:
        "Sí, damos servicio en todo México con cobertura nacional y tiempos de respuesta garantizados.",
    },
    {
      question: "¿CON QUÉ FRECUENCIA DEBO CALIBRAR LAS PIPETAS?",
      answer:
        "Recomendamos calibrar las pipetas al menos una vez al año, aunque la frecuencia puede variar según el uso y las recomendaciones del fabricante.",
    },
  ];

  if (!mounted) {
    return (
      <section className="min-h-[400px] bg-gradient-to-b from-neutral-50 to-white flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-20 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold text-primary-600 uppercase tracking-wider bg-primary-50 px-4 py-2 rounded-full">
              Soporte
            </span>
          </div>

          <h2 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary-600 via-accent-600 to-success-600 bg-clip-text text-transparent">
              PREGUNTAS
            </span>
          </h2>
          <h3 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-neutral-800 mb-4">
            FRECUENTES
          </h3>

          <div className="w-32 h-1.5 bg-gradient-to-r from-primary-500 via-accent-500 to-success-500 rounded-full mx-auto mb-6" />

          <p className="text-xl lg:text-2xl text-neutral-600 max-w-3xl mx-auto">
            Queremos resolver todas tus dudas
          </p>
        </motion.div>

        {/* Grid de preguntas */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                index={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Sección de contacto adicional */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 lg:p-10 text-white shadow-2xl">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <MessageCircle className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-2xl font-bold mb-2">
                    ¿No encuentras lo que buscas?
                  </h4>
                  <p className="text-white/80">Contáctanos directamente</p>
                </div>
              </div>

              <button className="group relative inline-flex items-center gap-2 bg-white text-primary-600 font-semibold px-8 py-4 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Escríbenos
                </span>
                <div className="absolute inset-0 bg-neutral-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Questions;
