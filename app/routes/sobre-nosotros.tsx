import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function SobreNosotros() {
 return (
  <div>
   <Navbar />

   {/* Hero */}
   <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Nuestra Historia 📖
     </h1>
     <p className="text-xl text-white max-w-3xl mx-auto">
      Más de 5 años dedicados a rescatar, cuidar y encontrar hogares
      amorosos para gatitos necesitados
     </p>
    </div>
   </section>

   {/* Nuestra Misión */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
     <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-6">
       ¿Quiénes Somos? 🏠
      </h2>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
       Patitas Felices nació del amor y la pasión por los felinos. Somos
       un refugio sin fines de lucro dedicado a rescatar gatitos
       abandonados, maltratados o en situación de calle.
      </p>
      <p className="text-lg text-gray-700 mb-4 leading-relaxed">
       Desde 2019, hemos trabajado incansablemente para dar una segunda
       oportunidad a más de 500 gatitos, brindándoles cuidados médicos,
       amor y la posibilidad de encontrar una familia permanente.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed">
       Nuestro equipo está conformado por veterinarios, voluntarios y
       amantes de los gatos que dedican su tiempo y corazón a esta noble
       causa.
      </p>
     </div>
     <div className="relative">
      <img
       src="https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80"
       alt="Refugio"
       className="rounded-3xl shadow-2xl"
      />
      <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl">
       <div className="text-4xl font-bold text-purple-600 mb-1">
        500+
       </div>
       <div className="text-gray-600">Gatitos rescatados</div>
      </div>
     </div>
    </div>

    {/* Valores */}
    <div className="mb-20">
     <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      Nuestros Valores 💖
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 text-center">
       <div className="text-6xl mb-4">❤️</div>
       <h3 className="text-2xl font-bold text-gray-800 mb-3">Amor</h3>
       <p className="text-gray-700">
        Cada gatito merece ser amado y cuidado. Tratamos a todos con
        cariño y respeto incondicional.
       </p>
      </div>

      <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8 text-center">
       <div className="text-6xl mb-4">🤝</div>
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Compromiso
       </h3>
       <p className="text-gray-700">
        Nos comprometemos con el bienestar de cada gatito, desde el
        rescate hasta su adopción definitiva.
       </p>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-8 text-center">
       <div className="text-6xl mb-4">🌟</div>
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Transparencia
       </h3>
       <p className="text-gray-700">
        Operamos con total transparencia, manteniendo informadas a las
        familias adoptivas en todo momento.
       </p>
      </div>
     </div>
    </div>
    {/* Qué Hacemos */}
    <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
     <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
      ¿Qué Hacemos? 🐾
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex gap-4">
       <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
        🚑
       </div>
       <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Rescate
        </h3>
        <p className="text-gray-600">
         Rescatamos gatitos en situaciones de abandono, maltrato o
         peligro en las calles.
        </p>
       </div>
      </div>

      <div className="flex gap-4">
       <div className="flex-shrink-0 w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-white text-xl">
        🏥
       </div>
       <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Atención Veterinaria
        </h3>
        <p className="text-gray-600">
         Proporcionamos atención médica completa: vacunas,
         desparasitación, esterilización y tratamientos necesarios.
        </p>
       </div>
      </div>

      <div className="flex gap-4">
       <div className="flex-shrink-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white text-xl">
        🏡
       </div>
       <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Hogar Temporal
        </h3>
        <p className="text-gray-600">
         Ofrecemos un hogar seguro y lleno de amor mientras encuentran
         su familia definitiva.
        </p>
       </div>
      </div>

      <div className="flex gap-4">
       <div className="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl">
        👨‍👩‍👧‍👦
       </div>
       <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Adopción Responsable
        </h3>
        <p className="text-gray-600">
         Facilitamos adopciones responsables, asegurando que cada
         gatito llegue al hogar perfecto.
        </p>
       </div>
      </div>

      <div className="flex gap-4">
       <div className="flex-shrink-0 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl">
        📚
       </div>
       <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Educación
        </h3>
        <p className="text-gray-600">
         Educamos sobre tenencia responsable y el cuidado adecuado de
         los felinos.
        </p>
       </div>
      </div>

      <div className="flex gap-4">
       <div className="flex-shrink-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl">
        💝
       </div>
       <div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Seguimiento
        </h3>
        <p className="text-gray-600">
         Hacemos seguimiento post-adopción para asegurar el bienestar
         de cada gatito en su nuevo hogar.
        </p>
       </div>
      </div>
     </div>
    </div>

    {/* Nuestro Equipo */}
    <div className="mb-20">
     <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
      Nuestro Equipo 👥
     </h2>
     <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
      Un grupo apasionado de profesionales y voluntarios dedicados al
      bienestar felino
     </p>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
       <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
        👩‍⚕️
       </div>
       <h3 className="text-xl font-bold text-gray-800 mb-2">
        Dra. Valentina Molina
       </h3>
       <p className="text-purple-600 font-medium mb-3">
        Veterinaria Principal
       </p>
       <p className="text-gray-600">
        10 años de experiencia en medicina felina. Especialista en
        cirugía y cuidados intensivos.
       </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
       <div className="w-24 h-24 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
        👨‍💼
       </div>
       <h3 className="text-xl font-bold text-gray-800 mb-2">
        Gian Velez
       </h3>
       <p className="text-purple-600 font-medium mb-3">
        Director del Refugio
       </p>
       <p className="text-gray-600">
        Fundador y alma del refugio. Coordinador de rescates y
        adopciones desde 2019.
       </p>
      </div>

      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
       <div className="w-24 h-24 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white text-4xl mx-auto mb-4">
        👩‍💻
       </div>
       <h3 className="text-xl font-bold text-gray-800 mb-2">
        Juan Fernando Orrego
       </h3>
       <p className="text-purple-600 font-medium mb-3">
        Coordinador de Voluntarios
       </p>
       <p className="text-gray-600">
        Gestiona nuestro increíble equipo de voluntarios y organiza
        eventos de adopción.
       </p>
      </div>
     </div>
    </div>

    {/* Logros */}
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-12 text-white text-center mb-20">
     <h2 className="text-4xl font-bold mb-12">
      Nuestros Logros 🏆
     </h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      <div>
       <div className="text-5xl font-bold mb-2">500+</div>
       <div className="text-white/90">Gatitos Adoptados</div>
      </div>
      <div>
       <div className="text-5xl font-bold mb-2">98%</div>
       <div className="text-white/90">Tasa de Éxito</div>
      </div>
      <div>
       <div className="text-5xl font-bold mb-2">150+</div>
       <div className="text-white/90">Voluntarios Activos</div>
      </div>
      <div>
       <div className="text-5xl font-bold mb-2">5</div>
       <div className="text-white/90">Años de Servicio</div>
      </div>
     </div>
    </div>

    {/* CTA */}
    <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-12 text-center">
     <h2 className="text-3xl font-bold text-gray-800 mb-4">
      ¿Quieres Ser Parte del Cambio? 🌟
     </h2>
     <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
      Ya sea adoptando, donando o siendo voluntario, puedes ayudarnos a
      seguir cambiando vidas felinas
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
       to="/gatitos"
       className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
      >
       Adopta un Gatito
      </Link>
      <Link
       to="/contacto"
       className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold border-2 border-purple-500 hover:bg-purple-50 transition-all"
      >
       Contáctanos
      </Link>
     </div>
    </div>
   </section>

   <Footer />
  </div>
 );
}