import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contacto() {
 const [formData, setFormData] = useState({
  nombre: "",
  email: "",
  telefono: "",
  gatitoInteres: "",
  tipoVivienda: "",
  experiencia: "",
  motivacion: "",
 });

 const [enviado, setEnviado] = useState(false);

 const handleChange = (
  e: React.ChangeEvent<
   HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
  >
 ) => {
  setFormData({
   ...formData,
   [e.target.name]: e.target.value,
  });
 };

 const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  // Aquí iría la lógica para enviar el formulario
  setEnviado(true);
  setTimeout(() => {
   setEnviado(false);
   setFormData({
    nombre: "",
    email: "",
    telefono: "",
    gatitoInteres: "",
    tipoVivienda: "",
    experiencia: "",
    motivacion: "",
   });
  }, 5000);
 };

 return (
  <div>
   <Navbar />

   {/* Hero */}
   <section className="bg-gradient-to-r from-purple-500 to-pink-500 py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
     <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
      Contáctanos 📞
     </h1>
     <p className="text-xl text-white max-w-3xl mx-auto">
      ¿Tienes preguntas o estás listo para adoptar? Estamos aquí para
      ayudarte
     </p>
    </div>
   </section>

   <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
     {/* Información de Contacto */}
     <div className="lg:col-span-1">
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 sticky top-24">
       <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Información de Contacto
       </h2>

       <div className="space-y-6">
        <div className="flex items-start gap-4">
         <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">📍</span>
         </div>
         <div>
          <h3 className="font-semibold text-gray-800 mb-1">
           Dirección
          </h3>
          <p className="text-gray-600">
           Calle del Amor Felino 123
           <br />
           Colonia Centro
           <br />
           Ciudad, CP 12345
          </p>
         </div>
        </div>

        <div className="flex items-start gap-4">
         <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">📞</span>
         </div>
         <div>
          <h3 className="font-semibold text-gray-800 mb-1">
           Teléfono
          </h3>
          <p className="text-gray-600">
           (123) 456-7890
           <br />
           WhatsApp: (123) 456-7891
          </p>
         </div>
        </div>

        <div className="flex items-start gap-4">
         <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">✉️</span>
         </div>
         <div>
          <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
          <p className="text-gray-600">
           info@patitasfelices.com
           <br />
           adopciones@patitasfelices.com
          </p>
         </div>
        </div>

        <div className="flex items-start gap-4">
         <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">⏰</span>
         </div>
         <div>
          <h3 className="font-semibold text-gray-800 mb-1">
           Horario
          </h3>
          <p className="text-gray-600">
           Lunes a Viernes: 10am - 6pm
           <br />
           Sábados: 10am - 4pm
           <br />
           Domingos: Cerrado
          </p>
         </div>
        </div>
       </div>

       <div className="mt-8 pt-8 border-t border-gray-300">
        <h3 className="font-semibold text-gray-800 mb-4">
         Síguenos en Redes
        </h3>
        <div className="flex gap-3">
         <a
          title="YOUTUBE"
          href="#"
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
         >
          <svg viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="44.160000000000004"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M457.833 409.589C428.769 401.499 435.461 454.433 433.863 472.11C438.257 485.793 428.969 552.31 452.24 541.624C487.985 525.132 518.132 501.177 549.263 476.985C556.149 471.633 555.328 460.859 547.876 456.329C518.431 438.428 491.544 417.974 457.833 409.589ZM373.937 272.959C539.131 269.464 772.339 219.826 759.156 461.624C777.233 677.054 622.227 665.868 461.628 665.169C343.675 666.967 225.323 668.665 235.51 515.356C231.316 401.698 225.623 276.954 373.937 272.959Z" fill="white"></path> <path d="M365.646 84.396C527.744 84.9952 748.867 45.4447 842.351 215.232C876.208 280.251 869.616 355.757 873.112 426.768C875.209 489.989 876.608 553.21 872.513 616.231C844.048 851.038 723.399 881.899 511.065 879.502C422.575 881.699 333.586 871.113 248.193 848.041C152.912 828.766 94.8849 738.478 90.3905 645.395C83.599 494.284 66.9198 297.23 146.52 163.497C196.258 94.2836 288.343 92.4859 365.646 84.396ZM759.254 461.624C772.338 219.827 539.229 269.465 373.936 272.96C225.522 276.955 231.314 401.699 235.509 515.357C225.422 668.766 343.674 666.968 461.626 665.17C622.226 665.969 777.332 677.055 759.254 461.624Z" fill="#ffffff"></path> <path d="M433.859 472.113C435.457 454.435 428.766 401.402 457.829 409.591C491.542 417.977 518.359 438.432 547.844 456.334C555.304 460.863 556.132 471.647 549.241 477.002C518.117 501.189 487.975 525.138 452.236 541.626C428.966 552.313 438.254 485.796 433.859 472.113Z" fill="#ffffff"></path> </g></svg>
         </a>
         <a
          title="INSTAGRAM"
          href="#"
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
         >
          <svg viewBox="0 0 960.00 960.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="32.64"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M599.256 326.893C638.207 324.995 644.199 388.816 601.453 383.223C565.997 382.224 561.503 327.892 599.256 326.893Z" fill="white"></path> <path d="M726.895 478.902C729.991 250.487 638.505 220.924 429.866 233.608C286.146 222.522 229.716 331.386 229.317 460.125C221.527 586.168 260.378 745.468 417.282 732.085C613.137 728.59 735.984 708.714 726.895 478.902ZM384.423 85.7931C608.743 64.9192 868.418 97.079 871.514 377.828C879.404 507.066 883.599 645.593 820.278 762.847C752.862 877.503 640.503 872.709 523.649 875.406C420.877 879.501 314.91 888.39 215.834 854.732C114.86 819.776 87.3942 743.571 89.5915 643.895C86.0959 558.103 82.6002 472.51 84.0984 386.617C89.0921 183.071 177.981 81.099 384.423 85.7931Z" fill="#ffffff"></path> <path d="M429.866 233.608C638.505 220.924 729.89 250.487 726.894 478.902C735.983 708.714 613.136 728.49 417.381 732.085C260.377 745.469 221.626 586.068 229.416 460.125C229.716 331.386 286.145 222.522 429.866 233.608ZM682.949 486.093C682.949 344.67 665.571 269.763 504.972 276.954C457.231 281.648 401.401 274.557 353.461 290.837C257.181 337.878 270.465 467.216 279.354 556.904C288.043 701.823 408.193 697.528 520.652 681.349C658.779 674.058 684.248 614.432 682.949 486.093Z" fill="white"></path> <path d="M495.188 393.309C393.515 388.116 362.155 555.606 473.715 560.101C578.584 557.604 594.664 423.172 495.188 393.309ZM473.915 354.857C649.495 342.972 638.709 602.448 473.116 600.65C316.212 595.856 330.894 368.84 473.915 354.857Z" fill="white"></path> <path d="M473.813 560.102C362.252 555.508 393.513 388.017 495.286 393.31C594.662 423.173 578.582 557.605 473.813 560.102Z" fill="#ffffff"></path> <path d="M504.973 276.955C665.572 269.664 683.05 344.67 682.95 486.093C684.149 614.433 658.781 674.058 520.653 681.349C408.194 697.529 288.044 701.823 279.355 556.905C270.466 467.117 257.282 337.878 353.462 290.837C401.402 274.558 457.233 281.649 504.973 276.955ZM473.213 600.65C638.706 602.448 649.592 342.972 474.012 354.857C330.89 368.84 316.209 595.856 473.213 600.65ZM601.452 383.222C644.199 388.815 638.206 325.094 599.255 326.892C561.502 327.891 565.997 382.223 601.452 383.222Z" fill="#ffffff"></path> </g></svg>
         </a>
         <a
          title="FACEBOOK"
          href="#"
          className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
         >
          <svg viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000" stroke-width="48"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M549.621 876.405C542.929 875.206 524.752 883.396 524.053 874.107C526.25 776.23 528.148 678.352 530.845 580.474C533.441 569.288 603.354 573.383 618.135 570.187C640.208 566.792 638.11 537.428 643.204 520.649C643.704 495.68 664.478 447.141 625.227 444.844C609.746 440.749 545.426 450.137 543.229 435.955C525.551 388.315 576.887 382.322 611.244 378.427C646.101 374.931 635.813 297.628 641.207 270.961C645.102 228.614 564.203 239.001 536.637 236.305C485.102 237.104 429.571 257.578 407.798 307.815C388.922 344.37 385.926 385.119 381.931 425.268C378.934 433.858 347.074 429.463 337.386 431.76C290.445 431.661 311.019 520.749 307.224 551.81C309.022 585.468 355.164 574.582 378.135 575.281C390.32 581.373 381.531 635.705 384.128 651.286C384.627 651.286 385.027 651.286 385.526 651.286C382.929 721.398 379.434 791.511 375.239 861.623C374.24 868.115 377.836 882.297 366.75 877.903C324.203 874.707 415.489 866.117 374.24 849.738V878.102L525.351 879.101V864.719C487.898 870.412 615.439 871.311 577.586 874.707C568.098 877.204 558.81 875.606 549.621 876.405Z" fill="white"></path> <path d="M869.219 530.637C866.822 447.241 862.927 363.845 857.134 280.35C832.665 87.4909 697.134 68.6145 531.741 84.6944C471.516 87.5908 410.492 81.2987 349.768 86.7918C296.934 89.4884 240.705 91.9853 194.263 120.45C143.926 149.913 117.658 204.145 107.471 259.776C98.2826 306.417 90.4924 352.959 89.993 400.699C85.998 462.922 88.1952 525.244 93.5885 587.466C97.983 641.698 103.177 696.33 123.351 747.366C144.824 799.301 187.471 831.361 236.909 850.937C278.158 867.316 324.1 874.907 366.647 878.103C377.733 882.497 374.238 868.415 375.137 861.823C379.331 791.711 382.927 721.698 385.424 651.486C384.924 651.486 384.525 651.486 384.025 651.486C381.429 635.806 390.218 581.573 378.033 575.481C354.962 574.782 308.919 585.668 307.122 552.01C310.917 520.949 290.243 431.86 337.284 431.96C346.972 429.763 378.832 434.158 381.828 425.468C385.823 385.319 388.919 344.57 407.696 308.015C429.469 257.778 484.999 237.304 536.535 236.505C564.1 239.101 644.999 228.814 641.104 271.161C635.811 297.828 645.998 375.131 611.141 378.627C576.784 382.522 525.449 388.515 543.127 436.155C545.324 450.337 609.643 440.949 625.124 445.044C664.375 447.341 643.601 495.98 643.102 520.849C638.008 537.628 640.205 566.992 618.033 570.387C603.251 573.683 533.339 569.588 530.742 580.674C528.045 678.552 526.048 776.43 523.95 874.307C524.65 883.596 542.827 875.306 549.519 876.604C558.807 875.805 567.995 877.403 577.484 875.006C615.336 871.611 654.787 870.712 692.24 865.019C748.27 856.43 799.706 836.954 833.663 781.623C878.407 706.817 872.914 614.532 869.219 530.637Z" fill="#ffffff"></path> </g></svg>
         </a>
        </div>
       </div>
      </div >
     </div >

     {/* Formulario */}
     < div className="lg:col-span-2" >
      <div className="bg-white rounded-2xl p-8 shadow-xl">
       <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Formulario de Contacto
       </h2>
       <p className="text-gray-600 mb-8">
        Completa el formulario y nos pondremos en contacto contigo en
        menos de 24 horas
       </p>

       {enviado ? (
        <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-8 text-center">
         <div className="text-6xl mb-4">✅</div>
         <h3 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Formulario Enviado!
         </h3>
         <p className="text-gray-600 mb-4">
          Gracias por tu interés en adoptar. Hemos recibido tu
          solicitud y nos pondremos en contacto contigo muy pronto.
         </p>
         <p className="text-sm text-gray-500">
          Revisa tu email en las próximas 24-48 horas
         </p>
        </div>
       ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
         {/* Información Personal */}
         <div className="space-y-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
           Información Personal
          </h3>

          <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
            Nombre completo *
           </label>
           <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Juan Pérez"
           />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
           <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
             Email *
            </label>
            <input
             type="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
             placeholder="tu@email.com"
            />
           </div>

           <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
             Teléfono *
            </label>
            <input
             type="tel"
             name="telefono"
             value={formData.telefono}
             onChange={handleChange}
             required
             className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
             placeholder="(123) 456-7890"
            />
           </div>
          </div>
         </div>

         {/* Información de Adopción */}
         <div className="space-y-4 pt-6 border-t border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
           Sobre la Adopción
          </h3>

          <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Qué gatito te interesa? (opcional)
           </label>
           <input
            type="text"
            name="gatitoInteres"
            value={formData.gatitoInteres}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Ej: Luna, Simba, o cualquier gatito disponible"
           />
          </div>

          <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
            Tipo de vivienda *
           </label>
           <select
            name="tipoVivienda"
            value={formData.tipoVivienda}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
           >
            <option value="">Selecciona una opción</option>
            <option value="casa">Casa propia</option>
            <option value="departamento">Departamento propio</option>
            <option value="renta">Casa/Depto rentado</option>
           </select>
          </div>

          <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Tienes experiencia con gatos? *
           </label>
           <select
            name="experiencia"
            value={formData.experiencia}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
           >
            <option value="">Selecciona una opción</option>
            <option value="si-mucha">
             Sí, mucha experiencia
            </option>
            <option value="si-poca">Sí, poca experiencia</option>
            <option value="no">No, sería mi primer gato</option>
           </select>
          </div>

          <div>
           <label className="block text-sm font-medium text-gray-700 mb-2">
            ¿Por qué quieres adoptar un gatito? *
           </label>
           <textarea
            name="motivacion"
            value={formData.motivacion}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
            placeholder="Cuéntanos un poco sobre tu motivación para adoptar..."
           />
          </div>
         </div>

         {/* Botón Submit */}
         <div className="pt-4">
          <button
           type="submit"
           className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all"
          >
           Enviar Solicitud 💕
          </button>
          <p className="text-sm text-gray-500 text-center mt-4">
           * Campos obligatorios. Responderemos en menos de 24 horas.
          </p>
         </div>
        </form>
       )}
      </div>

      {/* Otras formas de contacto */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
       <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6">
        <svg width="45px" height="64px" viewBox="0 0 960 960" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M569.799 693.132C515.167 706.815 457.24 700.023 403.907 683.544C389.225 679.049 375.242 681.147 361.46 685.241C329.999 694.53 298.838 704.717 267.677 714.605C253.395 721.596 236.915 708.213 244.706 693.132C256.691 652.882 283.058 612.632 281.06 570.185C197.365 402.795 334.194 213.331 514.868 212.832C514.868 213.232 514.868 213.731 514.868 214.13C767.852 212.832 818.388 636.203 569.799 693.132ZM482.408 413.981C477.015 402.795 460.136 403.893 450.249 407.888C435.467 427.164 369.749 471.309 373.544 491.284C369.849 525.541 418.089 501.971 436.166 499.673C445.554 497.376 451.247 499.474 456.341 507.164C469.325 522.245 475.417 550.41 498.888 550.61C504.381 550.31 509.275 550.011 512.77 545.117C539.038 514.755 567.602 486.29 594.568 456.527C605.355 433.356 590.873 419.773 567.902 429.361C506.279 457.127 524.156 478.2 482.408 413.981Z" fill="white"></path> <path d="M436.063 499.673C417.985 501.97 369.845 525.541 373.441 491.284C369.646 471.309 435.364 427.164 450.145 407.888C460.033 403.793 476.912 402.794 482.305 413.98C524.053 478.1 506.175 457.127 567.898 429.361C590.869 419.773 605.451 433.356 594.565 456.527C567.598 486.29 539.034 514.754 512.767 545.117C509.271 550.01 504.377 550.31 498.884 550.61C475.314 550.41 469.321 522.245 456.337 507.164C451.144 499.474 445.551 497.376 436.063 499.673Z" fill="#000000"></path> <path d="M597.661 874.406C433.067 877.902 193.067 912.658 112.368 729.188C75.1142 632.908 91.1941 526.241 86.5 425.168C89.0968 243.195 130.645 90.0865 343.179 86.9903C343.179 86.7906 343.179 86.6907 343.179 86.491C457.336 84.6932 573.591 67.5147 685.751 98.5759C898.785 151.51 879.109 399.6 869.821 572.583C855.938 754.456 797.511 871.51 597.661 874.406ZM403.903 683.545C457.237 699.924 515.164 706.816 569.796 693.133C818.385 636.304 767.848 212.933 514.865 214.131C514.865 213.732 514.865 213.233 514.865 212.833C334.19 213.432 197.361 402.796 281.057 570.186C283.054 612.633 256.687 652.883 244.702 693.133C236.812 708.214 253.292 721.597 267.674 714.606C298.934 704.718 330.095 694.531 361.456 685.243C375.139 681.148 389.122 679.05 403.903 683.545Z" fill="#000000"></path> </g></svg>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         WhatsApp
        </h3>
        <p className="text-gray-700 mb-4">
         Chatea con nosotros directamente
        </p>
        <a
         href="https://wa.me/1234567890"
         target="_blank"
         rel="noopener noreferrer"
         className="inline-block bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
        >
         Abrir WhatsApp
        </a>
       </div>

       <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6">
        <div className="text-4xl mb-3">📅</div>
        <h3 className="text-xl font-bold text-gray-800 mb-2">
         Agendar Visita
        </h3>
        <p className="text-gray-700 mb-4">
         Visítanos y conoce a nuestros gatitos
        </p>
        <button className="bg-purple-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors">
         Agendar Cita
        </button>
       </div>
      </div >
     </div >
    </div >

    {/* Mapa (placeholder) */}
    < div className="mt-20" >
     <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
      Visítanos 📍
     </h2>
     <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-4">
      <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-96 flex items-center justify-center">
       <div className="text-center">
        <div className="text-6xl mb-4">🗺️</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
         Encuéntranos Aquí
        </h3>
        <p className="text-gray-600 mb-4">
         Calle del Amor Felino 123, Ciudad
        </p>
        <p className="text-sm text-gray-500">
         Estacionamiento disponible • Acceso para personas con
         discapacidad
        </p>
       </div>
      </div>
     </div>
    </div >
   </section >

   <Footer />
  </div >
 );
}