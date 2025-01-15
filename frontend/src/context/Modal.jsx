// frontend/src/context/Modal.jsx
import { useRef, useState, createContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';
import { useContext } from 'react';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  const [onModalClose, setOnModalClose] = useState(null); // Callback function that will be called when the modal is closing

  const closeModal = () => {
    setModalContent(null); // Clear the modal contents

    // If the callback function is truthy, call the callback function & reset it to null
    if (typeof onModalClose === 'function') {
      setOnModalClose(null);
      onModalClose();
    }
  };

  const contextValue = {
    modalRef, // Reference to the modal div
    modalContent, // React component to render inside the modal
    setModalContent, // Function to set the React component to render inside the modal
    setOnModalClose, // Function to set the callback function to be called when the modal is closing
    closeModal, // Function to close the modal
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
};

export const Modal = () => {
  const { modalRef, modalContent, closeModal } = useContext(ModalContext);

  // If there is no div referenced by the modalRef or modalContent is not a
  // truthy value, render nothing
  if (!modalRef || !modalRef.current || !modalContent) return null;

  // Render the following component to the div referenced by the modalRef
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="modal-content">{modalContent}</div>
    </div>,
    modalRef.current
  );
};

export const useModal = () => useContext(ModalContext);
