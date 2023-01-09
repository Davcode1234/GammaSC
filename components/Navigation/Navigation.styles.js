import styled, { keyframes } from "styled-components";
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
  /* background-color: ${({ theme }) => theme.color.white}; */
  ${({ theme }) => theme.mq.smallerPhone} {
    padding: 0 30px;
  }
`;

export const MenuBtn = styled.button`
  position: relative;
  border: none;
  border-radius: 4px;
  width: 23px;
  height: 3px;
  cursor: pointer;
  background-color: ${({ isOpen }) => (isOpen ? "#fff" : "#f68c1e")};
  z-index: 10;

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

export const CloseMenuBtn = styled.button`
  translate: 35px 20px;
  rotate: 45deg;
  position: relative;
  border: none;
  border-radius: 4px;
  width: 32px;
  height: 3px;
  cursor: pointer;
  background-color: #fff;
  z-index: 10;
  transform: scaleX(0);
  animation: ${MenuBtnRev1} 0.3s 1.7s ease forwards;
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
    height: 3px;
    background-color: #fff;
    animation: ${MenuBtnRev2} 0.3s 1.9s ease forwards;
  }
`;

export const Logo = styled.h1`
  font-size: 30px;
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

// export const TestSvg = styled(motion.svg)``;

// export const TestPathSvg = styled(motion.path)``;
