import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      
      <main className="pt-24">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-semibold mb-12">About</h1>
            
            <div className="space-y-8">
              <p className="text-xl leading-relaxed">
                Raphaël Rossi is a contemporary artist working primarily with acrylic on canvas. 
                His work explores the intersection of abstraction and portraiture, creating unique 
                visual interpretations of literary figures and cultural personalities.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Based in France, Rossi's practice is characterized by a distinctive approach to 
                color and form, developing series that examine the relationship between public 
                personas and private introspection. His recent exhibitions include "Extraverted 
                paintings / Introverting pictures" at Bagnoler.
              </p>

              <div className="pt-12 border-t border-border">
                <h2 className="text-3xl font-semibold mb-6">Contact</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  For inquiries about available works, exhibitions, or commissions, 
                  please reach out via email.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;
