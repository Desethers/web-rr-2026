import Navigation from "@/components/Navigation";
import ArtworkCard from "@/components/ArtworkCard";

const Gallery = () => {
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
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-light mb-4 animate-fade-in">Gallery</h1>
            <p className="text-xl text-muted-foreground">Selected works</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
