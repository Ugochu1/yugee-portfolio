import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./AnimRollup.module.scss";
import { useCursor } from "@/contexts/CursorProvider";
// import { useInView } from "react-intersection-observer";

interface Props {
  children?: ReactNode;
  style?: object;
}

const AnimRollup: FC<Props> = ({ children, style }) => {
  const mainDiv = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  const [pos, setPos] = useState<number | undefined>(0);
  const { setType } = useCursor();

  useEffect(() => {
    setHeight(mainDiv.current?.scrollHeight);
  }, []);

  return (
    <div
      className={styles.rollup}
      style={{ ...style, maxHeight: `${height}px` }}
      onMouseEnter={() => {
        setType("hover");
        setPos(height);
      }}
      onMouseLeave={() => {
        setType("none");
        setPos(0);
      }}
    >
      {/* {JSON.stringify(inView)} */}
      <div
        className={styles.content}
        style={{ transform: `translateY(-${pos}px)` }}
      >
        <div ref={mainDiv}>{children}</div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AnimRollup;
