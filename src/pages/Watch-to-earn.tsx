import React from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Figure from "@/components/exhibition/Figure";
import ExpandableText from "@/components/exhibition/ExpandableText";
import { Link } from "react-router-dom";
import { watchToEarnImages } from "../data/watchtoearnimg";

const WatchToEarn: React.FC = () => {
  const images = watchToEarnImages;

  return (
    <>
      <Navigation />

      <main>
        <section className="title_exhibition">
          <div className="mx-auto px-4 md:px-[25px] pt-4 sm:pt-6 md:pt-12">
            <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-5xl font-medium mb-2 sm:mb-4 leading-tight">
              Watch to earn
            </h1>
            <div className="h-px bg-border md:mb-2"></div>
          </div>
        </section>

        <section className="textandinfos">
          <div className="containerintro grid md:grid-cols-2 gap-4 mx-auto px-4 md:px-[25px] py-4">
            <div className="intro_exhibition text-[18px]">
              <p>29 septembre - 22 octobre 2023</p>
              <p className="mt-4">
                <p>FRAC Bourgogne</p>
                <p>16 Rue Quentin, 21000 Dijon</p>
              </p>
            </div>

            <div className="h-px bg-border md:hidden" />

            <div className="intro_exhibition text-[18px]">
              <p>
                Watch to earn is an exhibition conceived following my
                participation in the research and production residency,
                Storefront, at Frac Bourgogne. This exhibition delves into the
                concept of the viewer's expressiveness, where my relationship
                with films is treated as artistic motifs and discursive spaces.
              </p>
            </div>

            <div className="filet_mobile md:col-span-2" />
          </div>
        </section>

        <section className="gallery mx-auto px-4 md:px-[25px]">
          <div className="pt-2 sm:pt-10 md:pt-12 lg:pt-16 xl:pt-20 space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-[100px]">
            <Figure key={8} img={images[8]} />

            <ExpandableText>
              <div className="grid md:grid-cols-2 gap-x-6 md:gap-x-[100px] px-4 md:px-[100px] mx-auto text-justify text-sm md:text-[18px]">
                  <div>
                    <p className="mb-4">
                      L'Eldorado, c'est la quête effrénée d'une liberté
                      financière, un mirage collectif qui déguise un trajet
                      spéculatif vers les possibles de nos existences. Une ruée
                      vers l'or qui n'en est pas vraiment une, mais plutôt une
                      course insatiable vers le temps. C'est une promesse,
                      toujours plus lointaine, d'un avenir où le temps serait
                      enfin disponible à profusion. Paradoxalement, c'est aussi un
                      lieu, une salle de cinéma située rue Alfred de Musset, à
                      Dijon.Là, passé immobile et futur illusoire se rencontrent,
                      l'Eldorado devient une intersection entre le réel et
                      l'imaginaire, entre le tangible et l'intangible.
                    </p>
                    <p className="mb-4">
                      Sur la façade droite du bâtiment trône La femme au miroir de
                      Loïc Raguénès (1968-2022), une œuvre à mi-chemin entre la
                      peinture et l'affiche publicitaire. En pointillé bleu,
                      s'immortalise une scène du film Eyes Wide Shut, où Nicole
                      Kidman se dévoile nue devant son miroir. Un jeu de reflets,
                      d'ombres et de lumière. Une image saisie dans l'intimité du
                      cinéma, transposée dans l'espace public, offerte à la
                      contemplation des passants rue d'Auxonne. Raguénès, en 2010,
                      avait déjà balisé la direction de cette circulation des
                      images : des films à la rue, du privé au commun, du cinéma à
                      la peinture.
                    </p>
                    <p className="mb-4">
                      L'exposition Watch to Earn, présentée à l'Eldorado et née
                      d'une résidence au sein du Frac Bourgogne, explore cette
                      fusion entre regard et économie. Le titre même de
                      l'exposition est un emprunt à un modèle économique propre à
                      l'ère digitale, où chaque visionnage devient un acte
                      monétisé. Dans cette configuration, le spectateur n'est plus
                      seulement récepteur, il est également acteur d'une
                      transaction subtile : son attention, son temps, contre des
                      Tokens, ces jetons virtuels qui transforment la consommation
                      en échange marchand. Ici, le visionnage devient une
                      marchandise, et l'on abolit le privilège des accréditations,
                      l'élitisme des avant-premières. Désormais, chacun est payé
                      pour voir, car voir, c'est déjà communiquer, et communiquer,
                      c'est vendre.
                    </p>
                  </div>
                  <div>
                    <p className="mb-4">
                      L'exposition Watch to Earn, présentée à l'Eldorado et née
                      d'une résidence au sein du Frac Bourgogne, explore cette
                      fusion entre regard et économie. Le titre même de
                      l'exposition est un emprunt à un modèle économique propre à
                      l'ère digitale, où chaque visionnage devient un acte
                      monétisé. Dans cette configuration, le spectateur n'est plus
                      seulement récepteur, il est également acteur d'une
                      transaction subtile : son attention, son temps, contre des
                      Tokens, ces jetons virtuels qui transforment la consommation
                      en échange marchand. Ici, le visionnage devient une
                      marchandise, et l'on abolit le privilège des accréditations,
                      l'élitisme des avant-premières. Désormais, chacun est payé
                      pour voir, car voir, c'est déjà communiquer, et communiquer,
                      c'est vendre.
                    </p>
                    <p className="mb-4">
                      Cette réflexion prend racine dans un désir plus profond :
                      replacer le spectateur au cœur du processus créatif.
                      Fusionner son temps de contemplation avec le temps de
                      création artistique, abolir la distance entre l'œuvre et
                      celui qui la regarde. Il s'agit d'interroger la possibilité
                      d'une économie du regard, née de la rencontre entre l'objet
                      regardé et l'impact que ce dernier laisse dans la mémoire
                      intime de celui qui l'observe. L'économie du spectateur, une
                      formule qui ne laisse rien au hasard : il s'agit de
                      comptabiliser l'échange subtil entre deux mondes – celui de
                      l'image et celui du souvenir.
                    </p>
                    <p className="mb-4">
                      L'exposition Watch to Earn incarne donc une réflexion sur la
                      marchandisation du regard, où le spectateur devient partie
                      prenante d'un système d'échanges, non seulement récepteur
                      passif, mais un participant actif dans l'économie moderne du
                      numérique. Ici, "earn" appartient au lexique de
                      l'enrichissement et de l'argent, soulignant la manière dont
                      l'acte de regarder, autrefois passif ou introspectif, est
                      désormais intégré dans un mécanisme économique. La
                      consommation d'images devient non seulement un moyen
                      d'évasion ou d'émancipation, mais aussi un acte monétisé, où
                      l'attention du spectateur est transformée en une forme de
                      capital, un produit valorisé dans l'économie numérique.
                    </p>
                  </div>
                </div>

            </ExpandableText>
            {[3].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc image + citation côte à côte */}
            <div className="module_img_quote grid md:grid-cols-2 gap-10">
              {/* Image à gauche */}
              <div className="img_side">
                <img
                  src="/assets/watch-to-earn/watch-0.jpg"
                  alt="view of exhibition"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <p className="legende_img whitespace-pre-line mt-2 text-xs sm:text-sm md:text-[14px] text-muted-foreground">KS1 installation, 2022</p>
              </div>

              {/* Citation à droite */}
              <div className="quote_side flex items-center">
                <p className="text-xl md:text-3xl lg:text-3xl font-medium leading-tight px-4 md:px-[100px]">
                  Cette exposition est d'abord née d'une volonté de placer
                  l'expérience du spectateur au cœur du processus de création.
                  Réunir le temps de spectateur et le temps de travail
                  artistique.
                </p>
              </div>
            </div>

            {[4].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}
            <div className="quotes_exhibition_full">
              <p className="quotes_full text-lg md:text-[35px] px-4 md:px-[300px] text-left">
                J'utilise ici la formule d'économie du spectateur car c'est bien
                de cela dont il s'agit : de tenir une comptabilité des deux
                mondes et de leur respect réciproque.
              </p>
            </div>
            {[11].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}
            {/* 🔹 Bloc image + citation côte à côte */}
            <div className="module_img_quote grid md:grid-cols-2 gap-10">
              {/* Image à gauche */}
              <div className="quote_side flex items-center">
                <p className="text-xl md:text-3xl lg:text-3xl font-medium leading-tight px-4 md:px-[100px]">
                  Les monochromes ainsi que les images produites comme celles
                  que l'on s'en fait, sont les matériaux de prédilection des
                  collages muraux présentés dans la boutique des Bains du nord.
                </p>
              </div>

              {/* Citation à droite */}
              <div className="img_side">
                <img
                  src="/assets/watch-to-earn/watch-7.jpg"
                  alt="view of exhibition"
                  className="w-full"
                  loading="lazy"
                  decoding="async"
                />
                <p className="legende_img whitespace-pre-line mt-2 text-xs sm:text-sm md:text-[14px] text-muted-foreground">Detail of Les 5 diables, 2022</p>
              </div>
            </div>

            {[5].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}

            {/* 🔹 Bloc 2 images côte à côte */}
            <div className="module_img_img grid md:grid-cols-2 gap-10">
              {[
                {
                  src: "/assets/watch-to-earn/watch-11.jpg",
                  caption: `KS3, 2022\nCanvas,laser print, chromolux paper`,
                },
                {
                  src: "/assets/watch-to-earn/watch-8.jpg",
                  caption: `Detail of KS3, 2022`,
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
                  <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-[14px] text-muted-foreground">
                    {img.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
            {[1].map((i) => (
              <Figure key={i} img={images[i]} />
            ))}
            {/* 🔹 Bloc 2 images côte à côte */}
            <div className="module_img_img grid md:grid-cols-2 gap-10 my-6">
              {[
                {
                  src: "/assets/watch-to-earn/watch-2.jpg",
                  caption: `AD1, 2022\n50 x 65 cm`,
                },
                {
                  src: "/assets/watch-to-earn/watch-10.jpg",
                  caption: `AD1, 2022\n50 x 65 cm`,
                },
              ].map((img, idx) => (
                <div className="img_side" key={idx}>
                  <img
                    src={img.src}
                    alt="view of exhibition"
                    className="w-full"
                    loading="lazy"
                    decoding="async"
                  />
                  <p className="legende_img whitespace-pre-line mt-2 text-xs sm:text-sm md:text-[14px] text-muted-foreground">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-1 md:mt-12">
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

export default WatchToEarn;