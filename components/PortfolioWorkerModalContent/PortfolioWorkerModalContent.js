import {
  ClientName,
  ImgWrapper,
  ProductName,
  StyledImage,
} from "../PortfolioCard/PortfolioCard.styles.js";
import {
  Description,
  ModalContentWrapper,
  TextWrapper,
} from "./PortfolioWorkerModalContent.styles";
import PropTypes from "prop-types";

const PortfolioWorkerModalContent = ({ card, alt, dir }) => {
  const { image, company, product, description } = card.fields;
  const ImageURL = image.fields.file.url;

  return (
    <>
      <ModalContentWrapper dir={dir}>
        <TextWrapper>
          <ClientName>{company}</ClientName>
          <ProductName>{product}</ProductName>
          <Description>{description}</Description>
        </TextWrapper>

        <ImgWrapper>
          <StyledImage src={`https:${ImageURL}`} fill alt={alt}></StyledImage>
        </ImgWrapper>
      </ModalContentWrapper>
    </>
  );
};

export default PortfolioWorkerModalContent;

PortfolioWorkerModalContent.propTypes = {
  card: PropTypes.object,
  alt: PropTypes.string,
  dir: PropTypes.string,
};
