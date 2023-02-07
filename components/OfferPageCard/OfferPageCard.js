import {
  ContentContainer,
  StyledImgBackground,
  Header,
  ContentTextWrapper,
  StyledCamImg,
  TextWrapper,
  CamImgWrapper,
} from "./OfferPageCard.styles";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const cardAppearVariant = {
  hidden: {
    opacity: 0,
    translateY: 200,
  },
  visible: {
    opacity: 1,
    translateY: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.4,
      delay: 0.5,
    },
  },
  exit: {
    opacity: 0,
    translateY: 200,

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.4,
    },
  },
};
const OfferPageCard = ({
  backgroundImg,
  header,
  text,
  camImg,
  alt,
  width,
  height,
  contentParagraph,
  itemsArray,
  appear,
  translateVal,
}) => {
  return (
    <>
      <StyledImgBackground imageSource={backgroundImg} alt={"background image"}>
        <ContentTextWrapper xDim={translateVal}>
          <div>
            <Header>{header}</Header>
            <p>{text}</p>
          </div>
        </ContentTextWrapper>
      </StyledImgBackground>
      <ContentContainer>
        <AnimatePresence>
          {appear && (
            <>
              <CamImgWrapper
                variants={cardAppearVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <StyledCamImg
                  src={camImg}
                  alt={alt}
                  width={width}
                  height={height}
                />
              </CamImgWrapper>

              <TextWrapper
                variants={cardAppearVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div></div>
                <div>
                  <p>{contentParagraph}</p>
                  <ul>
                    {itemsArray.map((item) => {
                      return <li key={item.id}>{item.listItem}</li>;
                    })}
                  </ul>
                </div>
              </TextWrapper>
            </>
          )}
        </AnimatePresence>
      </ContentContainer>
    </>
  );
};

export default OfferPageCard;

OfferPageCard.propTypes = {
  backgroundImg: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  camImg: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  contentParagraph: PropTypes.object,
  itemsArray: PropTypes.array,
  appear: PropTypes.bool,
  translateVal: PropTypes.string,
};
