// // frontend/src/components/ConfirmDeleteModal/ConfirmDeleteModal.jsx
// import { useDispatch } from 'react-redux';
// import { useModal } from '../../context/Modal';
// import * as spotsActions from '../../store/spots';
// import * as reviewsActions from '../../store/reviews';
// import './ConfirmDeleteModal.css';

// const ConfirmDeleteModal = ({ type, id }) => {
//   const dispatch = useDispatch();
//   const { closeModal } = useModal();

//   const handleSubmit = e => {
//     e.preventDefault();

//     return dispatch(reviewsActions.removeReview(id)).then(() => {
//       closeModal;
//     });

//     if (type === 'review') {
//       return dispatch(reviewsActions.removeReview(id)).then(() => {
//         closeModal;
//       });
//     }

//     if (type === 'spot') {
//       return dispatch(spotsActions.removeSpot(id)).then(() => {
//         closeModal;
//       });
//     }
//   };

//   return (
//     <main className={`confirm-delete-modal-${type}-main`}>
//       <h1 className="delete-h1">Confirm Delete</h1>
//       <form
//         onSubmit={handleSubmit}
//         className={`confirm-delete-modal-${type}-form`}
//       >
//         <p>
//           Are you sure you want to {type === 'review' && 'delete this review'}
//           {type === 'spot' && 'remove this spot from the listings'}?
//         </p>
//         <button type="submit" className="delete-yes-button">
//           Yes (Delete {type === 'review' && 'Review'}
//           {type === 'spot' && 'Spot'})
//         </button>
//         <button type="button" onClick={closeModal} className="delete-no-button">
//           No (Keep {type === 'review' && 'Review'}
//           {type === 'spot' && 'Spot'})
//         </button>
//       </form>
//     </main>
//   );
// };

// export default ConfirmDeleteModal;
