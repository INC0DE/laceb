"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import clsx from "clsx";

const clientes = [
  {
    titulo: "EMPRESA 1",
    comentario: "Comentario de la empresa",
    imagen: "/empresa1.jpg",
  },
  {
    titulo: "EMPRESA 2",
    comentario:
      "De todos los factores que contribuyen al buen funcionamiento de una pipeta, el más crítico es la habilidad del operador",
    imagen: "/empresa2.jpg",
  },
  {
    titulo: "EMPRESA 3",
    comentario: "El cansancio en manos y cuerpo puede provocar errores.",
    imagen: "/empresa3.jpg",
  },
];

const REPETICIONES = 10; // Cuántas veces repetimos las tarjetas
const EXTENDED_CLIENTES = Array(REPETICIONES).fill(clientes).flat();

const CARD_HEIGHT = 160;

const Companies = () => {
  const containerRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(null);

  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    const { scrollTop, offsetHeight, scrollHeight } = container;
    const middle = scrollTop + offsetHeight / 2;
    const index = Math.floor(middle / CARD_HEIGHT);
    setCenterIndex(index % clientes.length);

    // Scroll infinito real (reposicionamiento al centro si se acerca a límites)
    const threshold = CARD_HEIGHT * clientes.length;
    const centerScroll = (EXTENDED_CLIENTES.length * CARD_HEIGHT) / 2;

    if (scrollTop <= threshold) {
      container.scrollTop = centerScroll;
    } else if (scrollTop + offsetHeight >= scrollHeight - threshold) {
      container.scrollTop = centerScroll;
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const initialScroll = (EXTENDED_CLIENTES.length * CARD_HEIGHT) / 2;
    container.scrollTop = initialScroll;

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="h-screen py-8 bg-bg flex flex-col  lg:p-0 lg:flex-row items-center">
      <div className="lg:w-1/2 flex flex-col gap-5 items-center">
        <h1 className="text-4xl md:text-6xl xl:text-7xl text-blue font-semibold">
          Nuestros Clientes
        </h1>
        <p className="text-xl md:text-2xl xl:text-3xl text-gray">
          Empresas que confiaron en nosotros.
        </p>
        <Image
          src="/Favicon.png"
          alt="icon"
          width={120}
          height={100}
          priority
        />
      </div>

      <div className="w-3/5 h-1  lg:w-1 lg:h-3/5  bg-blue"></div>

      <div
        ref={containerRef}
        className="md:w-1/2 h-[480px] justify-items-center overflow-y-scroll scrollbar-hide scrollbar-none space-y-4 snap-y snap-mandatory"
      >
        {EXTENDED_CLIENTES.map((cliente, idx) => {
          const isCenter = idx % clientes.length === centerIndex;
          return (
            <div
              key={idx + cliente.titulo}
              className={clsx(
                "flex items-center lg:w-72 xl:w-80 bg-white rounded-lg shadow-md p-4 gap-4 snap-center transition-all duration-300",
                {
                  "scale-105 shadow-xl": isCenter,
                  "opacity-50": !isCenter,
                }
              )}
              style={{ minHeight: `${CARD_HEIGHT - 20}px` }} // para dejar margen
            >
              <Image
                src={cliente.imagen}
                alt={cliente.titulo}
                width={100}
                height={100}
                className="rounded object-cover"
              />
              <div>
                <h3 className="text-green text-xl font-bold">
                  {cliente.titulo}
                </h3>
                <p className="text-gray text-sm">{cliente.comentario}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Companies;
