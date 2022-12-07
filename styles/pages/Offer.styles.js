import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

const test = keyframes`
to {
    color: #f68c1e;
    font-weight: 700;
}
`;

const test2 = keyframes`
to { 
    color: #fff;
    font-weight: 400;
}
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 4.5%;
  justify-content: center;
  transform: translateY(60px);
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
          animation: ${test} 0.3s ease forwards;
        `
      : css`
          animation: ${test2} 0.3s ease forwards;
        `;
  }}
  ${({ theme }) => theme.mq.bigDesktop} {
    font-size: 1.4rem;
  }

  /* &:hover {
    transform: scale(1.05) translateY(60px);
  } */
`;
