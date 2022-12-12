import styled from "styled-components";
import { InfoSmallPar } from "../../styles/pages/Home.styles";
import Image from "next/image";

export const ContentTextWrapper = styled.div`
  position: absolute;
  right: 15%;
  top: 45%;
  max-width: 700px;
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
  height: 505px;
  z-index: -1;
  transform: translateY(-30px);
`;

export const ContentContainer = styled.div`
  height: 675px;
`;

export const StyledCamImg = styled(Image)`
  transform: translate(85%, -30%);
`;
