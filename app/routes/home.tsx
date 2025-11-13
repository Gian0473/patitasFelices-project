import { Link } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getGatitosDisponibles } from "../data/gatitos";

export default function Home() {
 const gatitosDestacados = getGatitosDisponibles().slice(0, 3);

 return (
  <div>
   <Navbar />

   {/* Hero Section */}
   <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-pink-400 to-purple-500 opacity-90"></div>
    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEyYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptMTIgMTJjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 text-shadow">
      Dale un Hogar a un Gatito 🏠
     </h1>
     <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto">
      Miles de gatitos esperan encontrar una familia que los ame.
      Transforma vidas y llena tu hogar de amor y ronroneos.
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
       to="/gatitos"
       className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all inline-block"
      >
       Ver Gatitos Disponibles 🐱
      </Link>
      <Link
       to="/proceso-adopcion"
       className="bg-purple-600/80 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-purple-700 transition-all inline-block border-2 border-white"
      >
       Cómo Adoptar
      </Link>
     </div>

     {/* Estadísticas */}
     <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
       <div className="text-4xl font-bold text-white mb-2">500+</div>
       <div className="text-white/90">Gatitos adoptados</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
       <div className="text-4xl font-bold text-white mb-2">98%</div>
       <div className="text-white/90">Familias felices</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
       <div className="text-4xl font-bold text-white mb-2">5</div>
       <div className="text-white/90">Años de experiencia</div>
      </div>
      <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6">
       <div className="text-4xl font-bold text-white mb-2">24/7</div>
       <div className="text-white/90">Soporte post-adopción</div>
      </div>
     </div>
    </div>
   </section>

   {/* Gatitos Destacados */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="text-center mb-12">
     <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
      Gatitos Esperando un Hogar 💝
     </h2>
     <p className="text-xl text-gray-600 max-w-2xl mx-auto">
      Conoce a algunos de nuestros adorables gatitos que buscan una
      familia
     </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
     {gatitosDestacados.map((gatito) => (
      <Link
       key={gatito.id}
       to={`/gatitos/${gatito.id}`}
       className="bg-white rounded-2xl overflow-hidden shadow-xl card-hover"
      >
       <div className="relative h-64 overflow-hidden">
        <img
         src={gatito.imagen}
         alt={gatito.nombre}
         className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
         {gatito.estado}
        </div>
       </div>
       <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
         {gatito.nombre}
        </h3>
        <div className="flex items-center gap-4 text-gray-600 mb-3">
         <span className="flex items-center gap-1">
          ⏰ {gatito.edad}
         </span>
         <span className="flex items-center gap-1">
          {gatito.sexo === "Macho" ? "♂️" : "♀️"} {gatito.sexo}
         </span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-2">
         {gatito.descripcion}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
         {gatito.personalidad.slice(0, 2).map((trait) => (
          <span
           key={trait}
           className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
          >
           {trait}
          </span>
         ))}
        </div>
        <div className="text-purple-600 font-semibold hover:text-purple-700">
         Conocer más →
        </div>
       </div>
      </Link>
     ))}
    </div>

    <div className="text-center">
     <Link
      to="/gatitos"
      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all inline-block"
     >
      Ver Todos los Gatitos
     </Link>
    </div>
   </section>
   {/* Por qué adoptar */}
   <section className="bg-gradient-to-r from-purple-100 to-pink-100 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
     <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
      ¿Por Qué Adoptar con Nosotros? 🌟
     </h2>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
       <div className="text-6xl mb-4">🏥</div>
       <h3 className="text-xl font-bold text-gray-800 mb-3">
        Salud Garantizada
       </h3>
       <p className="text-gray-600">
        Todos nuestros gatitos están vacunados, desparasitados y
        revisados por veterinarios
       </p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
       <div className="text-6xl mb-4">💝</div>
       <h3 className="text-xl font-bold text-gray-800 mb-3">
        Seguimiento Post-Adopción
       </h3>
       <p className="text-gray-600">
        Te acompañamos después de la adopción con consejos y apoyo
        continuo
       </p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
       <div className="text-6xl mb-4">📋</div>
       <h3 className="text-xl font-bold text-gray-800 mb-3">
        Proceso Simple
       </h3>
       <p className="text-gray-600">
        Adoptar es fácil y rápido, con requisitos claros y transparentes
       </p>
      </div>

      <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
       <div className="text-6xl mb-4">🎁</div>
       <h3 className="text-xl font-bold text-gray-800 mb-3">
        Kit de Bienvenida
       </h3>
       <p className="text-gray-600">
        Recibe un kit completo con todo lo necesario para los primeros
        días
       </p>
      </div>
     </div>
    </div>
   </section>

   {/* Testimonios */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-16">
     Historias de Éxito 📖
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
     <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center mb-4">
       <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
        M
       </div>
       <div>
        <h4 className="font-bold text-gray-800">María González</h4>
        <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
       </div>
      </div>
      <p className="text-gray-600 italic">
       "Adoptar a Luna fue la mejor decisión. El equipo nos ayudó en todo
       el proceso y ahora nuestra familia está completa. ¡Gracias!"
      </p>
     </div>

     <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center mb-4">
       <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
        J
       </div>
       <div>
        <h4 className="font-bold text-gray-800">Juan Pérez</h4>
        <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
       </div>
      </div>
      <p className="text-gray-600 italic">
       "Simba llegó a cambiar mi vida. Es el compañero perfecto y el
       refugio siempre estuvo disponible para responder mis dudas."
      </p>
     </div>

     <div className="bg-white rounded-2xl p-8 shadow-lg">
      <div className="flex items-center mb-4">
       <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
        S
       </div>
       <div>
        <h4 className="font-bold text-gray-800">Sofía Ramírez</h4>
        <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
       </div>
      </div>
      <p className="text-gray-600 italic">
       "El proceso fue muy profesional. Nos entregaron a Michi con todas
       sus vacunas y un kit completo. ¡Excelente servicio!"
      </p>
     </div>
    </div>
   </section>

   {/* CTA Final */}
   <section className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 py-20">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
      ¿Listo para Cambiar una Vida? 💕
     </h2>
     <p className="text-xl text-white mb-8">
      Cada gatito merece un hogar lleno de amor. Hoy puedes ser el héroe
      de uno de ellos.
     </p>
     <Link
      to="/gatitos"
      className="bg-white text-purple-600 px-10 py-5 rounded-full font-bold text-xl hover:shadow-2xl transform hover:scale-105 transition-all inline-block"
     >
      Encuentra tu Compañero Perfecto 🐾
     </Link>
    </div>
   </section>

   <Footer />
  </div>
 );
}