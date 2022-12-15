import { Fragment, useState } from "react";
import dynamic from "next/dynamic";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
const OfferPageCard = dynamic(
  () => import("../components/OfferPageCard/OfferPageCard"),
  { ssr: false }
);
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
      contentText: (
        <Fragment>
          Zajmujemy się całością prac związanych z wykonaniem materiałów
          reklamowych, budujących tożsamość firmy. Zaczynając od projektu,
          poprzez kreację, skład, a kończąc na druku i wysyłce. Od małych
          produkcji - poprzez usługi nietypowe - do dużych nakładów.
          <div>
            <span>
              Nasze usługi w dziedzinie kreacji i składu DTP obejmują:
            </span>
          </div>
        </Fragment>
      ),

      items: [
        {
          listItem:
            "projektowanie spójnych wizerunkowo materiałów reklamowych i promocyjnych,",
          id: 1,
        },
        {
          listItem:
            "profesjonalne przygotowanie do druku wszelkich materiałów poligraficznych,",
          id: 2,
        },
        {
          listItem:
            "projekt i druk różnego rodzaju materiałówwielkoformatowych: banerów, roll-upów, plakatów",
          id: 3,
        },
        {
          listItem: "kompleksową obsługę DTP",
          id: 4,
        },
      ],
    },
    {
      title: "Drukarnia",
      text: "Nasze druki som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-1.png",
      width: 390,
      height: 490,
      alt: "Gamma cameleon in carpet",
      id: "drukarnia",
      contentText: (
        <Fragment>
          Druki druki dupa test mhm hmh nietypowe rozwiązania druk laserowy i
          wszystko laser robi wzium wzium tak właśnie zczaj to gościu ;) my sie
          zimy nie boimy chyba że jest ślisko no to troche musze jeszcze troche
          dopisać żeby było super fajnie
          <div>
            <span>
              Nasze usługi druku obejmują sublimację laserowo grzbietowaną:
            </span>
          </div>
        </Fragment>
      ),

      items: [
        {
          listItem:
            "pierwszy list item który musi mieć tak z parenaście słów żeby width był dobry,",
          id: 1,
        },
        {
          listItem:
            "drugi list item który musi mieć tak z parenaście słów żeby width był dobry,",
          id: 2,
        },
        {
          listItem:
            "trzeci list item który musi mieć tak z parenaście słów żeby width był dobry",
          id: 3,
        },
        {
          listItem: "czwarty troche krótszy",
          id: 4,
        },
      ],

      // listItem:
      //   "pierwszy list item który musi mieć tak z parenaście słów żeby width był dobry,",

      // listItem:
      //   "drugi list item który musi mieć tak z parenaście słów żeby width był dobry,",

      // listItem:
      //   "trzeci list item który musi mieć tak z parenaście słów żeby width był dobry",

      // listItem: "czwarty troche krótszy",
    },
    {
      title: "Fotografia",
      text: "Nasze foty som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-6.png",
      width: 400,
      height: 490,
      alt: "Gamma cameleon standing on his head taking photos",
      id: "fotografia",
      contentText: (
        <Fragment>
          Zajmujemy się całością prac związanych z wykonaniem materiałów
          reklamowych, budujących tożsamość firmy. Zaczynając od projektu,
          poprzez kreację, skład, a kończąc na druku i wysyłce. Od małych
          produkcji - poprzez usługi nietypowe - do dużych nakładów.
          <div>
            <span>
              Nasze usługi w dziedzinie kreacji i składu DTP obejmują:
            </span>
          </div>
        </Fragment>
      ),

      items: [
        {
          listItem:
            "projektowanie spójnych wizerunkowo materiałów reklamowych i promocyjnych,",
          id: 1,
        },
        {
          listItem:
            "profesjonalne przygotowanie do druku wszelkich materiałów poligraficznych,",
          id: 2,
        },
        {
          listItem:
            "projekt i druk różnego rodzaju materiałówwielkoformatowych: banerów, roll-upów, plakatów",
          id: 3,
        },
        {
          listItem: "kompleksową obsługę DTP",
          id: 4,
        },
      ],
    },
    {
      title: "Gadżety",
      text: "Nasze gadzety som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-4.png",
      width: 390,
      height: 480,
      alt: "Gamma cameleon in Gamma t-shirt with glasses on",
      id: "gadżety",
      contentText: (
        <Fragment>
          Zajmujemy się całością prac związanych z wykonaniem materiałów
          reklamowych, budujących tożsamość firmy. Zaczynając od projektu,
          poprzez kreację, skład, a kończąc na druku i wysyłce. Od małych
          produkcji - poprzez usługi nietypowe - do dużych nakładów.
          <div>
            <span>
              Nasze usługi w dziedzinie kreacji i składu DTP obejmują:
            </span>
          </div>
        </Fragment>
      ),

      items: [
        {
          listItem:
            "projektowanie spójnych wizerunkowo materiałów reklamowych i promocyjnych,",
          id: 1,
        },
        {
          listItem:
            "profesjonalne przygotowanie do druku wszelkich materiałów poligraficznych,",
          id: 2,
        },
        {
          listItem:
            "projekt i druk różnego rodzaju materiałówwielkoformatowych: banerów, roll-upów, plakatów",
          id: 3,
        },
        {
          listItem: "kompleksową obsługę DTP",
          id: 4,
        },
      ],
    },
    {
      title: "Szwalnia",
      text: "Nasze szycie som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-5.png",
      width: 390,
      height: 480,
      alt: "Gamma cameleon showing his gadgets under coat",
      id: "szwalnia",
      contentText: (
        <Fragment>
          Zajmujemy się całością prac związanych z wykonaniem materiałów
          reklamowych, budujących tożsamość firmy. Zaczynając od projektu,
          poprzez kreację, skład, a kończąc na druku i wysyłce. Od małych
          produkcji - poprzez usługi nietypowe - do dużych nakładów.
          <div>
            <span>
              Nasze usługi w dziedzinie kreacji i składu DTP obejmują:
            </span>
          </div>
        </Fragment>
      ),
      items: [
        {
          listItem:
            "projektowanie spójnych wizerunkowo materiałów reklamowych i promocyjnych,",
          id: 1,
        },
        {
          listItem:
            "profesjonalne przygotowanie do druku wszelkich materiałów poligraficznych,",
          id: 2,
        },
        {
          listItem:
            "projekt i druk różnego rodzaju materiałówwielkoformatowych: banerów, roll-upów, plakatów",
          id: 3,
        },
        {
          listItem: "kompleksową obsługę DTP",
          id: 4,
        },
      ],
    },
    {
      title: "Sublimacja",
      text: "Nasze sublimacje som wporzo i dobre jakość tak jest o tak",
      img: "/HomePage/cameleons/KameleonObszar-kompozycji-3.png",
      width: 380,
      height: 480,
      alt: "Gamma cameleon with a needle looking for something",
      id: "sublimacja",
      contentText: (
        <Fragment>
          Zajmujemy się całością prac związanych z wykonaniem materiałów
          reklamowych, budujących tożsamość firmy. Zaczynając od projektu,
          poprzez kreację, skład, a kończąc na druku i wysyłce. Od małych
          produkcji - poprzez usługi nietypowe - do dużych nakładów.
          <div>
            <span>
              Nasze usługi w dziedzinie kreacji i składu DTP obejmują:
            </span>
          </div>
        </Fragment>
      ),

      items: [
        {
          listItem:
            "projektowanie spójnych wizerunkowo materiałów reklamowych i promocyjnych,",
          id: 1,
        },
        {
          listItem:
            "profesjonalne przygotowanie do druku wszelkich materiałów poligraficznych,",
          id: 2,
        },
        {
          listItem:
            "projekt i druk różnego rodzaju materiałówwielkoformatowych: banerów, roll-upów, plakatów",
          id: 3,
        },
        {
          listItem: "kompleksową obsługę DTP",
          id: 4,
        },
      ],
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
        contentParagraph={filteredData[0].contentText}
        itemsArray={filteredData[0].items}
      ></OfferPageCard>
    </>
  );
}
