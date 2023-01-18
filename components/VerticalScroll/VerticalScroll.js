import { useRef, useEffect, useState } from "react";
import { Carousel, InnerCarousel, Wrapper } from "./VerticalScroll.styles";
import PropTypes from "prop-types";

const VerticalScroll = ({ children }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <Wrapper>
      <Carousel ref={carousel}>
        <InnerCarousel
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          whileTap={{ cursor: "grabbing" }}
        >
          {children}
        </InnerCarousel>
      </Carousel>
    </Wrapper>
  );
};

export default VerticalScroll;

VerticalScroll.propTypes = {
  children: PropTypes.node,
};
