import {
  CardWrapper,
  HeroImg,
  NameHeader,
  PositionParagraph,
} from "./AboutWorkerCard.styles";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

//Animation doesn work properly - try move animation code to one file

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

AboutWorkerCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
};
