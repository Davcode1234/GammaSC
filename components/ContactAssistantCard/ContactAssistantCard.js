import {
  ContactCardHeader,
  ContactCardWrapper,
  PositionText,
  ContactPar,
  ContentWrapper,
} from "./ContactAssistantCard.styles";
import Image from "next/image";
import PropTypes from "prop-types";

const ContactAssistantCard = ({ img, title, position, mail, number }) => {
  return (
    <ContactCardWrapper>
      <Image src={img} width={300} height={400} alt="test" priority></Image>
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

ContactAssistantCard.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  position: PropTypes.string,
  mail: PropTypes.string,
  number: PropTypes.string,
};
