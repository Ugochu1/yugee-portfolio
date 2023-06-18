import Navbar from "@/components/nodes/navbar/Navbar";
import styles from "./MainLayout.module.scss";
import { ReactNode, useEffect, useRef, useState } from "react";
import Cursor from "@/components/nodes/cursor/Cursor";
import PageLoader from "@/components/nodes/pageLoader/PageLoader";
import { useRouter } from "next/router";
import Footer from "@/components/nodes/footer/Footer";

export interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const globalChild = useRef<HTMLDivElement>(null);
  const [scrollPos, setScrollPos] = useState<number>(0);
  const [pageLoad, setPageLoad] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    globalChild.current?.scrollTo({
      top: 0,
    });
    setPageLoad(true);
    setTimeout(() => {}, 200)
  }, [router.pathname]);

  useEffect(() => {
    globalChild.current?.addEventListener("scroll", () => {
      setScrollPos(globalChild.current?.scrollTop || 0);
    });
  }, []);
  return (
    <div className={styles.global}>
      <Navbar scrollPos={scrollPos} />
      <Cursor />
      {pageLoad && <PageLoader setPageLoad={setPageLoad} />}
      <div className={styles.globalchild} ref={globalChild}>
        {children}
        {!pageLoad && <Footer />}
      </div>
    </div>
  );
};

export default MainLayout;
