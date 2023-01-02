import Image from "next/image";
import { AnimatePresence, MotionConfig, useCycle } from "framer-motion";
import { useState } from "react";
import {
  NavigationWrapper,
  MenuBtn,
  CloseMenuBtn,
  Logo,
  MainSliderMenu,
  SecondarySliderMenu,
  LinksWrapper,
  MenuLink,
  StyledLink,
  TestPathSvg,
  TestSvg,
} from "./Navigation.styles";
import Link from "next/link";
import { motion } from "framer-motion";

const links = [
  { name: "Oferta", id: 1, to: "/offer" },
  { name: "Portfolio", id: 2, to: "/portfolio" },
  { name: "O nas", id: 3, to: "/about" },
  { name: "Kontakt", id: 4, to: "/contact" },
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

  const openMenu = () => {
    setOpen((val) => !val);
    setExitVar((val) => !val);
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

  const BtnVariants = {
    hidden: {
      scaleX: 0,
      originX: 1,
    },

    visible: {
      scaleX: 1,
      originX: 1,

      transition: { delay: 0.5, duration: 1 },
    },
    exit: {
      scaleX: 0,
      originX: 1,
    },
  };
  const duration = 1.5;

  const gLetterVar = {
    hidden: {
      pathLength: 0,
      fill: "#f68c1e",

      transition: {
        duration,
        fill: {
          delay: duration - 1,
          duration,
        },
      },
    },

    active: {
      pathLength: 1,
      fill: "#fff",
      transition: {
        duration,
        fill: {
          delay: duration - 1,
          duration,
        },
      },
    },
  };

  const MenuBtnView = open ? CloseMenuBtn : MenuBtn;

  return (
    <>
      <NavigationWrapper>
        <Link href={"/"} onClick={() => setOpen(false)}>
          <Image
            src={"/HomePage/orange.png"}
            width={160}
            height={60}
            alt="logo"
          ></Image>
        </Link>
        <MenuBtnView
          isOpen={open}
          onClick={() => {
            openMenu();
          }}
          variants={BtnVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        ></MenuBtnView>
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
              {/* <Image
                src={"/HomePage/Gletter.svg"}
                width={66}
                height={42}
                alt={"Gletter"}
              /> */}

              {/* <TestSvg>
                 <TestPathSvg></TestPathSvg>
                </TestSvg> */}
              <motion.svg
                style={{ width: "62", height: "42" }}
                viewBox="0 0 66 42"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  initial="hidden"
                  animate="active"
                  variants={gLetterVar}
                  strokeWidth={5}
                  strokeDasharray="0 1"
                  stroke="white"
                  d="M58.983 25.9435V23.4435H56.483H30.4436V18.5605H63.5V36.5453C63.5 38.2619 62.2415 39.5 60.3997 39.5H5.10442C4.19029 39.5 3.60154 39.1867 3.22707 38.7819C2.8349 38.358 2.5 37.636 2.5 36.5453V5.69823C2.5 4.59947 2.84138 3.78498 3.27802 3.28308C3.68851 2.81124 4.27455 2.5 5.10442 2.5H63.4962V7.38306H12.0115C10.4953 7.38306 9.10423 7.97089 8.1599 9.17667C7.28676 10.2915 7.01313 11.6561 7.01313 12.8739V29.1061C7.01313 30.3134 7.28054 31.6955 7.98298 32.8662C8.72468 34.1023 10.0709 35.2359 12.0115 35.2359H53.4888C55.3107 35.2359 56.7236 34.2322 57.592 33.1199C58.4591 32.0095 58.983 30.5645 58.983 29.1061V25.9435Z"
                />
              </motion.svg>
              <LinksWrapper
                variants={sideVariants}
                initial="closed"
                animate="open"
                exit="closed"
              >
                {links.map(({ name, id, to }) => {
                  return (
                    <StyledLink
                      key={id}
                      href={to}
                      onClick={() => setOpen(false)}
                    >
                      <MenuLink
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                      >
                        {name}
                      </MenuLink>
                    </StyledLink>
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
