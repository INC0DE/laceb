"use client";
import React from "react";
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
import { CircleCheck } from "lucide-react";

const cards = [
  {
    id: 1,
    title: "Comprobación",
    description:
      "Comprobamos la exactitud y precisión de la pipeta con diez mediciones por volumen en tres puntos de la escala (generalmente seleccionado de mínimo o 10%, 50% y 100% del volumen nominal de la pipeta).",
  },
  {
    id: 2,
    title: "Resultados",
    description:
      "Cálculo de resultados y comparación con los límites de aprobación/rechazo.",
  },
  {
    id: 3,
    title: "Certificado",
    description: "Emisión de un certificado de calibración.",
  },
];

const Intro = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <section className="p-5 lg:p-10">
      <div className="bg-bg p-8 rounded-full">
        <p className="text-center">
          La calibración se realiza por el método gravimétrico establecido por
          la Norma ISO 8655-6:2002 Gravimetric methods for the determination of
          measurement error y están aprobados por la Guía Técnica sobre
          Trazabilidad e Incertidumbre en los Servicios de Calibración por el
          Método Gravimétrico emitida por el Centro Nacional de Metrología
          (CENAM) y le Entidad Mexicana de Acreditación (ema).
        </p>
      </div>

      <div className="flex flex-col items-center gap-5 lg:gap-0 lg:flex-row lg:justify-around py-5">
        <div className="flex flex-col col-span-1 gap-5">
          {cards.map((items) => (
            <Card
              key={items.id}
              className="w-64 md:w-72 h-60 p-5 flex flex-col justify-center gap-4"
            >
              <div className="flex flex-row gap-4">
                <CircleCheck
                  size={45}
                  strokeWidth={3}
                  className="text-orange"
                />
                <h1 className="text-4xl">{items.title}</h1>
              </div>

              <p className="text-md text-gray text-center">
                {items.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="w-full h-2 lg:w-2 lg:h-80 self-center bg-blue"></div>

        <div className="w-64 md:w-72 h-96">
          <div className="h-2/3 mb-10 relative ">
            <Image
              src="/assets/herocalib.jpeg"
              alt="herolaceb"
              layout="fill"
              objectFit="cover"
              className="brightness-50 w-full rounded-t-3xl"
              priority
            />

            <div className="absolute inset-0 space-y-5 p-5 content-end">
              <h1 className="text-4xl text-white font-medium">CALIBRACIONES</h1>
              <ul className="text-gray">
                <li>Micropipetas de pistón.</li>
                <li>Monocanal y multicanal</li>
                <li>De volumen fijo y Variable</li>
                <li>Automáticas y semiautomáticas</li>
              </ul>
            </div>
          </div>

          <div className="h-1/3 bg-blue rounded-b-3xl space-y-5 p-5">
            <h1 className="text-4xl text-white font-medium">ACREDITACIÓN</h1>
            <Button
              onPress={onOpen}
              size="lg"
              className="bg-white text-green rounded-3xl ml-4"
            >
              Ver
            </Button>
            <Modal size="xl" isOpen={isOpen} onOpenChange={onOpenChange}>
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalBody>
                      <Image
                        src="/assets/CertificadoEMA.jpg"
                        alt="certificado"
                        width={100}
                        height={100}
                        className=" w-full "
                        priority
                      />
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Close
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </div>
        </div>
      </div>

      <div className="w-full bg-blue p-10 md:p-0 md:py-20 mt-10 rounded-b-3xl">
        <p className="text-center text-white">
          La calibración de pipetas es una parte fundamental de las Buenas
          Prácticas de Laboratorio (BPL) y de los sistemas de calidad. El
          rendimiento de la pipeta se mide como exactitud y precisión, lo que
          significa qué tan cerca están los volúmenes dispensados del objetivo y
          qué tan cerca están los resultados de uno entre otro.
        </p>
      </div>
    </section>
  );
};

export default Intro;
