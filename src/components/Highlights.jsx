const highlights = [
  "Military-grade reliability & design",
  "End-to-end in-house R&D and manufacturing",
  "AI-powered autonomy for complex missions",
];

const Highlights = () => {
  return (
    <section className="py-16 text-center px-6 md:px-20 bg-black/70">
      <h2 className="text-3xl font-bold mb-8 text-orange">Why Choose VyomGarud?</h2>
      <div className="flex flex-col md:flex-row justify-center gap-8">
        {highlights.map((point, i) => (
          <div
            key={i}
            className="bg-charcoal p-6 rounded-xl border border-gray-700 hover:border-orange transition max-w-sm mx-auto"
          >
            <p className="text-gray-300 text-lg">{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Highlights;
