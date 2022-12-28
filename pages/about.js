import { Fragment } from "react";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import { HeroImg, TeamWrapper } from "../styles/pages/About.styles";

const ImagesURLS = [
  {
    img: "/AboutPage/Gamma_Aleksander.webp",
    id: 1,
  },
  {
    img: "/AboutPage/Gamma_Anna.webp",
    id: 2,
  },
  {
    img: "/AboutPage/Gamma_Beata.webp",
    id: 3,
  },
  {
    img: "/AboutPage/Gamma_Damian.webp",
    id: 4,
  },
  {
    img: "/AboutPage/Gamma_Edyta.webp",
    id: 5,
  },
  {
    img: "/AboutPage/Gamma-gabriela.webp",
    id: 6,
  },
  {
    img: "/AboutPage/Gamma-jaromir.webp",
    id: 7,
  },
  {
    img: "/AboutPage/Gamma-jerzy.webp",
    id: 8,
  },
  {
    img: "/AboutPage/Gamma-joanna.webp",
    id: 9,
  },
  {
    img: "/AboutPage/Gamma-kamil.webp",
    id: 10,
  },
  {
    img: "/AboutPage/Gamma-marta.webp",
    id: 11,
  },
  {
    img: "/AboutPage/Gamma-pan-rysiu.webp",
    id: 12,
  },
  {
    img: "/AboutPage/Gamma-sebastian.webp",
    id: 13,
  },
  {
    img: "/AboutPage/Gamma-weronika.webp",
    id: 14,
  },
];

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
      <SubpagesHeader
        headerBig={aboutData.headerBig}
        headerSmall={aboutData.headerSmall}
        text={aboutData.text}
      ></SubpagesHeader>

      <TeamWrapper>
        {ImagesURLS.map((hero) => {
          return (
            <HeroImg
              src={hero.img}
              width={305}
              height={350}
              alt={"hero img"}
              key={hero.id}
            ></HeroImg>
          );
        })}
      </TeamWrapper>
    </>
  );
}
