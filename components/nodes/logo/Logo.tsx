import { FC, useState } from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { useCursor } from "@/contexts/CursorProvider";
import { getOpacity } from "../navbar/Navbar";

const Logo: FC<{ scrollPos: number }> = ({ scrollPos }) => {
  // const [innerWidth, setInnerWidth] = useState(document.body.clientWidth);
  const { type, setType } = useCursor();

  return (
    <>
      <div className={styles.logo + " lg:hidden"}>
        {/* {JSON.stringify(type)} */}
        <Link href="/">
          <div
            className={styles.main_logo}
            onMouseOver={() => setType("hover")}
            onMouseLeave={() => setType("none")}
          >
            <div className={styles.alpha}>J</div>
            <div className={styles.alpha}>a</div>
            <div className={styles.alpha}>m</div>
            <div className={styles.alpha}>e</div>
            <div className={styles.alpha + " mr-1"}>s</div>
            <div className={styles.alpha}>O</div>
            <div className={styles.alpha}>l</div>
            <div className={styles.alpha}>i</div>
            <div className={styles.alpha}>n</div>
            <div className={styles.alpha}>y</div>
            <div className={styles.alpha}>a</div>
          </div>
        </Link>
        <div className={styles.location}>Birmingham, England</div>
      </div>
      {scrollPos <= 400 && (
        <div className={styles.logo + " hidden lg:block"}>
          {/* {JSON.stringify(type)} */}
          <Link href="/">
            <div
              className={styles.main_logo}
              onMouseOver={() => setType("hover")}
              onMouseLeave={() => setType("none")}
            >
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 200)}` }}
              >
                J
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                a
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                m
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 200)}` }}
              >
                e
              </div>
              <div
                className={styles.alpha + " mr-1"}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                s
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 200)}` }}
              >
                O
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                l
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                i
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 200)}` }}
              >
                n
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                y
              </div>
              <div
                className={styles.alpha}
                style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
              >
                a
              </div>
            </div>
          </Link>

          <div
            className={styles.location + " hidden lg:block"}
            style={{ opacity: `${getOpacity(scrollPos, 400)}` }}
          >
            Birmingham, England
          </div>
        </div>
      )}
    </>
  );
};

export default Logo;
