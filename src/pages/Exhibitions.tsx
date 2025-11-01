import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
const Exhibitions = () => {
  // ...existing code...
  const exhibitions = [
    {
      id: "1",
      title: "Name Dropping",
      venue: "Pauline Perplexe",
      dates: "16 septembre - 23 novembre 2023",
      image: "/assets/name-dropping/006.jpg"
    },
    {
      id: "2",
      title: "Extraverted paintings / Introverting pictures",
      venue: "Bagnoler",
      dates: "16 septembre - 23 novembre 2023",
      image: "https://raphaelrossi.com/assets/extraverted-paintings/extraverted-01.jpg"
    },
    {
      id: "3",
      title: "Watch to earn",
      venue: "Frac Bourgogne",
      dates: "12 janvier - 02 février 2024",
      image: "/assets/watch-to-earn/watch-12.jpg"
    },
    {
      id: "4",
      title: "Madame Bovary",
      venue: "Poush",
      dates: "08 mars - 28 mars 2024",
      image: "/assets/pictures-past-exhibitions/bovary-past-exhibitions-grid.jpg"
    },
    {
      id: "5",
      title: "La capitale tomes 1 et 2, Vol.II",
      venue: "Centre d'Art les Tanneries",
      dates: "15 avril - 10 mai 2024",
      image: "/assets/pictures-past-exhibitions/la-capitale-vol02-past-exhibitions-grid.jpg"
    },
    {
      id: "6",
      title: "La capitale tome I et II",
      venue: "Centre d’art les Tanneries",
      dates: "11 janvier - 22 mars 2020",
      image: "/assets/pictures-past-exhibitions/la-capitale-tomes-1-et-2-past-exhibitions-grid.jpg"
    },
    {
      id: "7",
      title: "Au bord de l'âge adulte",
      venue: "FRAC Champagne-Ardennes",
      dates: "10 otobre - 13 déc. 2019",
      image: "/assets/pictures-past-exhibitions/au-bord-de-l-age-past-exhibitions-grid.jpg"
    },
    {
      id: "8",
      title: "Le Vingtième Prix de la Fondation Ricard",
      venue: "Fondation d'entreprise Ricard",
      dates: "11 septembre - 27 octobre 2018",
      image: "/assets/pictures-past-exhibitions/vingtieme-prix-past-exhibitions-grid.jpg"
    },
    {
      id: "9",
      title: "Which drinking buddy are you ?",
      venue: "Chiffonnier",
      dates: "28 avril - 20 mai 2018",
      image: "/assets/pictures-past-exhibitions/which-drinking-past-exhibitions-grid.jpg"
    },
  ];


return (
    <>
      <Navigation />
      
      <main>
        <section className="max-w-7xl mx-auto px-[25px] pt-5 pb-12">
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
                  {exhibition.title === "Name Dropping" ? (
                    <Link
                      to="/exhibitions/namedropping"
                      state={exhibition}
                      className="text-xl font-medium text-primary hover:underline"
                    >
                      {exhibition.title}
                    </Link>
                  ) : exhibition.title === "Extraverted paintings / Introverting pictures" ? (
                    <Link
                      to="/exhibitions/extraverted-paintings"
                      state={exhibition}
                      className="text-xl font-medium text-primary hover:underline"
                    >
                      {exhibition.title}
                    </Link>
                  ) : (
                    <h3 className="text-xl font-medium">{exhibition.title}</h3>
                  )}

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
