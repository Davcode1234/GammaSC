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
} from "../styles/pages/Home.styles";
import InfoSecCard from "../components/InfoSecCard/InfoSecCard";
import Slider from "../components/Slider/Slider";
import { topImages, bottomImages } from "../components/Slider/Slider";
import OfferCard, { cardsContent } from "../components/OfferCard/OfferCard";

const infoSecCardData = [
  {
    number: 18,
    text: "lat doświadczenia",
    withPlus: true,
    id: 1,
  },
  {
    number: 36,
    text: "tysięcy ukończonych projektów",
    withPlus: true,
    id: 2,
  },
  {
    number: 29,
    text: "tysięcy wypitych filiżanek kawy",
    withPlus: true,
    id: 3,
  },
  {
    number: 50,
    text: "stałych klientów",
    withPlus: false,
    id: 4,
  },
];

export default function Home() {
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
          alt="Cameleon"
        />
        <DescriptionParagraph>
          Projektujemy, filmujemy, fotografujemy, drukujemy, tworzymy koncepcje
          promocyjne, a nawet produkujemy profesjonalną odzież sportową.
        </DescriptionParagraph>
        <BtnWrapper>
          <CtaBtn isBig>Zobacz nasze realizacje</CtaBtn>
          <StyledLink href="/contact">
            Skontaktuj się z nami{" "}
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
                number={card.number}
                text={card.text}
                addPlus={card.withPlus}
                key={card.id}
              ></InfoSecCard>
            );
          })}
        </CardsWrapper>

        <InfoTextWrapper>
          <InfoSmallPar>o nas</InfoSmallPar>
          <InfoSecHeader whileInView={{ opacity: 1 }}>
            Jesteśmy Agencją Reklamową <span>360°</span>
          </InfoSecHeader>
          <InfoSecContentPar>
            Działamy na rynku od 2004 r. Od początku dążyliśmy do stworzenia
            firmy reklamowej oferującej swoim Klientom kompleksową obsługę w
            zakresie reklamy, druku oraz rozwiązań internetowych.
          </InfoSecContentPar>
          <CtaBtn isBig>Dowiedz się więcej</CtaBtn>
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
          <InfoSecHeader>
            Usiądź wygodnie,
            <br /> a my się wszystkim zajmiemy.
          </InfoSecHeader>
          <CtaBtn isBig>Skontaktuj się z nami</CtaBtn>
        </div>
        <StyledFooterImage
          src={"/HomePage/kamcio_stopka1.svg"}
          width={443}
          height={391}
        ></StyledFooterImage>
      </ContactUsSection>
    </>
  );
}
