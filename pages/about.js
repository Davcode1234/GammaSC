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
  ImagesSecondWrapper,
  ImagesWrapper,
  TeamContainer,
} from "../styles/pages/About.styles";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import { motion, useMotionValue, useTransform } from "framer-motion";

const items = [0, 1, 2, 3, 4, 5];
const width = 500;
const padding = 10;
const size = 150;

const ImagesURLS = [
  {
    img: "/AboutPage/Gamma-jaromir.webp",
    name: "Jaromir",
    position: "CEO",
    id: 7,
  },
  {
    img: "/AboutPage/Gamma_Aleksander.webp",
    name: "Aleksander",
    position: "Vice",
    id: 1,
  },
  {
    img: "/AboutPage/Gamma_Anna.webp",
    name: "Anna",
    position: "Sales Specialist",
    id: 2,
  },
  {
    img: "/AboutPage/Gamma_Beata.webp",
    name: "Beata",
    position: "Senior Graphic Designer",
    id: 3,
  },
  {
    img: "/AboutPage/Gamma_Damian.webp",
    name: "Damian",
    position: "Web Developer",
    id: 4,
  },
  {
    img: "/AboutPage/Gamma_Edyta.webp",
    name: "Edyta",
    position: "Senior Graphic Designer",
    id: 5,
  },
  {
    img: "/AboutPage/Gamma-gabriela.webp",
    name: "Gabriela",
    position: "Graphic Designer / Ilustrator",
    id: 6,
  },
  {
    img: "/AboutPage/Gamma-jerzy.webp",
    name: "Jurek",
    position: "Customer Service",
    id: 8,
  },
  {
    img: "/AboutPage/Gamma-joanna.webp",
    name: "Joanna",
    position: "Sales Specialist",
    id: 9,
  },
  {
    img: "/AboutPage/Gamma-kamil.webp",
    name: "Kamil",
    position: "Junior Graphic Designer",
    id: 10,
  },
  {
    img: "/AboutPage/Gamma-marta.webp",
    name: "Marta",
    position: "Senior Graphic Designer",
    id: 11,
  },
  {
    img: "/AboutPage/Gamma-pan-rysiu.webp",
    name: "Pan Rysiu",
    position: "Head of engineer",
    id: 12,
  },
  {
    img: "/AboutPage/Gamma-sebastian.webp",
    name: "Sebastian",
    position: "Senior Graphic Designer",
    id: 13,
  },
  {
    img: "/AboutPage/Gamma-weronika.webp",
    name: "Weronika",
    position: "Graphic Designer",
    id: 14,
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

  const scrollX = useMotionValue(0);
  const scale = useTransform(scrollX, [0, 100], [0, 1]);
  const opacity = useTransform(scrollX, [0, 100], [0, 1]);
  const boxWidth = true;

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
            {ImagesURLS.map((hero) => {
              return (
                <AboutWorkerCard
                  img={hero.img}
                  name={hero.name}
                  position={hero.position}
                  key={hero.id}
                ></AboutWorkerCard>
              );
            })}
          </TeamContainer>
        </AnimatePresence>

        <CompanyImagesSection>
          <CompanySecHeader>
            Lorem ipsum dolor sit amet consectetur.
          </CompanySecHeader>

          <motion.div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#fff",
              position: "absolute",
              top: "35%",
              marginTop: 15,
              left: "40%",
              marginLeft: -50,
              scale: scale,
              opacity: opacity,
            }}
          />

          <motion.div
            style={{
              width: "100%",
              height: 464,
              borderRadius: 5,
              overflow: "hidden",
              position: "relative",
              transform: "translateZ(0)",
              cursor: "grab",
            }}
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div
              style={{
                height: 464,
                width: getWidth(items, boxWidth),
                x: scrollX,
                display: "flex",
                translateX: "5%",
              }}
              drag="x"
              dragConstraints={{
                left: -getWidth(items) + size,
                right: 0,
              }}
            >
              {items.map((index) => {
                return (
                  <motion.div
                    style={{
                      backgroundImage: "url(/AboutPage/BottomSec/o_nas_1.webp)",
                      backgroundPosition: "center center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      width: width,
                      height: 464,
                      marginRight: index !== items.length - 1 ? 40 : 0,
                    }}
                    key={index}
                  />
                );
              })}
            </motion.div>
          </motion.div>
        </CompanyImagesSection>
      </ContentSec>
    </>
  );
}

function getWidth(items, boxWidth = false) {
  const totalWidth = (items.length * width) / 2;
  const totalWidthBox = items.length * width;
  const totalWidthCalc = boxWidth ? totalWidthBox : totalWidth;

  const totalPadding = (items.length - 1) * padding;
  const totalScroll = totalWidthCalc + totalPadding;
  return totalScroll;
}
