import styled from "styled-components";
import Link from "next/link";

export const WelcomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 175px;
`;

export const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-align: center;
  max-width: 800px;
  margin-top: 40px;
  color: ${({ theme }) => theme.color.graphite};
  z-index: 10;
`;

export const CtaBtn = styled.button`
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: "Montserrat", sans-serif;
  width: ${({ isBig }) => (isBig ? "285px" : "240px")};
  height: 55px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #f68c1e;
  background-color: #f68c1e;
  color: #fff;
  letter-spacing: 0.5px;

  transition: all 0.5s ease;

  &:hover {
    background-color: #fff;
    color: #f68c1e;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
`;
