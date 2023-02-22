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

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

  @media (max-width: 1550px) {
    gap: 50px;
  }

  &:focus-visible {
    outline: 0px solid white;
  }

  div:first-child {
    z-index: 9;
    margin-left: 60px;
    p {
      max-width: 600px;
    }
    p:first-child {
      font-size: ${({ theme }) => theme.font.size.offerButton};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      color: ${({ theme }) => theme.color.gammaOrange};
      margin-bottom: 20px;
    }

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingPortfolioModal};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      color: ${({ theme }) => theme.color.graphite};
      margin-bottom: 20px;
      max-width: 300px;
    }
  }

  div:nth-child(2) {
    position: relative;
    width: 720px;
    height: 650px;

    ${({ theme }) => theme.mq.desktop} {
      width: 550px;
      height: 497px;
    }
  }

  ${({ dir }) => {
    switch (dir) {
      case "right":
        return css`
          animation: ${swipeRight} 0.5s ease forwards;
        `;
      case "left":
        return css`
          animation: ${swipeLeft} 0.5s ease forwards;
        `;
      default:
        return "";
    }
  }}
`;
