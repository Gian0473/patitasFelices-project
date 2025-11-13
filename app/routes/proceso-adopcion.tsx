import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router";

export default function ProcesoAdopcion() {
 return (
  <div>
   <Navbar />

   {/* Hero */}
   <section className="bg-gradient-to-r from-orange-500 to-pink-500 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Proceso de Adopción 📋
     </h1>
     <p className="text-xl text-white max-w-3xl mx-auto">
      Adoptar es fácil, rápido y transparente. Conoce los pasos para darle
      un hogar a tu nuevo mejor amigo
     </p>
    </div>
   </section>

   {/* Pasos del Proceso */}
   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="mb-16">
     <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
      El Camino hacia tu Nuevo Compañero 🐾
     </h2>
     <p className="text-center text-gray-600 max-w-2xl mx-auto">
      Nuestro proceso está diseñado para asegurar que cada gatito encuentre
      el hogar perfecto
     </p>
    </div>

    <div className="space-y-8 mb-20">
     {/* Paso 1 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       1
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Explora y Elige 🔍
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        Visita nuestra galería de gatitos disponibles y conoce sus
        personalidades, necesidades y características. Tómate tu tiempo
        para encontrar al compañero que mejor se adapte a tu estilo de
        vida.
       </p>
       <Link
        to="/gatitos"
        className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-2"
       >
        Ver gatitos disponibles →
       </Link>
      </div>
     </div>

     {/* Paso 2 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       2
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Completa el Formulario 📝
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        Llena nuestro formulario de adopción. Necesitamos conocer un poco
        sobre ti, tu hogar y tu experiencia con mascotas. Esto nos ayuda
        a hacer el mejor match posible. El formulario toma solo 10
        minutos.
       </p>
       <div className="bg-purple-50 rounded-lg p-4 mb-4">
        <h4 className="font-semibold text-gray-800 mb-2">
         Información requerida:
        </h4>
        <ul className="space-y-1 text-gray-700">
         <li>• Datos personales y de contacto</li>
         <li>• Información sobre tu hogar</li>
         <li>• Experiencia con mascotas</li>
         <li>• Motivación para adoptar</li>
        </ul>
       </div>
       <Link
        to="/contacto"
        className="text-purple-600 font-semibold hover:text-purple-700 inline-flex items-center gap-2"
       >
        Ir al formulario →
       </Link>
      </div>
     </div>

     {/* Paso 3 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       3
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Evaluación y Entrevista 💬
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        Nuestro equipo revisará tu solicitud y te contactará en 24-48
        horas para una breve entrevista. Esta conversación nos permite
        conocerte mejor y responder todas tus dudas sobre el gatito que
        elegiste.
       </p>
       <div className="bg-blue-50 rounded-lg p-4">
        <p className="text-sm text-gray-700">
         <strong>Tip:</strong> Prepara preguntas sobre el cuidado,
         alimentación y comportamiento del gatito. ¡Queremos que estés
         100% seguro!
        </p>
       </div>
      </div>
     </div>

     {/* Paso 4 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       4
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Conoce a tu Gatito 🤝
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        Una vez aprobada tu solicitud, coordinaremos una visita para que
        conozcas personalmente al gatito. Podrás interactuar con él,
        jugar y asegurarte de que hay química entre ustedes. Si todo va
        bien, ¡es momento de seguir adelante!
       </p>
       <div className="grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-lg p-3 text-center">
         <div className="text-2xl mb-1">📍</div>
         <div className="text-sm text-gray-700">
          Visita al refugio
         </div>
        </div>
        <div className="bg-pink-50 rounded-lg p-3 text-center">
         <div className="text-2xl mb-1">🎮</div>
         <div className="text-sm text-gray-700">
          Tiempo de juego
         </div>
        </div>
       </div>
      </div>
     </div>
     {/* Paso 5 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       5
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Firma del Contrato 📄
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        Firmamos un contrato de adopción que protege los derechos del
        gatito y establece tus responsabilidades como adoptante. Este
        documento garantiza el bienestar del felino y formaliza el
        compromiso de por vida.
       </p>
       <div className="bg-green-50 rounded-lg p-4">
        <h4 className="font-semibold text-gray-800 mb-2">
         El contrato incluye:
        </h4>
        <ul className="space-y-1 text-gray-700 text-sm">
         <li>✓ Compromiso de cuidado responsable</li>
         <li>✓ Atención veterinaria regular</li>
         <li>✓ No abandono ni maltrato</li>
         <li>✓ Autorización para seguimiento</li>
        </ul>
       </div>
      </div>
     </div>

     {/* Paso 6 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       6
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        ¡Llévalo a Casa! 🏡
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        El día más esperado ha llegado. Te entregaremos a tu nuevo
        compañero con su cartilla de vacunación, kit de bienvenida y
        todas las recomendaciones para los primeros días. ¡Tu gatito está
        listo para su nuevo hogar!
       </p>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-orange-50 rounded-lg p-4">
         <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <span>🎁</span> Kit de Bienvenida
         </h4>
         <ul className="space-y-1 text-gray-700 text-sm">
          <li>• Alimento para 1 mes</li>
          <li>• Juguetes</li>
          <li>• Platos para comida</li>
          <li>• Arena sanitaria</li>
         </ul>
        </div>
        <div className="bg-orange-50 rounded-lg p-4">
         <h4 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
          <span>📚</span> Documentación
         </h4>
         <ul className="space-y-1 text-gray-700 text-sm">
          <li>• Cartilla de vacunación</li>
          <li>• Historial médico</li>
          <li>• Guía de cuidados</li>
          <li>• Contactos de emergencia</li>
         </ul>
        </div>
       </div>
      </div>
     </div>

     {/* Paso 7 */}
     <div className="flex gap-6 items-start">
      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
       7
      </div>
      <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
       <h3 className="text-2xl font-bold text-gray-800 mb-3">
        Seguimiento Post-Adopción 💝
       </h3>
       <p className="text-gray-700 mb-4 leading-relaxed">
        No te dejamos solo. Realizamos seguimiento durante los primeros
        meses para asegurarnos de que todo va bien. Estamos disponibles
        24/7 para resolver dudas, dar consejos y apoyarte en esta hermosa
        etapa.
       </p>
       <div className="bg-purple-50 rounded-lg p-4">
        <div className="grid grid-cols-3 gap-4 text-center">
         <div>
          <div className="text-2xl mb-1">📞</div>
          <div className="text-xs text-gray-700 font-medium">
           Soporte 24/7
          </div>
         </div>
         <div>
          <div className="text-2xl mb-1">📧</div>
          <div className="text-xs text-gray-700 font-medium">
           Consultas online
          </div>
         </div>
         <div>
          <div className="text-2xl mb-1">👥</div>
          <div className="text-xs text-gray-700 font-medium">
           Comunidad
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>
    </div>

    {/* Requisitos Generales */}
    <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-12 mb-20">
     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Requisitos Generales para Adoptar ✅
     </h2>
     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="bg-white rounded-xl p-6">
       <h3 className="text-xl font-bold text-gray-800 mb-4">
        Requisitos Básicos
       </h3>
       <ul className="space-y-3">
        <li className="flex items-start gap-3">
         <span className="text-green-500 text-xl">✓</span>
         <span className="text-gray-700">
          Ser mayor de 21 años
         </span>
        </li>
        <li className="flex items-start gap-3">
         <span className="text-green-500 text-xl">✓</span>
         <span className="text-gray-700">
          Tener autorización del propietario si rentas
         </span>
        </li>
        <li className="flex items-start gap-3">
         <span className="text-green-500 text-xl">✓</span>
         <span className="text-gray-700">
          Hogar seguro (ventanas con mallas, sin acceso a balcones
          abiertos)
         </span>
        </li>
        <li className="flex items-start gap-3">
         <span className="text-green-500 text-xl">✓</span>
         <span className="text-gray-700">
          Capacidad económica para gastos veterinarios y alimentación
         </span>
        </li>
       </ul>
      </div>

      <div className="bg-white rounded-xl p-6">
       <h3 className="text-xl font-bold text-gray-800 mb-4">
        Compromiso
       </h3>
       <ul className="space-y-3">
        <li className="flex items-start gap-3">
         <span className="text-purple-500 text-xl">♥</span>
         <span className="text-gray-700">
          Proporcionar amor y tiempo de calidad
         </span>
        </li>
        <li className="flex items-start gap-3">
         <span className="text-purple-500 text-xl">♥</span>
         <span className="text-gray-700">
          Atención veterinaria regular y vacunas al día
         </span>
        </li>
        <li className="flex items-start gap-3">
         <span className="text-purple-500 text-xl">♥</span>
         <span className="text-gray-700">
          Alimentación de calidad
         </span>
        </li>
        <li className="flex items-start gap-3">
         <span className="text-purple-500 text-xl">♥</span>
         <span className="text-gray-700">
          Compromiso de por vida (10-20 años)
         </span>
        </li>
       </ul>
      </div>
     </div>
    </div>

    {/* Costos */}
    <div className="bg-white rounded-3xl p-12 shadow-xl mb-20">
     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Costo de Adopción 💰
     </h2>
     <div className="max-w-3xl mx-auto">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 mb-6">
       <div className="text-center mb-6">
        <div className="text-5xl font-bold mb-2">$150.000 COP</div>
        <div className="text-lg">Contribución de adopción</div>
       </div>
       <div className="border-t border-white/30 pt-6">
        <h3 className="font-bold mb-4 text-center">
         Esta contribución incluye:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Esterilización/Castración</span>
         </div>
         <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Vacunas completas</span>
         </div>
         <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Desparasitación</span>
         </div>
         <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Chequeo veterinario</span>
         </div>
         <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Kit de bienvenida</span>
         </div>
         <div className="flex items-center gap-2">
          <span>✓</span>
          <span>Seguimiento post-adopción</span>
         </div>
        </div>
       </div>
      </div>
      <p className="text-center text-gray-600 text-sm">
       El costo real del cuidado médico y alimentación del gatito supera
       los $400.000 COP. Tu contribución nos ayuda a seguir rescatando más
       vidas.
      </p>
     </div>
    </div>

    {/* Preguntas Frecuentes */}
    <div className="mb-20">
     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Preguntas Frecuentes 🤔
     </h2>
     <div className="space-y-4">
      <details className="bg-white rounded-xl p-6 shadow-lg">
       <summary className="font-bold text-gray-800 cursor-pointer">
        ¿Cuánto tiempo toma el proceso de adopción?
       </summary>
       <p className="mt-4 text-gray-600">
        El proceso completo puede tomar entre 5-7 días desde que
        completas el formulario hasta que llevas a casa a tu gatito.
        Trabajamos rápido para facilitar las adopciones responsables.
       </p>
      </details>

      <details className="bg-white rounded-xl p-6 shadow-lg">
       <summary className="font-bold text-gray-800 cursor-pointer">
        ¿Puedo adoptar si tengo otros gatos o perros?
       </summary>
       <p className="mt-4 text-gray-600">
        ¡Sí! Muchos de nuestros gatitos se llevan bien con otros animales.
        Durante la entrevista evaluaremos la compatibilidad y te
        ayudaremos a hacer una introducción gradual y exitosa.
       </p>
      </details>

      <details className="bg-white rounded-xl p-6 shadow-lg">
       <summary className="font-bold text-gray-800 cursor-pointer">
        ¿Qué pasa si no funciona la adopción?
       </summary>
       <p className="mt-4 text-gray-600">
        Si por alguna razón la adopción no funciona, nos comprometemos a
        recibir al gatito de vuelta. Nunca queremos que terminen en la
        calle o en un mal hogar. Contáctanos y trabajaremos juntos en una
        solución.
       </p>
      </details>

      <details className="bg-white rounded-xl p-6 shadow-lg">
       <summary className="font-bold text-gray-800 cursor-pointer">
        ¿Los gatitos ya están esterilizados?
       </summary>
       <p className="mt-4 text-gray-600">
        Los gatitos mayores de 6 meses ya están esterilizados. Para los
        más pequeños, incluimos un vale para la esterilización gratuita
        cuando alcancen la edad adecuada en nuestra clínica veterinaria
        asociada.
       </p>
      </details>

      <details className="bg-white rounded-xl p-6 shadow-lg">
       <summary className="font-bold text-gray-800 cursor-pointer">
        ¿Ofrecen garantía de salud?
       </summary>
       <p className="mt-4 text-gray-600">
        Todos nuestros gatitos son revisados por veterinarios antes de la
        adopción. Ofrecemos una garantía de salud de 14 días contra
        enfermedades congénitas no detectadas. Además, brindamos soporte
        veterinario gratuito durante el primer mes.
       </p>
      </details>
     </div>
    </div>

    {/* CTA Final */}
    <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-500 rounded-3xl p-12 text-center text-white">
     <h2 className="text-4xl font-bold mb-4">
      ¿Listo para Comenzar? 🎉
     </h2>
     <p className="text-xl mb-8 max-w-2xl mx-auto">
      Da el primer paso hacia una amistad que durará toda la vida
     </p>
     <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Link
       to="/gatitos"
       className="bg-white text-purple-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
      >
       Ver Gatitos Disponibles
      </Link>
      <Link
       to="/contacto"
       className="bg-purple-600/80 backdrop-blur text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-white hover:bg-purple-700 transition-all"
      >
       Iniciar Solicitud
      </Link>
     </div>
    </div>
   </section>

   <Footer />
  </div>
 );
}