import styled from "styled-components";

export const ContactHeader = styled.section`
  height: 560px;
  background-color: ${({ theme }) => theme.color.graphite};
  display: flex;
  align-items: center;
  justify-content: center;

  & > div {
    transform: translateX(-25%);
  }
`;

export const ContactInfoSection = styled.section`
  height: 600px;
  display: flex;
  gap: 30px;
  justify-content: center;
  transform: translateY(-12%);
`;

export const ContactTextPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.white};
  max-width: 750px;
  line-height: 140%;
`;

export const MapHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.graphite};
  text-align: center;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }
`;