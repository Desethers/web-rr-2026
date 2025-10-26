import Navigation from "@/components/Navigation";

const Exhibitions = () => {
  const exhibitions = [
    {
      id: "1",
      title: "Extraverted paintings / Introverting pictures",
      venue: "Bagnoler",
      dates: "16 septembre - 23 novembre 2023",
      image: "https://raphaelrossi.com/assets/extraverted-paintings/extraverted-01.jpg"
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
