import { FC } from "react";
import styles from "./Contacts.module.scss";
import AnimRollup from "../animRollup/AnimRollup";
import { buttonStyle } from "@/pages";
import { useCursor } from "@/contexts/CursorProvider";

export const handleStyle = {
  fontSize: "13px",
  marginRight: "20px",
};

interface ContactInterface {
  contactOpen: boolean;
  setContactOpen: (cv: boolean) => void;
}

const Contacts: FC<ContactInterface> = ({ contactOpen, setContactOpen }) => {
  const { setType } = useCursor();
  return (
    <>
      <div
        className={`${styles.background} ${contactOpen && styles.active}`}
        onClick={() => setContactOpen(false)}
      ></div>
      <div className={`${styles.container} ${contactOpen && styles.active}`}>
        <div className={styles.main}>
          <div className={styles.header}>
            <div className={styles.instruction}>
              Use this form to describe your project
            </div>
            <div
              className={styles.close}
              onClick={() => setContactOpen(false)}
              onMouseOver={() => setType("hover")}
              onMouseLeave={() => setType("none")}
            >
              <div></div>
              <div></div>
            </div>
          </div>
          <div className={styles.form}>
            <form>
              <div>
                <label htmlFor="name">Hi, my name is</label>{" "}
                <input
                  type="text"
                  placeholder="John Doe"
                  id="name"
                  className={styles.formText}
                  required
                />
                . <label htmlFor="email">You can answer me on this email</label>{" "}
                <input
                  type="text"
                  placeholder="email@email.com"
                  className={styles.formText}
                  id="email"
                  required
                />
                . <label htmlFor="reason">I am looking for help with a</label>{" "}
                <input
                  type="text"
                  placeholder="website, mobile app, etc"
                  className={styles.formText}
                  id="reason"
                  required
                />
                . <label htmlFor="budget">My budget is $</label>
                <input
                  type="text"
                  placeholder="1000"
                  className={styles.formText}
                  id="budget"
                  style={{ width: "100px" }}
                  required
                />{" "}
                <label htmlFor="time">and I need it done by</label>{" "}
                <input
                  type="text"
                  placeholder="January 1st, 2024"
                  className={styles.formText}
                  id="time"
                  required
                />
              </div>
              <div className="md:h-[40px] h-[24px] w-full"></div>
              <AnimRollup
                style={{ ...buttonStyle, background: "black", color: "white" }}
              >
                <span className="mr-1">Contact Us</span> &rarr;
              </AnimRollup>
            </form>
          </div>
        </div>
        <div className={styles.socials}>
          <AnimRollup style={handleStyle}>Instagram</AnimRollup>
          <AnimRollup style={handleStyle}>Twitter</AnimRollup>
          <AnimRollup style={handleStyle}>olinyaugochukwu1@gmail.com</AnimRollup>
        </div>
      </div>
    </>
  );
};

export default Contacts;
