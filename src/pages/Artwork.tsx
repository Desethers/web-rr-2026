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
    description: "Portrait painting of David Foster Wallace, capturing the essence of the celebrated American author.",
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
    description: "Contemporary portrait of the acclaimed novelist Ottessa Moshfegh.",
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
    description: "Portrait of the American poet and novelist Laura Kasischke.",
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
    description: "A tribute to the iconic American writer Joan Didion.",
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
        <section className="title_exhibition">
          <div className="container max-w-5xl mx-auto px-6 lg:px-8 pt-5 pb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
              {artwork.title}, {artwork.year}
            </h1>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 lg:px-8 py-6">
            <div className="intro_exhibition">
              <p className="font-medium">{artwork.medium}</p>
              <p className="mt-2">{artwork.dimensions}</p>
            </div>

            <div className="intro_exhibition">
              <p>{artwork.description}</p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery container max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <figure className="imagefull">
              <img
                src={artwork.image}
                alt={artwork.title}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </figure>

            {artwork.detailImages.map((img, idx) => (
              <figure key={idx} className="imagefull">
                <img
                  src={img}
                  alt={`${artwork.title} detail ${idx + 1}`}
                  className="w-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}

            <div className="mt-12">
              <Link to="/gallery" className="text-sm hover:underline">← Back to Gallery</Link>
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
