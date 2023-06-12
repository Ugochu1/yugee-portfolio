import { FC } from "react";
import styles from "./Navbar.module.scss";
import Logo from "../logo/Logo";
import Link from "next/link";
import { useCursor } from "@/contexts/CursorProvider";

const Navbar: FC = () => {
  const { setType } = useCursor();

  return (
    <div className={styles.navbar}>
      <div className={"md:w-[38%] w-1/2 flex items-center "}>
        <Logo />
      </div>
      <div className={"w-full md:w-[62%] hidden lg:flex items-center justify-start"}>
        <div
          className={styles.navigation}
          onMouseOver={() => setType("hover")}
          onMouseLeave={() => setType("none")}
        >
          <Link href="">
            <p className={`${styles.link} ${styles.active}`}>Home</p>
          </Link>
          <Link href="">
            <p className={styles.link}>Case Studies</p>
          </Link>
          <Link href="">
            <p className={styles.link}>About</p>
          </Link>
          <Link href="">
            <p className={styles.link}>Contacts</p>
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
