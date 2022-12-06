import styled from "styled-components";

export const ContactCardWrapper = styled.div`
  max-height: 400px;
  display: flex;
  align-items: center;
`;

export const ContentWrapper = styled.div`
  margin-left: 40px;
`;

export const ContactCardHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.ContactCardHeader};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  margin-bottom: 10px;
`;

export const PositionText = styled.p`
  margin-bottom: 20px;
`;

export const ContactPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.ContactCardPar};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  margin-bottom: 10px;
`;
