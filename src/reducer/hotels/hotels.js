import {extend} from "../../utils.js";
import {adapter} from "../../adapters/hotels.js";

const initialState = {
 hotels: [],
};

export const ActionType = {
  GET_ALL_HOTELS: `GET_ALL_HOTELS`,
  
};

export const ActionCreator = {
  setLoadHotels: (hotels) => {
    console.log(hotels)
    return {
      type: ActionType.GET_ALL_HOTELS,
      payload: hotels,
    };
  },
};

export const Operation = {
  loadHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const dataFromAdapter = adapter(response.data);
      dispatch(ActionCreator.setLoadHotels(dataFromAdapter));
      // dispatch({type: ActionType.GET_MOVIES_BY_FILTER, payload: ALL_GENRE});
      // dispatch(ActionCreator.setIsDataReady(true));
    })
    .catch((err) => {
      // dispatch(ActionCreator.setLoadFilmsError(true));
      throw err;
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.GET_ALL_HOTELS:
      return extend(state, {hotels: action.payload});

    default:
      return state;
  }
};