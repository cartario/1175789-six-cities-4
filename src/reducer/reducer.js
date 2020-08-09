import {combineReducers} from "redux";
// import {reducer as sortReducer} from "./current-genre/current-genre.js";
import {reducer as hotelsReducer} from "./hotels/hotels.js";
// import {reducer as userReducer} from "./user/user.js";

import NameSpace from "./name-space/name-space.js";

export const reducers = combineReducers({
  // [NameSpace.CURRENT_SORT]: sortReducer,
  [NameSpace.HOTELS]: hotelsReducer,
  // [NameSpace.USER]: userReducer,
});
