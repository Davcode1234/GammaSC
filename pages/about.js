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

// import { motion, useMotionValue, useTransform } from "framer-motion";

// const items = [0, 1, 2,3,4,5];
// const width = 200;
// const padding = 10;
// const size = 150;

// export function Example() {
//     const scrollX = useMotionValue(0);
//     const scale = useTransform(scrollX, [0, 100], [0, 1]);
//     const opacity = useTransform(scrollX, [0, 100], [0, 1]);

//     return (
//         <>
//             <motion.div
//                 style={{
//                     width: 40,
//                     height: 40,
//                     borderRadius: 20,
//                     backgroundColor: "#fff",
//                     position: "absolute",
//                     top: "35%",
//                     marginTop: 15,
//                     left: "40%",
//                     marginLeft: -50,
//                     scale: scale,
//                     opacity: opacity
//                 }}
//             />
//             <motion.div
//                 style={{
//                     width: 550,
//                     height: 150,
//                     borderRadius: 5,
//                     overflow: "hidden",
//                     position: "relative",
//                     transform: "translateZ(0)",
//                     cursor: "grab"
//                 }}
//                 whileTap={{ cursor: "grabbing" }}
//             >
//                 <motion.div
//                     style={{
//                         height: 150,
//                         width: getWidth(items),
//                         x: scrollX
//                     }}
//                     drag="x"
//                     dragConstraints={{
//                         left: -getWidth(items) + size,
//                         right: 0
//                     }}
//                 >
//                     {items.map((index) => {
//                         return (
//                             <motion.div
//                                 style={{
//                                     width: width,
//                                     height: 150,
//                                     borderRadius: 5,
//                                     backgroundColor: "#fff",
//                                     float:"left",
//                                     marginRight:
//                                         index !== items.length - 1 ? 10 : 0
//                                 }}
//                                 key={index}
//                             />
//                         );
//                     })}

//                 </motion.div>
//             </motion.div>
//         </>
//     );
// }

// function getWidth(items) {
//   const totalWidth = items.length * width;
//   const totalPadding = (items.length - 1) * padding;
//   const totalScroll = totalWidth + totalPadding;
//   return totalScroll;
// }

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
  const aboutData = {
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
        headerBig={aboutData.headerBig}
        headerSmall={aboutData.headerSmall}
        text={aboutData.text}
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

          <ImagesWrapper>
            <ImagesSecondWrapper>
              <Image
                src={"/AboutPage/BottomSec/o_nas_1.webp"}
                alt="grill"
                width={493}
                height={464}
              ></Image>
              <Image
                src={"/AboutPage/BottomSec/o_nas_1.webp"}
                alt="grill"
                width={493}
                height={464}
              ></Image>
              <Image
                src={"/AboutPage/BottomSec/o_nas_1.webp"}
                alt="grill"
                width={493}
                height={464}
              ></Image>
              <Image
                src={"/AboutPage/BottomSec/o_nas_1.webp"}
                alt="grill"
                width={493}
                height={464}
              ></Image>
              <Image
                src={"/AboutPage/BottomSec/o_nas_1.webp"}
                alt="grill"
                width={493}
                height={464}
              ></Image>
            </ImagesSecondWrapper>
          </ImagesWrapper>
        </CompanyImagesSection>
      </ContentSec>
    </>
  );
}
