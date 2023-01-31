import styled, { css, keyframes } from "styled-components";

const swipeLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-105.25%);
}
`;

const swipeRight = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(105.25%);
}
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

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

export const TextWrapper = styled.div``;
