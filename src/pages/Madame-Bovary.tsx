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
      <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-base text-muted-foreground">
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

      <main>
        <section className="title_exhibition">
          <div className="mx-auto px-4 md:px-[25px] pt-4 sm:pt-6 md:pt-12">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-4 leading-tight">
              Madame Bovary
            </h1>
            <div className="h-px bg-border md:mb-2"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-4 mx-auto px-4 md:px-[25px] py-4">
            <div className="intro_exhibition">
              <p>08 mars - 28 mars 2024</p>
              <p className="mt-2">
                Poush,
                <br />
                93500, Aubervilliers
              </p>
            </div>
            <div className="h-px bg-border md:hidden" />

            <div className="intro_exhibition">
              <p className="mb-4">
                Madame Bovary is a solo exhibition in which a new set of wall
                and framed collages is presented.
              </p>

              <p className="mb-4">
                This exhibition explores the relationship between urban
                psychology and cinema, echoing the concept of bovarysme – an
                exploration of how desires merge with reality through fiction.
              </p>

              <p className="mb-4">
                It shows my engagement with films, not only as an artistic
                expression but also as a nexus between self-perception,
                architecture, and urban psychology.
              </p>

              <p>Curated by Marilou Thiébault</p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>

          <section className="mx-auto py-12 px-4 md:px-[25px]">
            <div className="space-y-[100px]">
              {[8, 12, 10].map((i) => (
                <Figure key={i} img={images[i]} />
              ))}
              {/* 🔹 Bloc image + citation côte à côte */}
              <div className="module_img_quote grid md:grid-cols-2 gap-10 my-6">
                {/* Image à gauche */}
                <div className="img_side">
                  <img
                    src="/assets/madame-bovary/madame-bovary-01.jpg"
                    alt="view of exhibition"
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="legende_img whitespace-pre-line">Don DeLillo</p>
                </div>

                {/* Citation à droite */}
                <div className="quote_side flex items-center">
                  <p className="text-xl md:text-4xl lg:text-5xl font-medium leading-tight px-4 md:px-[100px]">
                    "Le name dropping scripte le niveau social de la
                    conversation comme une pratique sociale en soi"
                  </p>
                </div>
              </div>
              {[3, 7, 4].map((i) => (
                <Figure key={i} img={images[i]} />
              ))}

              {/* 🔹 Bloc 2 images côte à côte */}
              <div className="module_img_img grid md:grid-cols-2 gap-10">
                {[
                  {
                    src: "/assets/madame-bovary/madame-bovary-09.jpg",
                    caption: `Don DeLillo`,
                  },
                  {
                    src: "/assets/madame-bovary/madame-bovary-05.jpg",
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
                    <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                      {img.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>

              {[0].map((i) => (
                <Figure key={i} img={images[i]} />
              ))}
            </div>
            <div className="mt-1 md:mt-12">
              <Link to="/exhibitions" className="text-sm hover:underline">
                ← Retour aux expositions
              </Link>
            </div>
          </section>
        </section>
      </main>

      <footer className="footer mt-1 md:mt-8">
        <div className="footer-content mx-auto px-4 md:px-[25px] py-6 flex flex-row justify-between items-center gap-2">
          <div className="legal text-left">
            <p className="text-xs md:text-base">© 2024 Raphaël Rossi - All Rights Reserved</p>
          </div>
          <div className="social-media text-right">
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

export default MadameBovary;