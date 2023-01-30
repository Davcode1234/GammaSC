import styled, { css, keyframes } from "styled-components";
import Image from "next/image";

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

export const StyledImage = styled(Image)``;

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
`;

export const TitleName = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 10px;
`;
export const PositionPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.ContactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 20px;
`;

export const TextWrapper = styled.div`
  min-width: 350px;
`;

export const AboutText = styled.p``;
