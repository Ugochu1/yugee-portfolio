import { FC, useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Link from "next/link";
import { useCursor } from "@/contexts/CursorProvider";
import AnimRollup from "../animRollup/AnimRollup";

export const socialsStyle = {
  fontSize: "12px",
  padding: "0 5px",
};

export const mobileSocialStyle = {
  fontSize: "18px",
  padding: "0 7px",
};

export function getOpacity(scrollPos: number, threshold: number) {
  const opacity = 1 - scrollPos / threshold;
  if (opacity < 0) return 0;
  return opacity;
}

const Navbar: FC = () => {
  const { setType } = useCursor();
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [dropped, setDropped] = useState<boolean>(false);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPos(document.documentElement.scrollTop);
    });
  }, []);

  return (
    <>
      <div
        className={
          "fixed left-0 w-full h-[100vh] " +
          styles.drop +
          ` ${dropped ? "top-0" : "top-[-100vh]"}`
        }
      >
        <div>
          <Link href="">
            <div className="text-center">
              <span
                className={`${styles.link} ${styles.active}`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Home
              </span>
            </div>
          </Link>
          <Link href="">
            <div className="text-center mt-7">
              <span
                className={`${styles.link}`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Case Studies
              </span>
            </div>
          </Link>
          <Link href="">
            <div className="text-center mt-7">
              <span
                className={`${styles.link}`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                About
              </span>
            </div>
          </Link>
          <Link href="">
            <div className="text-center mt-7">
              <span
                className={`${styles.link}`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Contacts
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <p className={styles.def}>Social:</p>
            <div className="flex mt-3">
              <Link href="">
                <AnimRollup style={mobileSocialStyle}>TW</AnimRollup>
              </Link>
              <Link href="">
                {/* {JSON.stringify(scrollPos)} */}
                <AnimRollup style={mobileSocialStyle}>IG</AnimRollup>
              </Link>
              <Link href="">
                <AnimRollup style={mobileSocialStyle}>BE</AnimRollup>
              </Link>
              <Link href="">
                <AnimRollup style={mobileSocialStyle}>DRIB</AnimRollup>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* big navbar is here. */}
      <div className={styles.navbar}>
        <div className={"md:w-[40%] w-1/2 flex items-center"}>
          <Logo scrollPos={scrollPos} />
        </div>
        <div
          className={`${styles.dropdown} flex ${
            dropped && styles.active
          } lg:hidden`}
          onClick={() => setDropped(!dropped)}
        >
          <div></div>
          <div></div>
        </div>
        <div
          className={
            "w-full md:w-[60%] hidden lg:flex items-center justify-between"
          }
        >
          <div className={styles.navigation}>
            <Link href="">
              <p
                className={`${styles.link} ${styles.active}`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Home
              </p>
            </Link>
            <Link href="">
              <p
                className={styles.link}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Case Studies
              </p>
            </Link>
            <Link href="">
              <p
                className={styles.link}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                About
              </p>
            </Link>
            <Link href="">
              <p
                className={styles.link}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Contacts
              </p>
            </Link>
          </div>
          {scrollPos <= 450 && (
            <div className={styles.socials}>
              <div className="flex flex-col items-end">
                <p
                  className={styles.def}
                  style={{ opacity: `${getOpacity(scrollPos, 200)}` }}
                >
                  Social:
                </p>
                <div className="flex">
                  <Link href="">
                    <AnimRollup
                      style={{
                        ...socialsStyle,
                        opacity: `${getOpacity(scrollPos, 150)}`,
                      }}
                    >
                      TW
                    </AnimRollup>
                  </Link>
                  <Link href="">
                    {/* {JSON.stringify(scrollPos)} */}
                    <AnimRollup
                      style={{
                        ...socialsStyle,
                        opacity: `${getOpacity(scrollPos, 200)}`,
                      }}
                    >
                      IG
                    </AnimRollup>
                  </Link>
                  <Link href="">
                    <AnimRollup
                      style={{
                        ...socialsStyle,
                        opacity: `${getOpacity(scrollPos, 450)}`,
                      }}
                    >
                      BE
                    </AnimRollup>
                  </Link>
                  <Link href="">
                    <AnimRollup
                      style={{
                        fontSize: "12px",
                        padding: "0 0 0 5px",
                        opacity: `${getOpacity(scrollPos, 150)}`,
                      }}
                    >
                      DRIB
                    </AnimRollup>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
