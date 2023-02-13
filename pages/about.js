import Head from "next/head";
import { Fragment, useRef, useState } from "react";
import AboutWorkerCard from "../components/AboutWorkerCard/AboutWorkerCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import {
  CompanyImagesSection,
  ContentSec,
  CarouselImageWrapper,
  CarouselStyledImg,
  TeamContainer,
  ScrollBar,
  ScrollBardContainer,
} from "../styles/pages/About.styles";
import { AnimatePresence } from "framer-motion";
import VerticalScroll from "../components/VerticalScroll/VerticalScroll";
import ModalComp from "../components/Modal/Modal";
import AboutWorkerModalContent from "../components/AboutWorkerModalContent/AboutWorkerModalContent";

const AboutCardsData = [
  {
    img: "/AboutPage/Gamma_Jaromir-min.jpg",
    name: "Jaromir",
    position: "CEO",
    text: (
      <Fragment>
        To on panuje nad nowym porządkiem w Gammie i nad naszymi wypłatami.
        <br />
        <br />
        Miłośnik jazdy na rowerze, pływania, podróżowania i uniwersum Star Wars.
        Niekończący się optymista, który pała miłością do szarlotek.
      </Fragment>
    ),
    id: 0,
  },
  {
    img: "/AboutPage/Gamma_Aleksander-min.jpg",
    name: "Aleksander",
    position: "Vice",
    text: (
      <Fragment>
        To on panuje nad nowym porządkiem w Gammie i nad naszymi wypłatami.
        <br />
        <br />
        Miłośnik jazdy na rowerze, pływania, podróżowania i uniwersum Star Wars.
        Niekończący się optymista, który pała miłością do szarlotek.
      </Fragment>
    ),
    id: 1,
  },
  {
    img: "/AboutPage/Gamma_Elżbieta-min.jpg",
    name: "Elżbieta",
    position: "Creative director",
    text: (
      <Fragment>
        Oaza spokoju, miłośniczka Tai Chi i dobrej literatury.
      </Fragment>
    ),
    id: 2,
  },
  {
    img: "/AboutPage/Gamma_Beata-min.jpg",
    name: "Beata",
    position: "Senior Graphic Designer",
    text: (
      <Fragment>
        Największa fanka Stephena Kinga to z pewnością Beatka.
        <br />
        <br />
        Jej drugim domem jest słoneczna Chorwacja, a każdą wolną chwilę spędza w
        swoim ogrodzie.
      </Fragment>
    ),
    id: 3,
  },
  {
    img: "/AboutPage/Gamma_Jerzy-min.jpg",
    name: "Jurek",
    position: "Customer Service",
    text: (
      <Fragment>
        Maratończyk pełną piersią. Biega tak dużo i często, że reszta zespołu
        tego nie musi robić.
      </Fragment>
    ),
    id: 4,
  },
  {
    img: "/AboutPage/Gamma_Anna-min.jpg",
    name: "Anna",
    position: "Sales Specialist",
    text: (
      <Fragment>
        Pierwsze co się słyszy po wejściu do firmy to właśnie śmiech Ani.
        <br />
        <br />
        Potrafi wprowadzić w dobry nastrój największego (smutasa?). Kobieta od
        zadań niemożliwych -
      </Fragment>
    ),
    id: 5,
  },
  {
    img: "/AboutPage/Gamma_Aleksandra.png",
    name: "Aleksandra",
    position: "Sales Specialist",
    text: (
      <Fragment>
        To on panuje nad nowym porządkiem w Gammie i nad naszymi wypłatami.
        <br />
        <br />
        Miłośnik jazdy na rowerze, pływania, podróżowania i uniwersum Star Wars.
        Niekończący się optymista, który pała miłością do szarlotek.
      </Fragment>
    ),
    id: 6,
  },
  {
    img: "/AboutPage/Gamma_Joanna-min.jpg",
    name: "Joanna",
    position: "Sales Specialist",
    text: (
      <Fragment>
        Jedna z członkiń Grupy Chichotek. Nie może usiedzieć na miejscu i często
        można ją spotkać na różnych górskich szlakach.
      </Fragment>
    ),
    id: 7,
  },
  {
    img: "/AboutPage/Gamma_Edyta-min.jpg",
    name: "Edyta",
    position: "Senior Graphic Designer",
    text: (
      <Fragment>
        Sprawuje władzę nad grafikami. Zarządza nimi lepiej niż niejeden
        program.
        <br />
        <br />
        Gra w planszówki, wchłania jabłka i marzy o szybkim wynalezieniu
        teleportacji, żeby móc łatwiej podróżować.
      </Fragment>
    ),
    id: 8,
  },
  {
    img: "/AboutPage/Gamma_Damian-min.jpg",
    name: "Damian",
    position: "Web Developer",
    text: (
      <Fragment>
        Najszybsza osoba w naszym zespole. Wiecznie w biegu by pomóc komuś w
        potrzebie.
        <br />
        <br />
        Jeśli ktoś chce go znaleźć wystarczy, że zawoła - Co dzisiaj jemy?. Spec
        od kabelków, cyferek z Matrixa i...
      </Fragment>
    ),
    id: 9,
  },
  {
    img: "/AboutPage/Gamma_Sebastian-min.jpg",
    name: "Sebastian",
    position: "Senior Graphic Designer",
    text: (
      <Fragment>
        Człowiek-Gadżet to mało powiedziane.
        <br />
        <br />
        Ożywia się na słowa dron i ledy. Koneser dobrej kawusi oraz tureckiego
        kina. Ciągle gdzieś lata z aparatem i ze swoim zapasem napojów Oshee.
      </Fragment>
    ),
    id: 10,
  },
  {
    img: "/AboutPage/Gamma_Gabriela-min.jpg",
    name: "Gabriela",
    position: "Graphic Designer / Ilustrator",
    text: (
      <Fragment>
        Zakręcona na punkcie gier RPG, fantastyki i mitologii Lovecrafta.
        <br />
        <br />
        Najchętniej całe dnie spędzałaby na rysowaniu i wymyślaniu historii do
        czego tylko popadnie. Zbiera koszulki z OtherTees jak pokemony.
      </Fragment>
    ),
    id: 11,
  },

  {
    img: "/AboutPage/Gamma_Weronika-min.jpg",
    name: "Weronika",
    position: "Graphic Designer",
    text: (
      <Fragment>
        Gdyby to było możliwe zaadaptowałaby Demodoga. W końcu to takie słodkie
        stworzonko.
        <br />
        <br />
        Ma słabość do pistacjowego latte, gofrów oraz wszystkiego co jest
        związane z Alicją w Krainie Czarów.
      </Fragment>
    ),
    id: 12,
  },
  {
    img: "/AboutPage/Gamma_Marta-min.jpg",
    name: "Marta",
    position: "Senior Graphic Designer",
    text: (
      <Fragment>
        Cicha i spokojna, lecz kreatywna dusza. Kocha naturę, a w szczególności
        kwiaty.
      </Fragment>
    ),
    id: 13,
  },
  {
    img: "/AboutPage/Gamma_Kamil-min.jpg",
    name: "Kamil",
    position: "Junior Graphic Designer",
    text: (
      <Fragment>
        Nie rozstaje się ze swoimi słuchawkami.
        <br />
        <br />
        Bębni na perkusji i stopami pod biurkiem jakby dawał koncert na Wembley.
        Po godzinach prowadzi sesje RPG i potajemnie pałaszuje marynowane
        cukinie.
      </Fragment>
    ),
    id: 14,
  },

  {
    img: "/AboutPage/Gamma_Panrysiu-min.jpg",
    name: "Pan Rysiu",
    position: "Head of engineer",
    text: (
      <Fragment>
        Nasz wybawiciel i złota rączka w jednym.
        <br />
        <br />
        Potrafi zrobić wszystko od naprawienia drzwi po przywiezienie pysznych
        zapiekanek dla głodnych pracowników.
      </Fragment>
    ),
    id: 15,
  },
];

const carouselImages = [
  {
    src: "/AboutPage/BottomSec/o_nas_1.webp",
    id: 1,
  },
  {
    src: "/AboutPage/BottomSec/o_nas_1.webp",
    id: 2,
  },
  {
    src: "/AboutPage/BottomSec/o_nas_1.webp",
    id: 3,
  },
  {
    src: "/AboutPage/BottomSec/o_nas_1.webp",
    id: 4,
  },
  {
    src: "/AboutPage/BottomSec/o_nas_1.webp",
    id: 5,
  },
  {
    src: "/AboutPage/BottomSec/o_nas_1.webp",
    id: 6,
  },
];

const cardsVariants = {
  closed: {
    transition: {
      type: "spring",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const aboutSubHeaderData = {
  headerSmall: "o nas",
  headerBig: (
    <Fragment>
      Kreatywni, <span>nieszablonowi</span> <br />i otwarci na nowe wyzwania.
    </Fragment>
  ),
  text: "Lorem ipsum dolor sit amet consectetur. Ipsum arcu congue volutpat risus in congue nunc nunc tortor. At dui sed ultricies adipiscing. Placerat duis egestas diam pellentesque sit cras dolor a.",
};

export default function About() {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);
  const [animateSwipe, setAnimateSwipe] = useState("");
  const [leftDisabledBtn, setLeftDisabledBtn] = useState(false);
  const [rightDisabledBtn, setRightDisabledBtn] = useState(false);
  const [disableSideCards, setDisableSideCards] = useState(false);

  const modalEl = useRef();

  const increaseIndex = () => {
    setAnimateSwipe("left");
    setRightDisabledBtn(true);
    modalEl.current && modalEl.current.focus();

    if (leftDisabledBtn) {
      setLeftDisabledBtn(false);
    }
    setTimeout(() => {
      if (index < 14) {
        setRightDisabledBtn(false);
      }
      setIndex((id) =>
        index < AboutCardsData.length - 1 ? id + 1 : AboutCardsData.length - 1
      );

      setAnimateSwipe("");
    }, 500);
  };

  const decreaseIndex = () => {
    setAnimateSwipe("right");
    setLeftDisabledBtn(true);
    modalEl.current && modalEl.current.focus();

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

  const onRequestClose = () => {
    setExitAnim(true);
    setLeftDisabledBtn(false);
    setRightDisabledBtn(false);
    setTimeout(() => {
      setShowModal(false);
      setExitAnim(false);
    }, 500);
  };

  const handleKeyEvents = (event) => {
    switch (event.keyCode) {
      case 39:
        if (!rightDisabledBtn) increaseIndex();
        break;

      case 37:
        if (!leftDisabledBtn) decreaseIndex();
        break;

      case 27:
        onRequestClose();
        break;

      default:
        return;
    }
  };

  const openModal = (id, name) => {
    setIndex(id);
    setShowModal(true);
    if (name === "Jaromir") {
      setLeftDisabledBtn(true);
    } else if (name === "Pan Rysiu") {
      setRightDisabledBtn(true);
    }
  };

  const disableSides = () => {
    setDisableSideCards(true);
    setTimeout(() => {
      setDisableSideCards(false);
    }, 500);
  };

  return (
    <>
      <Head>
        <title>Gamma | O nas</title>
        <meta
          name="keywords"
          content="Gamma Gafik designer web developer specjalista sprzedaż team o nas doświadczenie"
        ></meta>
      </Head>
      <SubpagesHeader
        headerBig={aboutSubHeaderData.headerBig}
        headerSmall={aboutSubHeaderData.headerSmall}
        text={aboutSubHeaderData.text}
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
      >
        {!disableSideCards && (
          <AboutWorkerModalContent
            name={AboutCardsData[index > 0 ? index - 1 : index].name}
            position={AboutCardsData[index > 0 ? index - 1 : index].position}
            text={AboutCardsData[index > 0 ? index - 1 : index].text}
            img={AboutCardsData[index > 0 ? index - 1 : index].img}
            dir={animateSwipe}
          ></AboutWorkerModalContent>
        )}

        <AboutWorkerModalContent
          name={AboutCardsData[index].name}
          position={AboutCardsData[index].position}
          text={AboutCardsData[index].text}
          img={AboutCardsData[index].img}
          dir={animateSwipe}
          keyDown={handleKeyEvents}
          forwardRef={modalEl}
        ></AboutWorkerModalContent>

        {!disableSideCards && (
          <AboutWorkerModalContent
            name={AboutCardsData[index < 15 ? index + 1 : index].name}
            position={AboutCardsData[index < 15 ? index + 1 : index].position}
            text={AboutCardsData[index < 15 ? index + 1 : index].text}
            img={AboutCardsData[index < 15 ? index + 1 : index].img}
            dir={animateSwipe}
          ></AboutWorkerModalContent>
        )}
      </ModalComp>

      <ContentSec>
        <h2>Nasz team</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur. Suspendisse arcu pharetra
          imperdiet neque egestas faucibus ac. Velit congue donec at euismod
          velit quis ut purus eros.{" "}
        </p>
        <AnimatePresence>
          <TeamContainer
            variants={cardsVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {AboutCardsData.map(({ img, name, position, id }) => {
              return (
                <AboutWorkerCard
                  img={img}
                  name={name}
                  position={position}
                  key={id}
                  click={() => {
                    // setIndex();
                    openModal(id, name);
                    disableSides();
                  }}
                ></AboutWorkerCard>
              );
            })}
          </TeamContainer>
        </AnimatePresence>

        <CompanyImagesSection>
          <h3>Z życia agencji</h3>

          <VerticalScroll>
            {carouselImages.map((image) => {
              return (
                <CarouselImageWrapper key={image.id}>
                  <CarouselStyledImg
                    src={image.src}
                    fill
                    sizes="(max-width: 750px) 365px,
                    465px
                    "
                    alt="test"
                  ></CarouselStyledImg>
                </CarouselImageWrapper>
              );
            })}
          </VerticalScroll>
        </CompanyImagesSection>
      </ContentSec>
    </>
  );
}
