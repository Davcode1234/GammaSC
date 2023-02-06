import {
  TitleName,
  PositionPar,
  AboutText,
  TextWrapper,
  StyledImage,
  Wrap,
} from "./AboutWorkerModalContent.styles";

import PropTypes from "prop-types";

const AboutWorkerModalContent = ({
  name,
  position,
  text,
  img,
  dir,
  keyDown,
  forwardRef,
}) => {
  return (
    <>
      {/* <div ref={forwardRef} onKeyDown={keyDown} tabIndex="-1"></div> */}
      <Wrap dir={dir} ref={forwardRef} onKeyDown={keyDown} tabIndex="-1">
        <StyledImage
          src={img}
          width={400}
          height={429}
          alt="test"
        ></StyledImage>
        <div>
          <TitleName>{name}</TitleName>
          <TextWrapper>
            <PositionPar>{position}</PositionPar>
            <AboutText>{text}</AboutText>
          </TextWrapper>
        </div>
      </Wrap>
    </>
  );
};

export default AboutWorkerModalContent;

AboutWorkerModalContent.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  text: PropTypes.object,
  dir: PropTypes.string,
  keyDown: PropTypes.func,
  forwardRef: PropTypes.object,
};
