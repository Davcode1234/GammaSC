import styled from "styled-components";
import Image from "next/legacy/image";

export const CardWrapper = styled.div``;

export const HeroImg = styled(Image)``;

export const NameHeader = styled.h3`
  font-size: ${({ theme }) => theme.font.size.headingAboutCard};
  color: ${({ theme }) => theme.color.graphite};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  margin-bottom: 10px;
`;

export const PositionParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.graphite};
`;
