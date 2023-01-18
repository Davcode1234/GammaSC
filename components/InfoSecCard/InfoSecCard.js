import {
  FirstInfoSecCardWrapper,
  NumParagraph,
  TextParagraph,
  SecInfoSecCardWrapper,
} from "./InfoSecCard.styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import useWindowSize from "../../hooks/useWindowSize";

const InfoSecCard = ({ text, addPlus, stopInterval }) => {
  const [numberAnim, setNumberAnim] = useState(0);
  const [ref, inView] = useInView();
  // const [border, setBorder] = useState(false);
  let intervalID;

  const isMobile = useWindowSize(500);

  const stopCounter = () => {
    setTimeout(() => {
      clearInterval(intervalID);
    }, stopInterval);
  };

  // const swapBorders = () => {
  //   setTimeout(() => {
  //     setBorder(true);
  //   }, 3300);
  // };

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
          // swapBorders();
        }
      }, 50);
    }
  }, [inView]);

  const ViewComponent = isMobile
    ? SecInfoSecCardWrapper
    : FirstInfoSecCardWrapper;

  return (
    <ViewComponent ref={ref} playState={inView}>
      {addPlus ? (
        <NumParagraph>+{numberAnim}</NumParagraph>
      ) : (
        <NumParagraph>{numberAnim}</NumParagraph>
      )}

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
