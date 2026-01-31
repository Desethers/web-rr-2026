import React from "react";
import { Link } from "react-router-dom";

export type ExhibitImage = {
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
      img.inquireLink ? (
        <div className="flex items-start justify-between gap-6 md:mt-2">
          <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-[14px] text-muted-foreground">
            {img.caption}
          </figcaption>
          <Link
            to={img.inquireLink}
            className="bouton_inquire inline-block border border-foreground px-2 py-1 md:px-8 md:py-4 text-xs md:text-base hover:bg-foreground hover:text-background transition-colors whitespace-nowrap"
          >
            Inquire
          </Link>
        </div>
      ) : (
        <figcaption className="legende_img mt-2 text-xs sm:text-sm md:text-[14px] text-muted-foreground">
          {img.caption}
        </figcaption>
      )
    )}
  </figure>
);

export default Figure;
