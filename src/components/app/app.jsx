import React from "react";
import {history} from "../../history.js";
import {AppRoutes} from "../../const.js";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import Main from "../main/main.jsx";
import OfferPage from "../offer-page/offer-page.jsx";
import SignIn from "../sign-in/sign-in.jsx";
import Favorites from "../favorites/favorites.jsx";
import PrivateRoute from "../private-route/private-route.jsx"

import {connect} from "react-redux";

const offer = {
  isPremium: true,
  previewImg: `img/apartment-01.jpg`,
  price: 121,
  title: `Beautiful and luxurious apartment at great location`,
  type: `Apartment`,
  rating: 80,
  isFavorite: true,
  id: 0,  
};

const App = (props) => {
  const {isDataReady, currentId, offers} = props;

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
          path={AppRoutes.ROOM}
          render= {()=>{
            return <OfferPage
              currentId = {currentId}
              offers = {offers}
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

export {App};
export default connect(mapStateToProps)(App);
