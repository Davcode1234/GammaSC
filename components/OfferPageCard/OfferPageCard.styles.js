import styled from "styled-components";
import { InfoSmallPar } from "../../styles/pages/Home.styles";
import { motion } from "framer-motion";
import Image from "next/image";

export const StyledImgBackground = styled.div`
  background-image: linear-gradient(
      rgba(53, 53, 53, 0.75),
      rgba(53, 53, 53, 0.75)
    ),
    url("${({ imageSource }) => imageSource}");
  background-position: 50% 35%;
  background-size: cover;
  position: relative;
  width: 100%;
  min-height: 405px;
  z-index: -1;
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.phone} {
    align-items: flex-end;
    padding: 0 16px 130px 16px;
    min-height: 575px;
  }
`;

export const ContentTextWrapper = styled.div`
  max-width: 700px;
  transform: ${({ xDim }) => `translate(${xDim}, 50px)`};

  ${({ theme }) => theme.mq.phone} {
    transform: translate(0, 0);
    max-width: 330px;
  }

  div > p:not(:first-child) {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.white};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.font.size.headingMobileDP};
    }
  }
`;

export const Header = styled(InfoSmallPar)``;

export const ContentContainer = styled.div`
  position: relative;
  /* height: 675px; */
  display: flex;
  justify-content: center;
  gap: 150px;
  ${({ theme }) => theme.mq.tablet} {
    flex-wrap: wrap;
    gap: 10px;
    transform: translateY(-10%);
    /* height: none; */
  }
`;

export const CamImgWrapper = styled(motion.div)``;

export const StyledCamImg = styled(Image)`
  transform: translateY(-30%);

  ${({ theme }) => theme.mq.tablet} {
    transform: translateY(0);
  }
`;

export const TextWrapper = styled(motion.div)`
  display: flex;
  max-width: 650px;
  line-height: 140%;
  margin-top: 60px;

  ${({ theme }) => theme.mq.phone} {
    margin-top: 15px;
  }

  div:first-child {
    width: 300px;
    height: 3px;
    background-color: ${({ theme }) => theme.color.gammaOrange};
    margin-right: 20px;
    transform: translateY(10px);

    ${({ theme }) => theme.mq.phone} {
      display: none;
    }
  }

  div:nth-child(2) {
    p {
      & > div {
        margin-top: 10px;
      }

      ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.paragraphMobile};
        padding: 0 16px;
      }
    }

    ul {
      ${({ theme }) => theme.mq.phone} {
        font-size: ${({ theme }) => theme.font.size.paragraphMobile};
        padding: 0 16px;
      }

      li {
        ${({ theme }) => theme.mq.phone} {
          transform: translateX(16px);
        }
      }
    }
  }
`;
