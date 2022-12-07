import { Fragment, useState, useRef } from "react";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import OfferPageCard from "../components/OfferPageCard/OfferPageCard";
import { ButtonsWrapper, OfferButton } from "../styles/pages/Offer.styles";

export default function Offer() {
  const [tag, setTag] = useState("kreacja");

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
    { buttonName: "hafciarnia", id: 7 },
  ];

  const tstes = (btn) => {
    setTag(btn);
    console.log(btn);
  };
  return (
    <>
      <SubpagesHeader
        headerSmall={offerData.headerSmall}
        headerBig={offerData.headerBig}
        text={offerData.text}
      ></SubpagesHeader>
      <ButtonsWrapper>
        {buttons.map((btn) => {
          {
            return tag === btn.buttonName ? (
              <OfferButton
                key={btn.id}
                isClicked={true}
                onClick={() => tstes(`${btn.buttonName}`)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {btn.buttonName}
              </OfferButton>
            ) : (
              <OfferButton
                key={btn.id}
                onClick={() => tstes(`${btn.buttonName}`)}
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
      ></OfferPageCard>
    </>
  );
}
