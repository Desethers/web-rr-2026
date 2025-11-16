import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { auBordDeLAgeAdulteImages } from "../data/auborddelageadulteimg";

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

const AuBordDeLAgeAdulte: React.FC = () => {
  const images = auBordDeLAgeAdulteImages;

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-[25px] pt-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              Au bord de l'âge adulte
            </h1>
            <div className="h-px bg-border mb-8"></div>
          </div>
        </section>

        <section className="textandinfos">
          {/* 🔥 Correction : espace ajouté entre [1440px] et mx-auto */}
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-[1440px] mx-auto px-[25px]">
            <div className="intro_exhibition">
              <p>23 janvier - 21 avril 2020</p>
              <p className="mt-2">
                FRAC Champagne-Ardennes,
                <br />
                51100, Reims
              </p>
            </div>

            <div className="intro_exhibition space-y-5">
              <p>
                The FRAC Champagne-Ardenne hosts, as part of the exhibition
                Plein Jeu #2, Camille Beson, Raphaël Rossi, Maxime Testu, and
                Victor Vaysse.
              </p>
              <p>
                This provides another opportunity for these members of the
                artist-run space Le Marquis to showcase their creations
                together, a few months after Neïl Beloufa's invitation to the
                Twentieth Ricard Prize at the Ricard Foundation, where they
                presented Has-been, hélas.
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery max-w-[1440px] mx-auto px-[25px] py-12">
          <div className="space-y-[100px]">
            <Figure key={4} img={images[4]} />

            <article className="texte_exhibition">
              <div className="grid md:grid-cols-2 gap-x-[100px] px-[100px] max-w-[1440px] mx-auto text-justify">
                <div>
                  <p className="mb-4">
                    Raphaël Rossi is interested in public space furniture,
                    which, despite its seemingly simple forms, exhibits
                    sculptural qualities.
                  </p>
                  <p className="mb-4">
                    The artist creates benches from steel tubes panels,
                    accentuating the aggressive shapes that public authorities
                    have given to public benches to discourage homeless
                    individuals from sitting on them. He thus highlights the
                    dual discourse of designing furniture for conviviality while
                    proclaiming a prohibition through "unwelcoming forms." The
                    benches invite idleness, internal monologue, or dialogue.
                    These pieces are juxtaposed with films that have shaped his
                    perspective on the world.
                  </p>
                  <p className="mb-4">
                    The posters of L’âge des possibles by Pascale Ferrand and
                    Comment je me suis disputé by Arnaud Desplechin, which he
                    places on these benches, share a common theme of addressing
                    the generation of 25-35-year-olds, the pivotal moment
                    between leaving higher education and entering the
                    professional world. These young people, born in the 90s, did
                    not experience the Beat Generation nor the hope of the
                    future in the 2000s. Instead, they found themselves in a
                    reality where the prospect of a better world was
                    dissipating.
                  </p>
                </div>

                <div>
                  <p className="mb-4">
                    Raphaël Rossi reflects on a turn-of-the-century youth: what
                    does it mean to be young and reach the end of a century? For
                    the artist, cinema is a privileged medium for exchange, a
                    catalyst for debate, a form of dialogue because it "belongs
                    to no one." It serves as an open path for discussion,
                    allowing the projection of personal experiences and
                    references in a more collective and instantaneous manner
                    than literature.
                  </p>

                  <p className="mb-4 italic">
                    Text by Valérie Toubas and Daniel Guionnet
                  </p>
                </div>
              </div>
            </article>

            {[0].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* Image + citation */}
            <div className="module_img_quote grid md:grid-cols-2 gap-10">
              <figure className="img_side">
                <img
                  src="/assets/au-bord-de-l-age-adulte/au-bord-05.jpg"
                  alt="view of exhibition"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="legende_img text-sm text-muted-foreground mt-2 text-left">
                  Installation view, Au bord de l'âge adulte, 2019 Photo :
                  Martin Argyroglo ©
                </figcaption>
              </figure>

              <div className="quote_side flex items-center">
                <p className="text-2xl md:text-3xl lg:text-3xl font-medium leading-tight px-[100px]">
                  «Cette pratique décousue et éclatée du collage est une façon
                  de classer, de rassembler, de hiérarchiser ses goûts, de
                  donner de la valeur aux expériences qui comptent pour lui.»
                  Marie Griffay, extrait du texte de l’exposition Au bord de
                  l’âge adulte.
                </p>
              </div>
            </div>

            {[3, 1, 6].map((i) => (
              <Figure key={i} img={images[i]} />
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

export default AuBordDeLAgeAdulte;
