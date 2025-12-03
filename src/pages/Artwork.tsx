import React from "react";
import Navigation from "@/components/Navigation";
import { Link, useParams } from "react-router-dom";
import ArtworksCarousel from "@/components/ArtworksCarousel";
const artworksData = [{
  id: "Despentes 14&15",
  image: "/assets/artworks-img/DonDeLillo-icon-Gallery.png",
  title: "Despentes 14 & 15",
  year: 2025,
  medium: "Acrylic on canvas",
  dimensions: "80 x 80 cm (x2)",
  price: "€2600",
  description: "This diptyque of two peintings is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Virginie Despentes, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/Despentes-Center-Gallery.jpg", "/assets/artworks-img/Despentes-Detail-Gallery.jpg", "/assets/artworks-img/Despentes-detail2-Gallery.jpg"]
}, {
  id: "Kasischke-02",
  image: "/assets/artworks-img/DonDeLillo-icon-Gallery.png",
  title: "Kasischke 02",
  year: 2025,
  medium: "Acrylic on canvas",
  dimensions: "123 x 92,5 cm",
  price: "€2300",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Laura Kasischke, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/Kasischke02-Center-Gallery.jpg", "/assets/artworks-img/Kasischke02-detail-Gallery.jpg"]
}, {
  id: "De-Lillo-02",
  image: "/assets/artworks-img/DonDeLillo-icon-Gallery.png",
  title: "Don DeLillo 02",
  year: 2025,
  medium: "Acrylic on canvas",
  dimensions: "80 x 80 cm",
  price: "€1300",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Don DeLillo, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/DonDelLillo-02-center.jpg", "/assets/name-dropping/013.jpg", "/assets/artworks-img/Don DeLillo-detail-Gallery.png"]
}, {
  id: "foster-wallace-2024",
  image: "/assets/last-artworks/ottessa-moshfegh-2024-detoure.png",
  title: "Foster Wallace",
  year: 2024,
  medium: "Acrylic on canvas",
  dimensions: "123 x 123 cm",
  price: "€3500",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as David Foster Wallace, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/Foster-Wallace-Center-Gallery.jpg", "/assets/artworks-img/foster-wallace-2024-01.jpg"]
}, {
  id: "ottessa-moshfegh-2024",
  image: "/assets/last-artworks/ottessa-moshfegh-2024-detoure.png",
  title: "Ottessa Moshfegh",
  year: 2024,
  medium: "Acrylic on canvas",
  dimensions: "103 x 103 cm",
  price: "€3100",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Ottessa Moshfegh, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/name-dropping/015.jpg", "/assets/artworks-img/ottessa-moshfegh-details-2024.jpg", "/assets/artworks-img/Moshfegh-detail-gallery.jpg"]
}, {
  id: "how-to-be",
  image: "/assets/last-artworks/kasischke-face-2023.png",
  title: "How to be...Millenials ethos",
  year: 2023,
  medium: "Acrylic on canvas",
  dimensions: "40 x 100 cm",
  price: "€1500",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Laura Kasischke, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/how-to-be-millenials-ethos-face-2023.jpg", "/assets/artworks-img/how-to-be-millenials-detail-2023.jpg"]
}, {
  id: "laura-kasischke-2023",
  image: "/assets/last-artworks/kasischke-face-2023.png",
  title: "Kasischke",
  year: 2023,
  medium: "Acrylic on canvas",
  dimensions: "50 x 40 cm",
  price: "€900",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Laura Kasischke, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/kasischke-face-2023.jpg", "/assets/artworks-img/kasischke-detail-2023.jpg", "/assets/artworks-img/kasischke-side-2023.jpg"]
}, {
  id: "joan-didion-2023",
  image: "/assets/last-artworks/joan-didion-face-2023.png",
  title: "Joan Didion",
  year: 2023,
  medium: "Acrylic on canvas",
  dimensions: "50 x 40 cm",
  price: "€900",
  description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Joan Didion, blending geometric patterns with color-splat experimentation.",
  description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
  detailImages: ["/assets/artworks-img/joan-didion-face-2023.jpg", "/assets/artworks-img/joan-didion-detail-2023.jpg", "/assets/artworks-img/joan-didion-side-2023.jpg"]
}];
const Artwork: React.FC = () => {
  const {
    id
  } = useParams<{
    id: string;
  }>();
  const artwork = artworksData.find(a => a.id === id);
  if (!artwork) {
    return <>
        <Navigation />
        <main className="pt-24">
          <div className="container max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <p>Artwork not found</p>
            <Link to="/gallery" className="text-sm hover:underline mt-4 inline-block">
              ← Back to Gallery
            </Link>
          </div>
        </main>
      </>;
  }
  return <>
      <Navigation />

      <main>
        <section className="max-w-[1440px] mx-auto px-0 md:px-[25px] pt-4 md:pt-12 pb-12">
          <div className="grid md:grid-cols-[2fr_1fr] gap-8 md:gap-16 lg:gap-24 xl:gap-32 items-start px-4 md:px-0 md:pr-[30px]">
            {/* Left column - Images */}
            <ArtworksCarousel images={artwork.detailImages} />

            {/* Right column - Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                  {artwork.title}, {artwork.year}
                </h1>
                <p className="text-base text-muted-foreground">
                  {artwork.medium}
                </p>
                <p className="text-base text-muted-foreground mb-6">
                  {artwork.dimensions}
                </p>

                <p className="text-2xl font-semibold mb-4">{artwork.price}</p>

                <button className="w-full border border-foreground py-4 px-8 rounded hover:bg-foreground hover:text-background transition-colors text-xl mt-4 mb-8">
                  Buy this painting
                </button>
              </div>

              <div className="space-y-4 text-base leading-relaxed">
                <p>{artwork.description}</p>
                <p>{artwork.description2}</p>
              </div>

              <div className="pt-8 border-t">
                <h2 className="text-xl font-semibold mb-4">
                  Request more information
                </h2>
                <p className="text-sm text-muted-foreground mb-4">
                  To learn more about this artwork or shipping method, please
                  provide your contact information.
                </p>

                <form className="space-y-4">
                  <input type="text" placeholder="First name" className="w-full border border-border px-4 py-2 bg-background" />
                  <input type="text" placeholder="Last name" className="w-full border border-border px-4 py-2 bg-background" />
                  <input type="email" placeholder="Email address" className="w-full border border-border px-4 py-2 bg-background" />
                  <button type="submit" className="bg-foreground text-background py-2 px-8 hover:opacity-90 transition-opacity">
                    Submit
                  </button>
                </form>
              </div>

              <div className="pt-4">
                <Link to="/gallery" className="text-sm hover:underline">
                  ← Back to Gallery
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer mt-1 md:mt-8">
        <div className="footer-content mx-auto px-4 md:px-[25px] py-6 flex flex-row justify-between items-center gap-2">
          <div className="legal text-left">
            <p className="text-xs md:text-base">© 2024 Raphaël Rossi - All Rights Reserved</p>
          </div>
          <div className="social-media text-right">
            <a href="https://www.instagram.com/raphaaelrossi/" target="_blank" rel="noreferrer" className="hover:underline text-xs md:text-base">
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>;
};
export default Artwork;