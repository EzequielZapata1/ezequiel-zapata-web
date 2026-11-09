export const whatsappNumber = "5493400536380";
export const displayPhone = "+54 9 3400 53-6380";

export const whatsappMessages = {
  general:
    "Hola Ezequiel, vi tu página web y quería consultarte por un trabajo de construcción.",
  quote:
    "Hola Ezequiel, quisiera solicitar un presupuesto para un trabajo de albañilería.",
  project:
    "Hola Ezequiel, tengo un proyecto en mente y quería contarte qué necesito hacer.",
};

export function whatsappUrl(message: string) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

// Fotografías reales entregadas para mostrar trabajos realizados.
export const siteMedia = {
  hero: "",
  about: "/images/ezequiel-zapata.jpg",
};

export type ProjectCategory =
  | "Construcción y estructuras"
  | "Revoques y terminaciones"
  | "Pisos y revestimientos"
  | "Piletas y exteriores"
  | "Instalaciones y aberturas"
  | "Refacciones";

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  image: string;
  alt: string;
  layout: "vertical" | "horizontal" | "cuadrado";
  beforeImage?: string;
  beforeAlt?: string;
};

// Cada entrada usa una fotografía real entregada para este sitio.
export const projects: Project[] = [
  { id: "base-columna", title: "Base para columna", category: "Construcción y estructuras", image: "/images/base-columna.jpg", alt: "Armadura de hierro preparada sobre la base excavada para una columna", layout: "vertical" },
  { id: "columna-tinglado", title: "Columna para tinglado", category: "Construcción y estructuras", image: "/images/columna-tinglado.jpg", alt: "Columna de ladrillos terminada para estructura de tinglado", layout: "vertical" },
  { id: "encadenado", title: "Encadenado", category: "Construcción y estructuras", image: "/images/encadenado.jpg", alt: "Encadenado de hormigón en obra con mampostería de ladrillo", layout: "horizontal" },
  { id: "pared-ladrillo", title: "Pared de ladrillo del 12", category: "Construcción y estructuras", image: "/images/pared-ladrillo-12.jpg", alt: "Pared levantada con ladrillos cerámicos del 12", layout: "horizontal" },
  { id: "revoque-vidrio", title: "Revoque y ladrillos de vidrio", category: "Revoques y terminaciones", image: "/images/terminacion-fino-despues.jpg", alt: "Pared revocada y terminada con ladrillos de vidrio", layout: "vertical", beforeImage: "/images/revoque-grueso-vidrio-antes.jpg", beforeAlt: "Estado previo con revoque grueso y ladrillos de vidrio antes de la terminación" },
  { id: "revoque-fino-grueso", title: "Revoque fino y grueso", category: "Revoques y terminaciones", image: "/images/revoque-fino-grueso.jpg", alt: "Trabajo de revoque fino y grueso en pared interior", layout: "vertical" },
  { id: "aberturas-revoque", title: "Aberturas y revoque grueso", category: "Instalaciones y aberturas", image: "/images/aberturas-revoque-grueso.jpg", alt: "Aberturas colocadas junto a pared con revoque grueso", layout: "vertical" },
  { id: "aberturas-fino", title: "Aberturas y acabado fino", category: "Instalaciones y aberturas", image: "/images/aberturas-acabado-fino.jpg", alt: "Aberturas colocadas con acabado de revoque fino", layout: "vertical" },
  { id: "ladrillo-vidrio", title: "Colocación de ladrillo de vidrio", category: "Revoques y terminaciones", image: "/images/ladrillo-vidrio.jpg", alt: "Ladrillos de vidrio colocados en pared revocada", layout: "vertical" },
  { id: "revoque-pintura", title: "Revoque fino y pintura", category: "Revoques y terminaciones", image: "/images/revoque-fino-pintura.jpg", alt: "Pasillo interior con paredes revocadas y terminadas", layout: "vertical" },
  { id: "revoque-exterior", title: "Terminación fina exterior", category: "Revoques y terminaciones", image: "/images/revoque-fino-exterior.jpg", alt: "Terminación fina de revoque en exterior", layout: "vertical" },
  { id: "carpeta-piso", title: "Carpeta y piso cerámico", category: "Pisos y revestimientos", image: "/images/carpeta-piso-ceramico.jpg", alt: "Armado de carpeta y colocación de piso cerámico", layout: "vertical" },
  { id: "bano-piso", title: "Piso y cerámicos de baño", category: "Pisos y revestimientos", image: "/images/bano-piso-ceramico.jpg", alt: "Colocación de piso y revestimiento cerámico en baño", layout: "vertical" },
  { id: "loseta-pileta", title: "Loseta de diseño para pileta", category: "Piletas y exteriores", image: "/images/loseta-diseno-pileta.jpg", alt: "Losetas de diseño colocadas alrededor de una pileta", layout: "vertical" },
  { id: "losetas-lateral", title: "Losetas para lateral de pileta", category: "Piletas y exteriores", image: "/images/losetas-lateral-pileta.jpg", alt: "Losetas colocadas en el lateral de una pileta", layout: "vertical" },
];

export const services = [
  {
    id: "construccion",
    title: "Construcción y estructuras",
    items: [
      "Bases para columnas",
      "Encadenados",
      "Construcción de paredes de ladrillo del 12",
      "Columnas para tinglados",
      "Armado de columnas y trabajos de encofrado",
    ],
  },
  {
    id: "revoques",
    title: "Revoques y terminaciones",
    items: [
      "Revoque grueso",
      "Revoque fino",
      "Revoque exterior",
      "Terminaciones finas",
      "Revoques con colocación de ladrillos de vidrio",
    ],
  },
  {
    id: "pisos",
    title: "Pisos y revestimientos",
    items: [
      "Armado de carpetas",
      "Colocación de pisos cerámicos",
      "Colocación de revestimientos",
      "Instalación de pisos y cerámicos en baños",
    ],
  },
  {
    id: "piletas",
    title: "Piletas y exteriores",
    items: [
      "Fabricación y colocación de losetas de diseño para piletas",
      "Losetas decorativas para bordes y laterales de piscinas",
      "Trabajos de terminación en exteriores",
    ],
  },
  {
    id: "instalaciones",
    title: "Instalaciones y aberturas",
    items: [
      "Colocación de puertas y ventanas",
      "Instalación de aberturas",
      "Terminaciones y revoques posteriores a la colocación",
    ],
  },
  {
    id: "refacciones",
    title: "Refacciones y otros trabajos",
    items: [
      "Pintura",
      "Instalación de placas de Durlock",
      "Remodelaciones",
      "Trabajos generales de albañilería",
    ],
  },
] as const;
