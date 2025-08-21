import { Star } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  labels: string[];
}

export const StarRating = ({ rating, onRatingChange, labels }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="flex items-center space-x-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="p-1 transition-transform hover:scale-110"
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onRatingChange(star)}
          >
            <Star
              size={32}
              className={cn(
                "transition-colors",
                (hoverRating || rating) >= star
                  ? "fill-star-filled text-star-filled"
                  : "text-star-empty"
              )}
            />
          </button>
        ))}
      </div>
      
      {(hoverRating || rating) > 0 && (
        <div className="text-sm text-muted-foreground text-center">
          {labels[(hoverRating || rating) - 1]}
        </div>
      )}
    </div>
  );
};