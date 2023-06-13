import { FC, useEffect, useRef } from "react";
import styles from "./Cursor.module.scss";
import { LegacyRef } from "react";
import { useCursor } from "@/contexts/CursorProvider";

const Cursor: FC = () => {
  const { type } = useCursor();
  const cursor = useRef<HTMLDivElement>(null);
  const cursorFollower = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      cursor.current!.style.top = `${e.clientY - 12}px`;
      cursor.current!.style.left = `${e.clientX - 15}px`;
      cursorFollower.current!.style.top = `${e.clientY - 14.5}px`;
      cursorFollower.current!.style.left = `${e.clientX - 17.5}px`;
    });
  }, []);

  return (
    <>
      {/* {JSON.stringify(type)} */}
      <div
        className={`${styles.cursor} ${type === "none" && styles.none} ${
          type === "hover" && styles.hover
        } ${type === "open" && styles.open} hidden lg:block`}
        ref={cursor}
      ></div>
      <div
        className={`${styles.cursorfollower} ${type !== "none" && styles.hidden} hidden lg:block`}
        ref={cursorFollower}
      ></div>
    </>
  );
};

export default Cursor;
