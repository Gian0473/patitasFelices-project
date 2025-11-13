import { Link, useParams } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { getGatito } from "../data/gatitos";

export default function GatitoDetalle() {
 const { id } = useParams();
 const gatito = getGatito(id || "");

 if (!gatito) {
  return (
   <div>
    <Navbar />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
     <div className="text-6xl mb-4">😿</div>
     <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Gatito no encontrado
     </h1>
     <p className="text-gray-600 mb-8">
      Lo sentimos, no pudimos encontrar este gatito.
     </p>
     <Link
      to="/gatitos"
      className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors inline-block"
     >
      Ver todos los gatitos
     </Link>
    </div>
    <Footer />
   </div>
  );
 }

 return (
  <div>
   <Navbar />

   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    {/* Breadcrumb */}
    <nav className="mb-8 text-gray-600">
     <Link to="/" className="hover:text-purple-600">
      Inicio
     </Link>
     <span className="mx-2">/</span>
     <Link to="/gatitos" className="hover:text-purple-600">
      Gatitos
     </Link>
     <span className="mx-2">/</span>
     <span className="text-gray-800 font-medium">{gatito.nombre}</span>
    </nav>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
     {/* Imagen */}
     <div>
      <div className="relative rounded-3xl overflow-hidden shadow-2xl mb-6">
       <img
        src={gatito.imagen}
        alt={gatito.nombre}
        className="w-full h-[500px] object-cover"
       />
       <div
        className={`absolute top-6 right-6 px-4 py-2 rounded-full text-sm font-bold ${gatito.estado === "Disponible"
         ? "bg-green-500 text-white"
         : gatito.estado === "En proceso"
          ? "bg-yellow-500 text-white"
          : "bg-gray-500 text-white"
         }`}
       >
        {gatito.estado}
       </div>
      </div>

      {/* Info rápida */}
      <div className="grid grid-cols-2 gap-4">
       <div className="bg-purple-50 rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">💉</div>
        <div className="text-sm text-gray-600 mb-1">Vacunas</div>
        <div className="font-bold text-gray-800">
         {gatito.vacunas ? "Al día" : "Pendiente"}
        </div>
       </div>
       <div className="bg-pink-50 rounded-xl p-4 text-center">
        <div className="text-3xl mb-2">✂️</div>
        <div className="text-sm text-gray-600 mb-1">Esterilización</div>
        <div className="font-bold text-gray-800">
         {gatito.esterilizado ? "Sí" : "No"}
        </div>
       </div>
      </div>
     </div>

     {/* Información */}
     <div>
      <h1 className="text-5xl font-bold text-gray-800 mb-4">
       {gatito.nombre}
      </h1>

      <div className="flex flex-wrap gap-3 mb-6">
       {gatito.personalidad.map((trait) => (
        <span
         key={trait}
         className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full font-medium"
        >
         {trait}
        </span>
       ))}
      </div>

      <div className="bg-white rounded-2xl p-6 shadow-lg mb-6">
       <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Información General
       </h2>
       <div className="space-y-4">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
         <span className="text-gray-600 flex items-center gap-2">
          <span>⏰</span> Edad
         </span>
         <span className="font-semibold text-gray-800">
          {gatito.edad}
         </span>
        </div>
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
         <span className="text-gray-600 flex items-center gap-2">
          <span>{gatito.sexo === "Macho" ? "♂️" : "♀️"}</span> Sexo
         </span>
         <span className="font-semibold text-gray-800">
          {gatito.sexo}
         </span>
        </div>
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
         <span className="text-gray-600 flex items-center gap-2">
          <span>🐱</span> Raza
         </span>
         <span className="font-semibold text-gray-800">
          {gatito.raza}
         </span>
        </div>
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
         <span className="text-gray-600 flex items-center gap-2">
          <span>🎨</span> Color
         </span>
         <span className="font-semibold text-gray-800">
          {gatito.color}
         </span>
        </div>
        <div className="flex items-center justify-between">
         <span className="text-gray-600 flex items-center gap-2">
          <span>⚖️</span> Peso
         </span>
         <span className="font-semibold text-gray-800">
          {gatito.peso}
         </span>
        </div>
       </div>
      </div>

      <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-2xl p-6 mb-6">
       <h2 className="text-2xl font-bold text-gray-800 mb-3">
        Sobre {gatito.nombre}
       </h2>
       <p className="text-gray-700 leading-relaxed">
        {gatito.descripcion}
       </p>
      </div>

      {gatito.estado === "Disponible" && (
       <Link
        to="/contacto"
        className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
       >
        ¡Quiero Adoptar a {gatito.nombre}! 💕
       </Link>
      )}

      {gatito.estado === "En proceso" && (
       <div className="bg-yellow-50 border-2 border-yellow-400 rounded-2xl p-6 text-center">
        <div className="text-4xl mb-3">⏳</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Adopción en Proceso
        </h3>
        <p className="text-gray-600">
         {gatito.nombre} está en proceso de adopción, pero puedes
         ver otros gatitos disponibles.
        </p>
        <Link
         to="/gatitos"
         className="inline-block mt-4 text-purple-600 font-semibold hover:text-purple-700"
        >
         Ver más gatitos →
        </Link>
       </div>
      )}
     </div>
    </div>

    {/* Requisitos */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
     <div className="bg-white rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
       <span>📋</span> Requisitos para Adoptar
      </h2>
      <ul className="space-y-4">
       {gatito.requisitos.map((req, index) => (
        <li key={index} className="flex items-start gap-3">
         <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
          <span className="text-white text-sm">✓</span>
         </div>
         <span className="text-gray-700">{req}</span>
        </li>
       ))}
      </ul>
     </div>

     <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
       <span>💡</span> Lo que Incluye la Adopción
      </h2>
      <ul className="space-y-4">
       <li className="flex items-start gap-3">
        <span className="text-2xl">🏥</span>
        <div>
         <div className="font-semibold text-gray-800">
          Chequeo Veterinario
         </div>
         <div className="text-gray-600 text-sm">
          Examen completo de salud
         </div>
        </div>
       </li>
       <li className="flex items-start gap-3">
        <span className="text-2xl">💉</span>
        <div>
         <div className="font-semibold text-gray-800">Vacunas</div>
         <div className="text-gray-600 text-sm">
          Todas las vacunas al día
         </div>
        </div>
       </li>
       <li className="flex items-start gap-3">
        <span className="text-2xl">🎁</span>
        <div>
         <div className="font-semibold text-gray-800">
          Kit de Bienvenida
         </div>
         <div className="text-gray-600 text-sm">
          Comida, juguetes y accesorios
         </div>
        </div>
       </li>
       <li className="flex items-start gap-3">
        <span className="text-2xl">📞</span>
        <div>
         <div className="font-semibold text-gray-800">
          Soporte 24/7
         </div>
         <div className="text-gray-600 text-sm">
          Asesoría post-adopción
         </div>
        </div>
       </li>
      </ul>
     </div>
    </div>

    {/* Más gatitos */}
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-3xl p-8 text-center">
     <h2 className="text-3xl font-bold text-gray-800 mb-4">
      ¿Quieres Conocer Más Gatitos? 🐾
     </h2>
     <p className="text-gray-600 mb-6">
      Tenemos más amigos peludos esperando por ti
     </p>
     <Link
      to="/gatitos"
      className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transform hover:scale-105 transition-all"
     >
      Ver Todos los Gatitos
     </Link>
    </div>
   </div>

   <Footer />
  </div>
 );
}