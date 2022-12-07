import styled from "styled-components";

export const HeaderSection = styled.section`
  height: 560px;
  background-color: ${({ theme }) => theme.color.graphite};
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    transform: translateX(-25%);
  }
`;

export const Header = styled.h2`
  max-width: 900px;
  font-size: ${({ theme }) => theme.font.size.heading};
  font-weight: ${({ theme }) => theme.font.weight.thin};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 4rem;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }
`;

export const TextParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.white};
  max-width: 750px;
  line-height: 140%;
`;

export const NavStripe = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  height: 75px;
`;
