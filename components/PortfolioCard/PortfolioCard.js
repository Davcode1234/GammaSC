import {
  PortfolioCardContainer,
  StyledImage,
  StyledIcon,
} from "./PortfolioCard.styles";
import PropTypes from "prop-types";

const PortfolioCard = ({ card, click, exit }) => {
  const { image, company, product, alt } = card.fields;
  const ImageURL = image.fields.file.url;

  return (
    <PortfolioCardContainer onClick={click} exit={exit}>
      <div>
        <p>
          Zobacz projekt
          <StyledIcon
            icon="material-symbols:arrow-back"
            width="30"
            height="30"
          />
        </p>
        <div></div>
      </div>
      <div>
        <StyledImage
          src={`https:${ImageURL}`}
          fill
          sizes="
        (max-width: 750px) 450px,
        (max-width: 500px) 350px,
        600px
        "
          alt={alt}
          priority
        ></StyledImage>
      </div>
      <p>{company}</p>
      <h2>{product}</h2>
    </PortfolioCardContainer>
  );
};

export default PortfolioCard;

PortfolioCard.propTypes = {
  card: PropTypes.object,
  click: PropTypes.func,
  exit: PropTypes.bool,
};
