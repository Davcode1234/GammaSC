import Navigation from "./Navigation/Navigation";
import Footer from "./Footer/Footer";

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
