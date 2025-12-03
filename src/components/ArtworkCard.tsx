import { Link } from "react-router-dom";

interface ArtworkCardProps {
  id: string;
  image: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
}

const ArtworkCard = ({
  id,
  image,
  title,
  year,
  medium,
  dimensions,
}: ArtworkCardProps) => {
  return (
    <Link to={`/artwork/${id}`} className="group block w-full max-w-sm">
      <div className="artwork-card bg-secondary p-5 w-full rounded-lg h-full">
        <div className="overflow-hidden mb-6 w-full aspect-square bg-muted rounded">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover image-filtered transition-elegant group-hover:scale-105"
          />
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
