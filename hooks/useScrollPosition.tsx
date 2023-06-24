import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPos, setScrollPos] = useState<number>(0);
  useEffect(() => {
    document.addEventListener("scroll", () => {
      setScrollPos(document.documentElement.scrollTop);
    });
  }, []);

  return scrollPos;
};
