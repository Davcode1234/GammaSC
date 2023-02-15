import { StyledImage } from "../PortfolioCard/PortfolioCard.styles.js";
import { ModalContentWrapper } from "./PortfolioWorkerModalContent.styles";
import PropTypes from "prop-types";

const PortfolioWorkerModalContent = ({ card, dir, keyDown, forwardRef }) => {
  const { image, company, product, description, alt } = card.fields;
  const ImageURL = image.fields.file.url;

  return (
    <>
      <ModalContentWrapper
        dir={dir}
        ref={forwardRef}
        onKeyDown={keyDown}
        tabIndex="-1"
      >
        <div>
          <p>{company}</p>
          <h2>{product}</h2>
          <p>{description}</p>
        </div>
        <div>
          <StyledImage src={`https:${ImageURL}`} fill alt={alt}></StyledImage>
        </div>
      </ModalContentWrapper>
    </>
  );
};

export default PortfolioWorkerModalContent;

PortfolioWorkerModalContent.propTypes = {
  card: PropTypes.object,
  dir: PropTypes.string,
  keyDown: PropTypes.func,
  forwardRef: PropTypes.object,
};
