import { MotionConfig } from "framer-motion";
import { useState } from "react";
import {
  NavigationWrapper,
  MenuBtn,
  Logo,
  FirstSlider,
  SliderWrapper,
} from "./Navigation.style";

const slide = {
  hidden: {
    width: "0px",
  },
  visible: {
    width: "375px",
    transition: {
      duration: 0.3,
      type: "spring",
      damping: 25,
      stiffness: 500,
      from: -100,
    },
  },
  exit: {
    width: "0px",
  },
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavigationWrapper>
        <Logo>Hello</Logo>
        <MenuBtn
          onClick={() => {
            setIsOpen((val) => !val);
          }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
        ></MenuBtn>
      </NavigationWrapper>

      <SliderWrapper>
        {isOpen && (
          <FirstSlider
            variants={slide}
            initial="hidden"
            animate="visible"
            exit="exit"
          />
        )}
      </SliderWrapper>
    </>
  );
};

export default Navigation;
