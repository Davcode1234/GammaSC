import { Fragment, useEffect, useRef } from "react";
import Head from "next/head";
import { Loader } from "@googlemaps/js-api-loader";
import {
  ContactInfoSection,
  MapHeader,
  Map,
} from "../styles/pages/Contact.styles";
import ContactAssistantCard from "../components/ContactAssistantCard/ContactAssistantCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";

const contactData = [
  {
    name: "Anna Kuczek",
    position: "Sales specialist",
    mail: "anna.kuczek@gamma24.pl",
    number: "+48 123 456 789",
    img: "/HomePage/TestAssistant.png",
    id: 1,
  },

  {
    name: "Joanna Pijar",
    position: "Sales specialist",
    mail: "joanna.pijar@gamma24.pl",
    number: "+48 123 456 789",
    img: "/HomePage/TestAssistant.png",
    id: 2,
  },
];
const headerData = {
  headerSmall: "Kontakt",
  headerBig: (
    <Fragment>
      Jesteśmy tu <span>dla Ciebie!</span>
    </Fragment>
  ),
  text: "Skontaktuj się z naszym działem marketingu. Lubimy rozmawiać, więc chętnie odpowiemy na wszelkie pytania.",
};

export default function Contact() {
  const googleMap = useRef(null);

  50.07215399984899, 21.388977045745907;

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
      version: "weekly",
    });
    let map;

    loader.load().then(() => {
      map = new google.maps.Map(googleMap.current, {
        center: { lat: 50.07215399984899, lng: 21.388977045745907 },
        zoom: 16,
      });
      let marker = new google.maps.Marker({
        position: { lat: 50.07215399984899, lng: 21.388977045745907 },
        map: map,
      });
    });
  });

  return (
    <>
      <Head>
        <title>Gamma | Kontakt</title>
        <meta
          name="keywords"
          content="Gamma agencja reklamowa kampania reklamowa kontakt jak dojechać"
        ></meta>
      </Head>
      <SubpagesHeader
        headerSmall={headerData.headerSmall}
        headerBig={headerData.headerBig}
        text={headerData.text}
      ></SubpagesHeader>
      <ContactInfoSection>
        {contactData.map((card) => {
          return (
            <ContactAssistantCard
              img={card.img}
              title={card.name}
              position={card.position}
              number={card.number}
              mail={card.mail}
              key={card.id}
            ></ContactAssistantCard>
          );
        })}
      </ContactInfoSection>
      <MapHeader>
        <span>Gdzie</span> nas znajdziesz?
      </MapHeader>

      <Map>
        <div id="map" ref={googleMap} />
      </Map>
    </>
  );
}
