export type ExhibitImage = {
  src: string;
  alt?: string;
  caption?: string; // utiliser "\n" pour les sauts de ligne
  className?: string;
  width?: number;
  height?: number;
};

export const nameDroppingImages: ExhibitImage[] = [
  { src: "/assets/extraverted-paintings/extraverted-02.jpg", alt: "Installation view", caption: "Installation view, Extraverted paintings/Introverting pictures at Bagnoler, 2023" },
  { src: "/assets/extraverted-paintings/extraverted-03.jpg", alt: "View of the exhibition", caption: "View of the exhibition" },
  { src: "/assets/extraverted-paintings/extraverted-05.jpg", alt: "Not yet title, 2023", caption: "Not yet title, 2023\ncanvas, magazines" },
  { src: "/assets/extraverted-paintings/extraverted-06.jpg", alt: "Artwork detail" },
  { src: "/assets/extraverted-paintings/extraverted-07.jpg", alt: "Detail of How to be…", caption: "Detail of How to be… Millenials ethos, 2023\ncanvas, magazines, laser print" },
  { src: "/assets/extraverted-paintings/extraverted-01.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/extraverted-paintings/extraverted-08.jpg", alt: "Eisenberg, 2023", caption: "Eisenberg, 2023\ncanvas, magazines, laser print\n200 x 40 cm" },
  { src: "/assets/extraverted-paintings/extraverted-09.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/extraverted-paintings/extraverted-10.jpg", alt: "Details of America", caption: "Details of America generates great artists and finest sales, 2023\ncanvas, laser print, magazines" },
  { src: "/assets/extraverted-paintings/extraverted-11.jpg", alt: "Details of Valéria", caption: "Details of Valéria, 2023\ncanvas, magazines" },
  { src: "/assets/extraverted-paintings/extraverted-12.jpg", alt: "View of exhibition", caption: "View of exhibition" },
  { src: "/assets/extraverted-paintings/extraverted-13.jpg", alt: "Installation view", caption: "Installation view, Extraverted paintings/Introverting pictures" },
  { src: "/assets/extraverted-paintings/extraverted-14.jpg", alt: "Installation view", caption: "Installation view, Extraverted paintings/Introverting pictures" },
];