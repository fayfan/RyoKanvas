// frontend/src/store/spots.js
import { csrfFetch } from './csrf';

const UPDATE_SPOT = 'spots/updateSpot';
const UPDATE_SPOTS = 'spots/updateSpots';
const UPDATE_REVIEWS = 'spots/updateReviews';

const updateSpot = spot => {
  return {
    type: UPDATE_SPOT,
    payload: spot,
  };
};

const updateSpots = allSpots => {
  return {
    type: UPDATE_SPOTS,
    payload: allSpots,
  };
};

const updateReviews = reviews => {
  return {
    type: UPDATE_REVIEWS,
    payload: reviews,
  };
};

export const retrieveSpots = () => async dispatch => {
  const response = await fetch('/api/spots', {
    method: 'GET',
  });
  const allSpots = await response.json();

  dispatch(updateSpots(allSpots));
  return response;
};

export const retrieveSpot = spotId => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'GET',
  });
  const spot = await response.json();

  dispatch(updateSpot(spot));
  return response;
};

export const retrieveReviews = spotId => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}/reviews`, {
    method: 'GET',
  });
  const reviews = await response.json();

  dispatch(updateReviews(reviews));
  return response;
};

export const removeSpot = spotId => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
  });

  dispatch(retrieveSpots());
  return response;
};

export const submitReview =
  (spotId, { review, stars }) =>
  async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        review,
        stars,
      }),
    });

    dispatch(retrieveReviews(spotId));
    dispatch(retrieveSpot(spotId));
    return response;
  };

export const removeReview = (reviewId, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });

  dispatch(retrieveReviews(spotId));
  dispatch(retrieveSpot(spotId));
  return response;
};

const initialState = [];

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SPOT: {
      return { ...state, spot: action.payload };
    }
    case UPDATE_SPOTS: {
      return { ...state, allSpots: action.payload.Spots };
    }
    case UPDATE_REVIEWS: {
      return { ...state, reviews: action.payload.Reviews };
    }
    default:
      return state;
  }
};

export default spotsReducer;
