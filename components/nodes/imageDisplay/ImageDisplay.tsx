import Image from "next/image";
import { useState } from "react";

type ImageDisplayProps = {
  src: string;
  className?: string;
};

export default function ImageDisplay(props: ImageDisplayProps) {
  const { src, className } = props;

  const [isLoading, setIsLoading] = useState(true);

  const loader = ({
    width,
    quality,
    src,
  }: {
    width: number;
    quality?: number;
    src: string;
  }) => {
    const props = [`w=${width}`];
    if (quality) props.push(`q=${quality}`);

    const queryString = props.join("&");

    return `/api/imageDisplay/${src}?${queryString}`;
  };

  return (
    <div className="relative w-full h-full">
      <Image
        sizes="10px"
        fill
        priority
        alt="Thumbnail"
        src={src}
        className={`object-cover h-full w-full ${className}`}
        loader={({ src }) => `/api/imageDisplay/${src}?thumbnail=true`}
      />

      <Image
        fill
        alt="Main image"
        className={`object-cover h-full w-full transition-opacity duration-150 ease-in-out ${
          isLoading ? "opacity-0" : "opacity-100"
        } ${className}`}
        src={src}
        loader={loader}
        onLoadingComplete={() => setIsLoading(false)}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
