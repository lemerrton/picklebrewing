import Image from "next/image";
import ImageSlot from "./ImageSlot";

interface KitCardProps {
  name: string;
  description: string;
  price: string;
  includes: string[];
  imageSrc?: string;
  imageLabel?: string;
}

export default function KitCard({
  name,
  description,
  price,
  includes,
  imageSrc,
  imageLabel,
}: KitCardProps) {
  return (
    <div className="bg-white border border-tan-400 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="p-4">
        {imageSrc ? (
          <div className="aspect-square w-full rounded-xl overflow-hidden bg-white flex items-center justify-center">
            <Image
              src={imageSrc}
              alt={name}
              width={500}
              height={500}
              className="object-contain w-full h-full"
            />
          </div>
        ) : (
          <ImageSlot label={imageLabel ?? `${name} photo`} aspectRatio="aspect-square" />
        )}
      </div>
      <div className="px-6 pb-6">
        <h3 className="font-heading text-xl font-bold text-brown-900">{name}</h3>
        <p className="text-brown-700 mt-2 text-sm leading-relaxed">{description}</p>
        <p className="text-2xl font-bold text-brown-900 mt-4">{price}</p>

        <div className="mt-4">
          <p className="text-xs font-semibold text-brown-700 uppercase tracking-wide mb-2">
            What&apos;s included
          </p>
          <ul className="space-y-1">
            {includes.map((item) => (
              <li key={item} className="text-sm text-brown-700 flex items-start gap-2">
                <span className="text-tan-600 mt-0.5">•</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href={`mailto:gentlevoyage.assistance@gmail.com?subject=Order Inquiry — ${name}`}
          className="mt-6 block text-center bg-brown-900 text-white font-body font-semibold py-3 px-6 rounded-lg hover:bg-brown-700 transition-colors"
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}
