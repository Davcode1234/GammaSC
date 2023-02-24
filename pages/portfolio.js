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
import useModal from "../hooks/useModal";
import Skeleton from "../components/Skeleton/Skeleton";

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
  const [btnTag, setBtnTag] = useState("digital");
  const [tag, setTag] = useState("digital");
  const [cardsExit, setCardsExit] = useState(false);

  const filteredCards = cards.filter((card) =>
    card.fields.offerType.includes(tag)
  );
  const {
    showModal,
    index,
    exitAnim,
    animateSwipe,
    leftDisabledBtn,
    rightDisabledBtn,
    modalEl,
    increaseIndex,
    decreaseIndex,
    onRequestClose,
    handleKeyEvents,
    openModal,
    disableSides,
  } = useModal(filteredCards);

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
        onAfterOpen={() => modalEl.current && modalEl.current.focus()}
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
          keyDown={handleKeyEvents}
          forwardRef={modalEl}
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

        {!cards ? (
          <Skeleton></Skeleton>
        ) : (
          <CardsWrapper>
            {filteredCards.map((card, index) => {
              return (
                <PortfolioCard
                  key={card.sys.id}
                  card={card}
                  click={() => {
                    openModal(index, card.fields.product);
                    disableSides();
                  }}
                  exit={cardsExit}
                ></PortfolioCard>
              );
            })}
          </CardsWrapper>
        )}
      </PortfolioPage>
    </>
  );
}

Portfolio.propTypes = {
  cards: PropTypes.array,
};
