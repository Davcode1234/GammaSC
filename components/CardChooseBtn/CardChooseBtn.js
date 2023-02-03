import { OfferButton } from "./CardChooseBtn.styles";
import PropTypes from "prop-types";

const CardChooseBtn = ({ btnsArr, click, tag }) => {
  return (
    <>
      {btnsArr.map(({ buttonName, id }) => {
        {
          return tag === buttonName ? (
            <OfferButton
              key={id}
              isclicked="true"
              onClick={() => click(buttonName)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonName}
            </OfferButton>
          ) : (
            <OfferButton
              key={id}
              onClick={() => click(buttonName)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {buttonName}
            </OfferButton>
          );
        }
      })}
    </>
  );
};

export default CardChooseBtn;

CardChooseBtn.propTypes = {
  btnsArr: PropTypes.array,
  click: PropTypes.func,
  tag: PropTypes.string,
};
