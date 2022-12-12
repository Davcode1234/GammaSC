import { Fragment, useState } from "react";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import OfferPageCard from "../components/OfferPageCard/OfferPageCard";
import { AnimatePresence } from "framer-motion";

import {
  ButtonsWrapper,
  OfferButton,
  AnimationSlider,
} from "../styles/pages/Offer.styles";

export default function Offer() {
  const [tag, setTag] = useState("kreacja");
  const [contentTag, setContentTag] = useState("kreacja");
  const [slideAnim, setSlideAnim] = useState(false);
  const [exitVar, setExitVar] = useState(false);

  const originVal = exitVar ? "originX: 1" : "originX: 0";

  const slideOptions = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      type: "spring",
      scaleX: 1,
      originX: { originVal },
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      type: "spring",
      scaleX: 0,
      transition: { duration: 0.5 },
      originX: 1,
    },
  };

  const testData = [
    {
      title: "Kreacja",
      text: "Tworzymy niezwykłe kreacje, które zapadają w pamięci",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-2.png",
      width: 300,
      height: 540,
      alt: "Gamma cameleon with can of farb",
      id: "kreacja",
    },
    {
      title: "Drukarnia",
      text: "Nasze druki som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-1.png",
      width: 390,
      height: 490,
      alt: "Gamma cameleon in carpet",
      id: "drukarnia",
    },
    {
      title: "Fotografia",
      text: "Nasze foty som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-6.png",
      width: 400,
      height: 490,
      alt: "Gamma cameleon standing on his head taking photos",
      id: "fotografia",
    },
    {
      title: "Gadżety",
      text: "Nasze gadzety som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-4.png",
      width: 390,
      height: 480,
      alt: "Gamma cameleon in Gamma t-shirt with glasses on",
      id: "gadżety",
    },
    {
      title: "Szwalnia",
      text: "Nasze szycie som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-5.png",
      width: 390,
      height: 480,
      alt: "Gamma cameleon showing his gadgets under coat",
      id: "szwalnia",
    },
    {
      title: "Sublimacja",
      text: "Nasze sublimacje som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-3.png",
      width: 380,
      height: 480,
      alt: "Gamma cameleon with a needle looking for something",
      id: "sublimacja",
    },
  ];

  const filteredData = testData.filter((card) => card.id === contentTag);

  const offerData = {
    headerSmall: "oferta",
    headerBig: (
      <Fragment>
        Oferta naszej agencji to <span>nielimitowane możliwości.</span>
      </Fragment>
    ),
    text: "Lorem ipsum dolor sit amet consectetur. Tristique in pulvinar risus pretium tortor. Gravida odio maecenas hendrerit eu bibendum lobortis vitae commodo phasellus.",
  };

  const buttons = [
    { buttonName: "kreacja", id: 1 },
    { buttonName: "drukarnia", id: 2 },
    { buttonName: "fotografia", id: 3 },
    { buttonName: "gadżety", id: 4 },
    { buttonName: "szwalnia", id: 5 },
    { buttonName: "sublimacja", id: 6 },
    // { buttonName: "hafciarnia", id: 7 },
  ];

  const handleButtonClick = (btn) => {
    setTag(btn);
    setExitVar(false);
    setSlideAnim(true);
    setTimeout(() => {
      setContentTag(btn);
      setExitVar(true);
      setSlideAnim(false);
    }, 700);
  };
  return (
    <>
      <SubpagesHeader
        headerSmall={offerData.headerSmall}
        headerBig={offerData.headerBig}
        text={offerData.text}
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
        {buttons.map((btn) => {
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
      ></OfferPageCard>
    </>
  );
}