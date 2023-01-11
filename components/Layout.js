import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      {children}
      <Footer></Footer>
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
