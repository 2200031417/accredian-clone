export default function Testimonials() {
    const testimonials = [
      {
        name: "Ravi Kumar",
        feedback: "Accredian helped our team upskill efficiently!",
      },
      {
        name: "Anjali Sharma",
        feedback: "Great platform with industry-relevant courses.",
      },
      {
        name: "Rahul Mehta",
        feedback: "Excellent learning experience and support.",
      },
    ];
  
    return (
      <section className="py-20 bg-gray-100 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          What Our Clients Say
        </h2>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-xl shadow-md"
            >
              <p className="text-gray-600">"{item.feedback}"</p>
              <h3 className="mt-4 font-semibold">{item.name}</h3>
            </div>
          ))}
        </div>
      </section>
    );
  }