import Navbar from "@/components/nodes/navbar/Navbar";
import styles from "./MainLayout.module.scss";
import { ReactNode, useContext, useEffect, useRef, useState } from "react";
import Cursor from "@/components/nodes/cursor/Cursor";
import PageLoader from "@/components/nodes/pageLoader/PageLoader";
import { useRouter } from "next/router";
import { createContext } from "react";
import Contacts from "@/components/nodes/contacts/Contacts";

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
  const router = useRouter();
  const [contactOpen, setContactOpen] = useState<boolean>(false);

  const loadContext: PageLoadContextInterface = {
    pageLoad,
    setPageLoad,
  };

  const contactContext: ContactOpenInterface = {
    contactOpen,
    setContactOpen,
  };

  return (
    <div className={styles.global}>
      <Contacts contactOpen={contactOpen} setContactOpen={setContactOpen} />
      <ContactContext.Provider value={contactContext}>
        <Navbar />
        <Cursor />
        <PageLoadContext.Provider value={loadContext}>
          <>{children}</>
        </PageLoadContext.Provider>
      </ContactContext.Provider>
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
