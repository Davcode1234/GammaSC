import styled, { css, keyframes } from "styled-components";

const swipeLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-105%);
}
`;

const swipeRight = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(105%);
}
`;

export const Wrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 40px;
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

  &:focus-visible {
    outline: 0px solid white;
  }
`;

export const TextContentWrapper = styled.div`
  min-width: 370px;

  h2 {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.gammaOrange};
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.font.size.ContactCardPar};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    margin-bottom: 20px;
  }
`;
