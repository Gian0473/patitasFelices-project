import { Link, useLocation } from "react-router";
import { useState } from "react";

export default function Navbar() {
 const location = useLocation();
 const [isMenuOpen, setIsMenuOpen] = useState(false);

 const navLinks = [
  { to: "/", label: "Inicio" },
  { to: "/gatitos", label: "Gatitos" },
  { to: "/sobre-nosotros", label: "Sobre Nosotros" },
  { to: "/proceso-adopcion", label: "Proceso de Adopción" },
  { to: "/contacto", label: "Contacto" },
 ];

 const isActive = (path: string) => {
  if (path === "/") return location.pathname === "/";
  return location.pathname.startsWith(path);
 };

 return (
  <nav className="bg-white/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
     {/* Logo */}
     <Link to="/" className="flex items-center space-x-3 group">
      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
       <span className="text-2xl">🐱</span>
      </div>
      <div>
       <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
        Patitas Felices
       </h1>
       <p className="text-xs text-gray-600">Refugio de gatitos</p>
      </div>
     </Link>

     {/* Desktop Navigation */}
     <div className="hidden md:flex items-center space-x-1">
      {navLinks.map((link) => (
       <Link
        key={link.to}
        to={link.to}
        className={`px-4 py-2 rounded-lg font-medium transition-all ${isActive(link.to)
         ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg"
         : "text-gray-700 hover:bg-orange-100"
         }`}
       >
        {link.label}
       </Link>
      ))}
     </div>

     {/* CTA Button Desktop */}
     <div className="hidden md:block">
      <Link
       to="/gatitos"
       className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-xl transform hover:scale-105 transition-all"
      >
       Adopta Ahora ❤️
      </Link>
     </div>

     {/* Mobile Menu Button */}
     <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100"
     >
      <svg
       className="w-6 h-6"
       fill="none"
       stroke="currentColor"
       viewBox="0 0 24 24"
      >
       {isMenuOpen ? (
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M6 18L18 6M6 6l12 12"
        />
       ) : (
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         strokeWidth={2}
         d="M4 6h16M4 12h16M4 18h16"
        />
       )}
      </svg>
     </button>
    </div>

    {/* Mobile Menu */}
    {isMenuOpen && (
     <div className="md:hidden py-4 space-y-2">
      {navLinks.map((link) => (
       <Link
        key={link.to}
        to={link.to}
        onClick={() => setIsMenuOpen(false)}
        className={`block px-4 py-3 rounded-lg font-medium transition-all ${isActive(link.to)
         ? "bg-gradient-to-r from-orange-500 to-pink-500 text-white"
         : "text-gray-700 hover:bg-orange-100"
         }`}
       >
        {link.label}
       </Link>
      ))}
      <Link
       to="/gatitos"
       onClick={() => setIsMenuOpen(false)}
       className="block text-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold mt-4"
      >
       Adopta Ahora ❤️
      </Link>
     </div>
    )}
   </div>
  </nav>
 );
}