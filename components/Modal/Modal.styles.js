import Image from "next/image";
import styled from "styled-components";

export const StyledModal = styled.div`
  position: relative;
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

export const CloseBtnWrapper = styled.button`
  position: absolute;
  height: 40px;
  top: 35px;
  right: 30px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const CloseBtn = styled.div`
  position: relative;
  width: 40px;
  height: 4px;
  border-radius: 5px;
  background-color: black;
  transform: rotate(45deg);

  &::after {
    content: "";
    position: absolute;
    width: 40px;
    height: 4px;
    left: 0;
    border-radius: 5px;
    background-color: black;
    transform: rotate(90deg);
  }
`;
