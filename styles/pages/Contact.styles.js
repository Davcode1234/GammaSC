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
  min-height: 600px;
  display: flex;
  gap: 30px;
  justify-content: center;
  transform: translateY(-12%);

  ${({ theme }) => theme.mq.smallerDesktop} {
    flex-direction: column;
    align-items: center;
  }
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
  margin-bottom: 60px;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.headingMobileDP};
    margin: 0 auto 30px auto;
    max-width: 350px;
  }
`;

export const Map = styled.div`
  & > div {
    height: 620px;
  }
`;
