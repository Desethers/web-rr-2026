import { Link } from "react-router-dom";

interface ArtworkCardProps {
  id: string;
  image: string;
  imageHover?: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
}

const ArtworkCard = ({
  id,
  image,
  imageHover,
  title,
  year,
  medium,
  dimensions,
}: ArtworkCardProps) => {
  return (
    <Link to={`/artwork/${id}`} className="group block w-full max-w-sm">
      <div className="artwork-card bg-secondary p-5 w-full rounded-lg h-full">
        <div className="overflow-hidden mb-6 w-full aspect-square bg-muted rounded relative">
          <img
            src={image}
            alt={title}
            className={`w-full h-full object-cover image-filtered transition-elegant group-hover:scale-105 ${imageHover ? "absolute inset-0 transition-opacity duration-300 group-hover:opacity-0" : ""}`}
          />
          {imageHover && (
            <img
              src={imageHover}
              alt=""
              aria-hidden
              className="absolute inset-0 w-full h-full object-cover image-filtered transition-elegant group-hover:scale-105 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          )}
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-base">
            {title}, {year}
          </h3>
          <p className="text-sm text-muted-foreground">{medium}</p>
          <p className="text-sm text-muted-foreground">{dimensions}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
