import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import PlacesList from "../places-list/places-list.jsx";
import Sort from "../sort/sort.jsx";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/hotels/hotels.js";


const PlacesListContainer = (props) => {
  const {offers, currentId = 1} = props;

  const currentCity = offers.find((offer) => offer.id === currentId).city.name;
  const currentPlacesCount = offers.filter((offer) => offer.city.name === currentCity).length;

  return (
    <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{currentPlacesCount} places to stay in {currentCity}</b>
              <Sort />
              <PlacesList 
                offers = {offers}
                
              />
            </section>
  );
};


PlacesListContainer.propTypes = {
 
};

const mapStateToProps = (state) => ({
  offers: state.HOTELS.hotels,
  currentId: state.HOTELS.currentId,
});



export {PlacesListContainer};
export default connect(mapStateToProps)(PlacesListContainer);
