import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

const swipe = keyframes`
0% {
  transform: translateX(0);
}

100% {
  transform: translateX(-100%);
}

`;

export const ContentWrapper = styled(motion.div)`
  /* width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; */
  animation: ${swipe} 1s 0.2s ease;
`;

export const TitleName = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
`;
export const PositionPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.ContactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 20px;
`;

export const AboutText = styled.p`
  max-width: 350px;
`;
