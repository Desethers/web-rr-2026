import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Figure from "@/components/exhibition/Figure";
import ExpandableText from "@/components/exhibition/ExpandableText";
import { Link } from "react-router-dom";
import { vingtiemePrixImages } from "../data/vingtiemepriximg";

const LeVingtiemePrix: React.FC = () => {
  const images = vingtiemePrixImages;

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="mx-auto px-4 md:px-[25px] pt-4 sm:pt-6 md:pt-12">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-4 leading-tight">
              Le Vingtième Prix De La Fondation Ricard
            </h1>
            <div className="h-px bg-border md:mb-2"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-4 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px] py-4">
            <div className="intro_exhibition text-sm md:text-[18px] 2xl:text-2xl">
              <p className="mb-4 md:mb-6">11 septembre - 27 octobre 2018</p>
              <p className="">Fondation d'entreprise Ricard,</p>
              <p>75008, Paris</p>
            </div>

            <div className="h-px bg-border md:hidden" />

            <div className="intro_exhibition space-y-2 md:space-y-5 text-sm md:text-[18px] 2xl:text-2xl">
              <p>
                For the past twenty years, the Prix de la Fondation d'entreprise Ricard has asserted itself as a key force in shaping the French art scene—its structures, hierarchies, methods, and forms. Year after year, it legitimizes the practices of artists, curators, and institutions, while playfully subverting itself when it invites artists to act as curators and curators to engage in artistic practice.
              </p>
            </div>

            <div className="h-px bg-border md:hidden" />
          </div>
        </section>

        <section className="gallery max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px]">
          <div className="pt-2 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20">
            <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-[100px]">
              <Figure key="vingtieme-3-intro" img={{ src: "/assets/vingtieme-prix/vingtieme-3.jpg" }} />

              <ExpandableText maxHeight="7.5em">
                <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-[100px] px-4 md:px-[100px] mx-auto text-justify text-[16px]">
                  <div>
                    <p className="mb-4">
                      Si, plus largement, les jeux de passage de flambeau et d'usurpation de rôles entre auteurs, acteurs,
                      commentateurs, décors, lieux dédiés ou non, dedans et dehors, avec et sans, ensemble, seuls et contraints,
                      neufs et d'occasion, libérés ou non pouvaient faire sujet, il semble aujourd'hui que ces décloisonnements systémiques
                      soient entrés dans les canons de la conception d'une exposition.
                    </p>
                    <p className="mb-4">
                      Alors si tout a été dit et contredit, les instances de validation restent légitimes tout en ne représentant
                      plus un enjeu pour les artistes.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      Des pratiques artistiques émergent qui n'entrent ni dans le calibrage à tout prix, ni dans des formats
                      d'opposition. L'engagement est complet, nonchalant plus que vindicatif. L'indéfinition assumée de ces productions ne se pose pas comme
                      une revendication. Elle recentre des propositions sur ce que cette introduction évite d'évoquer dans un paradoxe filé : l'Art et son expérimentation.
                    </p>
                    <p className="mb-4">
                      L'exposition Le Vingtième Prix de la Fondation d'entreprise Ricard tente à la fois de respecter les modalités de son existence et de rendre compte de ce mouvement dont les acteurs principaux ne se soucient pas.
                    </p>
                    <p className="mb-4">Joyeux anniversaire et merci.</p>
                    <p className="italic">N.</p>
                  </div>
                </div>
              </ExpandableText>

              <Figure key="vingtieme-4" img={{ src: "/assets/vingtieme-prix/vingtieme-4.jpg" }} />
              <Figure key="vingtieme-10" img={{ src: "/assets/vingtieme-prix/vingtieme-10.jpg" }} />

              {images.map((img, idx) => (
                <Figure key={idx} img={img} />
              ))}
            </div>

            <div className="mt-8 md:mt-10">
              <Link to="/exhibitions" className="text-sm hover:underline">
                ← Retour aux expositions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default LeVingtiemePrix;
