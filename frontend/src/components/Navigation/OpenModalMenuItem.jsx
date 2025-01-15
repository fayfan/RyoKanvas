// frontend/src/components/Navigation/OpenModalMenuItem.jsx
import { useModal } from '../../context/Modal';

const OpenModalMenuItem = ({
  modalComponent, // Component to render inside the modal
  itemText, // Test of the menu item that opens the modal
  onItemClick, // Optional: callback function that will be called once the menu item that opens the modal is clicked
  onModalClose, // Optional: callback function that will be called once the modal is closed
}) => {
  const { setModalContent, setOnModalClose } = useModal();

  const onClick = () => {
    if (onModalClose) setOnModalClose(onModalClose);
    setModalContent(modalComponent);
    if (typeof onItemClick === 'function') onItemClick();
  };

  return (
    <li onClick={onClick} className="modal-item">
      {itemText}
    </li>
  );
};

export default OpenModalMenuItem;
