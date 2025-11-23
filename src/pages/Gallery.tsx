import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";

const Gallery = () => {
  const artworks = [
    {
      id: "Despentes 14&15",
      image: "/assets/artworks-img/Despentes-diptik-icone.png",
      title: "Despentes 14 & 15",
      year: 2025,
      medium: "Acrylic on canvas",
      dimensions: "80 x 160 cm",
    },
    {
      id: "Kasischke-02",
      image: "/assets/artworks-img/Kasischke02-Icon-Gallery.png",
      title: "Kasischke 02",
      year: 2025,
      medium: "Acrylic on canvas",
      dimensions: "123 x 92,5 cm",
    },
    {
      id: "De-Lillo-02",
      image: "/assets/artworks-img/DonDeLillo-icon-Gallery.png",
      title: "Don DeLillo 02",
      year: 2025,
      medium: "Acrylic on canvas",
      dimensions: "80 x 80 cm",
    },
    {
      id: "foster-wallace-2024",
      image:
        "https://raphaelrossi.com/assets/last-artworks/Foster-Wallace-2024-detoure.png",
      title: "Foster Wallace",
      year: 2024,
      medium: "Acrylic on canvas",
      dimensions: "123 x 123 cm",
    },
    {
      id: "ottessa-moshfegh-2024",
      image:
        "https://raphaelrossi.com/assets/last-artworks/ottessa-moshfegh-2024-detoure.png",
      title: "Ottessa Moshfegh",
      year: 2024,
      medium: "Acrylic on canvas",
      dimensions: "103 x 103 cm",
    },
    {
      id: "how-to-be",
      image: "/assets/artworks-img/how-to-be-millenials-ethos-face-2023.jpg",
      title: "How to be... Millennials ethos",
      year: 2023,
      medium: "Acrylic on canvas, print laser",
      dimensions: "40 x 100 cm",
    },
    {
      id: "laura-kasischke-2023",
      image:
        "https://raphaelrossi.com/assets/last-artworks/kasischke-face-2023.png",
      title: "Laura Kasischke",
      year: 2023,
      medium: "Acrylic on canvas",
      dimensions: "50 x 40 cm",
    },
    {
      id: "joan-didion-2023",
      image:
        "https://raphaelrossi.com/assets/last-artworks/joan-didion-face-2023.png",
      title: "Joan Didion",
      year: 2023,
      medium: "Acrylic on canvas",
      dimensions: "50 x 40 cm",
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        <section className="max-w-[1440px] mx-auto px-[25px] py-12">
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in">
              Gallery
            </h1>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <p className="text-lg text-muted-foreground">
                New pieces from the studio
              </p>

              <div className="text-base text-muted-foreground leading-relaxed mb-4">
                <p className="mb-4">
                  The Gallery is the straight line from my studio to you—no
                  intermediates. You’re plugged straight into my production.
                  Each piece—painting, collage, collectible—comes out of my
                  hands.
                </p>

                <p className="mb-4">
                  Questions, commissions, or thoughts on a piece? Hit me up
                  directly.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-xl md-xxl font-semibold mb-8">Paintings</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[25px]">
            {artworks.map((artwork, index) => (
              <div
                key={artwork.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ArtworkCard {...artwork} />
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Gallery;
