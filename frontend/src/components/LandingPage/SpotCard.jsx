// frontend/src/components/SpotCard/SpotCard.jsx
import { NavLink } from 'react-router-dom';
import { FaStar } from 'react-icons/fa6';
import placeholderImage from '../../images/placeholder.png';

const SpotCard = spot => {
  const spotAvgRating = spot.avgRating ? spot.avgRating.toFixed(2) : 'New';
  const previewImage = spot.previewImage ? spot.previewImage : placeholderImage;

  return (
    <NavLink to={`/spots/${spot.id}`} className="spot-card-link" key={spot.id}>
      <div className="spot-card-div">
        <img
          src={previewImage}
          title={spot.name}
          alt={spot.name}
          className="spot-card-preview-image"
        />
        <div className="spot-card-line-1">
          <span className="spot-card-location">
            {spot.city}, {spot.state}
          </span>
          <span className="spot-card-average-rating">
            <FaStar className="spot-card-fa-star" />
            &nbsp;{spotAvgRating}
          </span>
        </div>
        <div className="spot-card-line-2">
          <b>${spot.price.toLocaleString()}</b> night
        </div>
      </div>
    </NavLink>
  );
};

export default SpotCard;
