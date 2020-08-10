import React from "react";
import {history} from "../../history.js";
import {AppRoutes} from "../../const.js";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferPage from "../offer-page/offer-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import PrivateRoute from "../private-route/private-route.jsx"

import {Operation} from "../../reducer/hotels/hotels.js";

import {connect} from "react-redux";


const App = (props) => {
  const {isDataReady, loadComments, offers} = props;

  if(!isDataReady) {
    return null;
  }

  return (
    <Router history = {history}>
      <Switch>
        <Route
          exact
          path={AppRoutes.MAIN}
          render= {()=>{
            return <Main
              offers={offers}
            />;
          }
          }
        />
        <Route
          path={`${AppRoutes.ROOM}/:id?`}
          render= {({match})=>{
            return <OfferPage
              loadComments = {loadComments}
              offers = {offers}
              match={match}
            />;
          }
          }
        />
        <Route
          path={AppRoutes.SIGN_IN}
          render= {()=>{
            return <SignIn
            />;
          }
          }
        />
        <PrivateRoute
          path={AppRoutes.FAVORITES}
          render= {()=>{
            return <Favorites
            />;
          }
          }
        />
        

        
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  isDataReady: state.HOTELS.isDataReady,
  offers: state.HOTELS.hotels,
  currentId: state.HOTELS.currentId,
});

const mapDispatchToProps = (dispatch) => ({
  loadComments(id) {
    dispatch(Operation.loadComments(id));
  },
});

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
