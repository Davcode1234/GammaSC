import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";

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
