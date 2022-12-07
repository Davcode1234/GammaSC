import { Fragment } from "react";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";

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
    </>
  );
}
