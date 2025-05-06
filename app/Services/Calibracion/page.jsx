import React from "react";
import Hero from "./components/Hero";
import Intro from "../Calibracion/components/Intro";
import Circles from "./components/Circles";

const calibracion = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Intro />
      <Circles />
    </div>
  );
};

export default calibracion;
