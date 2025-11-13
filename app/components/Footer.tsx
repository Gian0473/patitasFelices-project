import { Link } from "react-router";

export default function Footer() {
 return (
  <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white mt-20">
   <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
     {/* Columna 1: Logo y descripción */}
     <div className="col-span-1 md:col-span-2">
      <div className="flex items-center space-x-3 mb-4">
       <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-xl">🐱</span>
       </div>
       <h3 className="text-xl font-bold">Patitas Felices</h3>
      </div>
      <p className="text-gray-400 mb-4 max-w-md">
       Somos un refugio dedicado a rescatar, cuidar y encontrar hogares
       amorosos para gatitos que necesitan una segunda oportunidad.
      </p>
      <div className="flex space-x-4">
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

     {/* Columna 2: Enlaces rápidos */}
     <div>
      <h4 className="text-lg font-semibold mb-4">Enlaces Rápidos</h4>
      <ul className="space-y-2">
       <li>
        <Link
         to="/"
         className="text-gray-400 hover:text-white transition-colors"
        >
         Inicio
        </Link>
       </li>
       <li>
        <Link
         to="/gatitos"
         className="text-gray-400 hover:text-white transition-colors"
        >
         Gatitos disponibles
        </Link>
       </li>
       <li>
        <Link
         to="/sobre-nosotros"
         className="text-gray-400 hover:text-white transition-colors"
        >
         Sobre nosotros
        </Link>
       </li>
       <li>
        <Link
         to="/proceso-adopcion"
         className="text-gray-400 hover:text-white transition-colors"
        >
         Cómo adoptar
        </Link>
       </li>
      </ul>
     </div>

     {/* Columna 3: Contacto */}
     <div>
      <h4 className="text-lg font-semibold mb-4">Contacto</h4>
      <ul className="space-y-2 text-gray-400">
       <li className="flex items-start space-x-2">
        <span>📍</span>
        <span>Calle del Amor Felino 123, Ciudad</span>
       </li>
       <li className="flex items-center space-x-2">
        <span>📞</span>
        <span>(123) 456-7890</span>
       </li>
       <li className="flex items-center space-x-2">
        <span>✉️</span>
        <span>info@patitasfelices.com</span>
       </li>
       <li className="flex items-center space-x-2">
        <span>⏰</span>
        <span>Lun-Sáb: 10am - 6pm</span>
       </li>
      </ul>
     </div>
    </div >

    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
     <p>
      &copy; {new Date().getFullYear()} Patitas Felices. Todos los
      derechos reservados. Hecho con 💖 para los gatitos.
     </p>
    </div>
   </div >
  </footer >
 );
}