import {
  CardWrapper,
  HeroImg,
  NameHeader,
  PositionParagraph,
} from "./AboutWorkerCard.styles";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const AboutWorkerCard = ({ img, name, position }) => {
  return (
    <AnimatePresence>
      <CardWrapper variants={itemVariants} initial="closed" animate="open">
        <HeroImg
          src={img}
          width={280}
          height={300}
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
