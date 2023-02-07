import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  gap: 205px;
  height: 390px;
  background-color: ${({ theme }) => theme.color.graphite};
  padding: 90px 50px 0 50px;
  overflow: hidden;
  ${({ theme }) => theme.mq.smallerDesktop} {
    gap: 80px;
  }

  div > h4 {
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.gammaOrange};
    text-transform: uppercase;
    margin-bottom: 15px;
  }
`;

export const FooterParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.white};
  line-height: 140%;
  max-width: ${(props) => `${props.width}px`};
  margin-bottom: ${({ isMargin }) => (isMargin ? "0" : "25px")};
`;

export const IconsWrapper = styled.div`
  display: flex;
  gap: 15px;

  a {
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const StyledImage = styled(Image)`
  transform: translateY(-30%);
`;
