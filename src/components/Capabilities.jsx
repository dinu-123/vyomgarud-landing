const capabilities = [
  {
    title: "Autonomous UAV Systems",
    desc: "Fully automated drones with precision navigation and obstacle avoidance.",
  },
  {
    title: "Aerial Intelligence",
    desc: "Advanced imaging and AI-based data analysis for tactical decision-making.",
  },
  {
    title: "Custom Engineering",
    desc: "Tailored UAVs for defense, logistics, and industrial applications.",
  },
  {
    title: "Mission Control Software",
    desc: "Seamless ground control and analytics for mission-critical operations.",
  },
];

const Capabilities = () => {
  return (
    <section className="py-20 bg-black/60 px-6 md:px-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-orange">
        Our Capabilities
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {capabilities.map((cap, i) => (
          <div
            key={i}
            className="bg-charcoal p-6 rounded-2xl border border-gray-700 hover:border-orange transition"
          >
            <h3 className="text-xl font-semibold mb-3 text-white">{cap.title}</h3>
            <p className="text-gray-400 text-sm">{cap.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Capabilities;
