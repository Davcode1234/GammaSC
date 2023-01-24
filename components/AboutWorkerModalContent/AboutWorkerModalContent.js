import {
  TitleName,
  PositionPar,
  AboutText,
} from "./AboutWorkerModalContent.styles";
import Image from "next/image";
import PropTypes from "prop-types";
import { ContentWrapper } from "../../styles/pages/Home.styles";

// const swipeTest = {
//   hidden: {
//     opacity: 0,
//     translateX: 200,
//   },
//   visible: {
//     opacity: 1,
//     translateX: 0,
//   },
//   exit: {
//     opacity: 0,
//     translateX: -200,
//   },
// };

const AboutWorkerModalContent = ({ name, position, text, img }) => {
  return (
    <>
      {/* <ContentWrapper
      variants={swipeTest}
      initial="hidden"
      animate="visible"
      exit="exit"
      > */}
      <Image src={img} width={400} height={429} alt="test"></Image>
      <div>
        <TitleName>{name}</TitleName>
        <PositionPar>{position}</PositionPar>
        <AboutText>{text}</AboutText>
      </div>
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
};
