"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const menu = [
    { name: "Home", link: "#home" },
    { name: "Features", link: "#features" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm px-6 md:px-16 py-4 flex justify-between items-center">
      
      <h1 className="text-2xl font-bold text-blue-600">Accredian</h1>

      {/* Desktop */}
      <ul className="hidden md:flex gap-8 font-medium text-gray-700">
        {menu.map((item) => (
          <a key={item.name} href={item.link} className="hover:text-blue-600 transition">
            {item.name}
          </a>
        ))}
      </ul>

      <button className="hidden md:block bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
        Login
      </button>

      {/* Mobile */}
      <div className="md:hidden">
        {open ? (
          <X onClick={() => setOpen(false)} />
        ) : (
          <Menu onClick={() => setOpen(true)} />
        )}
      </div>

      {open && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          {menu.map((item) => (
            <a key={item.name} href={item.link} onClick={() => setOpen(false)}>
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}