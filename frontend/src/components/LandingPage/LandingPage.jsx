// frontend/src/components/LandingPage/LandingPage.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SpotCard from './SpotCard';
import * as spotsActions from '../../store/spots';
import './LandingPage.css';

const LandingPage = () => {
  const dispatch = useDispatch();
  const spots = useSelector(state => state.spots.allSpots);

  useEffect(() => {
    dispatch(spotsActions.retrieveSpots());
  }, [dispatch]);

  if (!spots)
    return (
      <main className="spot-details-main">
        <h1 className="spot-details-header">Loading page...</h1>
      </main>
    );

  return (
    <>
      <main className="spots-main">{spots.map(spot => SpotCard(spot))}</main>
    </>
  );
};

export default LandingPage;
