import { FC, useState } from "react";
import styles from "./Footer.module.scss";
import AnimRollup from "../animRollup/AnimRollup";
import { buttonStyle } from "@/pages";
import { useInView } from "react-intersection-observer";
import { useContactOpen } from "@/components/layouts/main/MainLayout";

const Footer: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  const { setContactOpen } = useContactOpen();

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
            <AnimRollup
              style={{ fontSize: "50px" }}
              onClick={() => setContactOpen(true)}
            >
              Get in touch
            </AnimRollup>
          </div>
          <div className={styles.socials}>
            <AnimRollup
              style={{
                ...buttonStyle,
                border: "1px solid #f5f5f5",
                margin: "10px 5px",
              }}
            >
              WhatsApp
            </AnimRollup>
            <AnimRollup
              style={{
                ...buttonStyle,
                border: "1px solid #f5f5f5",
                margin: "10px 5px",
              }}
            >
              Github
            </AnimRollup>
            <AnimRollup
              style={{
                ...buttonStyle,
                border: "1px solid #f5f5f5",
                margin: "10px 5px",
              }}
            >
              LinkedIn
            </AnimRollup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
