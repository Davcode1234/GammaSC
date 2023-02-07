import Image from "next/image";
import styled, { css, keyframes } from "styled-components";
import { Icon } from "@iconify/react";

const dissolve = keyframes`
from {
  opacity: 1;
  transform: scale(1);
}

to {
  opacity: 0;
  transform: scale(0.7);

}
`;

const appear = keyframes`
from {
  opacity: 0;
  transform: scale(0.7);

}

to {
  opacity: 1;
  transform: scale(1);

}
`;
export const StyledImage = styled(Image)`
  object-fit: contain;
  transition: all 0.4s ease;
`;
export const StyledIcon = styled(Icon)`
  transform: rotate(180deg);
  position: absolute;
  top: -15%;
  right: -25%;
  transition: all 0.3s 0.45s ease;
`;
export const PortfolioCardContainer = styled.div`
  max-width: 660px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  opacity: 0;

  div:first-child {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    top: -8%;
    z-index: 10;
    background-color: rgba(53, 53, 53, 0.8);
    opacity: 0;
    min-height: 430px;
    min-width: 600px;
    transition: all 0.2s ease;
    border-radius: 5px;

    div {
      height: 5px;
      width: 38%;
      background-color: ${({ theme }) => theme.color.gammaOrange};
      border-radius: 5px;
      transform: scale(0);
      transition: all 0.4s 0.1s ease;
    }

    p {
      font-size: ${({ theme }) => theme.font.size.ContactCardPar};
      font-weight: ${({ theme }) => theme.font.weight.semiBold};
      color: ${({ theme }) => theme.color.gammaOrange};
      margin-bottom: 10px;
      transform: translateY(100%);
      opacity: 0;
      transition: all 0.4s 0.4s ease;
    }
  }

  div:nth-child(2) {
    position: relative;
    width: 600px;
    height: 391px;
  }

  p {
    font-size: ${({ theme }) => theme.font.size.contactCardPar};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.gammaOrange};
    margin: 10px 0;
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.contactCardHeader};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.graphite};
    margin-bottom: 20px;
  }
  &:hover div:first-child {
    opacity: 1;
  }

  &:hover div:first-child div {
    transform: scale(1);
  }

  &:hover div:first-child p {
    opacity: 1;
    transform: translateY(0);
  }

  &:hover {
    ${StyledImage} {
      transform: scale(1.1) translateY(-10px);
    }
    ${StyledIcon} {
      transform: rotate(135deg);
    }
  }
  ${({ exit }) => {
    if (exit) {
      return css`
        animation: ${dissolve} 0.4s ease forwards;
      `;
    } else if (!exit) {
      return css`
        animation: ${appear} 0.4s ease forwards;
      `;
    }
  }}
`;
