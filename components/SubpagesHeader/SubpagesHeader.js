import { InfoSmallPar } from "../../styles/pages/Home.styles";
import { InfoSecHeader } from "../../styles/pages/Home.styles";
import {
  Header,
  HeaderSection,
  NavStripe,
  TextParagraph,
} from "./SubpagesHeader.styles";

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
