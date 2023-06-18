import { FC, useEffect, useState, useRef } from "react";
import styles from "./PageLoader.module.scss";

const PageLoader: FC<{ setPageLoad: (cv: boolean) => void }> = ({
  setPageLoad,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(0);

  useEffect(() => {
    setHeight(containerRef.current?.scrollHeight);
    setTimeout(() => {
      if (mainContainerRef.current) {
        mainContainerRef.current.style.top = "-100vh";
        setTimeout(() => {
          // wait 500ms before deleting from DOM
          setPageLoad(false)
        }, 1000)
      }
    }, 1250);
  }, [setPageLoad]);

  return (
    <div className={styles.main} ref={mainContainerRef}>
      {/* {JSON.stringify(height)} */}
      <div style={{ overflow: "hidden", height: `${height}px` }}>
        <div className={styles.name} ref={containerRef}>
          James Olinya
        </div>
        {/* <div className={styles.nametwo}>James Olinya</div> */}
      </div>
    </div>
  );
};

export default PageLoader;
