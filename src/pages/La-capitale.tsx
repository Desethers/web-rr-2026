import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { laCapitaleImages } from "../data/lacapitaleimg";

type ExhibitImage = {
  src: string;
  alt?: string;
  caption?: string | JSX.Element;
  className?: string;
};

const Figure: React.FC<{ img: ExhibitImage }> = ({ img }) => (
  <figure className={img.className ?? "imagefull"}>
    <img
      src={img.src}
      alt={img.alt ?? ""}
      className="w-full object-cover"
      loading="lazy"
      decoding="async"
    />
    {img.caption && (
      <figcaption className="legende_img mt-2 text-sm text-muted-foreground">
        {img.caption}
      </figcaption>
    )}
  </figure>
);

const LaCapitale: React.FC = () => {
  const images = laCapitaleImages;

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px] pt-8 md:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              La capitale Tomes I et II
            </h1>
            <div className="h-px bg-border mb-8"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-[1440px]mx-auto px-[25px]">
            <div className="intro_exhibition">
              <p>11 janvier - 22 mars 2020</p>
              <p className="mt-2">
                Centre d’art les Tanneries,
                <br />
                45200, Amilly
              </p>
            </div>

            <div className="intro_exhibition">
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

        <section className="gallery max-w-[1440px] mx-auto px-[25px] py-12">
          <div className="space-y-8">
            <article className="texte_exhibition">
              <div className="grid md:grid-cols-2 gap-x-[100px] px-[100px] max-w-[1440px] mx-auto text-justify">
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
                    figure of the artist is not immune. Text by Eric Degoutte
                  </p>
                </div>
              </div>
            </article>

            {images.map((img, idx) => (
              <Figure key={idx} img={img} />
            ))}

            <div className="mt-12">
              <Link to="/exhibitions" className="text-sm hover:underline">
                ← Retour aux expositions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer mt-12">
        <div className="footer-content max-w-5xl mx-auto px-6 lg:px-8 py-6">
          <div className="legal">
            <p>© 2024 Raphaël Rossi - All Rights Reserved</p>
          </div>
          <div className="social-media">
            <a
              href="https://www.instagram.com/raphaaelrossi/"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LaCapitale;
