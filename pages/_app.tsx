import GlobalContextProvider from "@/context/global-context/context-provider";
import Footer from "@/modules/footer";
import Header from "@/modules/header";
import NavBar from "@/modules/nav-bar";
import { globalStyles } from "@/styles/global-styles";
import { Global } from "@emotion/react";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalContextProvider>
      <Head>
        <title>S.Mohanraj</title>
      </Head>
      <Global styles={globalStyles} />
      <Header />
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </GlobalContextProvider>
  );
}
