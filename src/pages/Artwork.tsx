import React from "react";
import Navigation from "@/components/Navigation";
import { Link, useParams } from "react-router-dom";

const artworksData = [
  {
    id: "foster-wallace-2024",
    image: "/assets/last-artworks/Foster-Wallace-2024-detoure.png",
    title: "Foster Wallace",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: "124 x 124 cm",
    price: "€2800",
    description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as David Foster Wallace, blending geometric patterns with color-splat experimentation.",
    description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
    detailImages: [
      "/assets/artworks-img/foster-wallace-2024-01.jpg"
    ]
  },
  {
    id: "ottessa-moshfegh-2024",
    image: "/assets/last-artworks/ottessa-moshfegh-2024-detoure.png",
    title: "Ottessa Moshfegh",
    year: 2024,
    medium: "Acrylic on canvas",
    dimensions: "104 x 104 cm",
    price: "€2400",
    description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Ottessa Moshfegh, blending geometric patterns with color-splat experimentation.",
    description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
    detailImages: [
      "/assets/artworks-img/ottessa-moshfegh-face-2024.jpg",
      "/assets/artworks-img/ottessa-moshfegh-details-2024.jpg"
    ]
  },
  {
    id: "laura-kasischke-2023",
    image: "/assets/last-artworks/kasischke-face-2023.png",
    title: "Laura Kasischke",
    year: 2023,
    medium: "Acrylic on canvas",
    dimensions: "50 x 40 cm",
    price: "€1800",
    description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Laura Kasischke, blending geometric patterns with color-splat experimentation.",
    description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
    detailImages: [
      "/assets/artworks-img/kasischke-face-2023.jpg",
      "/assets/artworks-img/kasischke-detail-2023.jpg",
      "/assets/artworks-img/kasischke-side-2023.jpg"
    ]
  },
  {
    id: "joan-didion-2023",
    image: "/assets/last-artworks/joan-didion-face-2023.png",
    title: "Joan Didion",
    year: 2023,
    medium: "Acrylic on canvas",
    dimensions: "50 x 40 cm",
    price: "€1800",
    description: "This painting is part of a unique series that explores the connection between formal and psychological relationships in fiction and urban environments. The geometric composition features the typographic names of contemporary authors, such as Joan Didion, blending geometric patterns with color-splat experimentation.",
    description2: "In this series, I investigate the interplay between personal identity and cultural memory by using the names of contemporary authors as motifs in my paintings. The geometric style, influenced by the architectural forms of public buildings, reflects the perspective of elite culture as viewed from the streets.",
    detailImages: [
      "/assets/artworks-img/joan-didion-face-2023.jpg",
      "/assets/artworks-img/joan-didion-detail-2023.jpg",
      "/assets/artworks-img/joan-didion-side-2023.jpg"
    ]
  }
];

const Artwork: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = artworksData.find(a => a.id === id);

  if (!artwork) {
    return (
      <>
        <Navigation />
        <main className="pt-24">
          <div className="container max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <p>Artwork not found</p>
            <Link to="/gallery" className="text-sm hover:underline mt-4 inline-block">← Back to Gallery</Link>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Navigation />

      <main>
        <section className="container max-w-7xl mx-auto px-6 lg:px-8 pt-5 pb-12">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left column - Image */}
            <div className="space-y-8">
              <figure>
                <img
                  src={artwork.detailImages[0] || artwork.image}
                  alt={artwork.title}
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            </div>

            {/* Right column - Information */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                  {artwork.title}, {artwork.year}
                </h1>
                <p className="text-base text-muted-foreground">{artwork.medium}</p>
                <p className="text-base text-muted-foreground mb-6">{artwork.dimensions}</p>
                
                <p className="text-2xl font-semibold mb-4">{artwork.price}</p>
                
                <button className="w-full border border-foreground py-3 px-6 hover:bg-foreground hover:text-background transition-colors">
                  Buy this painting
                </button>
              </div>

              <div className="space-y-4 text-base leading-relaxed">
                <p>{artwork.description}</p>
                <p>{artwork.description2}</p>
              </div>

              <div className="pt-8 border-t">
                <h2 className="text-xl font-semibold mb-4">Request more information</h2>
                <p className="text-sm text-muted-foreground mb-4">
                  To learn more about this artwork or shipping method, please provide your contact information.
                </p>
                
                <form className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="First name" 
                    className="w-full border border-border px-4 py-2 bg-background"
                  />
                  <input 
                    type="text" 
                    placeholder="Last name" 
                    className="w-full border border-border px-4 py-2 bg-background"
                  />
                  <input 
                    type="email" 
                    placeholder="Email address" 
                    className="w-full border border-border px-4 py-2 bg-background"
                  />
                  <button 
                    type="submit"
                    className="bg-foreground text-background py-2 px-8 hover:opacity-90 transition-opacity"
                  >
                    Submit
                  </button>
                </form>
              </div>
              
              <div className="pt-4">
                <Link to="/gallery" className="text-sm hover:underline">← Back to Gallery</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer mt-12">
        <div className="footer-content max-w-5xl mx-auto px-6 lg:px-8 py-6">
          <div className="legal">
            <p>© 2024 Raphaël Rossi - All Rights Reserved</p>
          </div>
          <div className="social-media">
            <a href="https://www.instagram.com/raphaaelrossi/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Artwork;
