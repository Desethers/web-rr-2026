import Navigation from "@/components/Navigation";

const Exhibitions = () => {
  const exhibitions = [
    {
      id: "1",
      title: "Extraverted paintings / Introverting pictures",
      venue: "Bagnoler",
      dates: "16 septembre - 23 novembre 2023",
      image: "https://raphaelrossi.com/assets/extraverted-paintings/extraverted-01.jpg"
    },
    {
      id: "2",
      title: "Watch to earn",
      venue: "Frac Bourgogne",
      dates: "12 janvier - 02 février 2024",
      image: "/assets/watch-to-earn/watch-12.jpg"
    },
    {
      id: "3",
      title: "Madame Bovary",
      venue: "Poush",
      dates: "08 mars - 28 mars 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/colour-01.jpg"
    },
    {
      id: "4",
      title: "La capitale tomes 1 et 2, Vol.II",
      venue: "Centre d'Art les Tanneries",
      dates: "15 avril - 10 mai 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/portraits-01.jpg"
    },
    {
      id: "5",
      title: "Silent Dialogues",
      venue: "Centre d'Art Léandre",
      dates: "01 juin - 20 juin 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/silent-01.jpg"
    },
    {
      id: "6",
      title: "Acrylic Landscapes",
      venue: "Espace 17",
      dates: "05 juillet - 30 juillet 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/landscapes-01.jpg"
    },
    {
      id: "7",
      title: "Studio Works",
      venue: "Galerie du Pont",
      dates: "10 août - 31 août 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/studio-01.jpg"
    },
    {
      id: "8",
      title: "Between Shapes",
      venue: "La Fabrique",
      dates: "07 septembre - 27 septembre 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/shapes-01.jpg"
    },
    {
      id: "9",
      title: "Paper & Paint",
      venue: "Galerie Blanche",
      dates: "03 octobre - 24 octobre 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/paper-01.jpg"
    },
    {
      id: "10",
      title: "Recent Works",
      venue: "Studio 9",
      dates: "12 novembre - 05 décembre 2024",
      image: "https://raphaelrossi.com/assets/exhibitions/recent-01.jpg"
    },
    {
      id: "11",
      title: "Retrospective Selections",
      venue: "Musée Local",
      dates: "10 décembre 2024 - 15 janvier 2025",
      image: "https://raphaelrossi.com/assets/exhibitions/retro-01.jpg"
    }
  ];
  return (
    <>
      <Navigation />
      
      <main className="pt-24">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-4 animate-fade-in">Past exhibitions</h1>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {exhibitions.map((exhibition, index) => (
              <div 
                key={exhibition.id}
                className="group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-card mb-4">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-full object-cover image-filtered transition-elegant group-hover:scale-105"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-xl font-medium">{exhibition.title}</h3>
                  <p className="text-base text-muted-foreground">{exhibition.venue}</p>
                  <p className="text-base text-muted-foreground">{exhibition.dates}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export default Exhibitions;
