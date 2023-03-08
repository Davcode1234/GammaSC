import styled, { css, keyframes } from "styled-components";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuBtnRev1 = keyframes`
  0% {
   transform: scaleX(0);
    
  }

  100% {
   transform: scaleX(1); 
  }
`;

const MenuBtnRev2 = keyframes`
  0% {
   transform: scaleX(0);
   transform-origin: right;
  }

  100% {
   transform: scaleX(1); 
   transform-origin: right;
  }
`;

export const Overlay = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  background-color: transparent;

  ${({ theme }) => theme.mq.smallerPhone} {
    display: none;
  }
`;

export const NavigationWrapper = styled.nav`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 100px;
  width: 100%;
  height: 75px;
  z-index: 100;
  transition: all 0.3s ease;

  ${({ dir }) => {
    return dir === "down"
      ? css`
          transform: translateY(-80px);
        `
      : null;
  }}
  ${({ theme }) => theme.mq.smallerPhone} {
    padding: 0 50px;
  }
`;

export const MenuBtn = styled.div.attrs((props) => ({
  role: "button",
  "aria-label": props.label || "Menu",
  "aria-pressed": false,
}))`
  position: relative;
  border: none;
  border-radius: 4px;
  width: 23px;
  height: 3px;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#f68c1e")};
  z-index: 10;
  transition: all 0.3s ease;

  &:after {
    content: "";
    position: absolute;
    border-radius: 4px;
    width: 32px;
    height: 3px;
    top: 0;
    right: 0;
    transform: translateY(-8px);
    background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#f68c1e")};
  }

  &:before {
    content: "";
    position: absolute;
    border-radius: 4px;
    width: 32px;
    height: 3px;
    top: 0;
    right: 0;
    transform: translateY(8px);
    background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#f68c1e")};
  }
`;

export const CloseMenuBtn = styled.div`
  rotate: 45deg;
  position: relative;
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 2px;
  cursor: pointer;
  background-color: #fff;
  z-index: 10;
  transform: scaleX(0);
  animation: ${MenuBtnRev1} 0.5s 1.7s ease forwards;
  transform-origin: right;

  &:after {
    content: "";
    position: absolute;
    border-radius: 4px;
    rotate: 90deg;
    top: 16px;
    left: -50%;
    transform: scale(0);
    cursor: pointer;
    width: 32px;
    height: 2px;
    background-color: #fff;
    animation: ${MenuBtnRev2} 0.5s 1.9s ease forwards;
  }
`;

export const MenuBtnWrapper = styled.button`
  position: relative;
  width: 50px;
  height: 50px;
  transform: ${({ isOpen }) =>
    isOpen ? "translate(45px, 25px);" : "translate(0px, 0px);"};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: none;

  &:hover {
    ${MenuBtn} {
      transform: scale(1.1);
    }
  }
`;

export const MainSliderMenu = styled(motion.aside)`
  position: fixed;
  box-sizing: border-box;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.gammaOrange};
  width: 375px;
  height: 100vh;
  padding: 100px 0 0 60px;
  z-index: 1;

  ${({ theme }) => theme.mq.smallerPhone} {
    width: 100%;
  }
`;

export const SecondarySliderMenu = styled(MainSliderMenu)`
  background-color: ${({ theme }) => theme.color.darkPurple};
`;

export const LinksWrapper = styled(motion.div)`
  height: 100%;
  margin-top: 60px;
`;

export const MenuLink = styled(motion.p)`
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.font.size.mobileMenu};
  text-decoration: none;
  font-weight: ${({ theme }) => theme.font.weight.bold};
  cursor: pointer;
  margin: 0 0 16px 0;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
