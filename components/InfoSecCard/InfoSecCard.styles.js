import styled from "styled-components";

export const InfoSecCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
  width: 230px;
  height: 165px;
  background-color: transparent;
  border: 2px solid orange;
  border-radius: 5px;
  padding-top: 16px;
`;

export const NumParagraph = styled.p`
  font-size: 76px;

  font-weight: ${({ theme }) => theme.font.weight.bold};
  color: ${({ theme }) => theme.color.white};
  margin: 0;
`;

export const TextParagraph = styled.p`
  color: ${({ theme }) => theme.color.white};
  margin: 0;
  text-align: center;
  max-width: 170px;
`;
