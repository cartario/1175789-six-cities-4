import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import PlaceCard from "../place-card/place-card.jsx";

const PlacesList = (props) => {
  const {offers} = props;
  
  const placeCardHoverHandler = (activeId) => {
    console.log(activeId)
  }

  return (
    <>
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer)=> <PlaceCard key={offer.id} offer={offer}
        placeCardHoverHandler ={placeCardHoverHandler}
        />)}
      </div>
    </>
  );
};


PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      isPremium: PropTypes.bool.isRequired,
      previewImg: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      isFavorite: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
};

export default PlacesList;
