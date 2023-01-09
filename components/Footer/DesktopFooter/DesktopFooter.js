import {
  FooterHeader,
  FooterParagraph,
  FooterWrapper,
  IconsWrapper,
  StyledImage,
  StyledLink,
} from "./DesktopFooter.styles";
import { Icon } from "@iconify/react";

const DesktopFooter = () => {
  return (
    <FooterWrapper>
      <StyledImage
        src={"/HomePage/white.png"}
        width={206}
        height={60}
        alt={"white gamma logo"}
      />
      <div>
        <FooterHeader>lokalizacja</FooterHeader>
        <FooterParagraph width={145} margin>
          39-204 Żyraków Zawierzbie 7c
        </FooterParagraph>
        <div>
          <FooterHeader>jesteśmy otwarci:</FooterHeader>
          <FooterParagraph width={165}>Pn - Pt 8:00 - 16:00</FooterParagraph>
        </div>
      </div>

      <div>
        <FooterHeader>kontakt</FooterHeader>
        <FooterParagraph width={145} margin>
          +48 525 525 525 kontakt@gamma24.pl
        </FooterParagraph>
      </div>

      <div>
        <FooterHeader>obserwuj nas</FooterHeader>
        <IconsWrapper>
          <StyledLink
            href="https://www.facebook.com/gammaagencja"
            target="_blank"
          >
            <Icon icon="ci:facebook" color="white" width="32" height="32" />
          </StyledLink>
          <StyledLink
            href="https://www.linkedin.com/company/agencja-reklamowa-gamma/"
            target="_blank"
          >
            <Icon
              icon="entypo-social:linkedin-with-circle"
              color="white"
              width="32"
              height="32"
            />
          </StyledLink>
          <StyledLink
            href="https://www.instagram.com/agencja_gamma24/"
            target="_blank"
          >
            <Icon
              icon="ri:instagram-fill"
              color="white"
              width="32"
              height="32"
            />
          </StyledLink>
        </IconsWrapper>
      </div>
    </FooterWrapper>
  );
};

export default DesktopFooter;
