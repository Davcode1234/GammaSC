import styled, { keyframes } from "styled-components";

const rotation = keyframes`
from {
    transform: rotate(0deg);
}
to {
    transform: rotate(359deg);
}
`;

export const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100vhw;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(255, 255, 255);
  z-index: 10;
`;

export const Loader = styled.div`
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #f68c1e;
  width: 120px;
  height: 120px;
  animation: ${rotation} 0.5s ease-in-out infinite;
`;
