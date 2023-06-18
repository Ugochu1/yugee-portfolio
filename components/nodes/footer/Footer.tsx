import { FC } from "react";
import styles from "./Footer.module.scss";
import AnimRollup from "../animRollup/AnimRollup";
import { buttonStyle } from "@/pages";
import { useInView } from "react-intersection-observer";

const Footer: FC = () => {
  const { ref, inView } = useInView({
    threshold: .2,
    triggerOnce: true
  });

  return (
    <div className={styles.container}>
      {/* {JSON.stringify(inView)} */}
      <div className={styles.curve}></div>
      <div className={`${styles.content} ${inView && styles.inView}`} ref={ref}>
        <p>James Olinya</p>
        <div className={styles.contact}>
          <p>Have a nice project?</p>
          <AnimRollup style={{ fontSize: "50px" }}>Get in touch</AnimRollup>
        </div>
        <div className={styles.socials}>
          <AnimRollup
            style={{
              ...buttonStyle,
              border: "1px solid #f5f5f5",
              margin: "10px 5px",
            }}
          >
            Twitter
          </AnimRollup>
          <AnimRollup
            style={{
              ...buttonStyle,
              border: "1px solid #f5f5f5",
              margin: "10px 5px",
            }}
          >
            Instagram
          </AnimRollup>
          <AnimRollup
            style={{
              ...buttonStyle,
              border: "1px solid #f5f5f5",
              margin: "10px 5px",
            }}
          >
            Behance
          </AnimRollup>
          <AnimRollup
            style={{
              ...buttonStyle,
              border: "1px solid #f5f5f5",
              margin: "10px 5px",
            }}
          >
            Dribbble
          </AnimRollup>
        </div>
      </div>
    </div>
  );
};

export default Footer;
