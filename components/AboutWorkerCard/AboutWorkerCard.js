import {
  CardWrapper,
  HeroImg,
  NameHeader,
  PositionParagraph,
} from "./AboutWorkerCard.styles";

const AboutWorkerCard = ({ img, name, position }) => {
  return (
    <CardWrapper>
      <HeroImg
        src={img}
        width={305}
        height={350}
        alt={"hero img"}
        priority
      ></HeroImg>
      <NameHeader>{name}</NameHeader>
      <PositionParagraph>{position}</PositionParagraph>
    </CardWrapper>
  );
};

export default AboutWorkerCard;
