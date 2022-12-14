import { useState } from "react";
import {
  ContentContainer,
  StyledImgBackground,
  Header,
  ContentTextWrapper,
  Text,
  StyledCamImg,
  AnimationSlider,
  TextWrapper,
  FirstTextParagraph,
  SecondTextParagraph,
  List,
  ListItem,
  Line,
} from "./OfferPageCard.styles";

const OfferPageCard = ({
  backgroundImg,
  header,
  text,
  camImg,
  alt,
  width,
  height,
}) => {
  return (
    <>
      <StyledImgBackground imageSource={backgroundImg} alt={"background image"}>
        <ContentTextWrapper>
          <div>
            <Header>{header}</Header>
            <Text>{text}</Text>
          </div>
        </ContentTextWrapper>
      </StyledImgBackground>
      <ContentContainer>
        <StyledCamImg src={camImg} alt={alt} width={width} height={height} />
        <TextWrapper>
          <Line></Line>
          <div>
            <FirstTextParagraph>
              Zajmujemy się całością prac związanych z wykonaniem materiałów
              reklamowych, budujących tożsamość firmy. Zaczynając od projektu,
              poprzez kreację, skład, a kończąc na druku i wysyłce. Od małych
              produkcji – poprzez usługi nietypowe – do dużych nakładów.
            </FirstTextParagraph>
            <SecondTextParagraph>
              Nasze usługi w dziedzinie kreacji i składu DTP obejmują:
            </SecondTextParagraph>
            <List>
              <ListItem>
                projektowanie spójnych wizerunkowo materiałów reklamowych i
                promocyjnych,
              </ListItem>
              <ListItem>
                profesjonalne przygotowanie do druku wszelkich materiałów
                poligraficznych,
              </ListItem>
              <ListItem>
                projekt i druk różnego rodzaju materiałówwielkoformatowych:
                banerów, roll-upów, plakatów
              </ListItem>
              <ListItem>kompleksową obsługę DTP</ListItem>
            </List>
          </div>
        </TextWrapper>
      </ContentContainer>
    </>
  );
};

export default OfferPageCard;
