import { useRef, useEffect, useState } from "react";
import { Carousel, InnerCarousel, ScrollBar } from "./VerticalScroll.styles";
import PropTypes from "prop-types";
import { useMotionValue, useTransform } from "framer-motion";

const VerticalScroll = ({ children, isoffer }) => {
  const [width, setwidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  const scrollX = useMotionValue(0);

  const scrollDir = useTransform(
    scrollX,
    [0, -width],
    ["calc(10% - 0px)", "calc(100% - 100px)"]
  );

  return (
    <>
      <Carousel ref={carousel} whileTap={{ cursor: "grabbing" }}>
        <InnerCarousel
          style={{
            x: scrollX,
          }}
          isoffer={isoffer}
          drag="x"
          dragConstraints={{
            left: -width,
            right: 0,
          }}
        >
          {children}
        </InnerCarousel>
      </Carousel>

      <ScrollBar
        style={{
          left: scrollDir,
        }}
      ></ScrollBar>
    </>
  );
};

export default VerticalScroll;

VerticalScroll.propTypes = {
  children: PropTypes.node,
  isoffer: PropTypes.bool,
};
