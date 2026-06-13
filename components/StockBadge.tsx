interface StockBadgeProps {
  stock: number;
  size?: "sm" | "md";
}

export default function StockBadge({ stock, size = "md" }: StockBadgeProps) {
  const sizing =
    size === "sm" ? "text-[10px] px-2 py-1" : "text-xs px-3 py-1.5";
  return (
    <span
      className={`inline-flex items-center gap-1.5 bg-red-600 text-white font-bold uppercase tracking-wide rounded-full shadow-sm ${sizing}`}
      aria-label={`Only ${stock} left in stock`}
    >
      <span
        className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"
        aria-hidden="true"
      />
      Only {stock} left
    </span>
  );
}
