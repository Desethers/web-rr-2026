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
        <section className="max-w-[1440px] mx-auto px-[25px] py-12">
        
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-6 animate-fade-in">Gallery</h1>
            <div className="h-px bg-border mb-8"></div>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <p className="text-lg text-muted-foreground">New pieces from the studio</p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Dive into our newest arrivals with a curated selection of standout artworks, 
                hand-picked by our curators each week. Discover fresh paintings, innovative sculptures, 
                limited-edition prints, serene ceramics, and everything in between.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-semibold mb-8">Paintings</h2>
          
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
