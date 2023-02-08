import Image from "next/image";
import styled, { css, keyframes } from "styled-components";

const swipeLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-113.5%);
}
`;

const swipeRight = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(113.5%);
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

  ${({ theme }) => theme.mq.tablet} {
    justify-content: center;

    flex-wrap: wrap;
    gap: 0;
  }
`;

export const TextContentWrapper = styled.div`
  min-width: 370px;

  h2,
  p:nth-child(2) {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
  }
  h2 {
    font-size: ${({ theme }) => theme.font.size.headingSmall};
    color: ${({ theme }) => theme.color.gammaOrange};
    margin-bottom: 10px;
  }

  p:nth-child(2) {
    font-size: ${({ theme }) => theme.font.size.ContactCardPar};
    margin-bottom: 20px;
  }

  ${({ theme }) => theme.mq.tablet} {
    max-width: 350px;
    min-width: 300px;

    h2 {
      font-size: ${({ theme }) => theme.font.size.headingMobileAC};
      margin-bottom: 5px;
    }

    p:nth-child(2) {
      font-size: ${({ theme }) => theme.font.size.paragraphSmall};
      margin-bottom: 10px;
    }

    p:nth-child(3) {
      font-size: ${({ theme }) => theme.font.size.paragraphMobile};
      max-width: 280px;
    }
  }
`;

export const StyledImg = styled(Image)`
  object-fit: contain;
`;

export const ImgWrapper = styled.div`
  position: relative;
  min-width: 400px;
  min-height: 429px;
  aspect-ratio: 1/1.2;

  ${({ theme }) => theme.mq.phone} {
    min-width: 250px;
    min-height: 268px;
    aspect-ratio: 1/1.2;
  }
`;
