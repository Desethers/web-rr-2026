import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";

const Home = () => {
  const artworks = [
    {
      id: "foster-wallace-2024",
      image: "https://raphaelrossi.com/assets/last-artworks/Foster-Wallace-2024-detoure.png",
      title: "Foster Wallace",
      year: 2024,
      medium: "Acrylic on canvas",
      dimensions: "124 x 124 cm",
    },
    {
      id: "ottessa-moshfegh-2024",
      image: "https://raphaelrossi.com/assets/last-artworks/ottessa-moshfegh-2024-detoure.png",
      title: "Ottessa Moshfegh",
      year: 2024,
      medium: "Acrylic on canvas",
      dimensions: "104 x 104 cm",
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
      id: "Despentes 14&15",
      image: "/assets/artworks-img/Despentes-diptik-icone.png",
      title: "Despentes 14 & 15",
      year: 2025,
      medium: "Acrylic on canvas",
      dimensions: "80 x 160 cm",
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-[25px] py-12">
          <div className="overflow-hidden">
            <img
              src="/assets/name-dropping/006.jpg"
              alt="Exhibition view"
              className="w-full h-auto object-cover image-filtered zoom-slow"
            />
          </div>
        </section>

        {/* Featured Exhibition */}
        <section className="max-w-[1440px] mx-auto px-[25px]">
          <div className="max-w-3xl">
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-semibold mb-2 animate-fade-in">Name dropping</h1>
            <p className="text-lg lg:text-2xl text-muted-foreground mb-1">Pauline Perplexe</p>
            <p className="text-lg lg:text-2xl text-muted-foreground mb-6">13 juin - 4 juillet 2025</p>
            <Link to="/exhibitions" className="btn-rounded">
              Explore more exhibitions
            </Link>
          </div>
        </section>

        {/* Last Artworks */}
        <section className="max-w-[1440px] mx-auto px-[25px] py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 justify-items-center">
            {artworks.map((artwork, index) => (
              <div key={artwork.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <ArtworkCard {...artwork} />
              </div>
            ))}
          </div>

          <div>
            <h1 className="text-2xl lg:text-5xl xl:text-6xl font-semibold mb-4">Last artworks</h1>
            <p className="text-xl text-muted-foreground mb-8">New pieces from the studio</p>
            <Link to="/gallery" className="btn-rounded">
              Explore more artworks
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
