import Head from "next/head";
import Image from "next/image";
import {
  WelcomSection,
  DescriptionParagraph,
  CtaBtn,
  BtnWrapper,
  StyledLink,
} from "../styles/pages/Home.styles";

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
    </>
  );
}
