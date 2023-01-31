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

const PortfolioCard = ({ img, alt, client, product }) => {
  return (
    <PortfolioCardContainer>
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
        <StyledImage src={img} fill alt={alt}></StyledImage>
      </ImgWrapper>
      <ClientName>{client}</ClientName>
      <ProductName>{product}</ProductName>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  client: PropTypes.string,
  product: PropTypes.string,
};
