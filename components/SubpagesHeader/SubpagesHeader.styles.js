import styled from "styled-components";

export const HeaderSection = styled.section`
  height: 560px;
  background-color: ${({ theme }) => theme.color.graphite};
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.mq.smallerDesktop} {
    & > div {
      transform: translateX(0);
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 30px;
  }

  div {
    padding-right: 25%;
    ${({ theme }) => theme.mq.smallerPhone} {
      padding-right: 0;
    }
  }

  div h2 {
    max-width: 1100px;
    font-size: ${({ theme }) => theme.font.size.heading};
    font-weight: ${({ theme }) => theme.font.weight.semiBold};
    color: ${({ theme }) => theme.color.white};
    margin-bottom: 40px;
    & > span {
      color: ${({ theme }) => theme.color.gammaOrange};
    }
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.headingMobileDP};
      margin-bottom: 20px;
    }
  }

  div p:not(:first-child) {
    font-size: ${({ theme }) => theme.font.size.paragraph};
    color: ${({ theme }) => theme.color.white};
    max-width: 750px;
    line-height: 140%;
    ${({ theme }) => theme.mq.phone} {
      font-size: ${({ theme }) => theme.font.size.paragraphMobile};
    }
  }
`;

// export const NavStripe = styled.div`
//   background-color: ${({ theme }) => theme.color.white};
//   height: 75px;
// `;
