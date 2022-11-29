import { InfoSecCardWrapper } from "./InfoSecCard.styles";

const InfoSecCard = ({ number, text }) => {
  return (
    <InfoSecCardWrapper>
      {number}
      {text}
    </InfoSecCardWrapper>
  );
};

export default InfoSecCard;
