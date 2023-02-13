import styled from "styled-components";
import Image from "next/legacy/image";
import { motion } from "framer-motion";

export const CardOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  left: -5%;
  /* top: 2%; */
  z-index: 10;
  background-color: rgba(246, 140, 30, 0.8);
  opacity: 0;
  min-height: 300px;
  min-width: 300px;
  transition: all 0.2s ease;
  border-radius: 5px;
`;

export const HoverLine = styled.div`
  height: 5px;
  width: 50%;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 5px;
  transform: scale(0);
  transition: all 0.4s 0.1s ease;
`;

export const HoverText = styled.p`
  font-size: ${({ theme }) => theme.font.size.ContactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.grey};
  margin-bottom: 10px;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.4s 0.4s ease;
`;

export const HeroImg = styled(Image)`
  transition: all 0.2s ease;
  z-index: -10;
`;
export const CardWrapper = styled.div`
  cursor: pointer;
  position: relative;

  h4 {
    font-size: ${({ theme }) => theme.font.size.headingAboutCard};
    color: ${({ theme }) => theme.color.graphite};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    margin-bottom: 10px;

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.paragraph};
      text-align: center;
    }
  }

  p:not(:first-child) {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    color: ${({ theme }) => theme.color.graphite};

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.paragraphMobile};
      text-align: center;
    }
  }

  &:hover {
    ${HeroImg} {
      transform: scale(1.05);
    }
    ${CardOverlay} {
      opacity: 1;
    }

    ${HoverLine} {
      transform: scale(1);
    }

    ${HoverText} {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
