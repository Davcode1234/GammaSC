import { Fragment, useEffect, useMemo, useRef } from "react";
import Head from "next/head";
import { Loader } from "@googlemaps/js-api-loader";
import {
  ContactInfoSection,
  MapHeader,
  Map,
} from "../styles/pages/Contact.styles";
import ContactAssistantCard from "../components/ContactAssistantCard/ContactAssistantCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";

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
  const libraries = useMemo(() => ["places"], []);
  const mapCenter = useMemo(
    () => ({ lat: 50.07215399984899, lng: 21.388977045745907 }),
    []
  );

  const mapOptions = useMemo(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: false,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API,
    libraries: libraries,
  });

  if (!isLoaded) {
    return <>Loading...</>;
  }

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
        {contactData.map(({ img, name, position, number, mail, id }) => {
          return (
            <ContactAssistantCard
              img={img}
              title={name}
              position={position}
              number={number}
              mail={mail}
              key={id}
            ></ContactAssistantCard>
          );
        })}
      </ContactInfoSection>
      <MapHeader>
        <span>Gdzie</span> nas znajdziesz?
      </MapHeader>

      <GoogleMap
        options={mapOptions}
        zoom={16}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "620px" }}
      >
        <MarkerF position={mapCenter} />
      </GoogleMap>
    </>
  );
}
