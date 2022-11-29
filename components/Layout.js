import Navigation from "./Navigation/Navigation";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation></Navigation>
      {children}
    </>
  );
};

export default Layout;
