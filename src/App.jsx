import Hero from "./components/Hero";
import About from "./components/About";
import Capabilities from "./components/Capabilities";
import Highlights from "./components/Highlights";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="overflow-x-hidden">

      <Hero />
      <About />
      <Capabilities />
      <Highlights />
      <Footer />
    </div>
  );
}

export default App;
