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
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px] pt-8 md:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
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
                For their second presence at the Tanneries, Camille Besson,
                Raphaël Rossi, Maxime Testu, and Victor Vaysse reinvest the
                Petite Galerie, navigating between flashbacks and
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
                    Eclectic, the creations displayed on the walls – whose
                    apparent two-dimensionality seems to be nothing but a
                    deception – are interconnected in a manner reminiscent of an
                    editorial railway or a cinema screening schedule. It's not
                    surprising, then, that it falls to Raphaël Rossi (born in
                    1988 in Dijon) – whose work revolves around systems and
                    devices of cinematic dissemination and reception – to
                    organize, connect, or even separate them, thereby
                    structuring the space. As a discerning observer, the artist
                    proposes two in situ installations for this purpose.
                  </p>
                  <p>
                    The first, composed of several black monochromes mounted on
                    frames, forms a horizon line. A simplified extraction of a
                    characteristic element from the facade of MK2 Beaubourg in
                    Paris, stripped of its branding, it nonetheless carries
                    within the exhibition space the memories associated with its
                    original nature, weaving together personal stories and
                    collective unconscious.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    A true vanishing point, its stretch both encourages and
                    follows the movements of the visitor, delineating a
                    trajectory in which all presented works are inscribed.
                    Aerial in nature, this black thread of the exhibition
                    engages in a dialogue with another, more down-to-earth black
                    strip. Sewer grates littering the floor and contaminating
                    the walls serve to complete the demarcation – while
                    seemingly extending it – of the exhibition framework,
                    unfolding a thought in motion, a true visual journey through
                    four universes presented in a multi-screen.
                  </p>
                  <p className="mb-4">Text by Eric Degoutte</p>
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
