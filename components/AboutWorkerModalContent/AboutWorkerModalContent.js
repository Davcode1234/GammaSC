import {
  TitleName,
  PositionPar,
  AboutText,
  TextWrapper,
  StyledImage,
  Wrap,
} from "./AboutWorkerModalContent.styles";
import Image from "next/image";
import PropTypes from "prop-types";
import { ContentWrapper } from "../../styles/pages/Home.styles";

// const swipeTest = {
//   hidden: {
//     opacity: 0,
//     translateX: 0,
//   },
//   visible: {
//     opacity: 1,
//     translateX: 200,
//   },
//   exit: {
//     opacity: 0,
//     translateX: -200,
//   },
// };

const AboutWorkerModalContent = ({ name, position, text, img, dir }) => {
  return (
    <>
      {/* <ContentWrapper
        variants={swipeTest}
        initial="hidden"
        animate="visible"
        exit="exit"
      > */}

      <Wrap dir={dir}>
        <StyledImage
          src={img}
          width={400}
          height={429}
          alt="test"
        ></StyledImage>
        {/* <Image src={img} width={400} height={429} alt="test"></Image> */}
        <div>
          <TitleName>{name}</TitleName>
          <TextWrapper>
            <PositionPar>{position}</PositionPar>
            <AboutText>{text}</AboutText>
          </TextWrapper>
        </div>
      </Wrap>

      {/* </ContentWrapper> */}
    </>
  );
};

export default AboutWorkerModalContent;

AboutWorkerModalContent.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.string,
  dir: PropTypes.string,
};
