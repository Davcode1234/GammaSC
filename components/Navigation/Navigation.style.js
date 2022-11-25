import styled from "styled-components";
import { motion } from "framer-motion";
import Image from "next/image";

export const NavigationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 90px;
`;

export const MenuBtn = styled(motion.button)`
  position: relative;
  border: none;
  border-radius: 4px;
  width: 23px;
  height: 3px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.color.gammaOrange};

  &:after {
    content: "";
    position: absolute;
    border-radius: 4px;
    width: 32px;
    height: 3px;
    top: 0;
    right: 0;
    transform: translateY(-8px);
    background-color: ${({ theme }) => theme.color.gammaOrange};
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
    background-color: ${({ theme }) => theme.color.gammaOrange};
  }
`;

export const Logo = styled.h1`
  font-size: 30px;
`;

export const MainSliderMenu = styled(motion.aside)`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color.gammaOrange};
  width: 375px;
  height: 100vh;
  padding: 100px 0 0 60px;
`;

export const SecondarySliderMenu = styled(MainSliderMenu)`
  background-color: ${({ theme }) => theme.color.gammaPurple};
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
