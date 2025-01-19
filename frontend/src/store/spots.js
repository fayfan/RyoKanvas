// frontend/src/store/spots.js
import { csrfFetch } from './csrf';

const RESET_STORE = 'spots/resetStore';
const UPDATE_SPOTS = 'spots/updateSpots';
const UPDATE_SPOT = 'spots/updateSpot';
const UPDATE_REVIEWS = 'spots/updateReviews';

const resetStore = () => {
  return {
    type: RESET_STORE,
  };
};

const updateSpots = allSpots => {
  return {
    type: UPDATE_SPOTS,
    payload: allSpots,
  };
};

const updateSpot = spot => {
  return {
    type: UPDATE_SPOT,
    payload: spot,
  };
};

const updateReviews = reviews => {
  return {
    type: UPDATE_REVIEWS,
    payload: reviews,
  };
};

export const clearStore = () => async dispatch => {
  dispatch(resetStore());
};

export const getSpots = () => async dispatch => {
  const response = await fetch('/api/spots', {
    method: 'GET',
  });
  const allSpots = await response.json();

  dispatch(updateSpots(allSpots));
  return response;
};

export const getSpot = spotId => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'GET',
  });
  const spot = await response.json();

  dispatch(updateSpot(spot));
  return response;
};

export const getReviews = spotId => async dispatch => {
  const response = await fetch(`/api/spots/${spotId}/reviews`, {
    method: 'GET',
  });
  const reviews = await response.json();

  dispatch(updateReviews(reviews));
  return response;
};

export const postSpot =
  ({ address, city, state, country, lat, lng, name, description, price }) =>
  async dispatch => {
    const response = await csrfFetch('/api/spots', {
      method: 'POST',
      body: JSON.stringify({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        description,
        price,
      }),
    });

    dispatch(getSpots());
    return response;
  };

export const postSpotImages =
  ({ spotId, previewImage, image1, image2, image3, image4 }) =>
  async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/images`, {
      method: 'POST',
      body: JSON.stringify({
        url: previewImage,
        preview: true,
      }),
    });

    const imagesArray = [image1, image2, image3, image4];

    imagesArray.forEach(async image =>
      image.length
        ? await csrfFetch(`/api/spots/${spotId}/images`, {
            method: 'POST',
            body: JSON.stringify({
              url: image,
              preview: false,
            }),
          })
        : {}
    );

    dispatch(getSpot(spotId));
    return response;
  };

export const postReview =
  (spotId, { review, stars }) =>
  async dispatch => {
    const response = await csrfFetch(`/api/spots/${spotId}/reviews`, {
      method: 'POST',
      body: JSON.stringify({
        review,
        stars,
      }),
    });

    dispatch(getReviews(spotId));
    dispatch(getSpot(spotId));
    return response;
  };

export const deleteSpot = spotId => async dispatch => {
  const response = await csrfFetch(`/api/spots/${spotId}`, {
    method: 'DELETE',
  });

  dispatch(getSpots());
  return response;
};

export const deleteReview = (reviewId, spotId) => async dispatch => {
  const response = await csrfFetch(`/api/reviews/${reviewId}`, {
    method: 'DELETE',
  });

  dispatch(getReviews(spotId));
  dispatch(getSpot(spotId));
  return response;
};

const initialState = {};

const spotsReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESET_STORE: {
      return initialState;
    }
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
