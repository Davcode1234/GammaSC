import {
  CardWrapper,
  HeroImg,
  NameHeader,
  PositionParagraph,
} from "./AboutWorkerCard.styles";
import { AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
// import useWindowSize from "../../hooks/useWindowSize";
import { useState, useEffect } from "react";

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
  const [imgSize, setImgSize] = useState({
    width: 280,
    height: 300,
  });

  // const isMobile = useWindowSize(750);

  // useEffect(() => {
  //   if (isMobile) {
  //     setImgSize({
  //       width: 230,
  //       height: 246.42,
  //     });
  //   } else if (!isMobile) {
  //     setImgSize({
  //       width: 280,
  //       height: 300,
  //     });
  //   }
  // }, [isMobile]);

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
          width={imgSize.width}
          height={imgSize.height}
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
