import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Questions from "./components/Questions";

const mantenimiento = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Intro />
      <Questions />
    </div>
  );
};

export default mantenimiento;
