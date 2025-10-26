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
      
      <main className="pt-16">
        <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="mb-16">
            <h1 className="text-4xl lg:text-5xl font-light mb-4 animate-fade-in">Past Exhibitions</h1>
            <p className="text-xl text-muted-foreground">Recent shows and presentations</p>
          </div>
          
          <div className="space-y-20">
            {exhibitions.map((exhibition, index) => (
              <div 
                key={exhibition.id}
                className="grid md:grid-cols-2 gap-12 items-start animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="aspect-video overflow-hidden bg-card">
                  <img 
                    src={exhibition.image} 
                    alt={exhibition.title}
                    className="w-full h-full object-cover transition-elegant hover:scale-105"
                  />
                </div>
                <div className="space-y-4">
                  <h2 className="text-3xl font-light">{exhibition.title}</h2>
                  <p className="text-xl text-muted-foreground">{exhibition.venue}</p>
                  <p className="text-muted-foreground">{exhibition.dates}</p>
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
