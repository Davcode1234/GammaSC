import Navigation from "./Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="content">
      <Navigation></Navigation>
      {children}
    </div>
  );
};

export default Layout;
