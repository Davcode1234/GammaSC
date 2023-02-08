import styled, { css, keyframes } from "styled-components";
import { Icon } from "@iconify/react";

const openModal = keyframes`
0%{
  transform: scale(0);
  opacity: 0;
}
80% {
  transform: scale(1.1);
  opacity: 1;
}
100% {
  transform: scale(1);
  opacity: 1;
}
`;

const closeModal = keyframes`
0%{
  transform: scale(1);
  opacity: 1;
}
100% {
  transform: scale(0);
  opacity: 0;
}
`;

export const StyledModal = styled.div`
  position: relative;
  min-height: ${({ portfolio }) => (portfolio ? "600px" : "500px")};
  width: 70%;
  max-width: ${({ portfolio }) => (portfolio ? "1200px" : "860px")};
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  transform: scale(0) translateX(0);
  transition: all 0.3s ease;
  animation: ${openModal} 0.5s ease-in-out forwards;
  overflow: hidden;
  ${({ exitAnim }) => {
    if (exitAnim) {
      return css`
        animation: ${closeModal} 0.5s ease-in-out forwards;
      `;
    }
  }}

  ${({ theme }) => theme.mq.tablet} {
    width: 90%;
    max-width: 350px;
    height: 550px;
    padding: 16px 16px 60px 26px;
  }
`;

export const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: #212b3277;
  transition: all 0.3s ease;
  ${({ exitAnim }) => {
    if (exitAnim) {
      return css`
        opacity: 0;
      `;
    }
  }}
`;

export const CloseBtnWrapper = styled.button`
  position: absolute;
  height: 40px;
  top: 35px;
  right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  z-index: 10;

  ${({ theme }) => theme.mq.tablet} {
    top: 20px;
    right: 15px;
  }

  &:hover div {
    transform: scale(1.1) rotate(45deg);
  }

  div {
    position: relative;
    width: 40px;
    height: 4px;
    border-radius: 5px;
    background-color: black;
    transform: rotate(45deg);
    z-index: 10;
    ${({ theme }) => theme.mq.tablet} {
      width: 30px;
    }

    &::after {
      content: "";
      position: absolute;
      width: 40px;
      height: 4px;
      left: 0;
      border-radius: 5px;
      background-color: black;
      transform: rotate(90deg);
      ${({ theme }) => theme.mq.tablet} {
        width: 30px;
      }
    }
    transition: all 0.3s ease;
  }
`;

export const ArrowBtnWrapper = styled.button`
  position: absolute;
  cursor: pointer;
  bottom: 5%;
  left: 45%;
  background-color: transparent;
  border: none;
  cursor: pointer;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "null")};

  ${({ theme }) => theme.mq.tablet} {
    bottom: 0;
    left: 37%;
  }
`;

export const LeftArrowBtnWrapper = styled(ArrowBtnWrapper)`
  left: 50%;
  pointer-events: ${({ disabled }) => (disabled ? "none" : "null")};

  ${({ theme }) => theme.mq.tablet} {
    left: 48%;
  }
`;

export const StyledIcon = styled(Icon)`
  color: ${({ theme }) => theme.color.graphite};
  transition: all 0.3s ease;
  &:hover {
    transform: translateX(-5px);
  }

  ${({ theme }) => theme.mq.tablet} {
    transform: scale(0.8);
  }
`;

export const SecondStyledIcon = styled(StyledIcon)`
  left: 50%;
  color: ${({ theme }) => theme.color.gammaOrange};
  transform: rotate(180deg);
  &:hover {
    transform: translateX(5px) rotate(180deg);
  }

  ${({ theme }) => theme.mq.tablet} {
    transform: translateX(5px) rotate(180deg) scale(0.8);
  }
`;
