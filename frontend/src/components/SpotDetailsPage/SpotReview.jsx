// frontend/src/components/SpotDetailsPage/SpotReview.jsx
import OpenModalButton from '../OpenModalButton';
import DeleteReviewModal from './DeleteReviewModal';

const SpotReview = (review, userId, spotId) => {
  const monthsArray = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <div className="spot-details-review" key={review.userId}>
      <p className="spot-details-review-name">{review.User.firstName}</p>
      <p className="spot-details-review-date">
        {monthsArray[parseInt(review.createdAt.slice(5, 7)) - 1]}{' '}
        {review.createdAt.slice(0, 4)}
      </p>
      <p className="spot-details-review-text">{review.review}</p>
      {userId === review.userId && (
        <div className="confirm-delete-button">
          <OpenModalButton
            modalComponent={
              <DeleteReviewModal reviewId={review.id} spotId={spotId} />
            }
            buttonText="Delete"
          />
        </div>
      )}
    </div>
  );
};

export default SpotReview;
