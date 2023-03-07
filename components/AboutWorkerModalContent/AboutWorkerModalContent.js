import {
  Wrap,
  TextContentWrapper,
  ImgWrapper,
  StyledImg,
} from "./AboutWorkerModalContent.styles";
import PropTypes from "prop-types";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const AboutWorkerModalContent = ({ card, dir, keyDown, forwardRef }) => {
  const { name, position, text, img } = card;

  return (
    <>
      <div className={montserrat.className}>
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
      </div>
    </>
  );
};

export default AboutWorkerModalContent;

AboutWorkerModalContent.propTypes = {
  card: PropTypes.object,
  dir: PropTypes.string,
  keyDown: PropTypes.func,
  forwardRef: PropTypes.object,
};
