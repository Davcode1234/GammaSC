import styled from "styled-components";

export const PortfolioPage = styled.section``;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  position: absolute;
  width: 100%;
  transform: translateY(-130px);
  padding-right: 34%;

  ${({ theme }) => theme.mq.desktop} {
    padding-right: 0;
    padding-left: 16px;
    justify-content: left;
  }

  ${({ theme }) => theme.mq.tablet} {
    justify-content: center;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mq.smallerPhone} {
    display: grid;
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    gap: 15px;
  }
`;

export const CardsWrapper = styled.div`
  max-width: 1500px;
  padding: 100px 0 150px 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
  margin: 0 auto;

  ${({ theme }) => theme.mq.smallerPhone} {
    padding-top: 50px;
    padding: 50px 0 100px 0;
  }
`;
