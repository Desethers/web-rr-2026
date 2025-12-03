import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { extravertedPaintingsImages } from "../data/extravertedpaintingsimg";
import { useIsMobile } from "@/hooks/use-mobile";
type ExhibitImage = {
  src: string;
  alt?: string;
  caption?: string | JSX.Element;
  className?: string;
  inquireLink?: string;
};
const Figure: React.FC<{
  img: ExhibitImage;
}> = ({ img }) => (
  <figure className={img.className ?? "imagefull"}>
    <img
      src={img.src}
      alt={img.alt ?? ""}
      className="w-full object-cover"
      loading="lazy"
      decoding="async"
    />
    {img.caption && (
      <div className="flex items-start justify-between gap-6 md:mt-2">
        <figcaption className="legende_img mt-2 text-xs sm:text-sm text-muted-foreground">
          {img.caption}
        </figcaption>
        {img.inquireLink && (
          <Link
            to={img.inquireLink}
            className="bouton_inquire inline-block border border-foreground px-2 py-1 md:px-8 md:py-4 text-xs md:text-base hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Inquire
          </Link>
        )}
      </div>
    )}
  </figure>
);
const NameDropping: React.FC = () => {
  const images = extravertedPaintingsImages;
  const isMobile = useIsMobile();
  const [isTextExpanded, setIsTextExpanded] = useState(false);
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
            <div className="intro_exhibition text-sm md:text-base 2xl:text-2xl">
              <p className="mb-4 md:mb-6">29 septembre - 23 novembre 2024</p>
              <p>
                Bagnoler, 46 rue Jules Ferry,
                <br />
                93170, Bagnolet
              </p>
            </div>

            <div className="h-px bg-border md:hidden " />

            <div className="intro_exhibition text-sm md:text-base 2xl:text-2xl ">
              <p>
                Extraverted paintings / Introverting pictures is a solo
                exhibition in which a new set of wall and framed collages is
                presented. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Alias temporibus dolor cum laborum provident est,
                architecto excepturi aspernatur quisquam optio sint itaque
                inventore, non aliquam libero ullam facere impedit vel!
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="mx-auto px-4 md:px-[25px] py-6 md:py-12">
          <div className="space-y-12 md:space-y-[100px]">
            {images.length > 0 && <Figure img={images[0]} />}

            <article className="texte_exhibition">
              <div className="relative">
                <div
                  className={`grid grid-cols-1 md:grid-cols-2 gap-x-6 md:gap-x-[100px] px-4 md:px-[100px] text-sm md:text-base mx-auto text-justify overflow-hidden transition-all duration-500 ${isMobile && !isTextExpanded ? "max-h-[10em]" : "max-h-[5000px]"}`}
                >
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

                {isMobile && !isTextExpanded && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
                )}
              </div>

              {isMobile && (
                <button
                  onClick={() => setIsTextExpanded(!isTextExpanded)}
                  className="flex items-center justify-center gap-2 w-full mt-4 py-3 text-foreground hover:bg-secondary transition-colors rounded-lg"
                >
                  <span className="font-medium text-xs">{isTextExpanded ? "Masquer le texte" : "Lire la suite"}</span>
                  <ChevronDown
                    className={`transition-transform duration-300 ${isTextExpanded ? "rotate-180" : ""}`}
                    size={20}
                  />
                </button>
              )}
            </article>

            <Figure key={2} img={images[2]} />

            <figure className="imagefull">
              <img
                src={images[5].src}
                alt="Artwork 3"
                className="w-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 md:gap-6 mt-2 py-4">
                <div className="legende_img text-sm text-muted-foreground">
                  <p>
                    Artwork 3, 2023
                    <br />
                    canvas, magazines
                  </p>
                </div>
                <Link
                  to="/artwork/how-to-be"
                  className="bouton_inquire block md:inline-block w-full md:w-[260px] border border-foreground px-4 py-2 md:py-4 text-xs md:text-base text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Inquire
                </Link>
              </div>
            </figure>

            {[6, 0, 7, 8].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc 2 images côte à côte */}
            <div className="module_img_img grid md:grid-cols-2 gap-6 md:gap-10 my-6 mt-2 whitespace-pre-line">
              {[
                {
                  src: "/assets/extraverted-paintings/extraverted-10.jpg",
                  caption: `Details of America generates great artists and finest sales, 2023 
                            canvas, laser print, magazines`,
                },
                {
                  src: "/assets/extraverted-paintings/extraverted-11.jpg",
                  caption: `Details of Valéria, 2023
                            canvas, magazines.`,
                },
              ].map((img, idx) => (
                <div className="img_side" key={idx}>
                  <img
                    src={img.src}
                    alt=""
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption className="legende_img text-xs sm:text-sm md:text-base mt-2 text-muted-foreground">
                    {img.caption}
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

      <footer className="footer mt-12">
        <div className="footer-content mx-auto px-4 md:px-[25px] py-6 flex flex-row justify-between items-center">
          <div className="legal">
            <p className="text-xs md:text-base">
              © 2024 Raphaël Rossi - All Rights Reserved
            </p>
          </div>
          <div className="social-media">
            <a
              href="https://www.instagram.com/raphaaelrossi/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-xs md:text-base"
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