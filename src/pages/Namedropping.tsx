import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { nameDroppingImages } from "@/data/namedroppingimg";

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

      <main className="pt-24">
        <section className="title_exhibition">
          <div className="container max-w-5xl mx-auto px-6 lg:px-8 py-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-4 leading-tight">
              Name Dropping
            </h1>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 lg:px-8 py-6">
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
                Extrait : Sur le banc public s’échangent les mots et les images. La réification du sens en unités manipulables...
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery container max-w-5xl mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            <article className="texte_exhibition">
              <p>
                Sur le banc public s’échangent les mots et les images. La réification du sens en unités manipulables introduit dans l’esprit du collectionneur la possibilité d’articuler ses fétiches. Le partage des objets appelle une économie du signe...
              </p>
              <p>Texte de Manuel Vieillot</p>
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
              <Link to="/artworks/how-to-be-millenials-ethos" className="bouton_inquire inline-block">
                Inquire
              </Link>
            </div>

            <div className="module_img_img grid md:grid-cols-2 gap-6">
              <div className="img_side">
                <img src="/assets/extraverted-paintings/extraverted-10.jpg" alt="" className="w-full" loading="lazy" decoding="async" />
                <p className="legende_img">
                  Details of America generates great artists and finest sales, 2023
                  <br />
                  canvas, laser print, magazines
                </p>
              </div>
              <div className="img_side">
                <img src="/assets/extraverted-paintings/extraverted-11.jpg" alt="" className="w-full" loading="lazy" decoding="async" />
                <p className="legende_img">
                  Details of Valéria, 2023
                  <br />
                  canvas, magazines.
                </p>
              </div>
            </div>

            <div className="quotes_exhibition_full">
              <p className="quotes_full">
                D'une certaine manière, le carré renvoie davantage à la double page qu'à la page simple. C'est un texte que l'on observe plus qu'on ne le lit...
              </p>
            </div>

            <div className="mt-12">
              <Link to="/exhibitions" className="text-sm hover:underline">← Retour aux expositions</Link>
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
            <a href="https://www.instagram.com/raphaaelrossi/" target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default NameDropping;
// ...existing code...