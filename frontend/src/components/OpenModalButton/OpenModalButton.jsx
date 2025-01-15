// frontend/src/components/OpenModalButton/OpenModalButton.jsx
import { useModal } from '../../context/Modal';
import './OpenModalButton.css';

const OpenModalButton = ({
  modalComponent, // Component to render inside the modal
  buttonText, // Test of the button that opens the modal
  onButtonClick, // Optional: callback function that will be called once the button that opens the modal is clicked
  onModalClose, // Optional: callback function that will be called once the modal is closed
}) => {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (typeof onButtonClick === 'function') onButtonClick();
  };

  return (
    <button onClick={onClick} className="modal-button">
      {buttonText}
    </button>
  );
};

export default OpenModalButton;
