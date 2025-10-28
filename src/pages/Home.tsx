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
      dimensions: "124 x 124 cm"
    },
    {
      id: "ottessa-moshfegh-2024",
      image: "https://raphaelrossi.com/assets/last-artworks/ottessa-moshfegh-2024-detoure.png",
      title: "Ottessa Moshfegh",
      year: 2024,
      medium: "Acrylic on canvas",
      dimensions: "104 x 104 cm"
    },
    {
      id: "laura-kasischke-2023",
      image: "https://raphaelrossi.com/assets/last-artworks/kasischke-face-2023.png",
      title: "Laura Kasischke",
      year: 2023,
      medium: "Acrylic on canvas",
      dimensions: "50 x 40 cm"
    },
    {
      id: "joan-didion-2023",
      image: "https://raphaelrossi.com/assets/last-artworks/joan-didion-face-2023.png",
      title: "Joan Didion",
      year: 2023,
      medium: "Acrylic on canvas",
      dimensions: "50 x 40 cm"
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 mt-8">
          <div className="overflow-hidden">
            <img 
              src="https://raphaelrossi.com/assets/extraverted-paintings/extraverted-01.jpg"
              alt="Exhibition view"
              className="w-full h-auto object-cover image-filtered zoom-slow"
            />
          </div>
        </section>

        {/* Featured Exhibition */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-4 animate-fade-in">
              Extraverted paintings / Introverting pictures
            </h1>
            <p className="text-2xl text-muted-foreground mb-2">Bagnoler</p>
            <p className="text-2xl text-muted-foreground mb-6">16 septembre - 23 novembre 2023</p>
            <Link 
              to="/exhibitions"
              className="btn-rounded"
            >
              Explore more exhibitions
            </Link>
          </div>
        </section>

        {/* Last Artworks */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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

          <div>
            <h1 className="text-5xl lg:text-6xl font-semibold mb-4">Last artworks</h1>
            <p className="text-2xl text-muted-foreground mb-6">New pieces from the studio</p>
            <Link 
              to="/gallery"
              className="btn-rounded"
            >
              Explore more artworks
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
