import { useRef, useEffect, useState } from "react";
import { Carousel, InnerCarousel, Wrapper } from "./VerticalScroll.styles";
import PropTypes from "prop-types";
import { motion, useMotionValue, useTransform } from "framer-motion";

const VerticalScroll = ({ children }) => {
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
      <motion.div
        ref={carousel}
        style={{
          marginLeft: "auto",
          width: "90vw",
          height: 450,
          borderRadius: 30,
          overflow: "hidden",
          position: "relative",
          transform: "translateZ(0)",
          cursor: "grab",
        }}
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            height: 450,
            x: scrollX,
          }}
          drag="x"
          dragConstraints={{
            left: -width,
            right: 0,
          }}
        >
          {children}
        </motion.div>
      </motion.div>

      <motion.div
        style={{
          width: 80,
          height: 6,
          borderRadius: 3,
          backgroundColor: "#000",
          position: "relative",
          left: scrollDir,
        }}
      />
    </>
  );
};

export default VerticalScroll;

VerticalScroll.propTypes = {
  children: PropTypes.node,
  items: PropTypes.array,
  width: PropTypes.number,
  padding: PropTypes.number,
  size: PropTypes.number,
};
