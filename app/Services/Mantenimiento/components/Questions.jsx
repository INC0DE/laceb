"use client";
import React from "react";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="rounded-md overflow-hidden mb-4 bg-white shadow-md transition-all">
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-4 text-left border-b"
      >
        <div
          className={`flex items-center gap-2 font-medium ${
            isOpen ? "text-green" : "text-gray"
          }`}
        >
          <span className="border-2 rounded-sm p-[2px]">
            {isOpen ? (
              <Minus className="w-5 h-5 text-green" />
            ) : (
              <Plus className="w-5 h-5 text-gray" />
            )}
          </span>
          {question}
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
            <div className="px-6 py-4 text-sm">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Questions = () => {
  const faqs = [
    {
      question: "¿CUÁNTO ES SU TIEMPO DE ENTREGA?",
      answer: "A partir de cinco días hábiles.",
    },
    {
      question: "¿QUÉ MARCAS DE PIPETAS CALIBRAN?",
      answer: "Todas las marcas comerciales del mercado.",
    },
    {
      question: "¿QUÉ INSTRUMENTOS CALIBRAN?",
      answer: "Pipetas, balanzas, termómetros, entre otros.",
    },
    {
      question: "¿CUENTAN CON ALGUNA ACREDITACIÓN?",
      answer: "Sí, estamos acreditados por la EMA.",
    },
    {
      question: "¿PROPORCIONAN SERVICIO A TODA LA REPÚBLICA MEXICANA?",
      answer: "Sí, enviamos técnicos y equipos a toda la República.",
    },
    {
      question: "¿CON QUÉ FRECUENCIA DEBO CALIBRAR LAS PIPETAS?",
      answer: "Se recomienda cada 6 o 12 meses dependiendo del uso.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="bg-bg pt-5 lg:p-20">
      <div className="flex flex-col gap-4 items-center">
        <div className="text-5xl lg:text-6xl text-center font-medium text-blue space-y-2">
          <h1>PREGUNTAS</h1>
          <h1>FRECUENTES</h1>
        </div>

        <div className="w-56 lg:w-72 h-2 bg-orange"></div>
        <p className="text-3xl lg:text-4xl">Queremos resolver tus dudas.</p>
      </div>

      <div className="max-w-6xl mx-auto my-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 [grid-auto-flow:row]">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Questions;
