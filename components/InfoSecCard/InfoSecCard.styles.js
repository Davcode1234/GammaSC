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

// const roundCorners = keyframes`
// from {
//   border-radius: 0;
// }
// to {
//   border-radius: 7px;
// }
// `;

export const SecInfoSecCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;
  width: 230px;
  height: 165px;
  background-color: transparent;
  border: 1px solid #f68c1e;
  border-radius: 5px;
  padding-top: 16px;

  ${({ theme }) => theme.mq.tablet} {
    width: 200px;
    height: 124px;
  }

  ${({ theme }) => theme.mq.smallerPhone} {
    flex-direction: row;
    justify-content: center;
    width: 90%;
    height: 85px;
    gap: 20px;
    padding-top: 0;
  }
`;

export const FirstInfoSecCardWrapper = styled(SecInfoSecCardWrapper)`
  border: none;
  border-radius: none;

  &::after,
  &::before {
    animation-play-state: ${({ playState }) =>
      playState ? "running !important" : "paused !important"};
  }

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
    bottom: 0;
    right: 0;
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

  ${({ theme }) => theme.mq.tablet} {
    font-size: 60px;
  }

  ${({ theme }) => theme.mq.tinyPhone} {
    font-weight: 600;
  }
`;

export const TextParagraph = styled(motion.p)`
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  text-align: center;
  max-width: 170px;
  opacity: 0;

  ${({ theme }) => theme.mq.tablet} {
    font-size: 14px;
  }

  ${({ theme }) => theme.mq.tinyPhone} {
    max-width: 140px;
    text-align: start;
  }
`;
