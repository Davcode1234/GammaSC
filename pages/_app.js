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
// import { AnimatePresence, motion } from "framer-motion";

// const pageTransition = {
//   hidden: { opacity: 0, x: -200, y: 0 },
//   enter: { opacity: 1, x: 0, y: 0 },
//   exit: { opacity: 0, x: 0, y: -100 },
// };

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

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon30.png" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Loading />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
  router: PropTypes.object,
};
