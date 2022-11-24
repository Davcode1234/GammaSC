import styled from "styled-components";
import { motion } from "framer-motion";

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100px;
  background-color: lightgrey;
`;

export const MenuBtn = styled(motion.button)`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 5px;
  background-color: lime;
  cursor: pointer;
`;

export const Logo = styled.h1`
  font-size: 30px;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: flex-start;
`;

export const FirstSlider = styled(motion.div)`
  height: 100vh;
  width: 375px;
  background-color: ${({ theme }) => theme.color.darkPurple};
  z-index: 2;
  tranform-origin: left;
`;
