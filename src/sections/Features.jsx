"use client";

import { motion } from "framer-motion";
import { Users, Clock, Award } from "lucide-react";

export default function Features() {
  const features = [
    { icon: <Users size={40} />, title: "Expert Mentors", desc: "Top professionals" },
    { icon: <Clock size={40} />, title: "Flexible Learning", desc: "Anytime access" },
    { icon: <Award size={40} />, title: "Certification", desc: "Boost career" },
  ];

  return (
    <section id="features" className="py-24 px-6 md:px-16 text-center bg-white">
      <h2 className="text-4xl font-bold">Why Choose Accredian?</h2>

      <div className="grid md:grid-cols-3 gap-10 mt-14">
        {features.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="p-8 bg-gray-50 rounded-2xl shadow hover:-translate-y-2 transition"
          >
            <div className="flex justify-center mb-4 text-blue-600">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-4 text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}