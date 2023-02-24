import styled, { keyframes } from "styled-components";

const loading = keyframes`
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

export const SkeletonWrapper = styled.div`
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
  div {
    width: 550px;
    height: 539px;
    border-radius: 5px;
    background-color: rgba(217, 215, 208, 0.5);
    animation: ${loading} 1s ease infinite;
  }
`;
