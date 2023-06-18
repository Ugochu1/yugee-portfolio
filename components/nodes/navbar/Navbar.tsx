import { FC, useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Link from "next/link";
import { useCursor } from "@/contexts/CursorProvider";
import AnimRollup from "../animRollup/AnimRollup";
import { useRouter } from "next/router";
import { useInView } from "react-intersection-observer";
import Contacts from "../contacts/Contacts";

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

interface NavbarProps {
  scrollPos: number;
}

const Navbar: FC<NavbarProps> = ({ scrollPos }) => {
  const router = useRouter();
  const { setType } = useCursor();
  const [dropped, setDropped] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const {ref, inView} = useInView({
    threshold: 1
  })
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  useEffect(() => {
    if (router.pathname.includes("projects")) {
      setActive("projects");
    } else if (router.pathname.includes("about")) {
      setActive("about");
    } else {
      setActive("home");
    }
  }, [router.pathname]);

  return (
    <>
    <Contacts contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <div
        className={
          "fixed left-0 w-full h-[100vh] " +
          styles.drop +
          ` ${dropped ? "top-0" : "top-[-100vh]"}`
        }
      >
        <div>
          <Link href="/">
            <div className="text-center" onClick={() => setDropped(false)}>
              <span
                className={`${styles.link} ${
                  active === "home" && styles.active
                }`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Home
              </span>
            </div>
          </Link>
          <Link href="/projects">
            <div className="text-center mt-6" onClick={() => setDropped(false)}>
              <span
                className={`${styles.link} ${
                  active === "projects" && styles.active
                }`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Projects
              </span>
            </div>
          </Link>
          <Link href="/about">
            <div className="text-center mt-6" onClick={() => setDropped(false)}>
              <span
                className={`${styles.link} ${
                  active === "about" && styles.active
                }`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                About
              </span>
            </div>
          </Link>
          <Link href="">
            <div className="text-center mt-6" onClick={() => setDropped(false)}>
              <span
                className={`${styles.link}`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
                onClick={() => setContactOpen(true)}
              >
                Contacts
              </span>
            </div>
          </Link>
        </div>
        <div className="mt-10">
          <div className="flex flex-col items-center">
            <p className={styles.def}>Social:</p>
            <div className="overflow-hidden" ref={ref}>
              <div className={`flex mt-3 ${styles.socialDrop} ${inView && styles.inView}`}>
                <Link href="">
                  <AnimRollup
                    style={mobileSocialStyle}
                    onClick={() => setDropped(false)}
                  >
                    TW
                  </AnimRollup>
                </Link>
                <Link href="">
                  {/* {JSON.stringify(scrollPos)} */}
                  <AnimRollup
                    style={mobileSocialStyle}
                    onClick={() => setDropped(false)}
                  >
                    IG
                  </AnimRollup>
                </Link>
                <Link href="">
                  <AnimRollup
                    style={mobileSocialStyle}
                    onClick={() => setDropped(false)}
                  >
                    BE
                  </AnimRollup>
                </Link>
                <Link href="">
                  <AnimRollup
                    style={mobileSocialStyle}
                    onClick={() => setDropped(false)}
                  >
                    DRIB
                  </AnimRollup>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* big navbar is here. */}
      <div className={styles.navbar}>
        <div className={"md:w-[39%] w-1/2 flex items-center"}>
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
            "w-full md:w-[61%] hidden lg:flex items-center justify-between"
          }
        >
          <div className={styles.navigation}>
            <Link href="/">
              <p
                className={`${styles.link}  ${
                  active === "home" && styles.active
                }`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Home
              </p>
            </Link>
            <Link href="/projects">
              <p
                className={`${styles.link}  ${
                  active === "projects" && styles.active
                }`}
                onMouseOver={() => setType("hover")}
                onMouseLeave={() => setType("none")}
              >
                Projects
              </p>
            </Link>
            <Link href="/about">
              <p
                className={`${styles.link}  ${
                  active === "about" && styles.active
                }`}
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
                onClick={() => setContactOpen(true)}
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
