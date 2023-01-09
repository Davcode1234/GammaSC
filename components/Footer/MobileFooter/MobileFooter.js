import {
  ColumnsWrapper,
  FooterHeader,
  FooterParagraph,
  FooterWrapper,
  OuterWrapper,
} from "./MobileFooter.styles";
import Image from "next/image";
import {
  IconsWrapper,
  StyledLink,
} from "../DesktopFooter/DesktopFooter.styles";
import { Icon } from "@iconify/react";

const MobileFooter = () => {
  return (
    <>
      <FooterWrapper>
        <Image
          width={206}
          height={60}
          src={"/HomePage/white.png"}
          alt={"white gamma logo"}
        />

        <OuterWrapper>
          <ColumnsWrapper>
            <div>
              <FooterHeader>Lokalizacja</FooterHeader>
              <FooterParagraph>39-204 Żyraków Zawierzbie 7c</FooterParagraph>
            </div>
            <div>
              <FooterHeader>Jesteśmy otwarci:</FooterHeader>
              <FooterParagraph>Pn - Pt 8:00 -16:00</FooterParagraph>
            </div>
          </ColumnsWrapper>
          <ColumnsWrapper>
            <div>
              <FooterHeader>Kontakt</FooterHeader>
              <FooterParagraph>
                +48 525 525 525 biuro@gamma24.pl
              </FooterParagraph>
            </div>
            <div>
              <FooterHeader>Obserwuj nas</FooterHeader>
              <IconsWrapper>
                <StyledLink
                  href="https://www.facebook.com/gammaagencja"
                  target="_blank"
                >
                  <Icon
                    icon="ci:facebook"
                    color="white"
                    width="24"
                    height="24"
                  />
                </StyledLink>
                <StyledLink
                  href="https://www.linkedin.com/company/agencja-reklamowa-gamma/"
                  target="_blank"
                >
                  <Icon
                    icon="entypo-social:linkedin-with-circle"
                    color="white"
                    width="24"
                    height="24"
                  />
                </StyledLink>
                <StyledLink
                  href="https://www.instagram.com/agencja_gamma24/"
                  target="_blank"
                >
                  <Icon
                    icon="ri:instagram-fill"
                    color="white"
                    width="24"
                    height="24"
                  />
                </StyledLink>
              </IconsWrapper>
            </div>
          </ColumnsWrapper>
        </OuterWrapper>
      </FooterWrapper>
    </>
  );
};

export default MobileFooter;
