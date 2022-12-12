import {
  ContentContainer,
  StyledImgBackground,
  Header,
  ContentTextWrapper,
  Text,
  StyledCamImg,
} from "./OfferPageCard.styles";

const OfferPageCard = ({
  backgroundImg,
  header,
  text,
  camImg,
  alt,
  width,
  height,
}) => {
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
        <StyledCamImg src={camImg} alt={alt} width={width} height={height} />
      </ContentContainer>
    </>
  );
};

export default OfferPageCard;
