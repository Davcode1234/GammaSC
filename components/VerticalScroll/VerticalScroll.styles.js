import styled from "styled-components";
import { motion } from "framer-motion";

export const Carousel = styled(motion.div)`
  width: 90vw;
  margin-left: auto;
  overflow: hidden;
  position: relative;
  cursor: grab;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
  align-items: center;
  margin-bottom: ${({ isOffer }) => (isOffer ? "-20px" : "40px")};
`;

export const ScrollBar = styled(motion.div)`
  width: 80px;
  height: 6px;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.color.graphite};
  position: relative;

  ${({ theme }) => theme.mq.phone} {
    width: 50px;
  }
`;
