import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { extravertedPaintingsImages } from "../data/extravertedpaintingsimg";

type ExhibitImage = {
  src: string;
  alt?: string;
  caption?: string | JSX.Element;
  className?: string;
  inquireLink?: string;
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
      <div className="flex items-start justify-between gap-6 mt-2 py-4">
        <figcaption className="legende_img text-sm text-muted-foreground">
          {img.caption}
        </figcaption>
        {img.inquireLink && (
          <Link
            to={img.inquireLink}
            className="bouton_inquire inline-block border border-foreground px-8 py-4 hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
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

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-[25px] pt-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              Extraverted Paintings / Introverting Pictures
            </h1>
            <div className="h-px bg-border mb-8"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-[1440px]mx-auto text-[19px] px-[25px]">
            <div className="intro_exhibition ">
              <p>29 septembre - 22 octobre 2023</p>
              <p className="mt-2">
                Bagnoler, 46 rue Jules Ferry,
                <br />
                93170, Bagnolet
              </p>
            </div>

            <div className="intro_exhibition ">
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

        <section className="max-w-[1440px] mx-auto text-[19px] px-[25px] py-12">
          <div className="space-y-[100px]">
            {images.length > 0 && <Figure img={images[0]} />}

            <article className="texte_exhibition">
              <div className="grid md:grid-cols-2 gap-x-[100px] px-[100px] max-w-[1440px] mx-auto text-justify">
                <div>
                  <p>
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
                  <p className="mb-4 italic">Manuel Vieillot</p>
                </div>
              </div>
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
              <div className="legende_bouton flex items-start justify-between gap-6 mt-2 py-4">
                <div className="legende_img text-sm text-muted-foreground">
                  <p>
                    Artwork 3, 2023
                    <br />
                    canvas, magazines
                  </p>
                </div>
                <Link
                  to="/artwork/how-to-be"
                  className="bouton_inquire inline-block border border-foreground w-[260px] py-2 text-center hover:bg-foreground hover:text-background transition-colors"
                >
                  Inquire
                </Link>
              </div>
            </figure>

            {[6, 0, 7, 8].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc 2 images côte à côte */}
            <div className="module_img_img grid md:grid-cols-2 gap-10 my-6">
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
                  <p className="legende_img whitespace-pre-line">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>
            <Figure key={11} img={images[11]} />

            <div className="quotes_exhibition_full">
              <p className="quotes_full text-[35px] px-[300px] text-left">
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

export default NameDropping;
