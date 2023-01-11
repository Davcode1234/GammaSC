import styled from "styled-components";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

export const CardWrapper = styled(motion.div)``;

export const HeroImg = styled(Image)``;

export const NameHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.headingAboutCard};
  color: ${({ theme }) => theme.color.graphite};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 10px;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    text-align: center;
  }
`;

export const PositionParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.graphite};

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
    text-align: center;
  }
`;
