import {
  ContactCardHeader,
  ContactCardWrapper,
  PositionText,
  ContactPar,
  ContentWrapper,
} from "./ContactAssistantCard.styles";
import Image from "next/image";
import PropTypes from "prop-types";

import { useEffect, useState } from "react";
import useWindowSize from "../../hooks/useWindowSize";

const ContactAssistantCard = ({ img, title, position, mail, number }) => {
  const [imgSize, setImgSize] = useState({
    width: 300,
    height: 400,
  });

  const isMobile = useWindowSize(750);

  useEffect(() => {
    if (isMobile) {
      setImgSize({
        width: 200,
        height: 270,
      });
    } else if (!isMobile) {
      setImgSize({
        width: 300,
        height: 400,
      });
    }
  }, [isMobile]);

  return (
    <ContactCardWrapper>
      <Image
        src={img}
        width={imgSize.width}
        height={imgSize.height}
        alt="test"
        priority
      ></Image>
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
