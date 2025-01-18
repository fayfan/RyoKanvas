// frontend/src/components/ConfirmDeleteModal/ConfirmDeleteModal.jsx
import { useDispatch } from 'react-redux';
import { useModal } from '../../context/Modal';
import * as spotsActions from '../../store/spots';

const DeleteReviewModal = ({ reviewId, spotId }) => {
  const dispatch = useDispatch();
  const { closeModal } = useModal();

  const handleSubmit = e => {
    e.preventDefault();

    return dispatch(spotsActions.removeReview(reviewId, spotId)).then(
      closeModal
    );
  };

  return (
    <main className="delete-review-modal-main">
      <h1 className="delete-review-modal-h1">Confirm Delete</h1>
      <form onSubmit={handleSubmit} className="delete-review-modal-form">
        <p className="delete-review-modal-text">
          Are you sure you want to delete this review?
        </p>
        <button type="submit" className="delete-review-modal-yes-button">
          Yes (Delete Review)
        </button>
        <button
          type="button"
          onClick={closeModal}
          className="delete-review-modal-no-button"
        >
          No (Keep Review)
        </button>
      </form>
    </main>
  );
};

export default DeleteReviewModal;
