import {
  ContentContainer,
  StyledImgBackground,
  Header,
  ContentTextWrapper,
  Text,
  StyledCamImg,
  TextWrapper,
  FirstTextParagraph,
  List,
  ListItem,
  Line,
  CamImgWrapper,
} from "./OfferPageCard.styles";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const textAppearOptions = {
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
            <Text>{text}</Text>
          </div>
        </ContentTextWrapper>
      </StyledImgBackground>
      <ContentContainer>
        <AnimatePresence>
          {appear && (
            <>
              <CamImgWrapper
                variants={textAppearOptions}
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
                variants={textAppearOptions}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Line></Line>
                <div>
                  <FirstTextParagraph>{contentParagraph}</FirstTextParagraph>
                  <List>
                    {itemsArray.map((item) => {
                      return <ListItem key={item.id}>{item.listItem}</ListItem>;
                    })}
                  </List>
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
