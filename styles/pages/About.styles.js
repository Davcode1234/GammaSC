import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentSec = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 90px 0;
`;
export const Header = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 15px;
`;

export const AboutParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.graphite};
  text-align: center;
  max-width: 660px;
  margin-bottom: 100px;
`;

export const TeamContainer = styled(motion.div)`
  /* display: grid;
  grid-template: repeat(4, 1fr) / repeat(4, 1fr);
  grid-gap: 20px;
  max-width: 60%; */
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  max-width: 1500px;
  gap: 50px;
  justify-content: center;
`;

export const HeroImg = styled(Image)``;
