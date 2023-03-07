import { StyledImage } from "../PortfolioCard/PortfolioCard.styles.js";
import { ModalContentWrapper } from "./PortfolioWorkerModalContent.styles";
import PropTypes from "prop-types";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const PortfolioWorkerModalContent = ({ card, dir, keyDown, forwardRef }) => {
  const { image, company, product, description, alt } = card.fields;
  const ImageURL = image.fields.file.url;

  return (
    <>
      <div className={montserrat.className}>
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
            <StyledImage
              src={`https:${ImageURL}`}
              sizes="
            (max-width: 1150px) 300px,
            720px
          "
              fill
              alt={alt}
            ></StyledImage>
          </div>
        </ModalContentWrapper>
      </div>
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
