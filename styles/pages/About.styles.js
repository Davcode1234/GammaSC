import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";

export const ContentSec = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;
export const Header = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 15px;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.headingMobileAC};
  }
`;

export const AboutParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.graphite};
  text-align: center;
  max-width: 660px;
  margin-bottom: 100px;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
    max-width: 350px;
    margin: 0 10px 50px 10px;
  }
`;

export const TeamContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  max-width: 90%;
  max-width: 1500px;
  gap: 50px;
  justify-content: center;
  margin-bottom: 90px;
`;

export const HeroImg = styled(Image)``;

export const CompanyImagesSection = styled.section`
  height: 900px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey};
`;

export const CompanySecHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.graphite};
  max-width: 500px;
  margin: 80px auto;
  transform: translateX(-50%);
`;

export const ImagesWrapper = styled(motion.div)`
  width: 100%;
  justify-content: center;
  display: flex;
  gap: 40px;
  overflow-x: hidden;
`;

export const ImagesSecondWrapper = styled(motion.div)``;
