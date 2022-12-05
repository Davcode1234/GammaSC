import { CardWrapper, CardHeader, CardText, CardBtn } from "./OfferCard.styles";
import Image from "next/image";

export const cardsContent = [
  {
    header: "Kreacja",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-2.png",
    alt: "Gamma cameleon with can of farb",
    width: "112",
    height: "182",
  },
  {
    header: "Drukarnia",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-1.png",
    alt: "Gamma cameleon with can of farb",
    width: "129",
    height: "172",
  },
  {
    header: "Fotografia",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-6.png",
    alt: "Gamma cameleon with can of farb",
    width: "166",
    height: "172",
  },
  {
    header: "Sublimacja",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-3.png",
    alt: "Gamma cameleon with can of farb",
    width: "158",
    height: "172",
  },
  {
    header: "Gadżety",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-4.png",
    alt: "Gamma cameleon with can of farb",
    width: "144",
    height: "172",
  },
  {
    header: "Szwalnia",
    text: "Tworzymy niezwykłe kreacje, które zapadają w pamieci",
    img: "/HomePage/cameleons/KameleonObszar-kompozycji-5.png",
    alt: "Gamma cameleon with can of farb",
    width: "173",
    height: "172",
  },
];

const OfferCard = ({ header, text, img, alt, width, height }) => {
  return (
    <CardWrapper>
      <CardHeader>{header}</CardHeader>
      {/* <CardBtn></CardBtn> */}
      <CardText>{text}</CardText>
      <Image
        src={img}
        width={width}
        height={height}
        alt={alt}
        className={"cameleon"}
      ></Image>
    </CardWrapper>
  );
};

export default OfferCard;
