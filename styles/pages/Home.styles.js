import styled, { keyframes } from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

const appear = keyframes`
  from {
    opacity: 0
  } 

  to {
    opacity: 1
  }
`;

export const WelcomSection = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 175px;
  opacity: 0;
  animation: ${appear} 0.5s 0.2s ease forwards;

  ${({ theme }) => theme.mq.phone} {
    padding: 0 16px;
  }
`;

export const WelcomeImageWrapper = styled.div`
  position: relative;
  width: 851px;
  height: 597px;
  min-height: 200px;

  @media (max-width: 875px) {
    width: 100%;
  }

  ${({ theme }) => theme.mq.phone} {
    height: 350px;
  }

  ${({ theme }) => theme.mq.smallerPhone} {
    height: 300px;
  }

  ${({ theme }) => theme.mq.tinyPhone} {
    height: 250px;
  }
`;

export const DescriptionParagraph = styled.p`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  text-align: center;
  max-width: 800px;
  margin-top: 40px;
  color: ${({ theme }) => theme.color.graphite};

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  }
`;

export const CtaBtn = styled.button`
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  letter-spacing: 0.5px;
  width: ${({ isbig }) => (isbig ? "285px" : "240px")};
  height: 55px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  border: 1px solid #f68c1e;
  background-color: #f68c1e;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(246, 140, 30, 0);
    color: #f68c1e;
  }

  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
    width: 220px;
  }
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;
  margin-top: 30px;
  ${({ theme }) => theme.mq.phone} {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: ${({ theme }) => theme.font.size.button};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  position: relative;
  ${({ theme }) => theme.mq.phone} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  }
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

  ${({ theme }) => theme.mq.phone} {
    padding: 60px 0;
    height: 850px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 35px;
  width: 100%;

  ${({ theme }) => theme.mq.tablet} {
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
`;

export const InfoTextWrapper = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 110px auto;
  transform: translateX(-6rem);

  ${({ theme }) => theme.mq.tablet} {
    transform: translateX(0);
    padding-left: 16px;
  }

  ${({ theme }) => theme.mq.smallerPhone} {
    margin: 50px auto;
  }
`;

export const InfoSmallPar = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.paragraphSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.gammaOrange};
  text-transform: uppercase;
  margin-bottom: 20px;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
    margin-bottom: 10px;
  }
`;

export const InfoSecHeader = styled(motion.h2)`
  font-size: ${({ theme }) => theme.font.size.heading};
  font-weight: ${({ theme }) => theme.font.weight.thin};
  color: ${({ theme }) => theme.color.white};
  margin-bottom: 40px;
  opacity: 0;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.headingMobileDP};
    margin-bottom: 20px;
  }
`;

export const InfoSecContentPar = styled(motion.p)`
  font-size: ${({ theme }) => theme.font.size.paragraph};
  color: ${({ theme }) => theme.color.white};
  max-width: 660px;
  line-height: 140%;
  margin-bottom: 4rem;
  opacity: 0;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraphMobile};
  }
  ${({ theme }) => theme.mq.phone} {
    margin-bottom: 25px;
  }
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
  /* ${({ theme }) => theme.mq.tablet} {
    height: 80vh;
  } */

  ${({ theme }) => theme.mq.smallerPhone} {
    height: 85vh;
  }
`;

export const PartnersTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 110px;

  ${({ theme }) => theme.mq.tablet} {
    margin-bottom: 50px;
  }
`;

export const PartnersSecHeader = styled(motion.h2)`
  font-size: ${({ theme }) => theme.font.size.headingSmall};
  font-weight: ${({ theme }) => theme.font.weight.semiBold};
  color: ${({ theme }) => theme.color.graphite};
  max-width: 79.5rem;
  text-align: center;

  & > span {
    color: ${({ theme }) => theme.color.gammaOrange};
  }

  ${({ theme }) => theme.mq.smallerPhone} {
    font-size: ${({ theme }) => theme.font.size.headingMobileDP};
    max-width: 320px;
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

  ${({ theme }) => theme.mq.phone} {
    height: 85vh;
    align-items: stretch;
  }
`;

export const OfferSecHeader = styled(PartnersSecHeader)`
  max-width: 85rem;

  ${({ theme }) => theme.mq.smallerPhone} {
    max-width: 330px;
  }
`;

export const OfferCardsGrid = styled.div`
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-gap: 20px;
  gap: 45px;
  overflow: hidden;
  ${({ theme }) => theme.mq.smallerDesktop} {
    grid-template: repeat(2, 1fr) / repeat(2, 1fr);
    grid-gap: 15px;
  }
`;

// Countries Sec

export const CountriesSection = styled.section`
  width: 100%;
  height: 100vh;
  max-height: 790px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${({ theme }) => theme.mq.desktop} {
    max-height: none;
  }

  ${({ theme }) => theme.mq.phone} {
    padding: 50px 0;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  ${({ theme }) => theme.mq.desktop} {
    flex-wrap: wrap-reverse;
    align-items: center;
    justify-content: center;
  }

  ${({ theme }) => theme.mq.tablet} {
    gap: 30px;
  }
`;

export const CountriesTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  transform: translate(66%, -25%);
  z-index: 2;
  ${({ theme }) => theme.mq.desktop} {
    transform: translate(0, 0);
  }

  ${({ theme }) => theme.mq.phone} {
    padding: 0 16px;
    margin-bottom: 150px;
    gap: 20px;
  }
`;

export const CountriesSecHeader = styled(PartnersSecHeader)`
  max-width: 600px;
  text-align: start;

  ${({ theme }) => theme.mq.smallerPhone} {
    max-width: 250px;
  }
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

    ${({ theme }) => theme.mq.tablet} {
      display: none;
    }
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.font.size.paragraphSmall};
    transform: translateX(0);
  }
`;

export const MapWrapper = styled.div`
  position: relative;
  width: 70vw;
  height: 563px;
  transform: translate(-6%, -8%);

  ${({ theme }) => theme.mq.tablet} {
    transform: translate(0, 0);
  }

  ${({ theme }) => theme.mq.phone} {
    width: 100vw;
    height: 250px;
  }
`;

export const StyledImageMap = styled(Image)`
  object-fit: contain;
`;

// Contact Us

export const ContactUsSection = styled.section`
  display: flex;
  height: 400px;
  background-color: ${({ theme }) => theme.color.graphite};
  justify-content: center;
  align-items: center;
  gap: 20px;

  ${({ theme }) => theme.mq.phone} {
    flex-wrap: wrap-reverse;
    padding: 0 16px;
  }
`;

export const StyledFooterImage = styled(Image)``;

export const FooterImageWrapper = styled.div`
  position: relative;
  width: 443px;
  height: 391px;
  transform: translateY(-29%);

  ${({ theme }) => theme.mq.tablet} {
    width: 328px;
    height: 293px;
    transform: translateY(-35%);
  }

  ${({ theme }) => theme.mq.phone} {
    transform: translateY(0);
  }
`;
