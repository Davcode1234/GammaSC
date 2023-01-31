import Head from "next/head";
import React, { Fragment, useState } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";

import {
  ButtonsWrapper,
  PortfolioButton,
  PortfolioPage,
  CardsWrapper,
} from "../styles/pages/Portfolio.styles";

const portfolioSubHeaderData = {
  headerSmall: "portfolio",
  headerBig: (
    <Fragment>
      To tylko niektóre z <span>wielu naszych prac</span>, z których jesteśmy
      dumni.
    </Fragment>
  ),
  text: "",
};

export const portfolioButtons = [
  { buttonName: "Digital", id: 1 },
  { buttonName: "Poligrafia", id: 2 },
  { buttonName: "Fotografia", id: 3 },
  { buttonName: "Multimedia", id: 4 },
  { buttonName: "Gadżety", id: 5 },
  { buttonName: "Szwalnia", id: 6 },
];

export const dummyPortData = [
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear1",
    product: "Bomberka Goodyear Racing 1",
    id: 1,
  },
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear2",
    product: "Bomberka Goodyear Racing 2",
    id: 2,
  },
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear3",
    product: "Bomberka Goodyear Racing 3",
    id: 3,
  },
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear4",
    product: "Bomberka Goodyear Racing 4",
    id: 4,
  },
];

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Gamma | Portfolio</title>
        <meta
          name="keywords"
          content="Gamma portfolio goodyear shell multimedia szwalnia grafika fotografia gadżety"
        ></meta>
      </Head>

      <SubpagesHeader
        headerBig={portfolioSubHeaderData.headerBig}
        headerSmall={portfolioSubHeaderData.headerSmall}
        text={portfolioSubHeaderData.text}
      ></SubpagesHeader>

      <PortfolioPage>
        <ButtonsWrapper>
          {portfolioButtons.map(({ buttonName, id }) => {
            return <PortfolioButton key={id}>{buttonName}</PortfolioButton>;
          })}
        </ButtonsWrapper>

        <CardsWrapper>
          {dummyPortData.map(({ img, alt, client, product, id }) => {
            return (
              <PortfolioCard
                key={id}
                img={img}
                alt={alt}
                client={client}
                product={product}
                id={id}
              ></PortfolioCard>
            );
          })}
        </CardsWrapper>
      </PortfolioPage>
    </>
  );
}
