import { InfoSmallPar } from "../../styles/pages/Home.styles";
import {
  HeaderSection,
  // NavStripe,
} from "./SubpagesHeader.styles";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const slideInVariants = {
  hidden: {
    opacity: 0,
    translateX: -200,
  },
  active: {
    opacity: 1,
    translateX: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.4,
      delay: 0.4,
    },
  },
};

const SubpagesHeader = ({ headerSmall, headerBig, text }) => {
  return (
    <>
      {/* <NavStripe></NavStripe> */}
      <HeaderSection>
        <motion.div
          variants={slideInVariants}
          initial="hidden"
          animate="active"
        >
          <InfoSmallPar>{headerSmall}</InfoSmallPar>
          <h2>{headerBig}</h2>
          <p>{text}</p>
        </motion.div>
      </HeaderSection>
    </>
  );
};

export default SubpagesHeader;

SubpagesHeader.propTypes = {
  headerSmall: PropTypes.string,
  headerBig: PropTypes.node,
  text: PropTypes.string,
};
