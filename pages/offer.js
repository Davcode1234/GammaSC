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
  const {
    title,
    text,
    img,
    width,
    height,
    headerXdim,
    alt,
    contentText,
    items,
  } = filteredData[0];

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
        {offerButtons.map(({ buttonName, id }) => {
          {
            return tag === buttonName ? (
              <OfferButton
                key={id}
                isclicked="true"
                onClick={() => handleButtonClick(`${buttonName}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonName}
              </OfferButton>
            ) : (
              <OfferButton
                key={id}
                onClick={() => handleButtonClick(`${buttonName}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {buttonName}
              </OfferButton>
            );
          }
        })}
      </ButtonsWrapper>
      <OfferPageCard
        backgroundImg={"/OfferPage/offerbackground.jpg"}
        header={title}
        text={text}
        camImg={img}
        width={width}
        height={height}
        translateVal={headerXdim}
        alt={alt}
        contentParagraph={contentText}
        itemsArray={items}
        appear={appear}
      ></OfferPageCard>
    </>
  );
}
