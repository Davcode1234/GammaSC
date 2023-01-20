import styled from "styled-components";

export const StyledModal = styled.div`
  min-height: 500px;
  width: 70%;
  max-width: 900px;
  margin: 2rem;
  padding: 2.5rem;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 5px;
`;

export const StyledOverlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3500;
  background: #212b3277;
`;
