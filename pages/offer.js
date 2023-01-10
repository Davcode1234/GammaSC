import { useState } from "react";
import dynamic from "next/dynamic";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
const OfferPageCard = dynamic(
  () => import("../components/OfferPageCard/OfferPageCard"),
  { ssr: false }
);
import { AnimatePresence } from "framer-motion";
import {
  offerCardsData,
  offerButtons,
  offerHeaderData,
} from "../lib/offerData";
import {
  ButtonsWrapper,
  OfferButton,
  AnimationSlider,
} from "../styles/pages/Offer.styles";
import Head from "next/head";

export default function Offer() {
  const [tag, setTag] = useState("kreacja");
  const [contentTag, setContentTag] = useState("kreacja");
  const [slideAnim, setSlideAnim] = useState(false);
  const [exitVar, setExitVar] = useState(false);
  const [appear, setAppear] = useState(true);

  const originVal = exitVar ? "originX: 1" : "originX: 0";

  const slideOptions = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      originX: { originVal },
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      scaleX: 0,

      transition: { duration: 0.5 },
      originX: 1,
    },
  };

  const filteredData = offerCardsData.filter((card) => card.id === contentTag);

  const handleButtonClick = (btn) => {
    setTag(btn);
    setExitVar(false);
    setSlideAnim(true);
    setAppear(false);
    setTimeout(() => {
      setContentTag(btn);
      setExitVar(true);
      setSlideAnim(false);
      setAppear(true);
    }, 700);
  };
  return (
    <>
      <Head>
        <title>Gamma | Oferta</title>
        <meta
          name="keywords"
          content="Gamma oferta kreacja drukarnia fotografia sesja gadżety szwalnia sublimacja"
        ></meta>
      </Head>
      <SubpagesHeader
        headerSmall={offerHeaderData.headerSmall}
        headerBig={offerHeaderData.headerBig}
        text={offerHeaderData.text}
      ></SubpagesHeader>
      <AnimatePresence>
        {slideAnim && (
          <AnimationSlider
            variants={slideOptions}
            initial="hidden"
            animate="visible"
            exit="exit"
          ></AnimationSlider>
        )}
      </AnimatePresence>
      <ButtonsWrapper>
        {offerButtons.map((btn) => {
          {
            return tag === btn.buttonName ? (
              <OfferButton
                key={btn.id}
                isClicked={true}
                onClick={() => handleButtonClick(`${btn.buttonName}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.buttonName}
              </OfferButton>
            ) : (
              <OfferButton
                key={btn.id}
                onClick={() => handleButtonClick(`${btn.buttonName}`)}
                isClicked={false}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.buttonName}
              </OfferButton>
            );
          }
        })}
      </ButtonsWrapper>
      <OfferPageCard
        backgroundImg={"/OfferPage/offerbackground.jpg"}
        header={filteredData[0].title}
        text={filteredData[0].text}
        camImg={filteredData[0].img}
        width={filteredData[0].width}
        height={filteredData[0].height}
        alt={filteredData[0].alt}
        contentParagraph={filteredData[0].contentText}
        itemsArray={filteredData[0].items}
        appear={appear}
      ></OfferPageCard>
    </>
  );
}
