import { motion } from "framer-motion";
import styled, { css, keyframes } from "styled-components";

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
    max-width: 150px;
  }
`;
