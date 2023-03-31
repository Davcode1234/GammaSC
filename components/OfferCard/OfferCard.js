import {
  CardWrapper,
  StyledImage,
  StyledIcon,
  StyledLink,
} from "./OfferCard.styles";
import PropTypes from "prop-types";

export let offerType = {
  offer: "kreacja",
};

export const updateOfferType = (picked) => {
  offerType = {
    ...offerType,
    offer: picked ? picked : "kreacja",
  };
};
const OfferCard = ({
  header,
  text,
  img,
  alt,
  width,
  height,
  innerRef,
  start,
  delay,
}) => {
  return (
    <CardWrapper ref={innerRef} $start={start} $delay={delay}>
      <div>
        <h3>{header}</h3>
        <StyledLink href="/offer">
          <button
            onClick={() => {
              updateOfferType(header);
            }}
          >
            Dowiedz się więcej
            <StyledIcon
              icon="material-symbols:arrow-back"
              width="24"
              height="24"
            />
          </button>
        </StyledLink>
        <p>{text}</p>
      </div>

      <StyledImage
        src={img}
        width={width}
        height={height}
        alt={alt}
        className={"cameleon"}
      ></StyledImage>
    </CardWrapper>
  );
};

export default OfferCard;

OfferCard.propTypes = {
  header: PropTypes.string,
  text: PropTypes.string,
  img: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  innerRef: PropTypes.func,
  start: PropTypes.bool,
  delay: PropTypes.string,
};
