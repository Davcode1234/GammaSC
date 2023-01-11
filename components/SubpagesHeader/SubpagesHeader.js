import { InfoSmallPar } from "../../styles/pages/Home.styles";
import {
  Header,
  HeaderSection,
  NavStripe,
  TextParagraph,
} from "./SubpagesHeader.styles";
import PropTypes from "prop-types";

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
      delay: 0.1,
    },
  },
};

const SubpagesHeader = ({ headerSmall, headerBig, text }) => {
  return (
    <>
      <NavStripe></NavStripe>
      <HeaderSection>
        <div>
          <InfoSmallPar
            variants={slideInVariants}
            initial="hidden"
            animate="active"
          >
            {headerSmall}
          </InfoSmallPar>
          <Header variants={slideInVariants} initial="hidden" animate="active">
            {headerBig}
          </Header>
          <TextParagraph
            variants={slideInVariants}
            initial="hidden"
            animate="active"
          >
            {text}
          </TextParagraph>
        </div>
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
