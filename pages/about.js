import Head from "next/head";
import { Fragment, useEffect, useState } from "react";
import AboutWorkerCard from "../components/AboutWorkerCard/AboutWorkerCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import {
  AboutParagraph,
  CompanyImagesSection,
  CompanySecHeader,
  ContentSec,
  Header,
  CarouselImageWrapper,
  CarouselStyledImg,
  TeamContainer,
  TitleName,
  PositionPar,
  AboutText,
} from "../styles/pages/About.styles";
import { AnimatePresence } from "framer-motion";
import VerticalScroll from "../components/VerticalScroll/VerticalScroll";
import ModalComp from "../components/Modal/Modal";
import Image from "next/image";
import AboutWorkerModalContent from "../components/AboutWorkerModalContent/AboutWorkerModalContent";

const ImagesURLS = [
  {
    img: "/AboutPage/Gamma_Jaromir.webp",
    name: "Jaromir",
    position: "CEO",
    id: 0,
  },
  {
    img: "/AboutPage/Gamma_Ela.png",
    name: "Elżbieta",
    position: "Creative director",
    id: 1,
  },
  {
    img: "/AboutPage/Gamma_Aleksander.webp",
    name: "Aleksander",
    position: "Vice",
    id: 2,
  },
  {
    img: "/AboutPage/Gamma_Anna.webp",
    name: "Anna",
    position: "Sales Specialist",
    id: 3,
  },
  {
    img: "/AboutPage/Gamma_Beata.webp",
    name: "Beata",
    position: "Senior Graphic Designer",
    id: 4,
  },
  {
    img: "/AboutPage/Gamma_Damian.webp",
    name: "Damian",
    position: "Web Developer",
    id: 5,
  },
  {
    img: "/AboutPage/Gamma_Edyta.webp",
    name: "Edyta",
    position: "Senior Graphic Designer",
    id: 6,
  },
  {
    img: "/AboutPage/Gamma_Gabriela.webp",
    name: "Gabriela",
    position: "Graphic Designer / Ilustrator",
    id: 7,
  },
  {
    img: "/AboutPage/Gamma_Jerzy.webp",
    name: "Jurek",
    position: "Customer Service",
    id: 8,
  },
  {
    img: "/AboutPage/Gamma_Joanna.webp",
    name: "Joanna",
    position: "Sales Specialist",
    id: 9,
  },
  {
    img: "/AboutPage/Gamma_Kamil.webp",
    name: "Kamil",
    position: "Junior Graphic Designer",
    id: 10,
  },
  {
    img: "/AboutPage/Gamma_Marta.webp",
    name: "Marta",
    position: "Senior Graphic Designer",
    id: 11,
  },
  {
    img: "/AboutPage/Gamma_Panrysiu.webp",
    name: "Pan Rysiu",
    position: "Head of engineer",
    id: 12,
  },
  {
    img: "/AboutPage/Gamma_Sebastian.webp",
    name: "Sebastian",
    position: "Senior Graphic Designer",
    id: 13,
  },
  {
    img: "/AboutPage/Gamma_Weronika.webp",
    name: "Weronika",
    position: "Graphic Designer",
    id: 14,
  },
  {
    img: "/AboutPage/Gamma_Aleksandra.png",
    name: "Aleksandra",
    position: "Sales Specialist",
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

  const increaseIndex = () => {
    setIndex((id) =>
      index < ImagesURLS.length - 1 ? id + 1 : ImagesURLS.length - 1
    );
  };

  const decreaseIndex = () => {
    setIndex((id) => (index === 0 ? id : id - 1));
  };

  const onRequestClose = () => {
    setExitAnim(true);

    setTimeout(() => {
      setShowModal(false);
      setExitAnim(false);
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
        exitAnim={exitAnim}
        nextContent={() => increaseIndex()}
        prevContent={() => decreaseIndex()}
      >
        <AboutWorkerModalContent
          name={ImagesURLS[index].name}
          position={ImagesURLS[index].position}
          text={
            "To on panuje nad nowym porządkiem w Gammie i nad naszymi wypłatami."
          }
          img={ImagesURLS[index].img}
        ></AboutWorkerModalContent>
      </ModalComp>

      <ContentSec>
        <Header>Nasz team</Header>
        <AboutParagraph>
          Lorem ipsum dolor sit amet consectetur. Suspendisse arcu pharetra
          imperdiet neque egestas faucibus ac. Velit congue donec at euismod
          velit quis ut purus eros.{" "}
        </AboutParagraph>
        <AnimatePresence>
          <TeamContainer
            variants={cardsVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            {ImagesURLS.map(({ img, name, position, id }) => {
              return (
                <AboutWorkerCard
                  img={img}
                  name={name}
                  position={position}
                  key={id}
                  click={() => {
                    // setTag(name);
                    setIndex(id);
                    setShowModal(true);
                  }}
                ></AboutWorkerCard>
              );
            })}
          </TeamContainer>
        </AnimatePresence>

        <CompanyImagesSection>
          <CompanySecHeader>
            Lorem ipsum dolor sit amet consectetur.
          </CompanySecHeader>

          <VerticalScroll>
            {carouselImages.map((image) => {
              return (
                <CarouselImageWrapper key={image.id}>
                  <CarouselStyledImg
                    src={image.src}
                    fill
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
