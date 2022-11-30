import {
  InfoSecCardWrapper,
  NumParagraph,
  TextParagraph,
} from "./InfoSecCard.styles";

const InfoSecCard = ({ number, text, addPlus }) => {
  return (
    <InfoSecCardWrapper>
      {addPlus ? (
        <NumParagraph>+{number}</NumParagraph>
      ) : (
        <NumParagraph>{number}</NumParagraph>
      )}

      <TextParagraph>{text}</TextParagraph>
    </InfoSecCardWrapper>
  );
};

export default InfoSecCard;
