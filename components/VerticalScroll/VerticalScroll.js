import { useRef, useEffect, useState } from "react";
import {
  Carousel,
  InnerCarousel,
  ScrollBar,
  ScrollBardContainer,
  Wrapper,
} from "./VerticalScroll.styles";
import PropTypes from "prop-types";
import { useMotionValue, useTransform } from "framer-motion";

const VerticalScroll = ({ children }) => {
  const [width, setWidth] = useState(0);
  const [offsetWidth, setOffsetWidth] = useState(0);
  const [toMapVal, setToMapVal] = useState(1000);
  const [leftOffsetVal, setLeftOffsetVal] = useState(200);
  const [rightOffsetVal, setRightOffsetVal] = useState(offsetWidth);
  console.log(offsetWidth);

  const carousel = useRef();
  const x = useMotionValue();

  const updateToMapVal = (offsetWidth) => {
    switch (true) {
      case offsetWidth >= 1400: {
        setToMapVal(1000);
        break;
      }
      case offsetWidth <= 1400 && offsetWidth > 1300: {
        setToMapVal(1200);
        break;
      }
      case offsetWidth <= 1300 && offsetWidth > 1200: {
        setToMapVal(1500);
        break;
      }
      case offsetWidth <= 1200 && offsetWidth > 1050: {
        setToMapVal(1600);
        setLeftOffsetVal(150);
        break;
      }
      case offsetWidth <= 1050 && offsetWidth > 850: {
        setToMapVal(1800);
        setLeftOffsetVal(150);
        break;
      }
      case offsetWidth <= 850 && offsetWidth > 750: {
        setToMapVal(1850);
        setLeftOffsetVal(100);
        break;
      }
      case offsetWidth <= 750 && offsetWidth > 690: {
        setToMapVal(1950);
        setLeftOffsetVal(100);
        break;
      }
      case offsetWidth <= 690 && offsetWidth > 605: {
        setToMapVal(2100);
        setLeftOffsetVal(90);
        break;
      }
      case offsetWidth < 605 && offsetWidth > 500: {
        setToMapVal(2100);
        setLeftOffsetVal(70);
        break;
      }
      case offsetWidth < 500 && offsetWidth > 340: {
        setToMapVal(2100);
        setLeftOffsetVal(50);
        break;
      }
      case offsetWidth < 340 && offsetWidth > 250: {
        setToMapVal(2100);
        setLeftOffsetVal(30);
        break;
      }
      default: {
        return;
      }
    }
  };

  useEffect(() => {
    setOffsetWidth(carousel.current.offsetWidth);
    updateToMapVal(carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  console.log(`toMap: ${toMapVal}`);
  console.log(`leftOff: ${leftOffsetVal}`);

  // const crossPath = useTransform(
  //   x,
  //   [0, -offsetWidth * 0.6],
  //   [offsetWidth * 0.12, offsetWidth * 1.05]
  // );

  // const crossPath = useTransform(x, [0, -1100], [200, 1700]);

  //first [] is for speed and second [] is for distance when bar gets to the end

  // 1600 -  const crossPath = useTransform(x, [0, -1200], [200, offsetWidth * 1.1]); --> 1400 OW

  // 1500 -  const crossPath = useTransform(x, [0, -1500], [200, offsetWidth * 1.03]); --> 1305 OW

  // 1400 -   const crossPath = useTransform(x, [0, -1600], [150, offsetWidth * 1.03]); --> 1217 OW

  // 1200 -   const crossPath = useTransform(x, [0, -1800], [150, offsetWidth]); --> 1038 OW

  // 1000 -  const crossPath = useTransform(x, [0, -1850], [100, offsetWidth]); --> 865 OW

  // 900 -  const crossPath = useTransform(x, [0, -1950], [100, offsetWidth * 0.9]); --> 777 OW

  // 800 -   const crossPath = useTransform(x, [0, -2100], [100, offsetWidth * 0.9]); --> 689 OW

  // 700 -   const crossPath = useTransform(x, [0, -2100], [90, offsetWidth * 1.25]); --> 605 OW

  // 600 -   const crossPath = useTransform(x, [0, -2100], [70, offsetWidth * 1.1]); --> 500 OW

  // 400 -   const crossPath = useTransform(x, [0, -2100], [50, offsetWidth]); --> 340 OW

  // 300 - const crossPath = useTransform(x, [0, -2100], [30, offsetWidth * 0.9]); --> 250 OW

  const crossPath = useTransform(
    x,
    [0, -toMapVal],
    [leftOffsetVal, offsetWidth * 1.25]
  );

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
