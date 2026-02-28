import Hero from "./Home/Hero";
import Industries from "./Home/Industries";
import Introduction from "./Home/Introduction";
import Brands from "./Home/Brands";
import Companies from "./Home/Companies";
import Findings from "./Home/Findings";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Industries />
      <Introduction />
      <Brands />
      <Findings />
    </div>
  );
};

export default Home;
