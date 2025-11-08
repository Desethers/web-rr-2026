export type ExhibitImage = {
  src: string;
  alt?: string;
  caption?: string; // utiliser "\n" pour les sauts de ligne
  className?: string;
  width?: number;
  height?: number;
};

export const nameDroppingImages: ExhibitImage[] = [
  { src: "/assets/name-dropping/005.jpg", alt: "View of the exhibition", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/004.jpg", alt: "View of the exhibition", caption: "View of the exhibition" },
  { src: "/assets/name-dropping/002.jpg", alt: "Not yet title, 2023", caption: "Not yet title, 2023\ncanvas, magazines" },
  { src: "/assets/name-dropping/006.jpg", alt: "Artwork detail" },
  { src: "/assets/name-dropping/009.jpg", alt: "Detail of How to be…", caption: "Installation view, Name Dropping at Pauline Perplex, 2025\ncanvas, magazines, laser print" },
  { src: "/assets/name-dropping/010.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/name-dropping/011.jpg", alt: "Eisenberg, 2023", caption: "Eisenberg, 2023\ncanvas, magazines, laser print\n200 x 40 cm" },
  { src: "/assets/name-dropping/012.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/name-dropping/013.jpg", alt: "Details of America", caption: "Details of America generates great artists and finest sales, 2023\ncanvas, laser print, magazines" },
  { src: "/assets/name-dropping/014.jpg", alt: "Installation view, Name Dropping at Pauline Perplex, 2025", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/015.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/name-dropping/016.jpg", alt: "Installation view", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
  { src: "/assets/name-dropping/017.jpg", alt: "Installation view", caption: "Installation view, Name Dropping at Pauline Perplex, 2025" },
];