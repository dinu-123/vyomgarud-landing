const Footer = () => {
  return (
    <footer className="py-10 text-center bg-black/80">
      <h3 className="text-xl font-semibold text-orange mb-4">Contact Us</h3>
      <form className="flex flex-col md:flex-row justify-center gap-4 max-w-lg mx-auto">
        <input
          type="text"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-charcoal border border-gray-700 text-white focus:outline-none focus:border-orange"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg bg-charcoal border border-gray-700 text-white focus:outline-none focus:border-orange"
        />
        <button className="bg-orange px-6 py-3 rounded-lg text-white font-semibold hover:bg-orange/80 transition">
          Send
        </button>
      </form>
      <p className="text-gray-400 mt-6 text-sm">
        © {new Date().getFullYear()} VyomGarud | Built with precision and passion
      </p>
    </footer>
  );
};

export default Footer;
