import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Figure from "@/components/exhibition/Figure";
import { Link } from "react-router-dom";
import { laCapitaleImages } from "../data/lacapitaleimg";

const LaCapitale: React.FC = () => {
  const images = laCapitaleImages;

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="mx-auto px-4 md:px-[25px] pt-8 md:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              La capitale Tomes I et II
            </h1>
            <div className="h-px bg-border mb-5 md:mb-8"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-4 mx-auto px-4 md:px-[25px] py-4">
            <div className="intro_exhibition text-[18px]">
              <p>11 janvier - 22 mars 2020</p>
              <p className="mt-2">
                Centre d'art les Tanneries,
                <br />
                45200, Amilly
              </p>
            </div>

            <div className="intro_exhibition text-[18px]">
              <p className="mb-4">
                For their first exhibition, both collective and individual, at
                the Tanneries, Camille Besson, Raphaël Rossi, Maxime Testu, and
                Victor Vaysse bring together a collection of heterogeneous
                figures in the Petite Galerie.{" "}
              </p>
              <p className="mb-4">
                {" "}
                By juxtaposing these figures, they highlight both artistic
                individualities and shared reflections—deep undercurrents of a
                contingent and pragmatic association of individuals.
              </p>
              <p className="mb-4">Curator : Eric Degoutte</p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery mx-auto px-4 md:px-[25px]">
          <div className="pt-2 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-[100px]">
            {images.length > 0 && <Figure key="first" img={images[0]} />}

            <article className="texte_exhibition">
              <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-[100px] px-4 md:px-[100px] mx-auto text-justify text-sm md:text-[18px]">
                <div>
                  <p className="mb-4">
                    Cinema, its history, the images it produces, both as they
                    are and as we conceive them, are the preferred materials of
                    Raphaël Rossi. They are found as much in his practice as a
                    sculptor as in his more recent and increasingly prevalent
                    work in collage, through which the artist seems to be
                    developing a new approach to. Mixing within his collages
                    film posters, portraits of actresses and actors – true icons
                    –, logos of theaters, producers, and distributors,
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    Raphaël Rossi captures the singular materiality of these
                    images, as well as the thoughts they convey. In doing so, he
                    questions both the ontological and physical relationships
                    between the individual and cinema, between intimate and
                    collective imaginaries, leading to analyses to which the
                    figure of the artist is not immune.
                  </p>
                  <p className="mb-4 italic">Text by Eric Degoutte
                  </p>
                </div>
              </div>
            </article>

            {images.slice(1).map((img, idx) => (
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

export default LaCapitale;