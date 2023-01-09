import MobileFooter from "./MobileFooter/MobileFooter";
import DesktopFooter from "./DesktopFooter/DesktopFooter";
import useWindowSize from "../../hooks/useWindowSize";

const Footer = () => {
  const isMobile = useWindowSize(850);

  const ViewComponent = isMobile ? MobileFooter : DesktopFooter;

  return (
    <>
      <ViewComponent />
    </>
  );
};

export default Footer;
