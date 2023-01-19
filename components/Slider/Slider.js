import {
  SliderContainer,
  SliderItem,
  SliderItemWrapper,
  SlideTrack,
} from "./Slider.styles";
import PropTypes from "prop-types";

export const topImages = [
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_axa.webp",
    id: 1,
    alt: "Partner Axa",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_debica.webp",
    id: 2,
    alt: "Partner Debica",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_justrelate.webp",
    id: 3,
    alt: "Partner JustRelate",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_premio.webp",
    id: 4,
    alt: "Partner Premio",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_fulda.webp",
    id: 5,
    alt: "Partner Fulda",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_sava.webp",
    id: 6,
    alt: "Partner Sava",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_dunlop.webp",
    id: 7,
    alt: "Partner Dunlop",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_SCB.webp",
    id: 8,
    alt: "Partner SCB",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_goodyear.webp",
    id: 9,
    alt: "Partner GoodYear",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_shell.webp",
    id: 10,
    alt: "Partner Shell",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_transcash.webp",
    id: 11,
    alt: "Partner Transcash",
  },
];

export const bottomImages = [
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_akzonobel.webp",
    id: 12,
    alt: "Partner Akzonobel",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_brembo.webp",
    id: 13,
    alt: "Partner Brembo",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_drewmet.webp",
    id: 14,
    alt: "Partner Drewmet",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_galicja.webp",
    id: 15,
    alt: "Partner Galicja",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_leier.webp",
    id: 16,
    alt: "Partner Leier",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_prymat.webp",
    id: 17,
    alt: "Partner Prymat",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_ravi.webp",
    id: 18,
    alt: "Partner Ravi",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_Rijk_zwaan.webp",
    id: 19,
    alt: "Partner Rijk Zwaan",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_romet.webp",
    id: 20,
    alt: "Partner Romet",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_safran.webp",
    id: 21,
    alt: "Partner Safran",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_sokolow.webp",
    id: 22,
    alt: "Partner Sokolow",
  },
];
const Slider = ({ position, imgArr }) => {
  return (
    <>
      <SliderContainer>
        <SlideTrack position={position}>
          {imgArr.map(({ id, src, alt }) => {
            return (
              <div key={id}>
                <SliderItemWrapper>
                  <SliderItem
                    src={src}
                    alt={alt}
                    fill
                    sizes="
                    (max-width: 1150px) 200px
                    350px
                    "
                  ></SliderItem>
                </SliderItemWrapper>
              </div>
            );
          })}
          {imgArr.map(({ id, src, alt }) => {
            return (
              <div key={id}>
                <SliderItemWrapper>
                  <SliderItem
                    src={src}
                    alt={alt}
                    fill
                    sizes="
                    (max-width: 1150px) 200px
                    350px
                    "
                  ></SliderItem>
                </SliderItemWrapper>
              </div>
            );
          })}
        </SlideTrack>
      </SliderContainer>
    </>
  );
};

export default Slider;

Slider.propTypes = {
  position: PropTypes.string,
  imgArr: PropTypes.array,
};
