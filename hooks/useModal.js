import { useState, useRef } from "react";

const useModal = (data) => {
  const [showModal, setShowModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [exitAnim, setExitAnim] = useState(false);
  const [animateSwipe, setAnimateSwipe] = useState("");
  const [leftDisabledBtn, setLeftDisabledBtn] = useState(false);
  const [rightDisabledBtn, setRightDisabledBtn] = useState(false);
  const [disableSideCards, setDisableSideCards] = useState(false);

  const modalEl = useRef();

  // console.log(data[0].hasOwnProperty("fields"));

  const onRequestClose = () => {
    setExitAnim(true);
    setLeftDisabledBtn(false);
    setRightDisabledBtn(false);
    setTimeout(() => {
      setShowModal(false);
      setExitAnim(false);
    }, 500);
  };

  const increaseIndex = () => {
    setAnimateSwipe("left");
    setRightDisabledBtn(true);
    modalEl.current && modalEl.current.focus();

    if (leftDisabledBtn) {
      setLeftDisabledBtn(false);
    }
    setTimeout(() => {
      if (index < data.length - 2) {
        setRightDisabledBtn(false);
      }
      setIndex((id) => (index < data.length - 1 ? id + 1 : data.length - 1));

      setAnimateSwipe("");
    }, 500);
  };

  const decreaseIndex = () => {
    setAnimateSwipe("right");
    setLeftDisabledBtn(true);
    modalEl.current && modalEl.current.focus();

    if (rightDisabledBtn) {
      setRightDisabledBtn(false);
    }

    setTimeout(() => {
      if (index > 1) {
        setLeftDisabledBtn(false);
      }
      setIndex((id) => (index === 0 ? id : id - 1));
      setAnimateSwipe("");
    }, 500);
  };

  const handleKeyEvents = (event) => {
    switch (event.keyCode) {
      case 39:
        if (!rightDisabledBtn) increaseIndex();
        break;

      case 37:
        if (!leftDisabledBtn) decreaseIndex();
        break;

      case 27:
        onRequestClose();
        break;

      default:
        return;
    }
  };

  const checkEndCards = (name, index) => {
    if (data[index].hasOwnProperty("fields")) {
      if (data[index].fields.product === name) {
        return true;
      }
    } else {
      return false;
    }
  };

  const openModal = (id, name) => {
    setIndex(id);
    setShowModal(true);
    if (name === "Jaromir" || checkEndCards(name, 0)) {
      setLeftDisabledBtn(true);
    } else if (name === "Pan Rysiu" || checkEndCards(name, data.length - 1)) {
      setRightDisabledBtn(true);
    }
  };

  const disableSides = () => {
    setDisableSideCards(true);
    setTimeout(() => {
      setDisableSideCards(false);
    }, 500);
  };

  return {
    showModal,
    index,
    exitAnim,
    animateSwipe,
    leftDisabledBtn,
    rightDisabledBtn,
    disableSideCards,
    modalEl,
    increaseIndex,
    decreaseIndex,
    onRequestClose,
    handleKeyEvents,
    openModal,
    disableSides,
  };
};

export default useModal;
