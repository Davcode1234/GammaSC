import {
  CardOverlay,
  CardWrapper,
  HeroImg,
  HoverLine,
  HoverText,
} from "./AboutWorkerCard.styles";
import PropTypes from "prop-types";

const AboutWorkerCard = ({ img, name, position, click }) => {
  return (
    <CardWrapper onClick={click}>
      <CardOverlay>
        <HoverText>Learn more!</HoverText>
        <HoverLine></HoverLine>
      </CardOverlay>
      <HeroImg
        src={img}
        width={280}
        height={300}
        alt={"hero img"}
        priority
      ></HeroImg>
      <h4>{name}</h4>
      <p>{position}</p>
    </CardWrapper>
  );
};

export default AboutWorkerCard;

AboutWorkerCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  click: PropTypes.func,
};
