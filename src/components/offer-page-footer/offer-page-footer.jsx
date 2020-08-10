import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import {history} from "../../history.js";
import {getRatingProcent} from "../../utils.js";
import { connect } from "react-redux";

const NearPlaceCard = (props) => {

  const {offer} = props;

  const {
    isPremium,
    previewImage,
    price,
    title,
    type,
    rating,
    isFavorite,
    id,

  } = offer;


  return (
    <article className="near-places__card place-card">

              {isPremium &&
                        <div className="place-card__mark">
                          <span>Premium</span>
                        </div>}
          
                <div className="near-places__image-wrapper place-card__image-wrapper">
                  <a href="#">
                    <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
                  </a>
                </div>
                <div className="place-card__info">
                  <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                      <b className="place-card__price-value">€{price}</b>
                      <span className="place-card__price-text">/&nbsp;night</span>
                    </div>

                    {isFavorite
                      ? <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark">
                          </use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                      :
                      <button className="place-card__bookmark-button button" type="button">
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                          <use xlinkHref="#icon-bookmark">
                          </use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                      </button>
                    }

                  </div>
                  <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                      <span style={{width: `${getRatingProcent(rating)}%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <h2 className="place-card__name">
                    <Link to={`${AppRoutes.ROOM}/${id}`}>{title}</Link>
                  </h2>
                  <p className="place-card__type">{type}</p>
                </div>
              </article>
  );
};

const OfferPageFooter = (props) => {
  const {nearByOffers} = props;

  return (
    <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearByOffers.map((offer) => <NearPlaceCard key={offer.id} offer={offer}/>)}              
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
