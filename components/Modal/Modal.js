import { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  CloseBtn,
  CloseBtnWrapper,
  SecondStyledIcon,
  StyledCloseBtn,
  StyledIcon,
  StyledModal,
  StyledOverlay,
} from "./Modal.styles";
import PropTypes from "prop-types";

const ModalComp = ({
  isModalOpen,
  onClose,
  children,
  nextContent,
  prevContent,
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
          className="_"
          overlayClassName="_"
          contentElement={(props, children) => (
            <StyledModal {...props}>{children}</StyledModal>
          )}
          overlayElement={(props, contentElement) => (
            <StyledOverlay {...props}>{contentElement}</StyledOverlay>
          )}
        >
          <CloseBtnWrapper onClick={onClose}>
            <CloseBtn></CloseBtn>
          </CloseBtnWrapper>
          {children}

          <StyledIcon
            icon="material-symbols:arrow-back"
            width="40"
            height="40"
            onClick={prevContent}
          />
          <SecondStyledIcon
            icon="material-symbols:arrow-back"
            width="40"
            height="40"
            onClick={nextContent}
          />
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
  nextContent: PropTypes.func,
  prevContent: PropTypes.func,
};
