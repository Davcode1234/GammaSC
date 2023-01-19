import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

export const ContactCardWrapper = styled(motion.div)`
  /* height: 400px; */
  display: flex;
  align-items: center;
  transform: translateY(-15%);
  opacity: 0;

  ${({ theme }) => theme.mq.smallerDesktop} {
    transform: translateY(0) !important;
  }

  ${({ theme }) => theme.mq.phone} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
  }
`;

export const ContentWrapper = styled.div`
  margin-left: 40px;

  ${({ theme }) => theme.mq.smallerPhone} {
    margin-left: 0;
    text-align: center;
  }
`;

export const ContactCardHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.ContactCardHeader};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 10px;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.headingMobileAC};
  }
`;

export const PositionText = styled.p`
  margin-bottom: 20px;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.paragraphMobile};
  }
`;

export const ContactPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.ContactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 10px;

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  }
`;

export const SalesAssImg = styled(Image)`
  object-fit: contain;
`;

export const SalesAssImgWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 400px;

  ${({ theme }) => theme.mq.phone} {
    width: 270px;
    height: 300px;
  }
`;
