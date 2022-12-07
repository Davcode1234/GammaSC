import {
  ContentContainer,
  ImgWrapper,
  StyledImg,
} from "./OfferPageCard.styles";

const OfferPageCard = ({ backgroundImg }) => {
  return (
    <>
      <StyledImg src={backgroundImg} alt={"background image"}></StyledImg>;
      <ContentContainer></ContentContainer>
    </>
  );
};

export default OfferPageCard;
