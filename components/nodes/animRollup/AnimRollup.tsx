import { FC, ReactNode, useEffect, useRef, useState } from "react";
import styles from "./AnimRollup.module.scss";
// import { useInView } from "react-intersection-observer";

interface Props {
  children?: ReactNode;
  style?: object;
  className?: string;
  onClick?: () => void
}

const AnimRollup: FC<Props> = ({ children, style, className, onClick }) => {
  const mainDiv = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | undefined>(0);
  const [pos, setPos] = useState<number | undefined>(0);

  useEffect(() => {
    setHeight(mainDiv.current?.scrollHeight);
  }, []);

  function callback() {
    if (onClick) {
      onClick();
    }
  }

  return (
    <div
      onMouseEnter={() => {
        setPos(height);
      }}
      onMouseLeave={() => {
        setPos(0);
      }}
      style={style}
      className={className}
      onClick={callback}
    >
      <div className={styles.rollup} style={{ maxHeight: `${height}px` }}>
        <div
          className={styles.content}
          style={{ transform: `translateY(-${pos}px)` }}
        >
          <div ref={mainDiv}>{children}</div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AnimRollup;
