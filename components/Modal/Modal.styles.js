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
  min-height: 500px;
  width: 70%;
  max-width: 900px;
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
  transform: scale(0);

  transition: all 0.3s ease;
  animation: ${openModal} 0.5s ease-in-out forwards;
  overflow: hidden;
  ${({ exitAnim }) => {
    if (exitAnim) {
      return css`
        /* opacity: 0;
        transform: scale(0); */
        animation: ${closeModal} 0.5s ease-in-out forwards;
      `;
    }
  }}
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
`;

export const CloseBtn = styled.div`
  position: relative;
  width: 40px;
  height: 4px;
  border-radius: 5px;
  background-color: black;
  transform: rotate(45deg);

  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    left: 0;
    border-radius: 5px;
    background-color: black;
    transform: rotate(90deg);
  }
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  cursor: pointer;
  bottom: 5%;
  left: 45%;
  color: ${({ theme }) => theme.color.graphite};
  transition: all 0.3s ease;

  &:hover {
    transform: translateX(-5px);
  }
`;

export const SecondStyledIcon = styled(StyledIcon)`
  left: 50%;
  color: ${({ theme }) => theme.color.gammaOrange};
  transform: rotate(180deg);

  &:hover {
    transform: translateX(5px) rotate(180deg);
  }
`;
