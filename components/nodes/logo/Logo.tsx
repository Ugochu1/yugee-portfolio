import { FC } from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { useCursor } from "@/contexts/CursorProvider";

const Logo: FC = () => {
  const { type, setType } = useCursor();

  return (
    <div className={styles.logo}>
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
  );
};

export default Logo;
