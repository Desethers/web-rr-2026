import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface ExpandableTextProps {
  children: React.ReactNode;
  maxHeight?: string;
}

const ExpandableText: React.FC<ExpandableTextProps> = ({ children, maxHeight = "14em" }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article className="texte_exhibition">
      <div className="relative">
        <div
          className={`overflow-hidden transition-all duration-500 ${!isExpanded ? `max-h-[${maxHeight}]` : "max-h-[5000px]"}`}
          style={!isExpanded ? { maxHeight } : undefined}
        >
          {children}
        </div>

        {!isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
        )}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center justify-center gap-2 w-full mt-4 text-foreground hover:opacity-70 transition-opacity"
      >
        <span className="text-xs md:text-sm">{isExpanded ? "Réduire" : "Lire la suite"}</span>
        <ChevronDown
          className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
          size={16}
        />
      </button>
    </article>
  );
};

export default ExpandableText;
