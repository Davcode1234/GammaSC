import styled, { keyframes, css } from "styled-components";

const slideToLeft = keyframes`
  0% {
    left: 0;
  }
  100% {
    left: -100%;
  }
`;

const slideToRight = keyframes`
  0% {
    right: 0;
  }
  100% {
    right: -100%;
  }
`;
export const OuterContainer = styled.div`
  overflow: hidden;
  position: relative;
  height: 150px;
  width: 200%;
  margin-bottom: 20px;
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const SliderContainer = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  height: 150px;
  width: 200%;

  ${({ position }) => {
    return position === "left"
      ? css`
          left: 0;
          animation: ${slideToLeft} 35s linear infinite;
        `
      : css`
          right: 0;
          animation: ${slideToRight} 35s linear infinite;
        `;
  }}
`;
