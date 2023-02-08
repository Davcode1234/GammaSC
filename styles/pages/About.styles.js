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

  h2 {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.gammaOrange};
    margin-bottom: 15px;
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.headingMobileAC};
    }
  }

  h3 {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.graphite};
    max-width: 500px;
    margin: 80px 11%;

    ${({ theme }) => theme.mq.tablet} {
      margin: 40px 13%;
    }
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.headingMobileAC};
      margin: 30px 15%;
    }
  }

  p:nth-child(2) {
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
  }
`;

export const TeamContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  max-width: 1500px;
  margin-bottom: 90px;
`;

export const CompanyImagesSection = styled.section`
  height: 900px;
  width: 100%;
  background-color: ${({ theme }) => theme.color.grey};
  ${({ theme }) => theme.mq.tablet} {
    height: 600px;
  }
  ${({ theme }) => theme.mq.phone} {
    height: 500px;
  }
`;

export const CarouselImageWrapper = styled(motion.div)`
  position: relative;
  min-height: 40rem;
  min-width: 465px;
  padding: 40px;
  ${({ theme }) => theme.mq.phone} {
    min-width: 365px;
    min-height: 30rem;
    padding: 10px;
  }
`;

export const CarouselStyledImg = styled(Image)`
  object-fit: contain;
  pointer-events: none;
`;
