import {
  Wrap,
  TextContentWrapper,
  ImgWrapper,
  StyledImg,
} from "./AboutWorkerModalContent.styles";
import PropTypes from "prop-types";

const AboutWorkerModalContent = ({ card, dir, keyDown, forwardRef }) => {
  const { name, position, text, img } = card;

  return (
    <>
      <Wrap dir={dir} ref={forwardRef} onKeyDown={keyDown} tabIndex="-1">
        <ImgWrapper>
          {/* <Image src={img} width={400} height={429} alt="test"></Image> */}
          <StyledImg
            src={img}
            fill
            sizes="
          (max-width: 750px) 250px
          400px"
            alt="hero img"
          ></StyledImg>
        </ImgWrapper>
        <TextContentWrapper>
          <h2>{name}</h2>
          <p>{position}</p>
          <p>{text}</p>
        </TextContentWrapper>
      </Wrap>
    </>
  );
};

export default AboutWorkerModalContent;

AboutWorkerModalContent.propTypes = {
  card: PropTypes.array,
  dir: PropTypes.string,
  keyDown: PropTypes.func,
  forwardRef: PropTypes.object,
};
