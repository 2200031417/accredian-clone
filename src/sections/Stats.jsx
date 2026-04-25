export default function Stats() {
    const stats = [
      { number: "500+", label: "Companies" },
      { number: "10K+", label: "Learners" },
      { number: "95%", label: "Satisfaction Rate" },
    ];
  
    return (
      <section className="py-20 bg-gray-50 text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-4xl font-bold text-blue-600">
                {item.number}
              </h2>
              <p className="mt-2 text-gray-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }