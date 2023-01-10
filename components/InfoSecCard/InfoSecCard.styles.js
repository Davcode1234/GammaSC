import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const showFromLeftCorner = keyframes`
  0% {
    clip-path: polygon(1% 100%, 1% 100%, 1% 100%, 0 100%, 0 100%, 1% 100%);
  }
  
  50% {
    clip-path: polygon(1% 1%, 1% 1%, 1% 100%, 0 100%, 0 0, 1% 0);
  }
  100% {
    clip-path: polygon(100% 1%, 1% 1%, 1% 100%, 0 100%, 0 0, 100% 0);
  }
`;

const showFromRightCorner = keyframes`
    0% {
    clip-path: polygon(99% 0, 99% 0, 99% 0, 99% 0, 100% 0, 100% 0);
  }
  50% {
    clip-path: polygon(99% 0, 99% 99%, 99% 99%, 99% 100%, 100% 100%, 100% 0);
  }
  100% {
    clip-path: polygon(99% 0, 99% 99%, 0 99%, 0 100%, 100% 100%, 100% 0%);
  }
`;

export const InfoSecCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  position: relative;
  align-items: center;
  width: 230px;
  height: 165px;
  background-color: transparent;
  /* border: 2px solid orange; */
  /* border-radius: 5px; */
  padding-top: 16px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${({ theme }) => theme.color.gammaOrange};
    width: 100%;
    height: 100%;
    clip-path: polygon(1% 100%, 1% 100%, 1% 100%, 0 100%, 0 100%, 1% 100%);
    animation: ${showFromLeftCorner} 2s 1s ease forwards;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: right;
    background-color: ${({ theme }) => theme.color.gammaOrange};
    width: 100%;
    height: 100%;
    clip-path: polygon(99% 0, 99% 0, 99% 0, 99% 0, 100% 0, 100% 0);
    animation: ${showFromRightCorner} 2s 1s ease forwards;
  }
`;

export const NumParagraph = styled.p`
  font-size: 76px;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const TextParagraph = styled(motion.p)`
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  text-align: center;
  max-width: 170px;
  opacity: 0;
`;
