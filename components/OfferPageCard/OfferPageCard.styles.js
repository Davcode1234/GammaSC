import styled from "styled-components";
import { InfoSmallPar } from "../../styles/pages/Home.styles";
import { motion } from "framer-motion";
import Image from "next/image";

export const ContentTextWrapper = styled.div`
  max-width: 700px;
  transform: translate(220px, 50px);
`;

export const Header = styled(InfoSmallPar)``;

export const Text = styled.p`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.white};
`;

export const StyledImgBackground = styled.div`
  background-image: url("${({ imageSource }) => imageSource}");
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  width: 100%;
  height: 405px;
  z-index: -1;
  transform: translateY(-30px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentContainer = styled.div`
  height: 675px;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

export const CamImgWrapper = styled(motion.div)``;

export const StyledCamImg = styled(Image)`
  transform: translateY(-30%);
`;

export const TextWrapper = styled(motion.div)`
  display: flex;
  max-width: 650px;
  line-height: 140%;
  margin-top: 60px;
`;

export const FirstTextParagraph = styled.p`
  & > div {
    margin-top: 10px;
  }
`;

export const List = styled.ul``;

export const ListItem = styled.li``;

export const Line = styled.div`
  width: 300px;
  height: 3px;
  background-color: ${({ theme }) => theme.color.gammaOrange};
  margin-right: 20px;
  transform: translateY(10px);
`;
