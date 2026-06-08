import { Star } from "lucide-react";

interface StarsProps {
  rating: number;
  size?: "sm" | "md";
}

export default function Stars({ rating, size = "sm" }: StarsProps) {
  const sizeClass = size === "md" ? "w-5 h-5" : "w-4 h-4";
  return (
    <span className="flex items-center" aria-hidden="true">
      {[0, 1, 2, 3, 4].map((i) => {
        const filled = i < Math.floor(rating);
        const partial = i === Math.floor(rating) && rating % 1 !== 0;
        return (
          <span key={i} className={`relative ${sizeClass}`}>
            <Star className={`${sizeClass} text-tan-400 fill-tan-400`} />
            {(filled || partial) && (
              <span
                className="absolute inset-0 overflow-hidden"
                style={{
                  width: filled ? "100%" : `${(rating % 1) * 100}%`,
                }}
              >
                <Star
                  className={`${sizeClass} text-amber-500 fill-amber-500`}
                />
              </span>
            )}
          </span>
        );
      })}
    </span>
  );
}
