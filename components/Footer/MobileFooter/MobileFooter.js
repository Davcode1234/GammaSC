import {
  ColumnsWrapper,
  FooterWrapper,
  OuterWrapper,
} from "./MobileFooter.styles";
import Image from "next/image";
import { IconsWrapper } from "../DesktopFooter/DesktopFooter.styles";
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
          priority
        />

        <OuterWrapper>
          <ColumnsWrapper>
            <div>
              <p>Lokalizacja</p>
              <p>39-204 Żyraków Zawierzbie 7c</p>
            </div>
            <div>
              <p>Jesteśmy otwarci:</p>
              <p>Pn - Pt 8:00 -16:00</p>
            </div>
          </ColumnsWrapper>
          <ColumnsWrapper>
            <div>
              <p>Kontakt</p>
              <p>+48 525 525 525 biuro@gamma24.pl</p>
            </div>
            <div>
              <p>Obserwuj nas</p>
              <IconsWrapper>
                <a
                  href="https://www.facebook.com/gammaagencja"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="ci:facebook"
                    color="white"
                    width="24"
                    height="24"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/agencja-reklamowa-gamma/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon
                    icon="entypo-social:linkedin-with-circle"
                    color="white"
                    width="24"
                    height="24"
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
                    width="24"
                    height="24"
                  />
                </a>
              </IconsWrapper>
            </div>
          </ColumnsWrapper>
        </OuterWrapper>
      </FooterWrapper>
    </>
  );
};

export default MobileFooter;
