import {
  ClientName,
  ImgWrapper,
  ProductName,
  StyledImage,
} from "../PortfolioCard/PortfolioCard.styles.js";
import {
  ModalContentWrapper,
  TextWrapper,
} from "./PortfolioWorkerModalContent.styles";
import PropTypes from "prop-types";

const PortfolioWorkerModalContent = ({ img, client, product, alt, dir }) => {
  return (
    <>
      <ModalContentWrapper dir={dir}>
        <TextWrapper>
          <ClientName>{client}</ClientName>
          <ProductName>{product}</ProductName>
        </TextWrapper>

        <ImgWrapper>
          <StyledImage src={img} fill alt={alt}></StyledImage>
        </ImgWrapper>
      </ModalContentWrapper>
    </>
  );
};

export default PortfolioWorkerModalContent;

PortfolioWorkerModalContent.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  client: PropTypes.string,
  product: PropTypes.string,
  dir: PropTypes.string,
};
