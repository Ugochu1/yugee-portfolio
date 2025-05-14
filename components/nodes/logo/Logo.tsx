import { FC, useState } from "react";
import styles from "./Logo.module.scss";
import Link from "next/link";
import { getOpacity } from "../navbar/Navbar";

const Logo: FC<{ scrollPos: number }> = ({ scrollPos }) => {

  return (
    <>
      <div className={styles.logo + ""}>
        {/* {JSON.stringify(type)} */}
        <Link href="/">
          <div
            className={styles.main_logo}
          >
            <div className={styles.alpha}>Ug</div>
            <div className={styles.alpha}>oc</div>
            <div className={styles.alpha}>hu</div>
            <div className={styles.alpha}>kw</div>
            <div className={styles.alpha + " mr-1"}>u</div>
            <div className={styles.alpha}>O</div>
            <div className={styles.alpha}>l</div>
            <div className={styles.alpha}>i</div>
            <div className={styles.alpha}>n</div>
            <div className={styles.alpha}>y</div>
            <div className={styles.alpha}>a</div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Logo;
