"use client";

import React, { useEffect, useRef } from "react";
import { Card } from "@heroui/card";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import {
  CircleCheck,
  FileCheck,
  Award,
  FlaskConical,
  Droplets,
  Microscope,
  ChevronRight,
  X,
} from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";

const Intro = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const cards = [
    {
      id: 1,
      title: "Comprobación",
      description:
        "Comprobamos la exactitud y precisión de la pipeta con diez mediciones por volumen en tres puntos de la escala (generalmente seleccionando el mínimo o 10%, 50% y 100% del volumen nominal de la pipeta).",
      icon: <Droplets size={45} className="text-accent-500" />,
      gradient: "from-accent-500 to-accent-600",
      bgLight: "bg-accent-50",
      borderColor: "border-accent-200",
    },
    {
      id: 2,
      title: "Resultados",
      description:
        "Cálculo de resultados y comparación con los límites de aprobación/rechazo.",
      icon: <FileCheck size={45} className="text-primary-500" />,
      gradient: "from-primary-500 to-primary-600",
      bgLight: "bg-primary-50",
      borderColor: "border-primary-200",
    },
    {
      id: 3,
      title: "Certificado",
      description:
        "El certificado de calibración que se entrega cumple con los requisitos de la Norma ISO/IEC 17025:2017",
      icon: <Award size={45} className="text-success-500" />,
      gradient: "from-success-500 to-success-600",
      bgLight: "bg-success-50",
      borderColor: "border-success-200",
    },
  ];

  const specs = [
    { icon: <FlaskConical size={20} />, text: "Micropipetas de pistón" },
    { icon: <Droplets size={20} />, text: "Monocanal y multicanal" },
    { icon: <Microscope size={20} />, text: "De volumen fijo y variable" },
    { icon: <Award size={20} />, text: "Automáticas y semiautomáticas" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section
      ref={ref}
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-white to-neutral-50"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-accent-500/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-success-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Texto normativo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={controls}
          variants={itemVariants}
          className="max-w-5xl mx-auto mb-20"
        >
          <div className="bg-gradient-to-r from-primary-50 to-accent-50 p-8 lg:p-10 rounded-3xl border border-neutral-200 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                  <FileCheck className="text-white" size={24} />
                </div>
              </div>
              <p className="text-lg lg:text-xl text-neutral-700 leading-relaxed">
                La calibración se realiza por el método gravimétrico establecido
                por la Norma{" "}
                <span className="font-bold text-primary-600">
                  ISO 8655-6:2002
                </span>{" "}
                Gravimetric methods for the determination of measurement error y
                están aprobados por la Guía Técnica sobre Trazabilidad e
                Incertidumbre en los Servicios de Calibración por el Método
                Gravimétrico emitida por el{" "}
                <span className="font-bold text-accent-600">
                  Centro Nacional de Metrología (CENAM)
                </span>{" "}
                y la{" "}
                <span className="font-bold text-success-600">
                  Entidad Mexicana de Acreditación (ema)
                </span>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* Grid principal */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Columna izquierda - Cards de proceso */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="space-y-6"
          >
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-800 mb-8">
              Proceso de calibración
              <div className="w-20 h-1.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full mt-2" />
            </h2>

            {cards.map((card) => (
              <motion.div
                key={card.id}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="group relative"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${card.gradient} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />

                <Card className="relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-neutral-200 overflow-hidden">
                  <div
                    className={`absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b ${card.gradient}`}
                  />

                  <div className="p-6 lg:p-8">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex-shrink-0 w-16 h-16 ${card.bgLight} rounded-xl flex items-center justify-center border ${card.borderColor} group-hover:scale-110 transition-transform duration-300`}
                      >
                        {card.icon}
                      </div>

                      <div className="flex-1">
                        <h3
                          className={`text-2xl font-bold mb-2 bg-gradient-to-r ${card.gradient} bg-clip-text text-transparent`}
                        >
                          {card.title}
                        </h3>
                        <p className="text-neutral-600 text-sm lg:text-base leading-relaxed">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Columna derecha - Info de calibración y acreditación */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Card de calibraciones */}
            <div className="bg-white rounded-3xl shadow-xl border border-neutral-200 overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/assets/herocalib.jpeg"
                  alt="Calibración de pipetas"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/90 via-primary-900/50 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-4">
                    CALIBRACIONES
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-white/90"
                      >
                        <div className="text-accent-400">{spec.icon}</div>
                        <span className="text-sm">{spec.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Card de acreditación */}
            <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-xl overflow-hidden">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      ACREDITACIÓN
                    </h3>
                    <p className="text-white/80 text-sm">ISO 17025 · EMA</p>
                  </div>
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <Award className="text-white" size={32} />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <Button
                    onPress={onOpen}
                    size="lg"
                    className="bg-white text-primary-600 font-semibold px-8 py-6 rounded-xl hover:shadow-2xl transition-all duration-300 group"
                  >
                    <span className="flex items-center gap-2">
                      Ver certificado
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>

                  <div className="bg-white/10 backdrop-blur-sm p-3 rounded-xl">
                    <Image
                      src="/assets/emacredition.png"
                      alt="Acreditación EMA"
                      width={120}
                      height={60}
                      className="w-auto h-10"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Texto de calidad */}
            <div className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200">
              <p className="text-sm text-neutral-600 leading-relaxed">
                <span className="font-semibold text-primary-600">
                  Buenas Prácticas de Laboratorio (BPL):
                </span>{" "}
                La calibración de pipetas es fundamental para sistemas de
                calidad. El rendimiento se mide como exactitud y precisión,
                garantizando volúmenes dispensados confiables y resultados
                consistentes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modal de certificado mejorado */}
      <Modal
        size="4xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          base: "bg-transparent",
          close: "hidden",
        }}
      >
        <ModalContent className="bg-white rounded-3xl shadow-2xl">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-row items-center justify-between p-6 border-b border-neutral-200">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-success-500 to-success-600 rounded-xl flex items-center justify-center">
                    <Award className="text-white" size={20} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-neutral-800">
                      Certificado de Acreditación
                    </h3>
                    <p className="text-sm text-neutral-500">
                      ISO/IEC 17025:2017
                    </p>
                  </div>
                </div>
                <Button
                  isIconOnly
                  variant="light"
                  onPress={onClose}
                  className="text-neutral-500 hover:text-neutral-700"
                >
                  <X size={20} />
                </Button>
              </ModalHeader>

              <ModalBody className="p-6">
                <div className="relative w-full h-[600px] rounded-xl overflow-hidden border border-neutral-200">
                  <Image
                    src="/assets/CertificadoEMA.jpg"
                    alt="Certificado de acreditación EMA"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
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
                  className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6"
                  onPress={onClose}
                >
                  Descargar PDF
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </section>
  );
};

export default Intro;
