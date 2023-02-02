import styled, { css, keyframes } from "styled-components";

const swipeLeft = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(-103.5%);
}
`;

const swipeRight = keyframes`
0% {
  transform: translateX(0);
}
100% {
  transform: translateX(103.5%);
}
`;

export const ModalContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px;

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

export const ClientName = styled.p`
  font-size: ${({ theme }) => theme.font.size.offerButton};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 20px;
`;
export const ProductName = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingPortfolioModal};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.graphite};
  margin-bottom: 20px;
`;

export const TextWrapper = styled.div`
  z-index: 9;
  margin-left: 60px;
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 720px;
  height: 650px;
`;

export const Description = styled.p`
  max-width: 600px;
`;
