import styled from "styled-components";

export const PortfolioPage = styled.section`
  padding-bottom: 150px;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 30px;
  padding-left: 6.5%;
  transform: translateY(-130px);
`;

export const PortfolioButton = styled.button`
  font-size: ${({ theme }) => theme.font.size.offerButton};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
`;

export const CardsWrapper = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 35px;
`;
