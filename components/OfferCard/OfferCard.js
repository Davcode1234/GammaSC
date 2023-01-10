import {
  CardWrapper,
  CardHeader,
  CardText,
  CardBtn,
  StyledImage,
  StyledIcon,
} from "./OfferCard.styles";
import PropTypes from "prop-types";

export const cardsContent = [
  {
    header: "Kreacja",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-2.png",
    alt: "Gamma cameleon with can of farb",
    width: "92",
    height: "162",
  },
  {
    header: "Drukarnia",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-1.png",
    alt: "Gamma cameleon in carpet",
    width: "119",
    height: "162",
  },
  {
    header: "Fotografia",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-6.png",
    alt: "Gamma cameleon standing on his head taking photos",
    width: "156",
    height: "162",
  },
  {
    header: "Sublimacja",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-3.png",
    alt: "Gamma cameleon in Gamma t-shirt with glasses on",
    width: "148",
    height: "162",
  },
  {
    header: "Gadżety",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-4.png",
    alt: "Gamma cameleon showing his gadgets under coat",
    width: "134",
    height: "162",
  },
  {
    header: "Szwalnia",
    text: "Projektujemy i szyjemy odzież, którą przyjemnie jest nosić.",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-5.png",
    alt: "Gamma cameleon with a needle looking for something",
    width: "163",
    height: "162",
  },
];

const OfferCard = ({ header, text, img, alt, width, height, innerRef }) => {
  return (
    <CardWrapper ref={innerRef}>
      <CardHeader>{header}</CardHeader>
      <CardBtn>
        Dowiedz się więcej
        <StyledIcon icon="material-symbols:arrow-back" width="24" height="24" />
      </CardBtn>
      <CardText>{text}</CardText>
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
};
