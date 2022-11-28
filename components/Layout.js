import Navigation from "./Navigation/Navigation";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navigation></Navigation>
      {children}
    </div>
  );
};

export default Layout;
