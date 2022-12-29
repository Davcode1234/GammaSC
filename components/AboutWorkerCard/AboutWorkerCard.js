import {
  CardWrapper,
  HeroImg,
  NameHeader,
  PositionParagraph,
} from "./AboutWorkerCard.styles";
import { AnimatePresence } from "framer-motion";

//Animation doesn work - try move animation code to one file

const itemVariants = {
  closed: {
    opacity: 0,
    duration: 10,
    delay: 10,
  },
  open: {
    opacity: 1,
    duration: 10,
    delay: 10,
  },
};

const AboutWorkerCard = ({ img, name, position }) => {
  return (
    <AnimatePresence>
      <CardWrapper
        variants={itemVariants}
        initial="closed"
        animate="open"
        exit="closed"
      >
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
    </AnimatePresence>
  );
};

export default AboutWorkerCard;
