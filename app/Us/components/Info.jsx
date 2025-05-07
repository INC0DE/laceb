import React from "react";
import { Card } from "@heroui/card";
import { Star, Eye, User } from "lucide-react";

const cards = [
  {
    id: 1,
    icon: <User size={90} className="text-blue group-hover:text-white" />,
    title: "Misión",
    description:
      "Proporcionar servicios de calibración de pipetas de pistón precisos, confiables y consistentes a través de un equipo de trabajo comprometido con el cumplimiento de las necesidades y expectativas de nuestros clientes.",
  },
  {
    id: 2,
    icon: <Eye size={90} className="text-blue group-hover:text-white" />,
    title: "Visión",
    description:
      "Ser un laboratorio de calibración en micro y pequeño volumen líder en México por proporcionar resultados altamente confiables, servir mejor a nuestros clientes, ser relevantes en sus servicios y generar relaciones duraderas.",
  },
];

const valores = [
  {
    id: 1,
    title: "HONESTIDAD",
  },
  {
    id: 2,
    title: "INTEGRIDAD",
  },
  {
    id: 3,
    title: "RESPONSABILIDAD",
  },
];

const Info = () => {
  return (
    <section>
      <div>
        <p className="text-center text-xl md:text-3xl p-10">
          Empresa mexicana especialistas en la {""}
          <span className="font-semibold">
            calibración de pipetas de pistón
          </span>
          {""}
          desde el año {""} <span className="font-semibold">2012</span>, con una
          cartera de clientes conformada por más de
          {""}{" "}
          <span className="font-semibold">
            35 laboratorios clínicos públicos y privados
          </span>
          , laboratorios farmacéuticos, laboratorios químicos y distribuidores
          de reactivos.
        </p>

        <div className="flex flex-col md:flex-row gap-5 md:justify-center py-10 px-5">
          {cards.map((items) => (
            <Card
              key={items.id}
              className="w-64 md:w-80 h-64 p-5 md:p-10 group flex flex-col gap-4 hover:bg-blue"
            >
              {items.icon}
              <h1 className="text-blue text-5xl font-medium group-hover:text-white">
                {items.title}
              </h1>
              <div className="flex flex-row">
                <div className="h-24 w-2 bg-orange group-hover:bg-green"></div>
                <p className="self-center ml-2 text-center text-sm group-hover:text-white">
                  {items.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="py-10">
        <div className="text-4xl lg:text-7xl text-center p-10">
          <h1 className="">
            En{" "}
            <span className="text-5xl lg:text-8xl font-semibold text-blue">
              LACEB S.A DE C.V
            </span>{" "}
          </h1>
          <h1 className="">
            somos fieles a nuestros{" "}
            <span className="text-5xl lg:text-8xl font-semibold">VALORES</span>{" "}
          </h1>
        </div>

        <div className="flex flex-col gap-4 items-center md:flex-row md:justify-around py-10">
          {valores.map((items) => (
            <Card
              key={items.id}
              className="w-64 lg:w-72 h-56 justify-center items-center space-y-4 hover:bg-green"
            >
              <Star size={70} color="yellow" strokeWidth={4} />
              <h1 className="text-2xl lg:text-4xl font-semibold">
                {items.title}
              </h1>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Info;
