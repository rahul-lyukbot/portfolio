import Nav from "./nav";
import Hero from "./hero";
import About from "./about";
import Resume from "./resume";
const main = () => {
  return (
    <div className="bg-black">
      <Nav />
      <Hero />
      <About />
      <Resume />
    </div>
  );
};

export default main;
