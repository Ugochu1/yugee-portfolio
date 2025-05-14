import Image from "next/image";

type VideoDisplayProps = {
  src: string;
  poster: string;
  className?: string;
};

export default function VideoDisplay(props: VideoDisplayProps) {
  const { src, poster, className } = props;

  return (
    <div className="relative w-full h-full">
      <Image
        sizes="10px"
        fill
        priority
        alt="Thumbnail"
        src={poster}
        className={`object-cover h-full w-full -z-10 ${className}`}
        loader={({ src }) => `/api/imageDisplay/${src}?thumbnail=true`}
      />

      <video
        className={`w-full h-full object-cover ${className}`}
        src={src}
        autoPlay
        muted
        loop
        playsInline
      />
    </div>
  );
}
