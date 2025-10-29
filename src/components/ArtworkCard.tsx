import { Link } from "react-router-dom";

interface ArtworkCardProps {
  id: string;
  image: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
}

const ArtworkCard = ({ id, image, title, year, medium, dimensions }: ArtworkCardProps) => {
  return (
    <Link to={`/artwork/${id}`} className="group block">
      <div className="artwork-card" style={{ backgroundColor: '#f5f5f7', padding: '20px', width: '278px', borderRadius: '8px' }}>
        <div className="overflow-hidden mb-4" style={{ width: '238px', height: '238px' }}>
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover image-filtered transition-elegant group-hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h3 className="font-medium text-base">{title}, {year}</h3>
          <p className="text-sm text-muted-foreground">{medium}</p>
          <p className="text-sm text-muted-foreground">{dimensions}</p>
        </div>
      </div>
    </Link>
  );
};

export default ArtworkCard;
