import Navigation from "@/components/Navigation";

const About = () => {
  return (
    <>
      <Navigation />
      
      <main className="pt-16">
        <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-light mb-12">About</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Raphaël Rossi is a contemporary artist working primarily with acrylic on canvas. 
                His work explores the intersection of abstraction and portraiture, creating unique 
                visual interpretations of literary figures and cultural personalities.
              </p>
              
              <p className="text-muted-foreground leading-relaxed mb-8">
                Based in France, Rossi's practice is characterized by a distinctive approach to 
                color and form, developing series that examine the relationship between public 
                personas and private introspection. His recent exhibitions include "Extraverted 
                paintings / Introverting pictures" at Bagnoler.
              </p>

              <div className="pt-12 border-t border-border">
                <h2 className="text-2xl font-light mb-6">Contact</h2>
                <p className="text-muted-foreground">
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
