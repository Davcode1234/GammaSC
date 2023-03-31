import Head from "next/head";
import AboutWorkerCard from "../components/AboutWorkerCard/AboutWorkerCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import {
  CompanyImagesSection,
  ContentSec,
  CarouselImageWrapper,
  CarouselStyledImg,
  TeamContainer,
} from "../styles/pages/About.styles";
import { AnimatePresence } from "framer-motion";
import VerticalScroll from "../components/VerticalScroll/VerticalScroll";
import ModalComp from "../components/Modal/Modal";
import AboutWorkerModalContent from "../components/AboutWorkerModalContent/AboutWorkerModalContent";
import useModal from "../hooks/useModal";
import {
  AboutCardsData,
  carouselImages,
  aboutSubHeaderData,
} from "../lib/aboutData";

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
  const {
    showModal,
    index,
    exitAnim,
    animateSwipe,
    leftDisabledBtn,
    rightDisabledBtn,
    disableSideCards,
    modalEl,
    increaseIndex,
    decreaseIndex,
    onRequestClose,
    handleKeyEvents,
    openModal,
    disableSides,
  } = useModal(AboutCardsData);

  return (
    <>
      <Head>
        <title>Gamma | O nas</title>
        <meta
          name="keywords"
          content="Gamma Gafik designer web developer specjalista sprzedaż team o nas doświadczenie"
        ></meta>

        <meta
          name="description"
          content="Jesteśmy Agencją Reklamową typu full service, oferujemy kompleksową obsługę dla małych i dużych firm. Poznaj członków naszego wspaniałego teamu z którym możesz współpracować!"
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
            card={AboutCardsData[index > 0 ? index - 1 : index]}
            dir={animateSwipe}
          ></AboutWorkerModalContent>
        )}

        <AboutWorkerModalContent
          card={AboutCardsData[index]}
          dir={animateSwipe}
          keyDown={handleKeyEvents}
          forwardRef={modalEl}
        ></AboutWorkerModalContent>

        {!disableSideCards && (
          <AboutWorkerModalContent
            card={AboutCardsData[index < 15 ? index + 1 : index]}
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
