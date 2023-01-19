import {
  ContactCardHeader,
  ContactCardWrapper,
  PositionText,
  ContactPar,
  ContentWrapper,
  SalesAssImgWrapper,
  SalesAssImg,
} from "./ContactAssistantCard.styles";
import PropTypes from "prop-types";
import useWindowSize from "../../hooks/useWindowSize";

const DesktopAssistantLoadAnim = {
  hidden: {
    opacity: 0,
    translateY: 200,
  },
  visible: {
    opacity: 1,
    translateY: -90,

    transition: {
      type: "spring",
      stiffness: 100,
      duration: 1,
      delay: 0.4,
    },
  },
};

const MobileAssistanLoadAnim = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const ContactAssistantCard = ({ img, title, position, mail, number }) => {
  const isMobile = useWindowSize(750);

  const cardAnimVar = isMobile
    ? MobileAssistanLoadAnim
    : DesktopAssistantLoadAnim;

  return (
    <ContactCardWrapper
      variants={cardAnimVar}
      initial="hidden"
      animate="visible"
    >
      <SalesAssImgWrapper>
        <SalesAssImg
          src={img}
          alt="Our sales specialist"
          fill
          priority
          sizes="
          (max-width: 750px) 270px
          300px
          "
        ></SalesAssImg>
      </SalesAssImgWrapper>

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
