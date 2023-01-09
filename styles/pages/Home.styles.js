import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const WelcomSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 175px;
`;

export const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-align: center;
  max-width: 800px;
  margin-top: 40px;
  color: ${({ theme }) => theme.color.graphite};
`;

export const CtaBtn = styled.button`
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-family: "Montserrat", sans-serif;
  width: ${({ isBig }) => (isBig ? "285px" : "240px")};
  height: 55px;
  border-radius: 5px;
  cursor: pointer;
  border: 1px solid #f68c1e;
  background-color: #f68c1e;
  color: #fff;
  letter-spacing: 0.5px;

  transition: all 0.5s ease;

  &:hover {
    background-color: #fff;
    color: #f68c1e;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 30px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  position: relative;
`;

export const StyledIcon = styled(Icon)`
  transform: rotate(135deg);
  position: absolute;
  top: -10%;
  right: -18%;
`;

// Second sec

export const InfoSec = styled.section`
  height: 1000px;
  background-color: ${({ theme }) => theme.color.graphite};
  padding-top: 110px;
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 65px;
  width: 100%;
`;

export const InfoTextWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 110px auto;
  transform: translateX(-5rem);
`;

export const InfoSmallPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  text-transform: uppercase;
  margin-bottom: 20px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  }
`;

export const InfoSecHeader = styled(motion.h2)`
  font-size: ${({ theme }) => theme.font.size.heading};
  font-weight: ${({ theme }) => theme.font.weight.thin};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 4rem;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }
`;

export const InfoSecContentPar = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.white};
  max-width: 660px;
  line-height: 140%;
  margin-bottom: 4rem;
`;

// Partners sec

export const PartnersSec = styled.section`
  height: 100vh;
  max-height: 900px;
  padding-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const PartnersTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 110px;
`;

export const PartnersSecHeader = styled.h2`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.graphite};
  max-width: 79.5rem;
  text-align: center;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }
`;

// Offer Sec

export const OfferSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  max-height: 950px;
  background-color: ${({ theme }) => theme.color.grey};
  /* z-index: -2; */
`;

export const OfferSecHeader = styled(PartnersSecHeader)`
  max-width: 85rem;
`;

export const OfferCardsGrid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-gap: 20px;
  gap: 45px;
`;

// Countries Sec

export const CountriesSection = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const CountriesTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  transform: translate(46%, -25%);
  z-index: 2;
`;

export const CountriesSecHeader = styled(PartnersSecHeader)`
  max-width: 600px;
  text-align: start;
`;

export const CountriesSecText = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.graphite};
  max-width: 435px;
  position: relative;
  transform: translateX(105px);

  &:after {
    content: "";
    position: absolute;
    width: 90px;
    height: 5px;
    background-color: ${({ theme }) => theme.color.gammaOrange};
    top: 5px;
    left: -105px;
  }
`;

export const StyledImageMap = styled(Image)`
  transform: translate(-6%, -8%);
`;

// Contact Us

export const ContactUsSection = styled.section`
  display: flex;
  height: 400px;
  background-color: ${({ theme }) => theme.color.graphite};
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export const StyledFooterImage = styled(Image)`
  transform: translateY(-29%);
`;
