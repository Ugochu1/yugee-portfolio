import { FC } from "react";
import styles from "./Footer.module.scss";
import AnimRollup from "../animRollup/AnimRollup";
import { buttonStyle } from "@/pages";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

const Footer: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <>
      <div className={styles.container}>
        {/* {JSON.stringify(inView)} */}
        <div className={styles.curve}></div>
        <div
          className={`${styles.content} ${inView && styles.inView}`}
          ref={ref}
        >
          <p>Ugochukwu Olinya</p>
          <div className={styles.contact}>
            <p>Have a project idea?</p>
            <Link href="mailto:olinyaugochukwu1@gmail.com">
              <AnimRollup style={{ fontSize: "50px" }}>Get in touch</AnimRollup>
            </Link>
          </div>
          <div className={styles.socials}>
            <Link href="mailto:olinyaugochukwu1@gmail.com">
              <AnimRollup
                style={{
                  ...buttonStyle,
                  border: "1px solid #f5f5f5",
                  margin: "10px 5px",
                }}
              >
                Email
              </AnimRollup>
            </Link>

            <Link
              href="https://github.com/Ugochu1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimRollup
                style={{
                  ...buttonStyle,
                  border: "1px solid #f5f5f5",
                  margin: "10px 5px",
                }}
              >
                Github
              </AnimRollup>
            </Link>

            <Link
              href="https://www.linkedin.com/in/olinya-ugochukwu-8a5b7a252/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AnimRollup
                style={{
                  ...buttonStyle,
                  border: "1px solid #f5f5f5",
                  margin: "10px 5px",
                }}
              >
                LinkedIn
              </AnimRollup>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
