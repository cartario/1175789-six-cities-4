import React from "react";
import {history} from "../../history.js";
import {AppRoutes} from "../../const.js";
import {Switch, Route, Router, Redirect} from "react-router-dom";

import PlaceCard from "../place-card/place-card.jsx";

const offer = {
  isPremium: true,
  previewImg: `img/apartment-01.jpg`,
  price: 121,
  title: `Beautiful and luxurious apartment at great location`,
  type: `Apartment`,
  rating: 80,
  isFavorite: true,
  id: 5,
};

const App = () => {
  return (
    <Router history = {history}>
      <Switch>
        <Route
          exact
          path={AppRoutes.MAIN}
          render= {()=>{
            return <div>HelloYo</div>;
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

export default App;
