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
  contentParagraph,
  itemsArray,
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
            <FirstTextParagraph>{contentParagraph}</FirstTextParagraph>
            <List>
              {itemsArray.map((item) => {
                return <ListItem key={item.id}>{item.listItem}</ListItem>;
                // console.log(item.listItem);
              })}
            </List>
          </div>
        </TextWrapper>
      </ContentContainer>
    </>
  );
};

export default OfferPageCard;
