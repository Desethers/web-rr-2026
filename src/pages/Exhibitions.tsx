import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Exhibitions = () => {
  const exhibitions = [
    {
      id: "1",
      title: "Name Dropping",
      slug: "Namedropping",
      venue: "Pauline Perplexe",
      dates: "13 juin - 04 juillet 2025",
      image: "/assets/name-dropping/006.jpg",
    },
    {
      id: "2",
      title: "Extraverted paintings / Introverting pictures",
      slug: "Extraverted-paintings",
      venue: "Bagnoler",
      dates: "12 septembre - 10 octobre 2023",
      image: "/assets/extraverted-paintings/extraverted-01.jpg",
    },
    {
      id: "3",
      title: "Watch to earn",
      slug: "Watch-to-earn",
      venue: "Frac Bourgogne",
      dates: "5 septembre - 6 novembre 2022",
      image: "/assets/watch-to-earn/watch-12.jpg",
    },
    {
      id: "4",
      title: "Madame Bovary",
      slug: "Madame-Bovary",
      venue: "Poush",
      dates: "08 mars - 28 mars 2024",
      image: "/assets/pictures-past-exhibitions/bovary-past-exhibitions-grid.jpg",
    },
    {
      id: "5",
      title: "La capitale tomes 1 et 2, Vol.II",
      slug: "La-capitale-vol-II",
      venue: "Centre d'Art les Tanneries",
      dates: "15 avril - 10 mai 2024",
      image: "/assets/pictures-past-exhibitions/la-capitale-vol02-past-exhibitions-grid.jpg",
    },
    {
      id: "6",
      title: "La capitale tome I et II",
      slug: "La-capitale",
      venue: "Centre d'art les Tanneries",
      dates: "11 janvier - 22 mars 2020",
      image: "/assets/pictures-past-exhibitions/la-capitale-tomes-1-et-2-past-exhibitions-grid.jpg",
    },
    {
      id: "7",
      title: "Au bord de l'âge adulte",
      slug: "Au-bord-de-l-age-adulte",
      venue: "FRAC Champagne-Ardennes",
      dates: "10 otobre - 13 déc. 2019",
      image: "/assets/pictures-past-exhibitions/au-bord-de-l-age-past-exhibitions-grid.jpg",
    },
    {
      id: "8",
      title: "Le Vingtième Prix de la Fondation Ricard",
      slug: "Le-Vingtieme-Prix",
      venue: "Fondation d'entreprise Ricard",
      dates: "11 septembre - 27 octobre 2018",
      image: "/assets/pictures-past-exhibitions/vingtieme-prix-past-exhibitions-grid.jpg",
    },
  ];

  return (
    <>
      <Navigation />

      <main>
        <section className="mx-auto px-4 md:px-[25px] py-12">
          <div className="mb-12">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-4 animate-fade-in">Past exhibitions</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
            {exhibitions.map((exhibition, index) => (
              <div key={exhibition.id} className="group animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-[4/3] overflow-hidden bg-card mb-4 rounded-xl">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover image-filtered transition-elegant group-hover:scale-105"
                  />
                </div>

                <div className="space-y-1">
                  <Link
                    to={`/exhibitions/${exhibition.slug}`}
                    state={exhibition}
                    className="text-xl font-medium text-primary link-underline cursor-pointer"
                  >
                    {exhibition.title}
                  </Link>

                  <div className="relative h-6 overflow-hidden">
                    <p className="text-base text-muted-foreground transition-all duration-300 group-hover:opacity-0 group-hover:-translate-y-full">
                      {exhibition.venue}
                    </p>
                    <p className="text-base text-muted-foreground absolute top-0 left-0 transition-all duration-300 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0">
                      {exhibition.dates}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Exhibitions;
