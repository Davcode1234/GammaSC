import styled from "styled-components";
import Link from "next/link";

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 390px;
  background-color: ${({ theme }) => theme.color.graphite};
`;

export const OuterWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const FooterHeader = styled.h4`
  font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  text-transform: uppercase;
  margin-bottom: 15px;
`;

export const FooterParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  color: ${({ theme }) => theme.color.white};
  line-height: 140%;
  max-width: 144px;
`;
