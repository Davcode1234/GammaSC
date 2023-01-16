import Image from "next/image";
import { SliderContainer, SlideTrack } from "./Slider.styles";
import PropTypes from "prop-types";
import useWindowSize from "../../hooks/useWindowSize";
import { useMemo, useState } from "react";

export const topImages = [
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_axa.svg",
    id: 1,
    alt: "Partner Axa",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_debica.svg",
    id: 2,
    alt: "Partner Debica",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_justrelate.svg",
    id: 3,
    alt: "Partner JustRelate",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_premio.svg",
    id: 4,
    alt: "Partner Premio",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_fulda.svg",
    id: 5,
    alt: "Partner Fulda",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_sava.svg",
    id: 6,
    alt: "Partner Sava",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_dunlop.svg",
    id: 7,
    alt: "Partner Dunlop",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_SCB.svg",
    id: 8,
    alt: "Partner SCB",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_goodyear.svg",
    id: 9,
    alt: "Partner GoodYear",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_shell.svg",
    id: 10,
    alt: "Partner Shell",
  },
  {
    src: "/HomePage/companies/upperline/gamma_strona_klienci_transcash.svg",
    id: 11,
    alt: "Partner Transcash",
  },
];

export const bottomImages = [
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_akzonobel.svg",
    id: 12,
    alt: "Partner Akzonobel",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_brembo.svg",
    id: 13,
    alt: "Partner Brembo",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_drewmet.svg",
    id: 14,
    alt: "Partner Drewmet",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_galicja.svg",
    id: 15,
    alt: "Partner Galicja",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_leier.svg",
    id: 16,
    alt: "Partner Leier",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_prymat.svg",
    id: 17,
    alt: "Partner Prymat",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_ravi.svg",
    id: 18,
    alt: "Partner Ravi",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_Rijk_zwaan.svg",
    id: 19,
    alt: "Partner Rijk Zwaan",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_romet.svg",
    id: 20,
    alt: "Partner Romet",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_safran.svg",
    id: 21,
    alt: "Partner Safran",
  },
  {
    src: "/HomePage/companies/downline/gamma_strona_klienci_sokolow.svg",
    id: 22,
    alt: "Partner Sokolow",
  },
];
const Slider = ({ position, imgArr }) => {
  const [logoSize, setLogoSize] = useState({
    width: 350,
    height: 175,
  });

  const isSmaller = useWindowSize(1200);

  useMemo(() => {
    if (isSmaller) {
      setLogoSize({
        width: 200,
        height: 100,
      });
    } else {
      setLogoSize({
        width: 350,
        height: 175,
      });
    }
  }, [isSmaller]);

  return (
    <>
      <SliderContainer>
        <SlideTrack position={position}>
          {imgArr.map((car) => {
            return (
              <div className="slide" key={car.id}>
                <Image
                  src={car.src}
                  alt="car.slt"
                  width={logoSize.width}
                  height={logoSize.height}
                  priority
                ></Image>
              </div>
            );
          })}
          {imgArr.map((car) => {
            return (
              <div className="slide" key={car.id}>
                <Image
                  src={car.src}
                  alt="car.slt"
                  width={logoSize.width}
                  height={logoSize.height}
                  priority
                ></Image>
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
