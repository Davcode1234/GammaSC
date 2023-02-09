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

export const ScrollBardContainer = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  padding: 0 2% 0 11%;
  transform: translateY(300%);
`;
export const ScrollBar = styled(motion.div)`
  position: absolute;
  width: 100px;
  height: 7px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.color.graphite};

  ${({ theme }) => theme.mq.phone} {
    width: 50px;
  }
`;
