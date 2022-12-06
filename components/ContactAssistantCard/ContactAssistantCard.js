import {
  ContactCardHeader,
  ContactCardWrapper,
  PositionText,
  ContactPar,
  ContentWrapper,
} from "./ContactAssistantCard.styles";
import Image from "next/image";

const ContactAssistantCard = ({ img, title, position, mail, number }) => {
  return (
    <ContactCardWrapper>
      <Image src={img} width={300} height={400} alt="test"></Image>
      <ContentWrapper>
        <ContactCardHeader>{title}</ContactCardHeader>
        <PositionText>{position}</PositionText>
        <ContactPar>{mail}</ContactPar>
        <ContactPar>{number}</ContactPar>
      </ContentWrapper>
    </ContactCardWrapper>
  );
};

export default ContactAssistantCard;
