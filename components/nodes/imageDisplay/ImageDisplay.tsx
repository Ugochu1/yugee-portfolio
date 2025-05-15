import Image from "next/image";
import { useState } from "react";

type ImageDisplayProps = {
  src: string;
  className?: string;
};

export default function ImageDisplay(props: ImageDisplayProps) {
  const { src, className } = props;
  const thumbnail = src.split(".")[0] + "-thumbnail.jpg"
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full">
      <Image
        sizes="10px"
        fill
        priority
        alt="Thumbnail"
        src={thumbnail}
        className={`object-cover h-full w-full ${className}`}
      />

      <Image
        fill
        alt="Main image"
        className={`object-cover h-full w-full transition-opacity duration-150 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        src={src}
        onLoadingComplete={() => setIsLoading(false)}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
