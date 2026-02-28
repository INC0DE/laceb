"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@heroui/button";
import { Form } from "@heroui/form";
import { Input, Textarea } from "@heroui/input";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Trash2,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const Contact = () => {
  const form = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_c9bbkif", "template_83cfzjb", form.current, {
        publicKey: "zOrFRLhr_LVG9BBET",
      })
      .then(
        () => {
          setSuccess(true);
          setError(false);
          form.current.reset();
          setLoading(false);
          setTimeout(() => setSuccess(false), 5000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setError(true);
          setSuccess(false);
          setLoading(false);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  const contactInfo = [
    {
      icon: <Phone className="text-primary-500" size={24} />,
      title: "Teléfono",
      value: "+52 (55) 1234 5678",
      link: "tel:+525512345678",
      bgColor: "bg-primary-50",
      textColor: "text-primary-600",
    },
    {
      icon: <Mail className="text-accent-500" size={24} />,
      title: "Email",
      value: "contacto@laceb.com",
      link: "mailto:contacto@laceb.com",
      bgColor: "bg-accent-50",
      textColor: "text-accent-600",
    },
    {
      icon: <MapPin className="text-success-500" size={24} />,
      title: "Ubicación",
      value: "Ciudad de México, CDMX",
      link: "https://maps.google.com",
      bgColor: "bg-success-50",
      textColor: "text-success-600",
    },
    {
      icon: <Clock className="text-primary-500" size={24} />,
      title: "Horario",
      value: "Lun-Vie: 9:00 - 18:00",
      bgColor: "bg-primary-50",
      textColor: "text-primary-600",
    },
  ];

  if (!mounted) {
    return (
      <section className="min-h-screen bg-gradient-to-b from-neutral-50 to-white flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary-500 border-t-transparent rounded-full animate-spin" />
      </section>
    );
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-neutral-50 to-white overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      {/* Header con gradiente */}
      <div className="relative bg-gradient-to-r from-primary-600 via-primary-500 to-accent-500 py-20 lg:py-24">
        <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4"
          >
            CONTACTO.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/80 text-lg lg:text-xl max-w-2xl"
          >
            Estamos aquí para ayudarte. Envíanos un mensaje y te responderemos a
            la brevedad.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda - Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-4">
              Hablemos sobre tu proyecto
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mb-8" />

            <p className="text-neutral-600 text-lg mb-12 leading-relaxed">
              ¿Tienes preguntas sobre nuestros servicios de calibración? Nuestro
              equipo de expertos está listo para ayudarte.
            </p>

            {/* Grid de información de contacto */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className={`${item.bgColor} rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-neutral-500 mb-1">
                        {item.title}
                      </h3>
                      {item.link ? (
                        <Link
                          href={item.link}
                          className={`${item.textColor} font-medium hover:underline`}
                        >
                          {item.value}
                        </Link>
                      ) : (
                        <p className={`${item.textColor} font-medium`}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Columna derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-neutral-200">
              <h3 className="text-2xl font-bold text-neutral-800 mb-6">
                Envíanos un mensaje
              </h3>

              <Form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-6"
                validationBehavior="native"
              >
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Nombre completo <span className="text-accent-500">*</span>
                  </label>
                  <Input
                    isRequired
                    name="from_name"
                    placeholder="Escribe tu nombre completo"
                    type="text"
                    classNames={{
                      input:
                        "bg-neutral-50 border-neutral-200 focus:border-primary-500",
                      inputWrapper:
                        "hover:border-primary-500 transition-colors",
                    }}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Correo electrónico{" "}
                      <span className="text-accent-500">*</span>
                    </label>
                    <Input
                      isRequired
                      name="email"
                      placeholder="correo@ejemplo.com"
                      type="email"
                      classNames={{
                        input:
                          "bg-neutral-50 border-neutral-200 focus:border-primary-500",
                        inputWrapper:
                          "hover:border-primary-500 transition-colors",
                      }}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                      Teléfono
                    </label>
                    <Input
                      name="number"
                      placeholder="55 1234 5678"
                      type="tel"
                      classNames={{
                        input:
                          "bg-neutral-50 border-neutral-200 focus:border-primary-500",
                        inputWrapper:
                          "hover:border-primary-500 transition-colors",
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Mensaje <span className="text-accent-500">*</span>
                  </label>
                  <Textarea
                    isRequired
                    name="message"
                    placeholder="Describe tu proyecto o consulta..."
                    rows={5}
                    classNames={{
                      input:
                        "bg-neutral-50 border-neutral-200 focus:border-primary-500",
                      inputWrapper:
                        "hover:border-primary-500 transition-colors",
                    }}
                  />
                </div>

                {/* Botones de acción */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold py-6 hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={18} />
                        Enviar mensaje
                      </span>
                    )}
                  </Button>

                  <Button
                    type="reset"
                    variant="flat"
                    className="flex-1 bg-neutral-100 text-neutral-600 font-semibold py-6 hover:bg-neutral-200 transition-all duration-300"
                  >
                    <span className="flex items-center gap-2">
                      <Trash2 size={18} />
                      Limpiar
                    </span>
                  </Button>
                </div>
              </Form>

              {/* Mensajes de éxito/error */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 bg-success-50 border border-success-200 rounded-xl flex items-center gap-3"
                  >
                    <CheckCircle
                      className="text-success-500 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-success-700 font-medium">
                      ¡Formulario enviado con éxito! Te contactaremos pronto.
                    </p>
                  </motion.div>
                )}

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="mt-6 p-4 bg-accent-50 border border-accent-200 rounded-xl flex items-center gap-3"
                  >
                    <AlertCircle
                      className="text-accent-500 flex-shrink-0"
                      size={24}
                    />
                    <p className="text-accent-700 font-medium">
                      Hubo un error al enviar el formulario. Por favor intenta
                      de nuevo.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Enlace a aviso de privacidad */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="mt-8 text-center"
              >
                <Link
                  href="/Privacy"
                  className="inline-flex items-center gap-2 text-neutral-500 hover:text-primary-500 transition-colors"
                >
                  <span>Aviso de privacidad</span>
                  <span className="text-sm">→</span>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
