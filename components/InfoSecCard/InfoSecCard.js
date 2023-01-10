import {
  InfoSecCardWrapper,
  NumParagraph,
  TextParagraph,
} from "./InfoSecCard.styles";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

const InfoSecCard = ({ text, addPlus, stopInterval }) => {
  const [numberAnim, setNumberAnim] = useState(0);
  const [ref, inView] = useInView();
  let intervalID;

  const test = () => {
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
          test();
        }
      }, 50);
    }
  }, [inView]);

  return (
    <InfoSecCardWrapper ref={ref} playState={inView}>
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
    </InfoSecCardWrapper>
  );
};

export default InfoSecCard;

InfoSecCard.propTypes = {
  number: PropTypes.number,
  text: PropTypes.string,
  addPlus: PropTypes.bool,
  stopInterval: PropTypes.number,
};
