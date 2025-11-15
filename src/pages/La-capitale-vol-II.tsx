import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { laCapitaleVol2Images } from "../data/lacapitalevol2img";

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

const LaCapitaleVolII: React.FC = () => {
  const images = laCapitaleVol2Images;

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-[25px] pt-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              La capitale Tomes I et II Vol.II
            </h1>
            <div className="h-px bg-border mb-8"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-[1440px]mx-auto px-[25px]">
            <div className="intro_exhibition">
              <p>10 octobre - 13 décembre 2020</p>
              <p className="mt-2">
                Centre d'Art les Tanneries,
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
            <Figure key={1} img={images[1]} />
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

            {[2, 3].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc image + citation côte à côte */}
            <div className="module_img_quote grid md:grid-cols-2 gap-10">
              {/* Image à gauche */}
              <figure className="img_side">
                <img
                  src="/assets/la-capitale-vol-II/la capitale-04.jpg"
                  alt="view of exhibition"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="legende_img text-sm text-muted-foreground mt-2 text-left">
                  Franzen 02, 2025
                </figcaption>
              </figure>

              {/* Citation à droite */}
              <div className="quote_side flex items-center">
                <p className="text-2xl md:text-3xl lg:text-3xl font-medium leading-tight px-[100px]">
                  Laboratoire de formes et d’associations comme de formes
                  d’associations, l’espace-temps de La Capitale, Tomes I et II,
                  vol. II met ainsi en lumière l’intérêt partagé par les quatre
                  artistes pour les coulisses et interstices de la création – de
                  l’atelier à l’espace d’exposition, du mystère des gestes aux
                  lumières de la Ville –, comme il laisse poindre la promesse de
                  projets futurs – ouverts à d’autres collaborateurs – pour
                  continuer à faire de l’atelier une œuvre et de l’œuvre un
                  atelier.
                </p>
              </div>
            </div>
            {[5, 6].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc 2 images côte à côte */}
            <div className="module_img_img grid md:grid-cols-2 gap-10">
              {[
                {
                  src: "/assets/la-capitale-vol-II/la capitale-07.jpg",
                  caption: `Don DeLillo`,
                },
                {
                  src: "/assets/la-capitale-vol-II/la capitale-08.jpg",
                  caption: `Details of Valéria, 2023
                      canvas, magazines.`,
                },
              ].map((img, idx) => (
                <figure className="imagefull" key={idx}>
                  <img
                    src={img.src}
                    alt="view of exhibition"
                    className="w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="legende_img mt-2 text-sm text-muted-foreground">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="mt-12">
              <Link to="/exhibitions" className="text-sm hover:underline">
                ← Retour aux expositions
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer mt-12">
        <div className="footer-content max-w-[1440px] mx-auto px-[25px] py-6 flex justify-between items-center">
          <div className="legal">
            <p>© 2024 Raphaël Rossi - All Rights Reserved</p>
          </div>
          <div className="social-media">
            <a
              href="https://www.instagram.com/raphaaelrossi/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LaCapitaleVolII;
