import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import {history} from "../../history.js";

import { connect } from "react-redux";
import NearPlaceCard from "../near-place-card/near-place-card.jsx";


const OfferPageFooter = (props) => {
  const {nearByOffers, currentId} = props;

  return (
    <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearByOffers.map((offer) => <NearPlaceCard key={offer.id} offer={offer}  currentId= {currentId}/>)}              
            </div>
          </section>
        </div>
  );
};

const mapStateToProps = (state) => ({
  nearByOffers: state.HOTELS.nearByOffers,
})

export {OfferPageFooter};
export default connect(mapStateToProps)(OfferPageFooter);
