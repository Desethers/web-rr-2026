import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Figure from "@/components/exhibition/Figure";
import ExpandableText from "@/components/exhibition/ExpandableText";
import { Link } from "react-router-dom";
import { extravertedPaintingsImages } from "../data/extravertedpaintingsimg";

const ExtravertedPaintings: React.FC = () => {
  const images = extravertedPaintingsImages;
  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="mx-auto px-4 md:px-[25px] pt-4 sm:pt-6 md:pt-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-4 leading-tight">
              Extraverted Paintings / Introverting Pictures
            </h1>
            <div className="h-px bg-border md:mb-2"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-4 mx-auto px-4 md:px-[25px] py-4">
            {/* Date et infos */}
            <div className="intro_exhibition text-[18px]">
              <p className="mb-4 md:mb-6">29 septembre - 23 novembre 2024</p>
              <p>
                Bagnoler, 46 rue Jules Ferry,
                <br />
                93170, Bagnolet
              </p>
            </div>

            <div className="h-px bg-border md:hidden " />

            <div className="intro_exhibition text-[18px]">
              <p>
                Extraverted paintings / Introverting pictures is a solo
                exhibition in which a new set of wall and framed collages is
                presented. 
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="mx-auto px-4 md:px-[25px] py-6 md:py-12">
          <div className="space-y-12 md:space-y-[100px]">
            {images.length > 0 && <Figure img={images[0]} />}

            <ExpandableText>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-[100px] px-4 md:px-[100px] text-[16px] mx-auto text-justify">
                  <div>
                    <p className="mb-6">
                      Sur le banc public s'échangent les mots et les images. La
                      réification du sens en unités manipulables introduit dans
                      l'esprit du collectionneur la possibilité d'articuler ses
                      fétiches. Le partage des objets appelle une économie du
                      signe. À la rue du commerce se traduit le modelé du masque
                      par la griffe du chapeau. Les noms et les visages
                      n'appartiennent plus tant à leur porteur qu'à celui ou celle
                      qui leur imposera une place dans l'énonciation d'un désir.
                      La séquence qui en résulte enchaîne le modèle à une
                      succession d'instantanés et d'inscriptions auxquelles son
                      identité se doit de répondre.
                    </p>
                  </div>
                  <div>
                    <p>
                      Le film décomposé en photographies découpe son existence en
                      une multitude de vies possibles et alternatives qui toutes
                      pourtant témoignent dans leur apparition même que cela a
                      bien dû avoir été ainsi. La conformité de ses traits est
                      celle d'un personnage de bande dessinée à qui on prête la
                      persistance de l'être à mesure que de case en case il se
                      fasse bien reconnaître. De celui qui se vérifie alors se
                      sait dire la lettre manquante, se sait montrer le profil
                      inconnu: J'ai lu ton prénom dans un livre, je t'ai déjà vu
                      par ici.
                    </p>
                    <p className="mt-4 italic">Manuel Vieillot</p>
                  </div>
                </div>

            </ExpandableText>

            <Figure key={2} img={images[2]} />

            <figure className="imagefull">
              <img
                src={images[5].src}
                alt={images[5].alt}
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-6 mt-2 md:mt-4">
                <figcaption className="legende_img whitespace-pre-line text-xs sm:text-sm md:text-[14px] text-muted-foreground">
                  {images[5].caption}
                </figcaption>
                <Link
                  to="/artwork/how-to-be"
                  className="bouton_inquire block sm:inline-block border border-foreground w-full sm:w-[240px] md:w-[260px] py-2 text-center hover:bg-foreground hover:text-background transition-colors text-sm md:text-base"
                >
                  Inquire
                </Link>
              </div>
            </figure>

            {[6, 0, 7, 8].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc 2 images côte à côte */}
            <div className="module_img_img grid md:grid-cols-2 gap-6 md:gap-10 my-6 mt-2">
              {[9, 10].map((i) => (
                <div className="img_side" key={i}>
                  <img
                    src={images[i].src}
                    alt={images[i].alt}
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="legende_img whitespace-pre-line text-xs sm:text-sm md:text-[14px] mt-2 text-muted-foreground">
                    {images[i].caption}
                  </figcaption>
                </div>
              ))}
            </div>
            <Figure key={11} img={images[11]} />

            <div className="quotes_exhibition_full">
              <p className="quotes_full font-medium text-lg md:text-4xl px-4 md:px-[250px] text-left md:py-[200px]">
                D'une certaine manière, le carré renvoie davantage à la double
                page qu'à la page simple. C'est un texte que l'on observe plus
                qu'on ne le lit, que l'on a déjà parcouru et vers lequel on
                revient, quelque chose que l'on reconnaît et devant lequel on se
                sent chez soi.
              </p>
            </div>

            {[12, 13].map((i) => (
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

      <Footer />
    </>
  );
};
export default ExtravertedPaintings;