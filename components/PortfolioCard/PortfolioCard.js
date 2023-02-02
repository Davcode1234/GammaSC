import {
  ClientName,
  ImgWrapper,
  PortfolioCardContainer,
  ProductName,
  StyledImage,
  CardOverlay,
  HoverLine,
  HoverText,
  StyledIcon,
} from "./PortfolioCard.styles";
import PropTypes from "prop-types";

const PortfolioCard = ({ card, click }) => {
  const { image, company, product, alt } = card.fields;
  const ImageURL = image.fields.file.url;

  return (
    <PortfolioCardContainer onClick={click}>
      <CardOverlay>
        <HoverText>
          Zobacz projekt
          <StyledIcon
            icon="material-symbols:arrow-back"
            width="30"
            height="30"
          />
        </HoverText>
        <HoverLine></HoverLine>
      </CardOverlay>
      <ImgWrapper>
        <StyledImage src={`https:${ImageURL}`} fill alt={alt}></StyledImage>
      </ImgWrapper>
      <ClientName>{company}</ClientName>
      <ProductName>{product}</ProductName>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  card: PropTypes.object,
  click: PropTypes.func,
};
