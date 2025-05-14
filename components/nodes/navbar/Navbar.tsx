import { FC, useState, useEffect } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Link from "next/link";
import AnimRollup from "../animRollup/AnimRollup";
import { useRouter } from "next/router";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import { useContactOpen } from "@/components/layouts/main/MainLayout";

export function getOpacity(scrollPos: number, threshold: number) {
  const opacity = 1 - scrollPos / threshold;
  if (opacity < 0) return 0;
  return opacity;
}

const Navbar: FC = () => {
  const scrollPos = useScrollPosition();
  const router = useRouter();
  const [dropped, setDropped] = useState<boolean>(false);
  const [active, setActive] = useState<string>("");
  const { setContactOpen } = useContactOpen();

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
      <div className={styles.navbar}>
        <div className="w-full lg:w-[39%] flex items-center justify-between z-10">
          <Logo scrollPos={scrollPos} />
          <div
            className={`${styles.dropdown} flex ${
              dropped && styles.active
            } lg:hidden`}
            onClick={() => setDropped(!dropped)}
          >
            <div></div>
            <div></div>
          </div>
        </div>

        <div
          className={`lg:flex items-center bg-inherit justify-between flex-1 absolute ${
            dropped ? "top-0" : "top-[-100vh]"
          } lg:static h-screen lg:h-auto inset-0 pt-40 lg:pt-0 space-y-10 lg:space-y-0 transition-all duration-500`}
        >
          <div className={styles.navigation}>
            <Link href="/">
              <p
                className={`${styles.link}  ${
                  active === "home" && styles.active
                }`}
              >
                Home
              </p>
            </Link>
            <Link href="/projects">
              <p
                className={`${styles.link}  ${
                  active === "projects" && styles.active
                }`}
              >
                Projects
              </p>
            </Link>
          </div>
          <div className="flex flex-col lg:items-end items-center">
            <p className={styles.def}>Social:</p>
            <div className="flex">
              <Link href="mailto:olinyaugochukwu1@gmail.com">
                <AnimRollup className="text-lg px-[7px] lg:text-[12px] lg:px-[5px]">
                  EMAIL
                </AnimRollup>
              </Link>
              <Link href="https://github.com/Ugochu1" target="_blank" rel="noopener noreferrer">
                {/* {JSON.stringify(scrollPos)} */}
                <AnimRollup className="text-lg px-[7px] lg:text-[12px] lg:px-[5px]">
                  GITHUB
                </AnimRollup>
              </Link>
              <Link href="https://www.linkedin.com/in/olinya-ugochukwu-8a5b7a252/" target="_blank" rel="noopener noreferrer">
                <AnimRollup className="text-lg px-[7px] lg:text-[12px] lg:px-[5px]">
                  IN
                </AnimRollup>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
