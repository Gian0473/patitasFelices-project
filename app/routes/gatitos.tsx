import { Link } from "react-router";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { gatitos } from "../data/gatitos";

export default function Gatitos() {
 const [filtroEstado, setFiltroEstado] = useState<string>("Todos");
 const [filtroSexo, setFiltroSexo] = useState<string>("Todos");
 const [filtroEdad, setFiltroEdad] = useState<string>("Todos");

 const gatitosFiltrados = gatitos.filter((gatito) => {
  if (filtroEstado !== "Todos" && gatito.estado !== filtroEstado)
   return false;
  if (filtroSexo !== "Todos" && gatito.sexo !== filtroSexo) return false;
  if (filtroEdad !== "Todos") {
   const edadNum = parseInt(gatito.edad);
   if (filtroEdad === "Cachorro" && edadNum > 6) return false;
   if (filtroEdad === "Joven" && (edadNum <= 6 || edadNum > 12))
    return false;
   if (filtroEdad === "Adulto" && edadNum <= 12) return false;
  }
  return true;
 });

 return (
  <div>
   <Navbar />

   {/* Hero de Gatitos */}
   <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Nuestros Gatitos 🐱
     </h1>
     <p className="text-xl text-white max-w-3xl mx-auto">
      Explora nuestra familia de gatitos esperando un hogar. Cada uno
      tiene una personalidad única y mucho amor para dar.
     </p>
    </div>
   </section>

   {/* Filtros */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    <div className="bg-white rounded-2xl shadow-lg p-6">
     <h2 className="text-2xl font-bold text-gray-800 mb-4">
      Filtrar Gatitos 🔍
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div>
       <label className="block text-sm font-medium text-gray-700 mb-2">
        Estado
       </label>
       <select
        value={filtroEstado}
        onChange={(e) => setFiltroEstado(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
       >
        <option>Todos</option>
        <option>Disponible</option>
        <option>En proceso</option>
       </select>
      </div>

      <div>
       <label className="block text-sm font-medium text-gray-700 mb-2">
        Sexo
       </label>
       <select
        value={filtroSexo}
        onChange={(e) => setFiltroSexo(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
       >
        <option>Todos</option>
        <option>Macho</option>
        <option>Hembra</option>
       </select>
      </div>

      <div>
       <label className="block text-sm font-medium text-gray-700 mb-2">
        Edad
       </label>
       <select
        value={filtroEdad}
        onChange={(e) => setFiltroEdad(e.target.value)}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
       >
        <option>Todos</option>
        <option>Cachorro</option>
        <option>Joven</option>
        <option>Adulto</option>
       </select>
      </div>
     </div>

     <div className="mt-4 flex items-center justify-between">
      <p className="text-gray-600">
       Mostrando {gatitosFiltrados.length} de {gatitos.length} gatitos
      </p>
      <button
       onClick={() => {
        setFiltroEstado("Todos");
        setFiltroSexo("Todos");
        setFiltroEdad("Todos");
       }}
       className="text-purple-600 hover:text-purple-700 font-medium"
      >
       Limpiar filtros
      </button>
     </div>
    </div>
   </section>

   {/* Grid de Gatitos */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
    {gatitosFiltrados.length === 0 ? (
     <div className="text-center py-20">
      <div className="text-6xl mb-4">😿</div>
      <h3 className="text-2xl font-bold text-gray-800 mb-2">
       No se encontraron gatitos
      </h3>
      <p className="text-gray-600 mb-6">
       Intenta ajustar los filtros para ver más opciones
      </p>
      <button
       onClick={() => {
        setFiltroEstado("Todos");
        setFiltroSexo("Todos");
        setFiltroEdad("Todos");
       }}
       className="bg-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors"
      >
       Ver todos los gatitos
      </button>
     </div>
    ) : (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {gatitosFiltrados.map((gatito) => (
       <Link
        key={gatito.id}
        to={`/gatitos/${gatito.id}`}
        className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover"
       >
        <div className="relative h-72 overflow-hidden">
         <img
          src={gatito.imagen}
          alt={gatito.nombre}
          className="w-full h-full object-cover"
         />
         <div
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${gatito.estado === "Disponible"
           ? "bg-green-500 text-white"
           : gatito.estado === "En proceso"
            ? "bg-yellow-500 text-white"
            : "bg-gray-500 text-white"
           }`}
         >
          {gatito.estado}
         </div>
         {gatito.esterilizado && (
          <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
           Esterilizado
          </div>
         )}
        </div>

        <div className="p-6">
         <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {gatito.nombre}
         </h3>

         <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-gray-600">
           <span>⏰</span>
           <span>{gatito.edad}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
           <span>{gatito.sexo === "Macho" ? "♂️" : "♀️"}</span>
           <span>{gatito.sexo}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
           <span>🎨</span>
           <span>{gatito.color}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
           <span>⚖️</span>
           <span>{gatito.peso}</span>
          </div>
         </div>

         <p className="text-gray-600 mb-4 line-clamp-3">
          {gatito.descripcion}
         </p>

         <div className="flex flex-wrap gap-2 mb-4">
          {gatito.personalidad.map((trait) => (
           <span
            key={trait}
            className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
           >
            {trait}
           </span>
          ))}
         </div>

         <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex gap-2">
           {gatito.vacunas && (
            <span className="text-green-600 text-sm">
             💉 Vacunado
            </span>
           )}
          </div>
          <div className="text-purple-600 font-semibold hover:text-purple-700">
           Ver detalles →
          </div>
         </div>
        </div>
       </Link>
      ))}
     </div>
    )}
   </section>

   {/* CTA */}
   <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-16">
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
      ¿Encontraste tu compañero perfecto? 💕
     </h2>
     <p className="text-lg text-white mb-6">
      Conoce más sobre nuestro proceso de adopción
     </p>
     <Link
      to="/proceso-adopcion"
      className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all inline-block"
     >
      Ver Proceso de Adopción
     </Link>
    </div>
   </section>

   <Footer />
  </div>
 );
}