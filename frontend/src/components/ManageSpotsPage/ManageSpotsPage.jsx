// frontend/src/components/ManageSpotsPage/ManageSpotsPage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ManageSpotsPageSpotCard from './ManageSpotsPageSpotCard';
import * as spotsActions from '../../store/spots';
import './ManageSpotsPage.css';

const ManageSpotsPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userId = useSelector(state => state.session.user).id;
  const allSpots = useSelector(state => state.spots.allSpots);

  useEffect(() => {
    dispatch(spotsActions.getSpots());
  }, [dispatch]);

  if (!allSpots)
    return (
      <main className="spots-main">
        <h1>Loading page...</h1>
      </main>
    );

  const spots = allSpots.filter(spot => spot.ownerId === userId);

  if (!spots)
    return (
      <main className="spot-details-main">
        <h1 className="spot-details-header">Loading page...</h1>
      </main>
    );

  return (
    <>
      <main className="manage-spots-page-main">
        <h1 className="manage-spots-page-h1">Manage Spots</h1>
        {!!spots.length && (
          <button
            onClick={() => navigate('/spots/new')}
            className="create-spot-button"
          >
            Create a New Spot
          </button>
        )}
        {!spots.length && (
          <div className="manage-spots-page-tagline">
            <p className="manage-spots-page-tagline-text">
              Create your first spot!
            </p>
            <button
              onClick={() => navigate('/spots/new')}
              className="create-spot-button-no-spots"
            >
              Create a New Spot
            </button>
          </div>
        )}
        <div className="manage-spots-page-spots">
          {spots.map(spot => ManageSpotsPageSpotCard(spot, navigate))}
        </div>
      </main>
    </>
  );
};

export default ManageSpotsPage;
