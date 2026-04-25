"use client";
import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/lead", { method: "POST" });
    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 text-center bg-gray-50">
      <h2 className="text-3xl font-bold">Get in Touch</h2>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center gap-4">
        <input className="border p-3 rounded focus:ring-2 focus:ring-blue-500" placeholder="Name" />
        <input className="border p-3 rounded focus:ring-2 focus:ring-blue-500" placeholder="Email" />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </section>
  );
}