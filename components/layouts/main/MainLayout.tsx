import Navbar from "@/components/nodes/navbar/Navbar";
import styles from "./MainLayout.module.scss";
import { ReactNode, useContext, useState } from "react";
import { createContext } from "react";

export interface MainLayoutProps {
  children?: ReactNode;
}

interface PageLoadContextInterface {
  pageLoad: boolean | null;
  setPageLoad: (cv: boolean) => void;
}

const PageLoadContext = createContext<PageLoadContextInterface>({
  pageLoad: null,
  setPageLoad: () => null,
});

interface ContactOpenInterface {
  contactOpen: boolean | null;
  setContactOpen: (cv: boolean) => void;
}

const ContactContext = createContext<ContactOpenInterface>({
  contactOpen: null,
  setContactOpen: () => null,
});

const MainLayout = ({ children }: MainLayoutProps) => {
  const [pageLoad, setPageLoad] = useState<boolean>(true);

  const loadContext: PageLoadContextInterface = {
    pageLoad,
    setPageLoad,
  };

  return (
    <div className={styles.global}>
      <Navbar />
      <PageLoadContext.Provider value={loadContext}>
        <>{children}</>
      </PageLoadContext.Provider>
    </div>
  );
};

export function usePageLoader() {
  return useContext(PageLoadContext);
}

export function useContactOpen() {
  return useContext(ContactContext);
}

export default MainLayout;
