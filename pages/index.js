import Head from "next/head";
import Image from "next/image";
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
  StyledBtnText,
} from "../styles/pages/Home.styles";
import InfoSecCard from "../components/InfoSecCard/InfoSecCard";
import Slider from "../components/Slider/Slider";
import { topImages, bottomImages } from "../components/Slider/Slider";
import OfferCard, { cardsContent } from "../components/OfferCard/OfferCard";
import { useInView } from "react-intersection-observer";
import Link from "next/link";
import { useEffect, useState } from "react";

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
    translateY: 200,
  },
  visible: {
    opacity: 1,
    translateY: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 0.4,
      delay: 0.2,
    },
  },
};

const btnOptions = {
  hidden: {
    opacity: 0,
    translateX: -200,
  },
  visible: {
    opacity: 1,
    translateX: 0,

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
      delay: 1.7,
    },
  },
};

export default function Home() {
  const [ref, inView] = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

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
          {infoSecCardData.map((card) => {
            return (
              <InfoSecCard
                text={card.text}
                addPlus={card.withPlus}
                key={card.id}
                stopInterval={card.intervalTime}
              ></InfoSecCard>
            );
          })}
        </CardsWrapper>

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
      </InfoSec>

      <PartnersSec>
        <PartnersTextWrapper>
          <InfoSmallPar>Nasi klienci</InfoSmallPar>
          <PartnersSecHeader>
            Stworzyliśmy dla nich <span>wiele niezwykłych</span> kreacji
          </PartnersSecHeader>
        </PartnersTextWrapper>
        <Slider position={"left"} imgArr={topImages}></Slider>
        <Slider position={"right"} imgArr={bottomImages}></Slider>
      </PartnersSec>

      <OfferSection>
        <PartnersTextWrapper>
          <InfoSmallPar>nasza oferta</InfoSmallPar>
          <OfferSecHeader>
            Zobacz, co możemy <span>dla Ciebie</span> zrobić:
          </OfferSecHeader>
        </PartnersTextWrapper>
        <OfferCardsGrid>
          {cardsContent.map((card) => {
            return (
              <OfferCard
                start={animated}
                delay={card.delay}
                innerRef={ref}
                header={card.header}
                text={card.text}
                img={card.img}
                alt={card.alt}
                width={card.width}
                height={card.height}
                key={card.header}
              />
            );
          })}
        </OfferCardsGrid>
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

          <StyledImageMap
            src={"/HomePage/mapa.svg"}
            width={1000}
            height={565}
            alt={"Map"}
          />
        </ContentWrapper>
      </CountriesSection>

      <ContactUsSection>
        <div>
          <InfoSecHeader whileInView={{ opacity: 1 }}>
            Usiądź wygodnie,
            <br /> a my się wszystkim zajmiemy.
          </InfoSecHeader>
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
        </div>
        <StyledFooterImage
          src={"/HomePage/kamcio_stopka1.svg"}
          width={443}
          height={391}
          alt={"cameleon chilling with a drink"}
        ></StyledFooterImage>
      </ContactUsSection>
    </>
  );
}
