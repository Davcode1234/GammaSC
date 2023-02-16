import styled from "styled-components";

export const PortfolioPage = styled.section`
  padding-bottom: 150px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  padding-right: 30%;
  /* padding-left: 6.5%; */
  transform: translateY(-130px);

  ${({ theme }) => theme.mq.desktop} {
    gap: 30px;
    padding-right: 25%;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding-right: 0;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mq.phone} {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    grid-gap: 30px;
    padding-left: 16px;
    width: 50%;
    transform: translate(50%, -155px);
  }

  ${({ theme }) => theme.mq.tinyPhone} {
    grid-gap: 25px;
  }
`;

export const CardsWrapper = styled.div`
  max-width: 1500px;
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  margin: 0 auto;
`;
