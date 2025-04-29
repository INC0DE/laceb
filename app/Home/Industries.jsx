"use client";
import React from "react";
import Image from "next/image";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodeStyle = {
  width: 160,
  height: 140,
  background: "#E06D4E",
  color: "#fff",
  fontSize: 12,
  clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "2px solid white",
};

const nodes = [
  {
    id: "1",
    type: "default",
    data: {
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/icons/food.svg"
            alt="Alimentaria"
            style={{ width: 40, height: 40 }}
          />
          <span>Alimentaria</span>
        </div>
      ),
    },
    position: { x: 0, y: 0 },
    style: nodeStyle,
  },
  {
    id: "2",
    type: "default",
    data: {
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/icons/food.svg"
            alt="Alimentaria"
            style={{ width: 40, height: 40 }}
          />
          <span>Farmaceutica</span>
        </div>
      ),
    },
    position: { x: 200, y: 100 },
    style: nodeStyle,
  },
  {
    id: "3",
    type: "default",
    data: {
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/icons/food.svg"
            alt="Alimentaria"
            style={{ width: 40, height: 40 }}
          />
          <span>Quimica</span>
        </div>
      ),
    },
    position: { x: 400, y: 0 },
    style: nodeStyle,
  },
  {
    id: "4",
    type: "default",
    data: {
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/icons/food.svg"
            alt="Alimentaria"
            style={{ width: 40, height: 40 }}
          />
          <span>Cosmetica</span>
        </div>
      ),
    },
    position: { x: 600, y: 100 },
    style: nodeStyle,
  },
  {
    id: "5",
    type: "default",
    data: {
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/icons/food.svg"
            alt="Alimentaria"
            style={{ width: 40, height: 40 }}
          />
          <span>Veterinaria</span>
        </div>
      ),
    },
    position: { x: 800, y: 0 },
    style: nodeStyle,
  },
  {
    id: "6",
    type: "default",
    data: {
      label: (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src="/icons/food.svg"
            alt="Alimentaria"
            style={{ width: 40, height: 40 }}
          />
          <span>Clinico</span>
        </div>
      ),
    },
    position: { x: 1000, y: 100 },
    style: nodeStyle,
  },
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "black" },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "black" },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "black" },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "black" },
  },
  {
    id: "e5-6",
    source: "5",
    target: "6",
    animated: true,
    style: { stroke: "black" },
  },
];

const Industries = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-3 p-10">
        <div>
          <h1 className="text-5xl lg:text-6xl 2xl:text-8xl text-blue font-semibold lg:px-10">Industrias</h1>
          <div className="w-60 lg:w-64 2xl:w-80 h-2 bg-orange"></div>
        </div>

        <p className="text-gray lg:text-2xl lg:px-10">
          Trabajamos para la industria que necesitas.
        </p>
      </div>

      <div className="w-full">
        <div style={{ width: "100%", height: "500px" }}>
          <ReactFlow
            nodes={nodes}
            edges={edges}
            fitView
            zoomOnScroll={false}
            attributionPosition="bottom-right"
          ></ReactFlow>
        </div>
      </div>
    </section>
  );
};

export default Industries;
