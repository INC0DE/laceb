"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "@heroui/modal";
import { Card } from "@heroui/card";
import { Button } from "@heroui/button";

const cards = [
  {
    id: 1,
    title: "CICLO DE PIPETEO",
    description:
      "La técnica usada afecta directamente la calidad y repetibilidad de sus resultados.",
    img: "/assets/ciclo.jpg",
    content: [
      "Pulse el émbolo de la pipeta hasta el primer tope.",
      "Sostenga la pipeta verticalmente cuando aspire el líquido.",
      " Sumerja la punta en el líquido de muestra a la profundidad adecuada.",
      "Suelte lentamente el émbolo para que el líquido entre en la punta sin la creación de burbujas.",
      "Espere un segundo antes de retirar la punta del líquido.",
      "Colocar el extremo de la punta contra la pared interior del contenedor.",
      "Dosifique el líquido presionando el émbolo hasta el segundo tope para eliminar el residuo que queda en la punta después de la dispensación.",
      "Retire del contenedor y expulse la punta.",
    ],
  },
  {
    id: 2,
    title: "TIPS DE PIPETEO",
    description:
      "De todos los factores que contribuyen al buen funcionamiento de una pipeta, el más crítico es la habilidad del operador",
    img: "/assets/tips.jpg",
    content: [
      "Seleccione la pipeta apropiada: Ejemplo: Cuando desee pipetear 10 μL de líquido, use una pipeta con el rango de volumen de 0,5 a 10 μL en lugar de una pipeta con un volumen de 10 a 100 μL.",
      "Presta atención a las condiciones ambientales: El volumen varía con la temperatura. Todo debe estar entre 20 y 22°C.",
      "Considere el humedecimiento previo de la punta: Aspire y dispense al menos tres veces antes de usarla.",
      "Minimice la manipulación: Evite calentar la pipeta con la mano. Déjela en el soporte entre usos.",
      "Limpie y calibre su pipeta regularmente: Use alcohol isopropílico y calibre al menos una vez al año.",
    ],
  },
  {
    id: 3,
    title: "ERGONOMÍA",
    description: "El cansancio en manos y cuerpo puede provocar errores.",
    img: "/assets/ergonomia.jpeg",
    contentimg: "/assets/tipsmodal.png",
  },
];

const Findings = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleOpen = (id) => setSelectedCard(id);
  const handleClose = () => setSelectedCard(null);

  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-3 mb-5">
        <div className="flex flex-col">
          <h1 className="text-blue text-5xl md:text-6xl font-medium">
            Recomendaciones
          </h1>
          <div className="w-64 h-2 self-center bg-orange"></div>
        </div>
        <p className="text-xl md:text-3xl">Mejore sus resultados.</p>
      </div>

      <div className="flex flex-col gap-5 lg:flex-row justify-around xl:gap-0">
        {cards.map((item) => (
          <Card
            key={item.id}
            className="relative m-3 lg:w-72 lg:h-64 2xl:w-96 flex flex-col gap-5 justify-center p-10 bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40 rounded-2xl"></div>

            <div className="relative z-10 flex flex-col gap-4">
              <h1 className="text-4xl font-medium">{item.title}</h1>
              <p className="text-sm">{item.description}</p>
              <Button
                onPress={() => handleOpen(item.id)}
                color="primary"
                className="self-end"
              >
                Conoce Más
              </Button>
            </div>

            <Modal
              size="xl"
              isOpen={selectedCard === item.id}
              onOpenChange={handleClose}
            >
              <ModalContent>
                {(onClose) => (
                  <>
                    <ModalHeader className="text-blue">
                      {item.title}
                    </ModalHeader>
                    <ModalBody>
                      {Array.isArray(item.content) ? (
                        <ul className="list-decimal pl-5 space-y-2">
                          {item.content.map((text, idx) => (
                            <li key={idx}>{text}</li>
                          ))}
                        </ul>
                      ) : (
                        ((<p>{item.content}</p>),
                        (<img src={item.contentimg} alt="" />))
                      )}
                    </ModalBody>
                    <ModalFooter>
                      <Button color="danger" variant="light" onPress={onClose}>
                        Cerrar
                      </Button>
                    </ModalFooter>
                  </>
                )}
              </ModalContent>
            </Modal>
          </Card>
        ))}
      </div>

      <div className="pt-10 px-5 md:px-20 text-center">
        <p>
          Lograr resultados confiables al pipetear depende en gran medida de las
          habilidades del usuario.
        </p>
        <p>
          Los errores generados por las malas técnicas de pipeteo pueden afectar
          significativamente sus resultados. El pipeteo adecuado juega un papel
          importante para lograr resultados precisos y mediciones repetibles.
          Estos son algunos consejos sobre cómo pipetear correctamente.
        </p>
      </div>
    </div>
  );
};

export default Findings;
