import Image from "next/image";

type VideoDisplayProps = {
  src: string;
  poster: string;
  className?: string;
};

export default function VideoDisplay(props: VideoDisplayProps) {
  const { src, poster, className } = props;
  const thumbnail = poster.split(".")[0] + "-thumbnail.jpg"

  return (
    <div className="relative w-full h-full">
      <Image
        sizes="10px"
        fill
        priority
        alt="Thumbnail"
        src={thumbnail}
        className={`object-cover h-full w-full -z-10 ${className}`}
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
