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
import { ButtonsWrapper, AnimationSlider } from "../styles/pages/Offer.styles";
import Head from "next/head";
import { offerType } from "../components/OfferCard/OfferCard";
import useWindowSize from "../hooks/useWindowSize";
import CardChooseBtn from "../components/CardChooseBtn/CardChooseBtn";

export default function Offer() {
  const [tag, setTag] = useState(offerType.offer.toLowerCase());
  const [contentTag, setContentTag] = useState(offerType.offer.toLowerCase());
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
    mobileWidth,
    mobileHeight,
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

  const isMobile = useWindowSize(750);

  const CamWidth = isMobile ? mobileWidth : width;
  const CamHeight = isMobile ? mobileHeight : height;

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
        <CardChooseBtn
          btnsArr={offerButtons}
          click={handleButtonClick}
          tag={tag}
        ></CardChooseBtn>
      </ButtonsWrapper>
      <OfferPageCard
        backgroundImg={"/OfferPage/offerbackground.jpg"}
        header={title}
        text={text}
        camImg={img}
        width={CamWidth}
        height={CamHeight}
        translateVal={headerXdim}
        alt={alt}
        contentParagraph={contentText}
        itemsArray={items}
        appear={appear}
      ></OfferPageCard>
    </>
  );
}
