export default function Hero() {
    return (
      <section id="home" className="relative flex flex-col md:flex-row items-center justify-between py-28 px-6 md:px-16 bg-gradient-to-r from-blue-600 to-indigo-700 text-white overflow-hidden">
  
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent)]"></div>
  
        <div className="relative z-10 max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Transform Your Workforce with Future Skills
          </h1>
  
          <p className="mt-6 text-lg text-blue-100">
            Empower your employees with cutting-edge learning programs.
          </p>
  
          <div className="mt-10 flex gap-4 flex-col sm:flex-row">
            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow hover:scale-105 transition">
              Get Started
            </button>
            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Book Demo
            </button>
          </div>
        </div>
  
        <img
          src="https://images.unsplash.com/photo-1552664730-d307ca884978"
          className="rounded-2xl shadow-2xl mt-10 md:mt-0 w-[350px]"
        />
      </section>
    );
  }