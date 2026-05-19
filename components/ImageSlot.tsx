interface ImageSlotProps {
  label?: string;
  aspectRatio?: string;
}

export default function ImageSlot({
  label = "Add your photo here",
  aspectRatio = "aspect-video",
}: ImageSlotProps) {
  return (
    <div
      className={`${aspectRatio} w-full bg-tan-200 border-2 border-dashed border-tan-600 rounded-xl flex items-center justify-center`}
    >
      <div className="text-center text-brown-700">
        <div className="text-4xl mb-2">📷</div>
        <p className="text-sm font-medium">{label}</p>
        <p className="text-xs text-tan-600 mt-1">Replace with next/image</p>
      </div>
    </div>
  );
}
