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
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative h-[70vh] overflow-hidden">
          <img 
            src="https://raphaelrossi.com/assets/extraverted-paintings/extraverted-01.jpg"
            alt="Exhibition view"
            className="w-full h-full object-cover"
          />
        </section>

        {/* Featured Exhibition */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-light mb-6 animate-fade-in">
              Extraverted paintings / Introverting pictures
            </h1>
            <p className="text-xl text-muted-foreground mb-4">Bagnoler</p>
            <p className="text-muted-foreground mb-8">16 septembre - 23 novembre 2023</p>
            <Link 
              to="/exhibitions"
              className="inline-block text-sm uppercase tracking-wider border-b border-primary pb-1 hover:pb-2 transition-elegant"
            >
              Explore more exhibitions
            </Link>
          </div>
        </section>

        {/* Last Artworks */}
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20 border-t border-border">
          <div className="mb-12">
            <h2 className="text-3xl font-light mb-3">Last artworks</h2>
            <p className="text-muted-foreground">New pieces from the studio</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
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

          <div className="text-center">
            <Link 
              to="/gallery"
              className="inline-block text-sm uppercase tracking-wider border-b border-primary pb-1 hover:pb-2 transition-elegant"
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
