import styled, { css, keyframes } from "styled-components";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";

const revealCard = keyframes`
0% {
  transform: scale(0);
  opacity: 0;
}

80% {
  transform: scale(1.05);
  opacity: 1;
}

100% {
  transform: scale(1);
  opacity: 1;
}
`;

export const StyledImage = styled(Image)`
  position: absolute;
  top: 20px;
  right: 15px;
  margin: 0 auto;

  ${({ theme }) => theme.mq.phone} {
    position: static;
    margin-bottom: 10px;
    pointer-events: none;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.graphite};
  height: 100%;
  width: 100%;

  /* ${({ theme }) => theme.mq.phone} {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  } */
`;

export const StyledIcon = styled(Icon)`
  transform: rotate(180deg);
  position: absolute;
  top: -10%;
  right: -20%;
  transition: all 0.3s ease;
`;

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  padding: 76px 30px 30px 30px;
  background: linear-gradient(to bottom, white, transparent);
  width: 420px;
  max-height: 200px;
  margin-bottom: 35px;
  border-radius: 5px;
  transform: scale(0);
  opacity: 0;

  ${({ theme }) => theme.mq.phone} {
    min-width: 220px;
    max-height: none;
    padding: 18px;
    opacity: 1;
    transform: scale(1);
    animation: none;
    margin-right: 20px;
  }

  ${({ $start, $delay }) => {
    if ($start) {
      return css`
        animation: ${revealCard} 0.5s ${$delay} ease forwards;
      `;
    }
  }}

  h3 {
    font-size: ${({ theme }) => theme.font.size.headingOffer};
    font-weight: ${({ theme }) => theme.font.weight.thin};
    margin-bottom: 10px;
    transform: translateY(100%);
    transition: all 0.3s ease-out;

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.headingMobileAC};
      transform: translateY(0%);
    }
  }

  p {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    color: ${({ theme }) => theme.color.graphite};
    max-width: 220px;

    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.paragraphMobile};
    }
  }

  button {
    position: relative;
    font-size: ${({ theme }) => theme.font.size.paragraph};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.gammaOrange};
    border: none;
    background-color: transparent;
    padding: 0;
    line-height: 120%;
    margin-bottom: 10px;
    opacity: 0;
    transition: all 0.3s ease;
    cursor: pointer;

    ${({ theme }) => theme.mq.phone} {
      opacity: 1;
      font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    }
  }

  &:hover h3 {
    transform: translateY(-10%);
  }

  &:hover button {
    opacity: 1;
  }

  &:hover {
    ${StyledIcon} {
      transform: rotate(135deg);
    }
  }
`;
