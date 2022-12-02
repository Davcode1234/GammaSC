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
} from "../styles/pages/Home.styles";
import InfoSecCard from "../components/InfoSecCard/InfoSecCard";
import Slider from "../components/Slider/Slider";

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
    id: 1,
  },
  {
    number: 29,
    text: "tysięcy wypitych filiżanek kawy",
    withPlus: true,
    id: 1,
  },
  {
    number: 50,
    text: "stałych klientów",
    withPlus: false,
    id: 1,
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
        ></Image>

        <DescriptionParagraph>
          Projektujemy, filmujemy, fotografujemy, drukujemy, tworzymy koncepcje
          promocyjne, a nawet produkujemy profesjonalną odzież sportową.
        </DescriptionParagraph>
        <BtnWrapper>
          <CtaBtn isBig>Zobacz nasze realizacje</CtaBtn>
          <StyledLink href="#">Skontaktuj się z nami</StyledLink>
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
          <InfoSecHeader>
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
        <Slider position={"left"}></Slider>
        <Slider position={"right"}></Slider>
      </PartnersSec>
    </>
  );
}
