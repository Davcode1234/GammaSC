import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../lib/theme";
import { ThemeProvider } from "styled-components";
import "../styles/normalize.css";
import PropTypes from "prop-types";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader, LoaderWrapper } from "../components/Loader.styles";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

function Loading() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url) => url !== router.asPath && setLoading(true);
    const handleComplete = (url) =>
      url === router.asPath &&
      setTimeout(() => {
        setLoading(false);
      }, 300);
    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  });

  return (
    loading && (
      <LoaderWrapper>
        <Loader></Loader>
      </LoaderWrapper>
    )
  );
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon30.png" />
      </Head>
      <GlobalStyle />
      <main className={montserrat.className}>
        <ThemeProvider theme={theme}>
          <Layout>
            <Loading />
            <Component {...pageProps} />
          </Layout>
        </ThemeProvider>
      </main>
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  router: PropTypes.object,
};
