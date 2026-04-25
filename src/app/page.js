import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Companies from "@/sections/Companies";
import Stats from "@/sections/Stats";
import Features from "@/sections/Features";
import Testimonials from "@/sections/Testimonials";
import CTA from "@/sections/CTA";
import Contact from "@/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-gray-50">
      <Navbar />
      <Hero />
      <Companies />
      <Stats />
      <Features />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}