import React from "react";
import {history} from "../../history.js";
import {AppRoutes} from "../../const.js";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import Main from "../main/main.jsx";
import PlaceCard from "../place-card/place-card.jsx";
import { connect } from "react-redux";

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

  return (
    <Router history = {history}>
      <Switch>
        <Route
          exact
          path={AppRoutes.MAIN}
          render= {()=>{
            return <Main
            
            />;
          }
          }
        />
        <Route
          path="/pc"
          render= {()=>{
            return <PlaceCard
              offer={offer}
              
            />;
          }
          }
        />

        
      </Switch>
    </Router>
  );
};

const mapStateToProps = (state) => ({
  offers: state.HOTELS.hotels,
});

export {App};
export default connect(mapStateToProps)(App);
