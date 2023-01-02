import {
  InfoSecCardWrapper,
  NumParagraph,
  TextParagraph,
} from "./InfoSecCard.styles";
import PropTypes from "prop-types";

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

InfoSecCard.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  addPlus: PropTypes.bool,
};
