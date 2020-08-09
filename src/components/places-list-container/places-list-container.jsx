import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import PlacesList from "../places-list/places-list.jsx";
import Sort from "../sort/sort.jsx";

const offers = [
  {
    isPremium: true,
    previewImg: `img/apartment-02.jpg`,
    price: 121,
    title: `Beautiful and luxurious apartment at great location`,
    type: `Apartment1`,
    rating: 80,
    isFavorite: true,
    id: 1,
  },
  {
    isPremium: false,
    previewImg: `img/apartment-03.jpg`,
    price: 122,
    title: `Beautiful and luxurious apartment at great location`,
    type: `Apartment2`,
    rating: 60,
    isFavorite: true,
    id: 2,
  },{
    isPremium: false,
    previewImg: `img/apartment-03.jpg`,
    price: 123,
    title: `Beautiful and luxurious apartment at great location`,
    type: `Apartment3`,
    rating: 40,
    isFavorite: false,
    id: 3,
  },{
    isPremium: true,
    previewImg: `img/apartment-02.jpg`,
    price: 124,
    title: `Beautiful and luxurious apartment at great location`,
    type: `Apartment4`,
    rating: 20,
    isFavorite: false,
    id: 4,
  },
];

const PlacesListContainer = () => {

  return (
    <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">312 places to stay in Amsterdam</b>
              <Sort />
              <PlacesList 
              offers = {offers}
              />
            </section>
  );
};


PlacesListContainer.propTypes = {
 
};

export default PlacesListContainer;
