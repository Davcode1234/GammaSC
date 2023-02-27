import { Fragment, useMemo } from "react";
import Head from "next/head";
import {
  ContactInfoSection,
  MapHeader,
  MapWrapper,
} from "../styles/pages/Contact.styles";
import ContactAssistantCard from "../components/ContactAssistantCard/ContactAssistantCard";
import SubpagesHeader from "../components/SubpagesHeader/SubpagesHeader";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import { Loader, LoaderWrapper } from "../components/Loader.styles";
import { useInView } from "react-intersection-observer";

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
  const [ref, inView] = useInView({ triggerOnce: true });

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
  });

  if (!isLoaded) {
    return (
      <LoaderWrapper>
        <Loader></Loader>
      </LoaderWrapper>
    );
  }

  return (
    <>
      <Head>
        <title>Gamma | Kontakt</title>
        <meta
          name="keywords"
          content="Gamma agencja reklamowa kampania reklamowa kontakt jak dojechać"
        ></meta>
        <meta
          name="description"
          content="Jesteśmy Agencją Reklamową typu full service, oferujemy kompleksową obsługę dla małych i dużych firm. Skontaktuj się z nami w razie jakichkolwiek pytań!"
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
      <MapHeader vis={inView}>
        <span>Gdzie</span> nas znajdziesz?
      </MapHeader>

      <MapWrapper ref={ref} vis={inView}>
        {inView && (
          <GoogleMap
            options={mapOptions}
            zoom={16}
            center={mapCenter}
            mapTypeId={google.maps.MapTypeId.ROADMAP}
            mapContainerStyle={{ width: "100%", height: "620px" }}
          >
            <MarkerF position={mapCenter} />
          </GoogleMap>
        )}
      </MapWrapper>
    </>
  );
}
