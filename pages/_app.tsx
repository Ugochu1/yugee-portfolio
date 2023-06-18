import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode, useEffect } from "react";
import CursorProvider from "@/contexts/CursorProvider";
import { useRouter } from "next/router";

export type NextPageWithLayout = NextPage & {
  getLayout?: (children: ReactNode) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CursorProvider>{getLayout(<Component {...pageProps} />)}</CursorProvider>
  );
}
