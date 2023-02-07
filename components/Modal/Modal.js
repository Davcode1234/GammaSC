import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import {
  ArrowBtnWrapper,
  CloseBtnWrapper,
  LeftArrowBtnWrapper,
  SecondStyledIcon,
  StyledIcon,
  StyledModal,
  StyledOverlay,
} from "./Modal.styles";
import PropTypes from "prop-types";

const ModalComp = ({
  isModalOpen,
  onClose,
  onAfterOpen,
  children,
  nextContent,
  prevContent,
  exitAnim,
  leftDisabled,
  rightDisabled,
  portfolio,
}) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    Modal.setAppElement("#__next");
    setIsClient(true);
  }, []);

  return (
    <>
      {!isClient ? (
        <div>Fallback UI</div>
      ) : (
        <Modal
          isOpen={isModalOpen}
          onRequestClose={onClose}
          onAfterOpen={onAfterOpen}
          className="_"
          overlayClassName="_"
          contentElement={(props, children) => (
            <StyledModal exitAnim={exitAnim} portfolio={portfolio} {...props}>
              {children}
            </StyledModal>
          )}
          overlayElement={(props, contentElement) => (
            <StyledOverlay exitAnim={exitAnim} {...props}>
              {contentElement}
            </StyledOverlay>
          )}
        >
          <CloseBtnWrapper onClick={onClose}>
            <div></div>
          </CloseBtnWrapper>
          {children}
          <ArrowBtnWrapper onClick={prevContent} disabled={leftDisabled}>
            <StyledIcon
              icon="material-symbols:arrow-back"
              width="40"
              height="40"
            />
          </ArrowBtnWrapper>

          <LeftArrowBtnWrapper onClick={nextContent} disabled={rightDisabled}>
            <SecondStyledIcon
              icon="material-symbols:arrow-back"
              width="40"
              height="40"
            />
          </LeftArrowBtnWrapper>
        </Modal>
      )}
    </>
  );
};

export default ModalComp;

ModalComp.propTypes = {
  children: PropTypes.node.isRequired,
  isModalOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onAfterOpen: PropTypes.func,
  nextContent: PropTypes.func,
  prevContent: PropTypes.func,
  exitAnim: PropTypes.bool,
  leftDisabled: PropTypes.bool,
  rightDisabled: PropTypes.bool,
  portfolio: PropTypes.bool,
};
