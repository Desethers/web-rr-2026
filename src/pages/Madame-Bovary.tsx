import React from "react";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { madameBovaryImages } from "../data/madamebovaryimg";

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

const MadameBovary: React.FC = () => {
  const images = madameBovaryImages;

  return (
    <>
      <Navigation />

      <main className="pt-20">
        <section className="title_exhibition">
          <div className="max-w-[1440px] mx-auto px-[25px] py-1">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-4 leading-tight">
              Madame Bovary
            </h1>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-6 lg:px-8 py-6">
            <div className="intro_exhibition">
              <p>08 mars - 28 mars 2024</p>
              <p className="mt-2">
                Poush,
                <br />
                93500, Aubervilliers
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

        <section className="gallery max-w-[1440px] mx-auto px-[25px] py-12">
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

export default MadameBovary;
