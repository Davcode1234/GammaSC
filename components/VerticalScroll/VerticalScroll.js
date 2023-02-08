import { useRef, useEffect, useState } from "react";
import {
  Carousel,
  InnerCarousel,
  ScrollBar,
  ScrollBardContainer,
  Wrapper,
} from "./VerticalScroll.styles";
import PropTypes from "prop-types";
import {
  useDragControls,
  useMotionValue,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";

const VerticalScroll = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  console.log(offsetWidth);

  const carousel = useRef();

  const x = useMotionValue();
  useEffect(() => {
    setOffsetWidth(carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  // const crossPath = useTransform(
  //   x,
  //   [0, -offsetWidth * 0.6],
  //   [offsetWidth * 0.12, offsetWidth * 1.05]
  // );

  // const crossPath = useTransform(x, [0, -1100], [200, 1700]);

  //first [] is for speed and second [] is for distance when bar gets to the end

  const crossPath = useTransform(x, [0, -1200], [100, offsetWidth]);

  return (
    <>
      <Wrapper>
        <Carousel ref={carousel}>
          <div></div>
          <InnerCarousel
            drag="x"
            // dragControls={controls}
            style={{ x }}
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
          >
            {children}
          </InnerCarousel>
        </Carousel>
      </Wrapper>

      <ScrollBardContainer>
        <ScrollBar style={{ left: crossPath }}></ScrollBar>
      </ScrollBardContainer>
    </>
  );
};

export default VerticalScroll;

VerticalScroll.propTypes = {
  children: PropTypes.node,
};
