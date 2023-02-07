import Image from "next/image";
import styled, { keyframes, css } from "styled-components";

const slideToRight = keyframes`
  0% {
    transform: translateX(-50%);
  }
  100% {
    transform: translateX(0%);
  }
`;

const slideToLeft = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

export const SliderContainer = styled.div`
  background: white;
  height: 200px;
  overflow: hidden;
  position: relative;
  width: 95%;

  ${({ theme }) => theme.mq.tablet} {
    height: 110px;
  }
`;

export const SlideTrack = styled.div`
  display: inline-block;
  white-space: nowrap;

  ${({ position }) => {
    return position === "left"
      ? css`
          animation: ${slideToLeft} 35s linear infinite;
        `
      : css`
          animation: ${slideToRight} 35s linear infinite;
        `;
  }}

  & > * {
    padding: 2vw;
    display: inline-block;
  }
`;

export const SliderItemWrapper = styled.div`
  position: relative;
  width: 350px;
  height: 175px;

  ${({ theme }) => theme.mq.tablet} {
    width: 200px;
    height: 100px;
  }
`;
export const SliderItem = styled(Image)`
  object-fit: contain;
`;
