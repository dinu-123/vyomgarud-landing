import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-[url('https://images.unsplash.com/photo-1603791452906-9d90f5aef4b8?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center relative">
      <div className="absolute inset-0 bg-black/60" />
      <motion.div
        className="relative z-10 px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-5xl md:text-7xl font-bold text-orange">VyomGarud</h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-200">
          Precision. Power. Performance.
        </p>
        <button className="mt-8 px-8 py-3 bg-orange text-black font-semibold rounded-xl
                       shadow-[0_0_18px_rgba(255,140,0,0.9)]
                       hover:shadow-[0_0_25px_rgba(255,140,0,1)]
                       hover:scale-105 active:scale-95 transition-all duration-300">
          Explore Our Drones
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;



