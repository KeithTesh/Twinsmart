import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { cn } from "@/lib/utils";
import type { SanityImageWithAlt } from "@/types/sanity";

interface SanityImageProps {
  image: SanityImageWithAlt;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  priority?: boolean;
  className?: string;
  alt?: string;
}

export function SanityImage({
  image,
  width = 800,
  height = 600,
  fill,
  sizes,
  priority,
  className,
  alt,
}: SanityImageProps) {
  const src = urlFor(image).auto("format").quality(85).url();

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt ?? image.alt ?? ""}
        fill
        sizes={sizes ?? "100vw"}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt ?? image.alt ?? ""}
      width={width}
      height={height}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
