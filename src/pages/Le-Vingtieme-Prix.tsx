import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Figure from "@/components/exhibition/Figure";
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
            <div className="intro_exhibition text-[18px]">
              <p>11 septembre - 27 octobre 2018</p>
              <p className="mt-2">
                Fondation d'entreprise Ricard,
                <br />
                75008, Paris
              </p>
            </div>

            <div className="intro_exhibition text-[18px]">
              <p>
                Extrait : Sur le banc public s’échangent les mots et les images.
                La réification du sens en unités manipulables...
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px]">
          <div className="pt-2 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-[100px]">
            <article className="texte_exhibition text-sm md:text-[18px]">
              <p>
                Sur le banc public s’échangent les mots et les images. La
                réification du sens en unités manipulables introduit dans
                l’esprit du collectionneur la possibilité d’articuler ses
                fétiches. Le partage des objets appelle une économie du signe...
              </p>
              <p>Texte de Manuel Vieillot</p>
            </article>

            {images.map((img, idx) => (
              <Figure key={idx} img={img} />
            ))}

            <div className="mt-1 md:mt-12">
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
