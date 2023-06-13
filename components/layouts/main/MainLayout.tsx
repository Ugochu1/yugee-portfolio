import Navbar from "@/components/nodes/navbar/Navbar";
import styles from "./MainLayout.module.scss";
import { ReactNode } from "react";
import Cursor from "@/components/nodes/cursor/Cursor";
import PageLoader from "@/components/nodes/pageLoader/PageLoader";

export interface MainLayoutProps {
  children?: ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div>
      <Navbar />
      <Cursor />
      <PageLoader />
      <>{children}</>
    </div>
  );
};

export default MainLayout;
