import styled from "styled-components";

export const CardWrapper = styled.div`
  position: relative;
  padding: 76px 30px 30px 30px;
  background: linear-gradient(to bottom, white, transparent);
  max-width: 390px;
  max-height: 200px;
  margin-bottom: 35px;
  border-radius: 5px;
`;

export const CardHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.headingOffer};
  font-weight: ${({ theme }) => theme.font.weight.thin};
`;

export const CardText = styled.p`

font-size: ${({ theme }) => theme.font.size.paragraph};
color: ${({ theme }) => theme.color.graphite}
`;
