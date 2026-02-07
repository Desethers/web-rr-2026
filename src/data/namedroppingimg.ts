export type ExhibitImage = {
  src: string;
  alt?: string;
  caption?: string; // utiliser "\n" pour les sauts de ligne
  className?: string;
  width?: number;
  height?: number;
  inquireLink?: string;
};

export const nameDroppingImages: ExhibitImage[] = [
  { src: "/assets/name-dropping/001.jpg", alt: "View of the exhibition", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },  
  { src: "/assets/name-dropping/002.jpg", alt: "View of the exhibition", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/003.jpg", alt: "View of the exhibition", caption: "View of the exhibition" },
  { src: "/assets/name-dropping/004.jpg", alt: "Not yet title, 2023", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/005.jpg", alt: "Artwork detail" },
  { src: "/assets/name-dropping/006.jpg", alt: "Detail of How to be…", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/007.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/name-dropping/008.jpg", alt: "Eisenberg, 2023", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/009.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/name-dropping/010.jpg", alt: "Details of America", caption: "Virginie Despentes 14 & 15, 2025, Acrylic on canvas, 80x80 cm (x2)" },
  { src: "/assets/name-dropping/011.jpg", alt: "Installation view, Name Dropping at Pauline Perplex, 2025", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/012.jpg", alt: "Kasischke-02", caption: "Kasischke-02, 2024\nAcrylic on canvas, 123 x 92,5 cm", inquireLink: "/artwork/Kasischke-02" },
  { src: "/assets/name-dropping/013.jpg", alt: "Don DeLillo 02", caption: "Don DeLillo 02, 2025\nAcrylic on canvas, 80 x 80 cm", inquireLink: "/artwork/De-Lillo-02" },
  { src: "/assets/name-dropping/014.jpg", alt: "Foster Wallace", caption: "Foster Wallace, 2024\nAcrylic on canvas, 123 x 123 cm", inquireLink: "/artwork/foster-wallace-2024" },
  { src: "/assets/name-dropping/015.jpg", alt: "Moshfegh", caption: "Moshfegh, 2024\nAcrylic on canvas, 103x103 cm", inquireLink: "/artwork/ottessa-moshfegh-2024" },
  { src: "/assets/name-dropping/016.jpg", alt: "Installation view", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/017.jpg", alt: "Installation view", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/artworks-img/Franzen-01-detail.jpg", alt: "Detail of Franzen 02", caption: "Detail of Franzen 02, 2025\nAcrylic on canvas, 80x80 cm" },
];