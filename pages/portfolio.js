import Head from "next/head";
import React, { Fragment, useState } from "react";
import PortfolioCard from "../components/PortfolioCard/PortfolioCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import {
  ButtonsWrapper,
  PortfolioPage,
  CardsWrapper,
} from "../styles/pages/Portfolio.styles";
import ModalComp from "../components/Modal/Modal";
import PortfolioWorkerModalContent from "../components/PortfolioWorkerModalContent/PortfolioWorkerModalContent";
import CardChooseBtn from "../components/CardChooseBtn/CardChooseBtn";
import { createClient } from "contentful";
import PropTypes from "prop-types";

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
  { buttonName: "digital", id: 1 },
  { buttonName: "poligrafia", id: 2 },
  { buttonName: "fotografia", id: 3 },
  { buttonName: "multimedia", id: 4 },
  { buttonName: "gadżety", id: 5 },
  { buttonName: "szwalnia", id: 6 },
];

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "portfolio" });
  return {
    props: {
      cards: res.items,
    },
    revalidate: 1,
  };
}
export default function Portfolio({ cards }) {
  const [showModal, setShowModal] = useState();
  const [index, setIndex] = useState(0);
  const [btnTag, setBtnTag] = useState("digital");
  const [tag, setTag] = useState("digital");
  const [exitAnim, setExitAnim] = useState(false);
  const [cardsExit, setCardsExit] = useState(false);
  const [animateSwipe, setAnimateSwipe] = useState("");
  const [leftDisabledBtn, setLeftDisabledBtn] = useState(false);
  const [rightDisabledBtn, setRightDisabledBtn] = useState(false);

  const filteredCards = cards.filter((card) =>
    card.fields.offerType.includes(tag)
  );

  const onRequestClose = () => {
    setExitAnim(true);
    setLeftDisabledBtn(false);
    setRightDisabledBtn(false);
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
      if (index < filteredCards.length - 2) {
        setRightDisabledBtn(false);
        console.log("enabled");
      }
      setIndex((id) => (index < cards.length - 1 ? id + 1 : cards.length - 1));
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

  const handleButtonClick = (btn) => {
    setCardsExit(true);
    setBtnTag(btn);

    setTimeout(() => {
      setTag(btn);
      setCardsExit(false);
    }, 600);
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
        leftDisabled={leftDisabledBtn}
        rightDisabled={rightDisabledBtn}
        nextContent={() => increaseIndex()}
        prevContent={() => decreaseIndex()}
        portfolio={true}
      >
        <PortfolioWorkerModalContent
          card={filteredCards[index > 0 ? index - 1 : index]}
          dir={animateSwipe}
        ></PortfolioWorkerModalContent>
        <PortfolioWorkerModalContent
          card={filteredCards[index]}
          dir={animateSwipe}
        ></PortfolioWorkerModalContent>
        <PortfolioWorkerModalContent
          card={
            filteredCards[index < filteredCards.length - 1 ? index + 1 : index]
          }
          dir={animateSwipe}
        ></PortfolioWorkerModalContent>
      </ModalComp>

      <PortfolioPage>
        <ButtonsWrapper>
          <CardChooseBtn
            btnsArr={portfolioButtons}
            click={handleButtonClick}
            tag={btnTag}
          ></CardChooseBtn>
        </ButtonsWrapper>

        <CardsWrapper>
          {filteredCards.map((card, index) => {
            return (
              <PortfolioCard
                key={card.sys.id}
                card={card}
                click={() => {
                  setIndex(index);
                  setShowModal(true);
                }}
                exit={cardsExit}
              ></PortfolioCard>
            );
          })}
        </CardsWrapper>
      </PortfolioPage>
    </>
  );
}

Portfolio.propTypes = {
  cards: PropTypes.array,
};
