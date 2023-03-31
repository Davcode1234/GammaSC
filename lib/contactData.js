import { Fragment } from "react";

export const contactData = [
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

export const contactSubHeaderData = {
  headerSmall: "Kontakt",
  headerBig: (
    <Fragment>
      Jesteśmy tu <span>dla Ciebie!</span>
    </Fragment>
  ),
  text: "Skontaktuj się z naszym działem marketingu. Lubimy rozmawiać, więc chętnie odpowiemy na wszelkie pytania.",
};
