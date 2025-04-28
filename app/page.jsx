import Hero from "./Home/Hero";
import Industries from "./Home/Industries";
import Introduction from "./Home/Introduction";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Industries />
      <Introduction />
    </div>
  );
};

export default Home;
