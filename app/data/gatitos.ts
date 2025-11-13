export interface Gatito {
 id: string;
 nombre: string;
 edad: string;
 sexo: "Macho" | "Hembra";
 raza: string;
 color: string;
 personalidad: string[];
 descripcion: string;
 imagen: string;
 estado: "Disponible" | "En proceso" | "Adoptado";
 requisitos: string[];
 vacunas: boolean;
 esterilizado: boolean;
 peso: string;
}

export const gatitos: Gatito[] = [
 {
  id: "1",
  nombre: "Luna",
  edad: "3 meses",
  sexo: "Hembra",
  raza: "Mestiza",
  color: "Gris con rayas",
  personalidad: ["Juguetona", "Cariñosa", "Curiosa"],
  descripcion:
   "Luna es una gatita adorable que ama explorar y jugar. Es muy sociable con otros gatos y adora las caricias. Perfecta para familias con niños.",
  imagen: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Hogar sin balcones abiertos", "Tiempo para jugar", "Ambiente tranquilo"],
  vacunas: true,
  esterilizado: false,
  peso: "1.2 kg",
 },
 {
  id: "2",
  nombre: "Mi nombre es Máximo Décimo Miau, comandante de los ejércitos del Tigre del norte, general de las legiones Gatunas, leal sirviente del verdadero emperador Marco Aurelio Gatuno",
  edad: "5 meses",
  sexo: "Macho",
  raza: "Naranja atigrado",
  color: "Naranja",
  personalidad: ["Aventurero", "Enérgico", "Leal"],
  descripcion:
   "Mi nombre es Máximo Décimo Meridio, comandante de los ejércitos del Tigre del norte, general de las legiones Gatunas, leal sirviente del verdadero emperador Marco Aurelio Gatuno, ADOPTAME.",
  imagen: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Espacio para trepar", "Juguetes interactivos", "Dedicación diaria"],
  vacunas: true,
  esterilizado: true,
  peso: "2.1 kg",
 },
 {
  id: "3",
  nombre: "Michi",
  edad: "2 meses",
  sexo: "Macho",
  raza: "Siamés",
  color: "Blanco con puntas oscuras",
  personalidad: ["Vocal", "Inteligente", "Apegado"],
  descripcion:
   "Michi es un gatito siamés muy conversador. Le gusta estar cerca de sus humanos todo el tiempo y es extremadamente inteligente. Aprende trucos rápidamente.",
  imagen: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Mucha atención", "Estimulación mental", "Hogar tranquilo"],
  vacunas: true,
  esterilizado: false,
  peso: "0.9 kg",
 },
 {
  id: "4",
  nombre: "Nala",
  edad: "1 año",
  sexo: "Hembra",
  raza: "Persa",
  color: "Crema",
  personalidad: ["Tranquila", "Elegante", "Mimosa"],
  descripcion:
   "Nala es una gata persa hermosa y calmada. Prefiere siestas largas y caricias suaves. Ideal para personas que buscan compañía relajante.",
  imagen: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&q=80",
  estado: "En proceso",
  requisitos: ["Cepillado diario", "Ambiente calmado", "Cuidado especial del pelaje"],
  vacunas: true,
  esterilizado: true,
  peso: "3.5 kg",
 },
 {
  id: "5",
  nombre: "Pelusa",
  edad: "4 meses",
  sexo: "Hembra",
  raza: "Angora",
  color: "Blanco",
  personalidad: ["Activa", "Social", "Juguetona"],
  descripcion:
   "Pelusa es una bola de energía blanca. Ama jugar con cualquier cosa que se mueva y se lleva bien con otros gatos y perros amigables.",
  imagen: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Compañía de otros animales (opcional)", "Muchos juguetes", "Espacio seguro"],
  vacunas: true,
  esterilizado: false,
  peso: "1.5 kg",
 },
 {
  id: "6",
  nombre: "Lukas",
  edad: "6 meses",
  sexo: "Macho",
  raza: "Mestizo",
  color: "Negro con blanco",
  personalidad: ["Independiente", "Cariñoso", "Adaptable"],
  descripcion:
   "Lukas es un gato equilibrado que disfruta tanto de jugar como de descansar. Es perfecto para cualquier tipo de hogar y se adapta fácilmente.",
  imagen: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Hogar estable", "Cariño moderado", "Ventanas seguras"],
  vacunas: true,
  esterilizado: true,
  peso: "2.3 kg",
 },
 {
  id: "7",
  nombre: "Cleo",
  edad: "3 meses",
  sexo: "Hembra",
  raza: "Carey",
  color: "Tricolor",
  personalidad: ["Dulce", "Tímida", "Leal"],
  descripcion:
   "Cleo es una gatita tímida al principio, pero una vez que confía en ti, es la compañera más dulce. Necesita un hogar paciente y amoroso.",
  imagen: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Paciencia", "Ambiente silencioso", "Introducción gradual"],
  vacunas: true,
  esterilizado: false,
  peso: "1.1 kg",
 },
 {
  id: "8",
  nombre: "Tigre",
  edad: "7 meses",
  sexo: "Macho",
  raza: "Bengalí",
  color: "Marrón con manchas",
  personalidad: ["Atlético", "Inteligente", "Territorial"],
  descripcion:
   "Tigre es un gato bengalí activo que necesita mucho ejercicio y estimulación. Es perfecto para personas activas que disfrutan interactuar con sus mascotas.",
  imagen: "https://images.unsplash.com/photo-1491485880348-85d48a9e5312?w=800&q=80",
  estado: "Disponible",
  requisitos: ["Rascadores altos", "Juegos interactivos diarios", "Espacio para correr"],
  vacunas: true,
  esterilizado: true,
  peso: "3.0 kg",
 },
];

export function getGatito(id: string): Gatito | undefined {
 return gatitos.find((g) => g.id === id);
}

export function getGatitosDisponibles(): Gatito[] {
 return gatitos.filter((g) => g.estado === "Disponible");
}