import Layout from "../components/Layout";
import { GlobalStyle } from "../styles/GlobalStyles";
import { theme } from "../lib/theme";
import { ThemeProvider } from "styled-components";
import "../styles/normalize.css";
import PropTypes from "prop-types";
import Head from "next/head";
import { AnimatePresence, motion } from "framer-motion";

const pageTransition = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

function MyApp({ Component, pageProps, router }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/favicon30.png" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Layout>
          <AnimatePresence
            mode="wait"
            onExitComplete={() => window.scrollTo(0, 0)}
            initial={false}
          >
            <motion.main
              variants={pageTransition}
              initial="hidden"
              animate="enter"
              exit="exit"
              transition={{ type: "linear" }}
              key={router.route}
            >
              <Component {...pageProps} />
            </motion.main>
          </AnimatePresence>
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
