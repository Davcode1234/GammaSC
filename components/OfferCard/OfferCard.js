import { CardWrapper, CardHeader } from "./OfferCard.styles";

const OfferCard = ({ header, text, img, alt, width, height }) => {
  return (
    <CardWrapper>
      <CardHeader>{header}</CardHeader>
    </CardWrapper>
  );
};

export default OfferCard;
