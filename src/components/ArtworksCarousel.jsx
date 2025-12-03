import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ArtworkCarousel({ images = [] }) {
  const [index, setIndex] = useState(0);

  const prev = () => setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setIndex((i) => (i === images.length - 1 ? 0 : i + 1));

  if (images.length === 0) return null;

  return (
    <div className="w-full flex flex-col items-center">
      <div className="relative w-full max-w-full md:max-w-[810px] overflow-hidden rounded-lg">
        {/* Single image display */}
        <img
          src={images[index]}
          alt={`Image ${index + 1}`}
          className="w-full h-auto object-contain"
        />

        {/* Arrows */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronLeft size={20} />
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow hover:bg-white"
            >
              <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-black" : "bg-black/30"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
