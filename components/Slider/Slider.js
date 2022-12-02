import { OuterContainer, SliderContainer, ImgWrapper } from "./Slider.styles";
import Image from "next/image";

const topImages = [
  "/HomePage/companies/upperline/gamma_strona_klienci_axa.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_debica.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_justrelate.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_premio.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_fulda.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_sava.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_dunlop.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_SCB.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_goodyear.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_shell.svg",
  "/HomePage/companies/upperline/gamma_strona_klienci_transcash.svg",
];

export const bottomImages = [
  "/HomePage/companies/downline/gamma_strona_klienci_akzonobel.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_brembo.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_drewmet.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_galicja.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_leier.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_prymat.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_ravi.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_Rijk_zwaan.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_romet.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_safran.svg",
  "/HomePage/companies/downline/gamma_strona_klienci_sokolow.svg",
];

const Slider = ({ position, imgArr }) => {
  return (
    <OuterContainer>
      <SliderContainer position={position}>
        {topImages.map((img) => {
          return (
            <ImgWrapper key={img}>
              <Image
                width={380}
                height={233}
                src={img}
                alt="Axa company logo"
              />
            </ImgWrapper>
          );
        })}

        {topImages.map((img) => {
          return (
            <ImgWrapper key={img}>
              <Image
                width={380}
                height={233}
                src={img}
                alt="Axa company logo"
              />
            </ImgWrapper>
          );
        })}
      </SliderContainer>
    </OuterContainer>
  );
};

export default Slider;
