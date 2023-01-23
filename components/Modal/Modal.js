import { useEffect, useState } from "react";
import Modal from "react-modal";
import {
  CloseBtn,
  CloseBtnWrapper,
  StyledCloseBtn,
  StyledModal,
  StyledOverlay,
} from "./Modal.styles";
import PropTypes from "prop-types";

const ModalComp = ({ isModalOpen, onClose, children }) => {
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
};
