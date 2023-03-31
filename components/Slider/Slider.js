import {
  SliderContainer,
  SliderItem,
  SliderItemWrapper,
  SlideTrack,
} from "./Slider.styles";
import PropTypes from "prop-types";

const Slider = ({ position, imgArr }) => {
  return (
    <>
      <SliderContainer>
        <SlideTrack position={position}>
          {imgArr.map(({ id, src, alt }) => {
            return (
              <div key={id}>
                <SliderItemWrapper>
                  <SliderItem
                    src={src}
                    alt={alt}
                    fill
                    sizes="
                    (max-width: 1150px) 200px
                    350px
                    "
                  ></SliderItem>
                </SliderItemWrapper>
              </div>
            );
          })}
          {imgArr.map(({ id, src, alt }) => {
            return (
              <div key={id}>
                <SliderItemWrapper>
                  <SliderItem
                    src={src}
                    alt={alt}
                    fill
                    sizes="
                    (max-width: 1150px) 200px
                    350px
                    "
                  ></SliderItem>
                </SliderItemWrapper>
              </div>
            );
          })}
        </SlideTrack>
      </SliderContainer>
    </>
  );
};

export default Slider;

Slider.propTypes = {
  position: PropTypes.string,
  imgArr: PropTypes.array,
};
