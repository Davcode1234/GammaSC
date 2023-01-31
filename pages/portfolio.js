import Head from "next/head";
import React, { Fragment, useState } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";

import {
  ButtonsWrapper,
  PortfolioButton,
  PortfolioPage,
  CardsWrapper,
  ModalContentWrapper,
  TextWrapper,
} from "../styles/pages/Portfolio.styles";
import ModalComp from "../components/Modal/Modal";
import PortfolioWorkerModalContent from "../components/PortfolioWorkerModalContent/PortfolioWorkerModalContent";

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
    id: 0,
  },
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear2",
    product: "Bomberka Goodyear Racing 2",
    id: 1,
  },
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear3",
    product: "Bomberka Goodyear Racing 3",
    id: 2,
  },
  {
    img: "/PortfolioPage/goodyearJumper.png",
    alt: "Goodyear jumper",
    client: "Goodyear4",
    product: "Bomberka Goodyear Racing 4",
    id: 3,
  },
];

export default function Portfolio() {
  const [showModal, setShowModal] = useState();
  const [index, setIndex] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);
  const [animateSwipe, setAnimateSwipe] = useState("");
  const [leftDisabledBtn, setLeftDisabledBtn] = useState(false);
  const [rightDisabledBtn, setRightDisabledBtn] = useState(false);

  const onRequestClose = () => {
    setExitAnim(true);
    setTimeout(() => {
      setShowModal(false);
      setExitAnim(false);
    }, 500);
  };

  const increaseIndex = () => {
    setAnimateSwipe("left");
    setRightDisabledBtn(true);
    if (leftDisabledBtn) {
      setLeftDisabledBtn(false);
    }
    setTimeout(() => {
      if (index < 14) {
        setRightDisabledBtn(false);
      }
      setIndex((id) =>
        index < dummyPortData.length - 1 ? id + 1 : dummyPortData.length - 1
      );
      setAnimateSwipe("");
    }, 500);
  };

  const decreaseIndex = () => {
    setAnimateSwipe("right");
    setLeftDisabledBtn(true);
    if (rightDisabledBtn) {
      setRightDisabledBtn(false);
    }

    setTimeout(() => {
      if (index > 1) {
        setLeftDisabledBtn(false);
      }
      setIndex((id) => (index === 0 ? id : id - 1));
      setAnimateSwipe("");
    }, 500);
  };

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

      <ModalComp
        isModalOpen={showModal}
        onClose={onRequestClose}
        exitAnim={exitAnim}
        // leftDisabled={leftDisabledBtn}
        // rightDisabled={rightDisabledBtn}
        nextContent={() => increaseIndex()}
        prevContent={() => decreaseIndex()}
      >
        <PortfolioWorkerModalContent
          img={dummyPortData[index].img}
          client={dummyPortData[index].client}
          product={dummyPortData[index].product}
          alt={dummyPortData[index].alt}
          dir={animateSwipe}
        ></PortfolioWorkerModalContent>
      </ModalComp>

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
                click={() => {
                  setIndex(id);
                  setShowModal(true);
                }}
              ></PortfolioCard>
            );
          })}
        </CardsWrapper>
      </PortfolioPage>
    </>
  );
}
