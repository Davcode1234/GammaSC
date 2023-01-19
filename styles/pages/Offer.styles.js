import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const clicked = keyframes`
to {
    color: #f68c1e;
    font-weight: 700;
}
`;

const unClicked = keyframes`
to { 
    color: #fff;
    font-weight: 400;
}
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  gap: 5%;
  justify-content: center;
  transform: translateY(60px);

  ${({ theme }) => theme.mq.phone} {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    grid-gap: 30px;
    align-items: start;
    padding-left: 16px;
  }
`;

export const OfferButton = styled(motion.button)`
  font-size: ${({ theme }) => theme.font.size.offerButton};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: #fff;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  transition: scale 0.3s ease;

  ${({ isclicked }) => {
    return isclicked
      ? css`
          animation: ${clicked} 0.3s ease forwards;
        `
      : css`
          animation: ${unClicked} 0.3s ease forwards;
        `;
  }}
  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    text-align: left;
  }
`;
export const AnimationSlider = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 405px;
  background-color: ${({ theme }) => theme.color.graphite};
  z-index: 0;

  ${({ theme }) => theme.mq.phone} {
    min-height: 575px;
  }
`;
