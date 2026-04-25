export default function Companies() {
    const logos = [
      "Google",
      "Amazon",
      "Microsoft",
      "Infosys",
      "TCS",
    ];
  
    return (
      <section className="py-16 bg-white text-center">
        <p className="text-gray-500 text-sm uppercase tracking-wide">
          Trusted by leading companies
        </p>
  
        <div className="mt-8 flex flex-wrap justify-center gap-10 text-gray-400 font-semibold text-lg">
          {logos.map((logo, index) => (
            <span key={index} className="hover:text-gray-700 transition">
              {logo}
            </span>
          ))}
        </div>
      </section>
    );
  }