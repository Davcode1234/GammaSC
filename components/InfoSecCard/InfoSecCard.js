import {
  FirstInfoSecCardWrapper,
  TextParagraph,
  SecInfoSecCardWrapper,
} from "./InfoSecCard.styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useWindowSize from "../../hooks/useWindowSize";
// import { motion } from "framer-motion";

// const boxVariants = {
//   hidden: { pathLength: 0, opacity: 0 },
//   visible: {
//     pathLength: 1,
//     opacity: 1,
//     transition: {
//       pathLength: { type: "ease", duration: 2, delay: 0.5, bounce: 0 },
//       opacity: { duration: 0.1 },
//     },
//   },
//   hover: {
//     scale: 1.02,
//     strokeWidth: 3,
//   },
// };

const InfoSecCard = ({ text, addPlus, stopInterval }) => {
  const [numberAnim, setNumberAnim] = useState(0);
  const [ref, inView] = useInView();
  let intervalID;

  const isMobile = useWindowSize(500);

  const stopCounter = () => {
    setTimeout(() => {
      clearInterval(intervalID);
    }, stopInterval);
  };

  const increaseNumbers = () => {
    intervalID = setInterval(() => {
      setNumberAnim((num) => num + 1);
    }, 50);
  };

  useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (numberAnim === 0) {
          increaseNumbers();
          stopCounter();
        }
      }, 50);
    }
  }, [inView]);

  const ViewComponent = isMobile
    ? SecInfoSecCardWrapper
    : FirstInfoSecCardWrapper;

  return (
    <ViewComponent ref={ref} playState={inView}>
      {addPlus ? <p>+{numberAnim}</p> : <p>{numberAnim}</p>}

      <TextParagraph
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1 }}
        viewport={{ once: true }}
      >
        {text}
      </TextParagraph>
    </ViewComponent>
  );
};

export default InfoSecCard;

InfoSecCard.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  addPlus: PropTypes.bool,
  stopInterval: PropTypes.number,
};
