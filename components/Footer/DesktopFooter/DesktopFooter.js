import {
  FooterParagraph,
  FooterWrapper,
  IconsWrapper,
  StyledImage,
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
        priority
      />
      <div>
        <h4>lokalizacja</h4>
        <FooterParagraph width={145} margin>
          39-204 Żyraków Zawierzbie 7c
        </FooterParagraph>
        <div>
          <h4>jesteśmy otwarci:</h4>
          <FooterParagraph width={170}>Pn - Pt 8:00 - 16:00</FooterParagraph>
        </div>
      </div>

      <div>
        <h4>kontakt</h4>
        <FooterParagraph width={145} margin>
          +48 525 525 525 kontakt@gamma24.pl
        </FooterParagraph>
      </div>

      <div>
        <h4>obserwuj nas</h4>
        <IconsWrapper>
          <a
            href="https://www.facebook.com/gammaagencja"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="ci:facebook" color="white" width="32" height="32" />
          </a>
          <a
            href="https://www.linkedin.com/company/agencja-reklamowa-gamma/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="entypo-social:linkedin-with-circle"
              color="white"
              width="32"
              height="32"
            />
          </a>
          <a
            href="https://www.instagram.com/agencja_gamma24/"
            target="_blank"
            rel="noreferrer"
          >
            <Icon
              icon="ri:instagram-fill"
              color="white"
              width="32"
              height="32"
            />
          </a>
        </IconsWrapper>
      </div>
    </FooterWrapper>
  );
};

export default DesktopFooter;
