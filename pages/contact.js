import { useEffect, useRef } from "react";
import Head from "next/head";
import { Loader } from "@googlemaps/js-api-loader";
import {
  ContactHeader,
  ContactInfoSection,
  ContactTextPar,
  MapHeader,
  Map,
} from "../styles/pages/Contact.styles";
import { InfoSecHeader, InfoSmallPar } from "../styles/pages/Home.styles";
import ContactAssistantCard from "../components/ContactAssistantCard/ContactAssistantCard";

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
      <ContactHeader>
        <div>
          <InfoSmallPar>kontakt</InfoSmallPar>
          <InfoSecHeader>
            Jesteśmy tu <span>dla Ciebie!</span>
          </InfoSecHeader>
          <ContactTextPar>
            Skontaktuj się z naszym działem marketingu. Lubimy rozmawiać, więc
            chętnie odpowiemy na wszelkie pytania.
          </ContactTextPar>
        </div>
      </ContactHeader>
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
