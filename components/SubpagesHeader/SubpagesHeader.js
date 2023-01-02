import { InfoSmallPar } from "../../styles/pages/Home.styles";
import {
  Header,
  HeaderSection,
  NavStripe,
  TextParagraph,
} from "./SubpagesHeader.styles";
import PropTypes from "prop-types";

const SubpagesHeader = ({ headerSmall, headerBig, text }) => {
  return (
    <>
      <NavStripe></NavStripe>
      <HeaderSection>
        <div>
          <InfoSmallPar>{headerSmall}</InfoSmallPar>
          <Header>{headerBig}</Header>
          <TextParagraph>{text}</TextParagraph>
        </div>
      </HeaderSection>
    </>
  );
};

export default SubpagesHeader;

SubpagesHeader.propTypes = {
  headerSmall: PropTypes.string,
  headerBig: PropTypes.string,
  text: PropTypes.string,
};
