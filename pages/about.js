import Head from "next/head";
import { Fragment } from "react";
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
} from "../styles/pages/About.styles";
import { AnimatePresence } from "framer-motion";
import VerticalScroll from "../components/VerticalScroll/VerticalScroll";

const ImagesURLS = [
  {
    img: "/AboutPage/Gamma-jaromir.webp",
    name: "Jaromir",
    position: "CEO",
    id: 1,
  },
  {
    img: "/AboutPage/Gamma-ela.png",
    name: "Elżbieta",
    position: "Creative director",
    id: 2,
  },
  {
    img: "/AboutPage/Gamma_Aleksander.webp",
    name: "Aleksander",
    position: "Vice",
    id: 3,
  },
  {
    img: "/AboutPage/Gamma_Anna.webp",
    name: "Anna",
    position: "Sales Specialist",
    id: 4,
  },
  {
    img: "/AboutPage/Gamma_Beata.webp",
    name: "Beata",
    position: "Senior Graphic Designer",
    id: 5,
  },
  {
    img: "/AboutPage/Gamma_Damian.webp",
    name: "Damian",
    position: "Web Developer",
    id: 6,
  },
  {
    img: "/AboutPage/Gamma_Edyta.webp",
    name: "Edyta",
    position: "Senior Graphic Designer",
    id: 7,
  },
  {
    img: "/AboutPage/Gamma-gabriela.webp",
    name: "Gabriela",
    position: "Graphic Designer / Ilustrator",
    id: 8,
  },
  {
    img: "/AboutPage/Gamma-jerzy.webp",
    name: "Jurek",
    position: "Customer Service",
    id: 9,
  },
  {
    img: "/AboutPage/Gamma-joanna.webp",
    name: "Joanna",
    position: "Sales Specialist",
    id: 10,
  },
  {
    img: "/AboutPage/Gamma-kamil.webp",
    name: "Kamil",
    position: "Junior Graphic Designer",
    id: 11,
  },
  {
    img: "/AboutPage/Gamma-marta.webp",
    name: "Marta",
    position: "Senior Graphic Designer",
    id: 12,
  },
  {
    img: "/AboutPage/Gamma-pan-rysiu.webp",
    name: "Pan Rysiu",
    position: "Head of engineer",
    id: 13,
  },
  {
    img: "/AboutPage/Gamma-sebastian.webp",
    name: "Sebastian",
    position: "Senior Graphic Designer",
    id: 14,
  },
  {
    img: "/AboutPage/Gamma-weronika.webp",
    name: "Weronika",
    position: "Graphic Designer",
    id: 15,
  },
  {
    img: "/AboutPage/Gamma-aleksandra.png",
    name: "Aleksandra",
    position: "Sales Specialist",
    id: 16,
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

export default function About() {
  const aboutSubHeaderData = {
    headerSmall: "o nas",
    headerBig: (
      <Fragment>
        Kreatywni, <span>nieszablonowi</span> <br />i otwarci na nowe wyzwania.
      </Fragment>
    ),
    text: "Lorem ipsum dolor sit amet consectetur. Ipsum arcu congue volutpat risus in congue nunc nunc tortor. At dui sed ultricies adipiscing. Placerat duis egestas diam pellentesque sit cras dolor a.",
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
