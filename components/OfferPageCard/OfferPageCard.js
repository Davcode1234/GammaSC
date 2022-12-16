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
  test,
}) => {
  const textAppearOptions = {
    hidden: {
      opacity: 0,
      translateY: 200,
    },
    visible: {
      opacity: 1,
      translateY: 0,

      transition: {
        duration: 0.4,
        delay: 0.5,
      },
    },
    exit: {
      type: "spring",
      stiffness: 100,
      opacity: 0,
      translateY: 200,

      transition: {
        duration: 0.4,
      },
    },
  };
  return (
    <>
      <StyledImgBackground imageSource={backgroundImg} alt={"background image"}>
        <ContentTextWrapper>
          <div>
            <Header>{header}</Header>
            <Text>{text}</Text>
          </div>
        </ContentTextWrapper>
      </StyledImgBackground>
      <ContentContainer>
        <AnimatePresence>
          {test && (
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
