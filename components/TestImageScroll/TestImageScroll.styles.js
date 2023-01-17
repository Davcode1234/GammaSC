import styled from "styled-components";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  margin: 0 2% 0 10%;
`;

export const Carousel = styled(motion.div)`
  cursor: grab;
  overflow: hidden;
`;

export const InnerCarousel = styled(motion.div)`
  display: flex;
`;
