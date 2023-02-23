import styled, { css, keyframes } from "styled-components";

const swipeLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-103.5%);
}
`;

const swipeRight = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(103.5%);
}
`;

const swipeLeftMobile = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-113.5%);
}
`;

const swipeRightMobile = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(113.5%);
}
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 1450px) {
    gap: 0px;
  }

  ${({ theme }) => theme.mq.tablet} {
    flex-wrap: wrap-reverse;
    gap: 30px;
  }

  &:focus-visible {
    outline: 0px solid white;
  }

  div:first-child {
    z-index: 9;
    margin-left: 60px;
    ${({ theme }) => theme.mq.tablet} {
      margin-left: 16px;
    }
    p {
      max-width: 600px;

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.font.size.thumbnailSmall};
      }
    }
    p:first-child {
      font-size: ${({ theme }) => theme.font.size.offerButton};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      color: ${({ theme }) => theme.color.gammaOrange};
      margin-bottom: 20px;

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.font.size.paragraphSmall};
        margin-bottom: 10px;
      }
    }

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingPortfolioModal};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      color: ${({ theme }) => theme.color.graphite};
      margin-bottom: 20px;
      max-width: 600px;

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.font.size.ContactCardPar};
        margin-bottom: 10px;
      }
    }
  }

  div:nth-child(2) {
    position: relative;
    width: 720px;
    height: 650px;

    ${({ theme }) => theme.mq.tablet} {
      width: 300px;
      height: 256px;
    }
  }

  ${({ dir }) => {
    switch (dir) {
      case "right":
        return css`
          animation: ${swipeRight} 0.5s ease forwards;
          ${({ theme }) => theme.mq.tablet} {
            animation: ${swipeRightMobile} 0.5s ease forwards;
          }
        `;
      case "left":
        return css`
          animation: ${swipeLeft} 0.5s ease forwards;
          ${({ theme }) => theme.mq.tablet} {
            animation: ${swipeLeftMobile} 0.5s ease forwards;
          }
        `;
      default:
        return "";
    }
  }}
`;
