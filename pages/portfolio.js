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
import ModalComp from "../components/Modal/Modal";
import PortfolioWorkerModalContent from "../components/PortfolioWorkerModalContent/PortfolioWorkerModalContent";
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
  { buttonName: "Digital", id: 1 },
  { buttonName: "Poligrafia", id: 2 },
  { buttonName: "Fotografia", id: 3 },
  { buttonName: "Multimedia", id: 4 },
  { buttonName: "Gadżety", id: 5 },
  { buttonName: "Szwalnia", id: 6 },
];

export async function getStaticProps() {
  const client = createClient({
    space: process.env.NEXT_PUBLIC_SPACE_ID,
    accessToken: process.env.NEXT_PUBLIC_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: "digital" });

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
  const [tag, setTag] = useState("digital");
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
          img={`https:${cards[index].fields.image.fields.file.url}`}
          client={cards[index].fields.company}
          product={cards[index].fields.product}
          alt={"test"}
          dir={animateSwipe}
        ></PortfolioWorkerModalContent>
      </ModalComp>

      <PortfolioPage>
        <ButtonsWrapper>
          {portfolioButtons.map(({ buttonName, id }) => {
            return (
              <PortfolioButton key={id} onClick={() => setTag("poligrafia")}>
                {buttonName}
              </PortfolioButton>
            );
          })}
        </ButtonsWrapper>

        <CardsWrapper>
          {cards.map((card, index) => {
            return (
              <PortfolioCard
                key={card.sys.id}
                card={card}
                click={() => {
                  setIndex(index);
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

Portfolio.propTypes = {
  cards: PropTypes.array,
};
