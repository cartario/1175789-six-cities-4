import {extend} from "../../utils.js";
import {adapter} from "../../adapters/hotels.js";

const initialState = {
  isDataReady: false,
  currentId: 1,
  hotels: [],
};

export const ActionType = {
  IS_DATA_READY: `IS_DATA_READY`,  
  SET_CURRENT_ID: `SET_CURRENT_ID`,
  GET_ALL_HOTELS: `GET_ALL_HOTELS`,
};

export const ActionCreator = {
  setIsDataReady: (value) => {    
    return {
      type: ActionType.IS_DATA_READY,
      payload: value,
    };
  },

  setCurrentId: (value) => {    
    return {
      type: ActionType.SET_CURRENT_ID,
      payload: value,
    };
  },

  setLoadHotels: (hotels) => {    
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
      dispatch(ActionCreator.setIsDataReady(true));
    })
    .catch((err) => {
      // dispatch(ActionCreator.setLoadFilmsError(true));
      throw err;
    });
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.IS_DATA_READY:
      return extend(state, {isDataReady: action.payload});

    case ActionType.SET_CURRENT_ID:
      return extend(state, {currentId: action.payload}); 

    case ActionType.GET_ALL_HOTELS:
      return extend(state, {hotels: action.payload});

    default:
      return state;
  }
};