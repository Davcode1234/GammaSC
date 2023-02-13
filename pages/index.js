import Head from "next/head";
import Image from "next/legacy/image";
import {
  WelcomSection,
  DescriptionParagraph,
  CtaBtn,
  BtnWrapper,
  StyledLink,
  InfoSec,
  CardsWrapper,
  InfoSmallPar,
  InfoTextWrapper,
  InfoSecHeader,
  InfoSecContentPar,
  PartnersSec,
  PartnersTextWrapper,
  PartnersSecHeader,
  OfferSection,
  OfferSecHeader,
  OfferCardsGrid,
  CountriesSection,
  ContentWrapper,
  CountriesSecHeader,
  CountriesTextWrapper,
  CountriesSecText,
  StyledImageMap,
  ContactUsSection,
  StyledIcon,
  StyledFooterImage,
  MapWrapper,
  FooterImageWrapper,
} from "../styles/pages/Home.styles";
import InfoSecCard from "../components/InfoSecCard/InfoSecCard";
import { topImages, bottomImages } from "../components/Slider/Slider";
import OfferCard, { cardsContent } from "../components/OfferCard/OfferCard";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import Slider from "../components/Slider/Slider";
import useWindowSize from "../hooks/useWindowSize";
import VerticalScroll from "../components/VerticalScroll/VerticalScroll";

const infoSecCardData = [
  {
    text: "lat doświadczenia",
    withPlus: true,
    id: 1,
    intervalTime: 900,
  },
  {
    text: "tysięcy ukończonych projektów",
    withPlus: true,
    id: 2,
    intervalTime: 1800,
  },
  {
    text: "tysięcy wypitych filiżanek kawy",
    withPlus: true,
    id: 3,
    intervalTime: 1450,
  },
  {
    text: "stałych klientów",
    withPlus: false,
    id: 4,
    intervalTime: 2500,
  },
];

const textAppearOptions = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const btnOptions = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,

    transition: {
      duration: 1,
      delay: 1.6,
    },
  },
};

export default function Home() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const isMobile = useWindowSize(750);
  const CardsWrapperOffer = isMobile ? VerticalScroll : OfferCardsGrid;

  return (
    <>
      <Head>
        <title>Gamma | Strona główna</title>
        <meta
          name="keywords"
          content="Gamma agencja reklamowa kampania reklamowa strona główna"
        ></meta>
      </Head>

      <WelcomSection>
        <Image
          src="/HomePage/Grouped.png"
          width={851}
          height={597}
          alt="gamma Cameleon with bulb above his hand"
          priority
        />
        <DescriptionParagraph>
          Projektujemy, filmujemy, fotografujemy, drukujemy, tworzymy koncepcje
          promocyjne, a nawet produkujemy profesjonalną odzież sportową.
        </DescriptionParagraph>
        <BtnWrapper>
          <Link href="/portfolio">
            <CtaBtn
              isbig="true"
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "rgb(246, 140, 30, .0)",
                color: "#f68c1e",
              }}
            >
              Zobacz nasze realizacje
            </CtaBtn>
          </Link>

          <StyledLink href="/contact">
            Skontaktuj się z nami
            <StyledIcon
              icon="material-symbols:arrow-back"
              width="24"
              height="24"
            />
          </StyledLink>
        </BtnWrapper>
      </WelcomSection>

      <InfoSec>
        <CardsWrapper>
          {infoSecCardData.map(({ text, withPlus, id, intervalTime }) => {
            return (
              <InfoSecCard
                text={text}
                addPlus={withPlus}
                key={id}
                stopInterval={intervalTime}
              ></InfoSecCard>
            );
          })}
        </CardsWrapper>

        <AnimatePresence initial={true}>
          <InfoTextWrapper>
            <InfoSmallPar
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              o nas
            </InfoSmallPar>
            <InfoSecHeader
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Jesteśmy Agencją Reklamową <span>360°</span>
            </InfoSecHeader>
            <InfoSecContentPar
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Działamy na rynku od 2004 r. Od początku dążyliśmy do stworzenia
              firmy reklamowej oferującej swoim Klientom kompleksową obsługę w
              zakresie reklamy, druku oraz rozwiązań internetowych.
            </InfoSecContentPar>
            <Link href="/about">
              <CtaBtn
                isbig="true"
                variants={btnOptions}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{
                  backgroundColor: "rgb(246, 140, 30, .0)",
                  color: "#f68c1e",
                }}
              >
                Dowiedz się więcej
              </CtaBtn>
            </Link>
          </InfoTextWrapper>
        </AnimatePresence>
      </InfoSec>

      <PartnersSec>
        <AnimatePresence initial={true}>
          <PartnersTextWrapper>
            <InfoSmallPar
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Nasi klienci
            </InfoSmallPar>
            <PartnersSecHeader
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Stworzyliśmy dla nich <span>wiele niezwykłych</span> kreacji
            </PartnersSecHeader>
          </PartnersTextWrapper>
        </AnimatePresence>

        <Slider position={"left"} imgArr={topImages}></Slider>
        <Slider position={"right"} imgArr={bottomImages}></Slider>
      </PartnersSec>

      <OfferSection>
        <AnimatePresence initial={true}>
          <PartnersTextWrapper>
            <InfoSmallPar
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              nasza oferta
            </InfoSmallPar>
            <OfferSecHeader
              variants={textAppearOptions}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Zobacz, co możemy <span>dla Ciebie</span> zrobić:
            </OfferSecHeader>
          </PartnersTextWrapper>
        </AnimatePresence>
        <CardsWrapperOffer>
          {cardsContent.map(
            ({ delay, header, text, img, alt, width, height }) => {
              return (
                <OfferCard
                  start={inView}
                  innerRef={ref}
                  delay={delay}
                  header={header}
                  text={text}
                  img={img}
                  alt={alt}
                  width={width}
                  height={height}
                  key={header}
                />
              );
            }
          )}
        </CardsWrapperOffer>
      </OfferSection>

      <CountriesSection>
        <ContentWrapper>
          <CountriesTextWrapper>
            <CountriesSecHeader>
              Nasze projekty <br /> dotarły aż do <span>30 państw.</span>
            </CountriesSecHeader>
            <CountriesSecText>
              Dbamy o każdego klienta, dzięki czemu tworzymy relacje i rozwijamy
              się tak szybko. Nie zwalniamy tempa wciąż wdrażając innowacyjne
              metody produkcji, aby nasze produkty były stale na najwyższym
              poziomie.
            </CountriesSecText>
          </CountriesTextWrapper>

          <MapWrapper>
            <StyledImageMap src={"/HomePage/mapa.svg"} fill alt={"Map"} />
          </MapWrapper>
        </ContentWrapper>
      </CountriesSection>

      <ContactUsSection>
        <div>
          <InfoSecHeader whileInView={{ opacity: 1 }}>
            Usiądź wygodnie,
            <br /> a my się wszystkim zajmiemy.
          </InfoSecHeader>
          <Link href="/contact">
            <CtaBtn
              isbig="true"
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              whileHover={{
                backgroundColor: "rgb(246, 140, 30, .0)",
                color: "#f68c1e",
              }}
            >
              Skontaktuj się z nami
            </CtaBtn>
          </Link>
        </div>

        <FooterImageWrapper>
          <StyledFooterImage
            src={"/HomePage/kamcio_stopka1.webp"}
            alt={"cameleon chilling with a drink"}
            fill
            sizes="(max-width:1150px) 328px, 
            443px
            "
          ></StyledFooterImage>
        </FooterImageWrapper>
      </ContactUsSection>
    </>
  );
}
