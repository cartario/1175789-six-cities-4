import {extend} from "../../utils.js";
import {adapter, adapterComment} from "../../adapters/hotels.js";

const initialState = {
  isDataReady: false,  
  hotels: [],
  comments: [],
};

export const ActionType = {
  IS_DATA_READY: `IS_DATA_READY`,    
  GET_ALL_HOTELS: `GET_ALL_HOTELS`,
  GET_ALL_COMMENTS: `GET_ALL_COMMENTS`,
};

export const ActionCreator = {
  setIsDataReady: (value) => {    
    return {
      type: ActionType.IS_DATA_READY,
      payload: value,
    };
  },

  setLoadHotels: (hotels) => {    
    return {
      type: ActionType.GET_ALL_HOTELS,
      payload: hotels,
    };
  },

  setLoadComments: (comments)=> {    
    return {
      type: ActionType.GET_ALL_COMMENTS,
      payload: comments,
    };
  },
};

export const Operation = {
  loadHotels: () => (dispatch, getState, api) => {
    return api.get(`/hotels`).then((response) => {
      const dataFromAdapter = adapter(response.data);
      dispatch(ActionCreator.setLoadHotels(dataFromAdapter));      
      dispatch(ActionCreator.setIsDataReady(true));
    })
    .catch((err) => {      
      throw err;
    });
  },

  loadComments: (id) => (dispatch, getState, api) => {
    return api.get(`/comments/${id}`)
      .then((response) => {        
        const dataFromAdapter = adapterComment(response.data);
        dispatch(ActionCreator.setLoadComments(dataFromAdapter));
      })
      .catch((err) =>{
        throw err;
      })
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.IS_DATA_READY:
      return extend(state, {isDataReady: action.payload});

    case ActionType.GET_ALL_HOTELS:
      return extend(state, {hotels: action.payload});

    case ActionType.GET_ALL_COMMENTS:
      return extend(state, {comments: action.payload});

    default:
      return state;
  }
};
