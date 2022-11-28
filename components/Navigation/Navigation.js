import Image from "next/image";
import { AnimatePresence, useCycle } from "framer-motion";
import { useState } from "react";
import {
  NavigationWrapper,
  MenuBtn,
  Logo,
  MainSliderMenu,
  SecondarySliderMenu,
  LinksWrapper,
  MenuLink,
} from "./Navigation.styles";

const links = [
  { name: "Oferta", id: 1 },
  { name: "Portfolio", id: 2 },
  { name: "O nas", id: 3 },
  { name: "Kontakt", id: 4 },
];

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: {
    opacity: 1,
  },
};

const sideVariants = {
  closed: {
    transition: {
      type: "spring",
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [exitVar, setExitVar] = useState(false);
  // const [secondSliderVal, setSecondSliderVal] = useState(false);
  console.log({ open });

  const openMenu = () => {
    setOpen((val) => !val);
    setExitVar((val) => !val);
    console.log({ open });
  };

  const originVal = exitVar ? "originX: 1" : "originX: 0";

  const slide = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      originX: { originVal },
      transition: {
        delay: 0.4,
      },
    },
    exit: {
      scaleX: 0,
      transition: { delay: 0.7, duration: 0.3 },
      originX: 1,
    },
  };

  const secondSlide = {
    hidden: {
      scaleX: 0,
      originX: 0,
    },
    visible: {
      scaleX: 1,
      originX: { originVal },
    },
    exit: {
      scaleX: 0,
      transition: { duration: 0.3 },
      originX: 1,
    },
  };

  return (
    <>
      <NavigationWrapper>
        <Image
          src={"/HomePage/orange.png"}
          width={160}
          height={60}
          alt="logo"
        ></Image>
        <MenuBtn
          isOpen={open}
          onClick={() => {
            openMenu();
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        ></MenuBtn>
      </NavigationWrapper>

      <AnimatePresence>
        {open && (
          <>
            <SecondarySliderMenu
              variants={secondSlide}
              initial="hidden"
              animate="visible"
              exit="exit"
            ></SecondarySliderMenu>
            <MainSliderMenu
              variants={slide}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <Image
                src={"/HomePage/Gletter.svg"}
                width={66}
                height={42}
                alt={"Gletter"}
              />
              <LinksWrapper
                variants={sideVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map(({ name, id }) => {
                  return (
                    <MenuLink
                      key={id}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      {name}
                    </MenuLink>
                  );
                })}
              </LinksWrapper>
            </MainSliderMenu>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
