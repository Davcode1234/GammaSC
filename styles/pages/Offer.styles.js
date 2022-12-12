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
  display: flex;
  gap: 6%;
  justify-content: center;
  transform: translateY(60px);
  z-index: 232342;
`;

export const OfferButton = styled(motion.button)`
  font-size: ${({ theme }) => theme.font.size.offerButton};
  font-weight: 400;
  color: #fff;
  border: none;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  transition: scale 0.3s ease;

  ${({ isClicked }) => {
    return isClicked
      ? css`
          animation: ${clicked} 0.3s ease forwards;
        `
      : css`
          animation: ${unClicked} 0.3s ease forwards;
        `;
  }}
  ${({ theme }) => theme.mq.bigDesktop} {
    font-size: 1.4rem;
  }

  /* &:hover {
    transform: scale(1.05) translateY(60px);
  } */
`;
export const AnimationSlider = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 505px;
  background-color: ${({ theme }) => theme.color.graphite};
  z-index: 0;
`;
