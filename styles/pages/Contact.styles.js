import styled, { css, keyframes } from "styled-components";

const reveal = keyframes`
from {
  opacity: 0;
}

to {
  opacity: 1;
}
`;

const mapLoading = keyframes`
0% {
    opacity: .5
}

50% {
    opacity: 1
}

100% {
    opacity: .5;
}
`;

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
  opacity: 0;
  ${({ vis }) => {
    return vis
      ? css`
          animation: ${reveal} 0.5s 0.3s ease forwards;
        `
      : null;
  }}

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.headingMobileDP};
    margin: 0 auto 30px auto;
    max-width: 350px;
  }
`;

export const MapWrapper = styled.div`
  height: 620px;
  opacity: 0;

  ${({ vis }) => {
    return vis
      ? css`
          animation: ${reveal} 0.5s 0.3s ease forwards;
        `
      : null;
  }}
`;

export const MapSkeleton = styled.div`
  height: 620px;
  width: 100%;
  background-color: rgba(217, 215, 208, 0.5);
  animation: ${mapLoading} 1s ease infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;
