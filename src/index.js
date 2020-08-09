import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import {createApi} from "./api.js";
import {createStore, compose, applyMiddleware} from "redux";
import thunkMiddleware from "redux-thunk";
import {Provider} from "react-redux";
import {reducers} from "./reducer/reducer.js";
import {Operation} from "./reducer/hotels/hotels.js";
import {ActionCreator} from "./reducer/user/user.js";
import {Operation as UserOperation} from "./reducer/user/user.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(false));
};

const api = createApi(onUnauthorized);

const store = createStore(
  reducers, compose(
      applyMiddleware(thunkMiddleware.withExtraArgument(api)),
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
  )
);

store.dispatch(Operation.loadHotels());
store.dispatch(UserOperation.checkAuth());

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
    document.querySelector(`#root`)
);
