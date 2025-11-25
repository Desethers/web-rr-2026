import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { nameDroppingImages } from "../data/namedroppingimg";
import { useIsMobile } from "@/hooks/use-mobile";
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
      <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-base text-muted-foreground">
        {img.caption}
      </figcaption>
    )}
  </figure>
);

const NameDropping: React.FC = () => {
  const images = nameDroppingImages;
  const isMobile = useIsMobile();
  const [isTextExpanded, setIsTextExpanded] = useState(false);

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px] pt-4 sm:pt-6 md:pt-12">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-4 leading-tight">
              Name Dropping
            </h1>
            <div className="h-px bg-border md:mb-2"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-4 max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px] py-4">
            {/* Date et infos */}
            <div className="intro_exhibition text-base md:text-base lg:text-lg xl:text-2xl">
              <p className="mb-4 md:mb-6">13 juin - 04 juillet 2025</p>
              <p className="">Pauline Perplexe</p>
              <p>90 Av. de la Convention, 94110 Arcueil</p>
            </div>

            {/* Ligne séparatrice visible uniquement sur mobile */}
            <div className="h-px bg-border md:hidden" />

            {/* Description de l'exposition */}
            <div className="intro_exhibition space-y-2 md:space-y-5 text-sm md:text-lg lg:text-xl xl:text-2xl">
              <p>
                Name Dropping explores how cultural references shape belonging
                and social codes by turning literary names into visual material.
              </p>
              <p>
                Writers’ names — from Houellebecq to Despentes — appear
                stencilled on canvases, both visible and erased, creating a play
                of inclusion and exclusion: what we recognise invites us in,
                what we don’t leaves us out. The works reveal how references act
                as passwords, status signals, or emotional markers.
              </p>
              <p>
                By stripping names of their aura and reducing them to surface,
                the exhibition transforms cultural capital into paint. It
                questions how we speak about art, literature, and identity — and
                what remains once the names disappear.
              </p>
            </div>

            {/* Filet / séparation sur mobile */}
            <div className="h-px bg-border md:hidden" />
          </div>
        </section>

        <section className="gallery max-w-[1440px] mx-auto mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-[25px]">
          <div className="pt-2 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-[100px]">
            <Figure key={4} img={images[4]} />

            <article className="texte_exhibition">
              <div className="relative">
                <div
                  className={`grid md:grid-cols-2 gap-x-6 md:gap-x-8 lg:gap-x-12 xl:gap-x-16 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 max-w-[1440px] mx-auto text-justify overflow-hidden transition-all duration-500 ${
                    isMobile && !isTextExpanded
                      ? "max-h-[10em]"
                      : "max-h-[5000px]"
                  }`}
                >
                  <div>
                    <p className="mb-4 italic">Madame Bovary, c'est vous.</p>
                    <p className="mb-4">
                      Dans une précédente exposition de Raphaël Rossi, cette
                      phrase, scindée d'une paire d'yeux braqués sur la porte,
                      accueille le spectateur. Une affiche, sortie le 1er Avril,
                      un ready-made, une Script et une Garamond, blanches, sur
                      fond de papier noir brillant, les traces de plis
                      accrochent la lumière. Le tout punaisé avec soin au centre
                      d'un carton noir format portrait, un genre de 90 par 200,
                      format porte. D'autres monochromes noirs, peints ou
                      cartonnés. Des bandes letterbox* comme des marges dans
                      lesquelles Raphaël Rossi rapporte des images, piquées à la
                      surface, de personnages joués par Julianne Moore, Adam
                      Driver, des film stills de la filmographie de PTA, des
                      petits morceaux de cinéma. Dans ces assemblages, des
                      présences plus ou moins intentionnelles dialoguent. Chaque
                      acteur et actrice appelle tous ses autres rôles. Question
                      de référence. Adèle Exarchopoulos, éclairée par les
                      flammes, échelle 1 ou plus grande encore, couronnée par la
                      Quinzaine, affiche tranchée, dédoublée, deux fois, et
                      collées sur les portes d'un placard. C'est tout.
                    </p>
                    <p className="mb-4">
                      Pourtant, l'écho d'un grand sérieux à la tâche retient
                      l'attention, le refus d'une plasticité savante, ou
                      saisissable, semble consommé. Les formes sont très ténues,
                      presque punies. La minutie à l'oeuvre saisie. Et c'est
                      comme si ça leur échappait (et quoi de plus humiliant ?) :
                      la dimension affective, à laquelle renvoie forcément, le
                      fait d'extraire, à l'exacto, et de coller, sur carton
                      neutre, des photogrammes montrant Kristen Stewart (qui n'a
                      pas eu d'obsession?)
                    </p>
                    <p className="mb-4">
                      Reste-t-il quelque chose de ce radeau de sensibilité ou de
                      sentimentalisme dans l'exposition Name Dropping ?
                      Abandonnant le collage pour la peinture, Raphaël Rossi
                      s'éloigne de ces matériaux fétichisés que sont les
                      produits dérivés de l'industrie cinématographique pour
                      deux monstres plus gros encore : la peinture et la
                      littérature. On s'étouffe. Un diptyque noir et blanc, un
                      peu argenté-chromé affiche en vis-à-vis, tracé au pochoir
                      : Michel Houellebecq et Virginie Despentes.
                    </p>
                    <p className="mb-4">
                      Chez Pauline Perplexe, des aplats Seigneurie, peinture
                      acrylique satin pour l'intérieur. Des bandes, blanches,
                      blanches grisées, vertes (une seule), rouges, s'articulent
                      avec des triangles qui interpénétrent des noms
                      d'auteurices, avec ou sans sérif. Sur d'épais châssis,
                      s'écrit où est écrit, en gros caractères, des patronymes
                      qui semblent feindre d'avoir été piochés au hasard ou par
                      distraction. Ils démarrent ou débordent sur la tranche des
                      toiles, et pèsent de tous leurs poids dans la pièce. La
                      peinture nomme pendant qu'elle efface.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      Certains noms nous parlent, d'autres non. S'installe un
                      jeu d'inclusion et d'exclusion. Ai-je lu, n'ai-je pas lu.
                      On est dedans, ou on reste à côté. Seule la reconnaissance
                      peut nous ramener à l'intérieur. Si le propre de la
                      référence est qu'elle nous traverse, et elle peut donc
                      aussi glisser, passer au dessus et nous laisser là.
                    </p>
                    <p className="mb-4">
                      Ici, c'est la littérature postmoderne, qui affleure de
                      manière consciente, celle où l'artifice stylistique tente
                      moins d'imiter le réel que de rechercher sa traduction
                      sensible. Littérature postmoderne, à la surface de toiles
                      peut-être ersatz d'une idée générique d'une histoire de
                      l'art réduite à ses attributs les plus voyants. Affiche,
                      adresse. Politique publique d'accès à la culture.
                      Problème. Pour qui et pourquoi ces noms sont-ils là ? Des
                      oeuvres entières ramenées à des noms. Raphaël Rossi les a
                      peut-être lus, ou alors il les aime bien, peu importe
                      qu'il y soit affectivement attaché ou non. L'effet compte.
                      Ce qui est pratique avec le name dropping, c'est qu'il
                      permet de se placer dans la pièce. Une manière de parler
                      littérature, art ou cinéma, par revers superficiel. Le
                      name dropping scripte le niveau social de la conversation
                      comme une pratique sociale en soi, un truc à la surface
                      qui fait genre. Littéralement « lâcher des noms », mais
                      pas n'importe lequel, à défaut des autres, d'inconnus
                      restés hors-champs. Et comme dirait Nathalie Quintane « Il
                      y a toujours une solution au problème de la culture ».
                    </p>
                    <p className="mb-4">
                      Et c'est peut-être parce qu'il y a trop de bavard.es et de
                      bavardage que Raphaël fait ça, ce travail en apnée, où
                      toutes ses peintures, comme de lentes expirations
                      contrôlée, synthétisent tout ce qu'il y a dire, tout ce
                      qui a déjà été dit, redit et mal dit, par la vrai, la
                      fausse citation, le miroir du sens. Finalement il nous
                      tend un crachoir, loin, très loin, d'être aseptisée.
                      Pftiou.
                    </p>
                    <p className="mb-4 italic">
                      Romain Grateau et Fiona Vilmer
                    </p>
                    <p className="text-sm text-muted-foreground">
                      *Bandes noires qui permettent de respecter le format
                      d'affichage d'un film (4/3, 16/9), sans le déformer ou le
                      recadrer. L'inverse du plein écran.
                    </p>
                  </div>
                </div>

                {isMobile && !isTextExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                )}
              </div>

              {isMobile && (
                <button
                  onClick={() => setIsTextExpanded(!isTextExpanded)}
                  className="flex items-center justify-center gap-2 w-full mt-4 py-3 text-foreground hover:bg-secondary transition-colors rounded-lg"
                >
                  <span className="font-medium">
                    {isTextExpanded ? "Masquer le texte" : "Lire la suite"}
                  </span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      isTextExpanded ? "rotate-180" : ""
                    }`}
                    size={20}
                  />
                </button>
              )}
            </article>

            {[2, 3].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc image + citation côte à côte */}
            <div className="module_img_quote grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {/* Image à gauche */}
              <figure className="img_side">
                <img
                  src="/assets/artworks-img/Franzen-01-detail.jpg"
                  alt="view of exhibition"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                  Franzen 02, 2025
                </figcaption>
              </figure>

              {/* Citation à droite */}
              <div className="quote_side flex items-center">
                <p className="text-xl sm:text-2xl md:text-3xl font-medium leading-tight px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
                  Si le propre de la référence est qu'elle nous traverse, et
                  elle peut donc aussi glisser, passer au dessus et nous laisser
                  là.
                </p>
              </div>
            </div>

            <div className="module_img_img grid md:grid-cols-2 gap-8 md:gap-8 lg:gap-8 ">
              {[
                {
                  src: "/assets/name-dropping/013.jpg",
                  caption: `Don DeLillo 02, 2025`,
                  inquireLink: "/artwork/De-Lillo-02",
                },
                {
                  src: "/assets/name-dropping/012.jpg",
                  caption: `Kasischke-02, 2024
            canvas, magazines.`,
                  inquireLink: "/artwork/Kasischke-02",
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

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mt-2 md:mt-4 ">
                    <figcaption className="legende_img text-xs sm:text-sm md:text-base text-muted-foreground">
                      {img.caption}
                    </figcaption>

                    {img.inquireLink && (
                      <Link
                        to={img.inquireLink}
                        className="bouton_inquire block sm:inline-block border border-foreground w-full sm:w-[240px] md:w-[260px] py-2 text-center hover:bg-foreground hover:text-background transition-colors text-sm md:text-base"
                      >
                        Inquire
                      </Link>
                    )}
                  </div>
                </figure>
              ))}
            </div>
            {[8, 1].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            <div className="quotes_exhibition_full">
              <p className="quotes_full text-xl sm:text-2xl md:text-3xl lg:text-4xl px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24 2xl:px-32 text-left leading-tight">
                Le name dropping scripte le niveau social de la conversation
                comme une pratique sociale en soi, un truc à la surface qui fait
                genre. Littéralement « lâcher des noms », mais pas n'importe
                lequel, à défaut des autres, d'inconnus restés hors-champs.
              </p>
            </div>
            {[5].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            <div className="module_img_img grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
              {[
                {
                  src: "/assets/name-dropping/015.jpg",
                  caption: `Moshfegh,2024`,
                  inquireLink: "/artwork/ottessa-moshfegh-2024",
                },
                {
                  src: "/assets/name-dropping/014.jpg",
                  caption: `Foster Wallace, 2024
            canvas, magazines.`,
                  inquireLink: "/artwork/foster-wallace-2024",
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

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 md:mt-4">
                    <figcaption className="legende_img text-xs sm:text-sm md:text-base text-muted-foreground">
                      {img.caption}
                    </figcaption>

                    {img.inquireLink && (
                      <Link
                        to={img.inquireLink}
                        className="bouton_inquire block sm:inline-block border border-foreground w-full sm:w-[240px] md:w-[260px] py-2 text-center hover:bg-foreground hover:text-background transition-colors text-sm md:text-base"
                      >
                        Inquire
                      </Link>
                    )}
                  </div>
                </figure>
              ))}
            </div>

            {[16, 9, 6].map((i) => (
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
        <div className="footer-content max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="legal text-center sm:text-left">
            <p className="text-sm md:text-base">
              © 2024 Raphaël Rossi - All Rights Reserved
            </p>
          </div>
          <div className="social-media text-center sm:text-right">
            <a
              href="https://www.instagram.com/raphaaelrossi/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-sm md:text-base"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NameDropping;
