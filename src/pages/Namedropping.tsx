import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { nameDroppingImages } from "../data/namedroppingimg";

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

const NameDropping: React.FC = () => {
  const images = nameDroppingImages;

  return (
    <>
      <Navigation />

      <main className="pt-20">
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-[25px] py-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              Name Dropping
            </h1>
            <div className="h-px bg-border mb-8"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-[1440px] mx-auto px-[25px] py-12">
            <div className="intro_exhibition">
              <p>29 septembre - 22 octobre 2023</p>
              <p className="mt-2">
                Bagnoler, 46 rue Jules Ferry,
                <br />
                93170, Bagnolet
              </p>
            </div>

            <div className="intro_exhibition">
              <p>
                Extrait : Sur le banc public s'échangent les mots et les images.
                La réification du sens en unités manipulables...
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery max-w-[1440px] mx-auto px-[25px] py-12">
          <div className="space-y-[100px]">
            {images.length > 0 && <Figure img={images[0]} />}

            <article className="texte_exhibition">
              <div className="grid md:grid-cols-2 gap-x-[100px] px-[100px] max-w-[1440px] mx-auto text-justify">
                <div>
                  <p className="mb-4 italic">Madame Bovary, c'est vous.</p>
                  <p className="mb-4">
                    Dans une précédente exposition de Raphaël Rossi, cette
                    phrase, scindée d'une paire d'yeux braqués sur la porte,
                    accueille le spectateur. Une affiche, sortie le 1er Avril,
                    un ready-made, une Script et une Garamond, blanches, sur
                    fond de papier noir brillant, les traces de plis accrochent
                    la lumière. Le tout punaisé avec soin au centre d'un carton
                    noir format portrait, un genre de 90 par 200, format porte.
                    D'autres monochromes noirs, peints ou cartonnés. Des bandes
                    letterbox* comme des marges dans lesquelles Raphaël Rossi
                    rapporte des images, piquées à la surface, de personnages
                    joués par Julianne Moore, Adam Driver, des film stills de la
                    filmographie de PTA, des petits morceaux de cinéma. Dans ces
                    assemblages, des présences plus ou moins intentionnelles
                    dialoguent. Chaque acteur et actrice appelle tous ses autres
                    rôles. Question de référence. Adèle Exarchopoulos, éclairée
                    par les flammes, échelle 1 ou plus grande encore, couronnée
                    par la Quinzaine, affiche tranchée, dédoublée, deux fois, et
                    collées sur les portes d'un placard. C'est tout.
                  </p>
                  <p className="mb-4">
                    Pourtant, l'écho d'un grand sérieux à la tâche retient
                    l'attention, le refus d'une plasticité savante, ou
                    saisissable, semble consommé. Les formes sont très ténues,
                    presque punies. La minutie à l'oeuvre saisie. Et c'est comme
                    si ça leur échappait (et quoi de plus humiliant ?) : la
                    dimension affective, à laquelle renvoie forcément, le fait
                    d'extraire, à l'exacto, et de coller, sur carton neutre, des
                    photogrammes montrant Kristen Stewart (qui n'a pas eu
                    d'obsession?)
                  </p>
                  <p className="mb-4">
                    Reste-t-il quelque chose de ce radeau de sensibilité ou de
                    sentimentalisme dans l'exposition Name Dropping ?
                    Abandonnant le collage pour la peinture, Raphaël Rossi
                    s'éloigne de ces matériaux fétichisés que sont les produits
                    dérivés de l'industrie cinématographique pour deux monstres
                    plus gros encore : la peinture et la littérature. On
                    s'étouffe. Un diptyque noir et blanc, un peu argenté-chromé
                    affiche en vis-à-vis, tracé au pochoir : Michel Houellebecq
                    et Virginie Despentes.
                  </p>
                  <p className="mb-4">
                    Chez Pauline Perplexe, des aplats Seigneurie, peinture
                    acrylique satin pour l'intérieur. Des bandes, blanches,
                    blanches grisées, vertes (une seule), rouges, s'articulent
                    avec des triangles qui interpénétrent des noms d'auteurices,
                    avec ou sans sérif. Sur d'épais châssis, s'écrit où est
                    écrit, en gros caractères, des patronymes qui semblent
                    feindre d'avoir été piochés au hasard ou par distraction.
                    Ils démarrent ou débordent sur la tranche des toiles, et
                    pèsent de tous leurs poids dans la pièce. La peinture nomme
                    pendant qu'elle efface.
                  </p>
                </div>
                <div>
                  <p className="mb-4">
                    Certains noms nous parlent, d'autres non. S'installe un jeu
                    d'inclusion et d'exclusion. Ai-je lu, n'ai-je pas lu. On est
                    dedans, ou on reste à côté. Seule la reconnaissance peut
                    nous ramener à l'intérieur. Si le propre de la référence est
                    qu'elle nous traverse, et elle peut donc aussi glisser,
                    passer au dessus et nous laisser là.
                  </p>
                  <p className="mb-4">
                    Ici, c'est la littérature postmoderne, qui affleure de
                    manière consciente, celle où l'artifice stylistique tente
                    moins d'imiter le réel que de rechercher sa traduction
                    sensible. Littérature postmoderne, à la surface de toiles
                    peut-être ersatz d'une idée générique d'une histoire de
                    l'art réduite à ses attributs les plus voyants. Affiche,
                    adresse. Politique publique d'accès à la culture. Problème.
                    Pour qui et pourquoi ces noms sont-ils là ? Des oeuvres
                    entières ramenées à des noms. Raphaël Rossi les a peut-être
                    lus, ou alors il les aime bien, peu importe qu'il y soit
                    affectivement attaché ou non. L'effet compte. Ce qui est
                    pratique avec le name dropping, c'est qu'il permet de se
                    placer dans la pièce. Une manière de parler littérature, art
                    ou cinéma, par revers superficiel. Le name dropping scripte
                    le niveau social de la conversation comme une pratique
                    sociale en soi, un truc à la surface qui fait genre.
                    Littéralement « lâcher des noms », mais pas n'importe
                    lequel, à défaut des autres, d'inconnus restés hors-champs.
                    Et comme dirait Nathalie Quintane « Il y a toujours une
                    solution au problème de la culture ».
                  </p>
                  <p className="mb-4">
                    Et c'est peut-être parce qu'il y a trop de bavard.es et de
                    bavardage que Raphaël fait ça, ce travail en apnée, où
                    toutes ses peintures, comme de lentes expirations contrôlée,
                    synthétisent tout ce qu'il y a dire, tout ce qui a déjà été
                    dit, redit et mal dit, par la vrai, la fausse citation, le
                    miroir du sens. Finalement il nous tend un crachoir, loin,
                    très loin, d'être aseptisée. Pftiou.
                  </p>
                  <p className="mb-4 italic">Romain Grateau et Fiona Vilmer</p>
                  <p className="text-sm text-muted-foreground">
                    *Bandes noires qui permettent de respecter le format
                    d'affichage d'un film (4/3, 16/9), sans le déformer ou le
                    recadrer. L'inverse du plein écran.
                  </p>
                </div>
              </div>
            </article>

            {images.map((img, idx) => (
              <Figure key={idx} img={img} />
            ))}

            <div className="legende_bouton flex items-start gap-6">
              <div>
                <p className="legende_img">
                  How to be... Millenials ethos, 2023
                  <br />
                  canvas, magazines
                  <br />
                  100 x 35 cm
                </p>
              </div>
              <Link
                to="/artworks/how-to-be-millenials-ethos"
                className="bouton_inquire inline-block"
              >
                Inquire
              </Link>
            </div>

            <div className="module_img_img grid md:grid-cols-2 gap-6">
              <div className="img_side">
                <img
                  src="/assets/extraverted-paintings/extraverted-10.jpg"
                  alt=""
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <p className="legende_img">
                  Details of America generates great artists and finest sales,
                  2023
                  <br />
                  canvas, laser print, magazines
                </p>
              </div>
              <div className="img_side">
                <img
                  src="/assets/extraverted-paintings/extraverted-11.jpg"
                  alt=""
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <p className="legende_img">
                  Details of Valéria, 2023
                  <br />
                  canvas, magazines.
                </p>
              </div>
            </div>

            <div className="quotes_exhibition_full">
              <p className="quotes_full">
                D'une certaine manière, le carré renvoie davantage à la double
                page qu'à la page simple. C'est un texte que l'on observe plus
                qu'on ne le lit...
              </p>
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

export default NameDropping;
