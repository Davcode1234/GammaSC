import Image from "next/image";
import styled from "styled-components";
import { Icon } from "@iconify/react";

export const CardOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  top: -2%;
  z-index: 10;
  background-color: rgba(53, 53, 53, 0.8);
  opacity: 0;
  min-height: 430px;
  min-width: 600px;
  transition: all 0.2s ease;
  border-radius: 5px;
`;

export const HoverLine = styled.div`
  height: 5px;
  width: 38%;
  background-color: ${({ theme }) => theme.color.gammaOrange};
  border-radius: 5px;
  transform: scale(0);
  transition: all 0.4s 0.1s ease;
`;

export const HoverText = styled.p`
  font-size: ${({ theme }) => theme.font.size.ContactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 10px;
  transform: translateY(100%);
  opacity: 0;
  transition: all 0.4s 0.4s ease;
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

  &:hover {
    ${StyledImage} {
      transform: scale(1.1) translateY(-10px);
    }
    ${CardOverlay} {
      opacity: 1;
    }

    ${HoverLine} {
      transform: scale(1);
    }

    ${HoverText} {
      opacity: 1;
      transform: translateY(0);
    }
    ${StyledIcon} {
      transform: rotate(135deg);
    }
  }
`;

export const ClientName = styled.p`
  font-size: ${({ theme }) => theme.font.size.contactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin: 10px 0;
`;

export const ProductName = styled.h2`
  font-size: ${({ theme }) => theme.font.size.contactCardHeader};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.graphite};
`;

export const ImgWrapper = styled.div`
  position: relative;
  width: 660px;
  height: 430px;
`;
