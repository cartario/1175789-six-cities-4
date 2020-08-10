import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import {history} from "../../history.js";

import {getRatingProcent} from "../../utils.js";

const NearPlaceCard = (props) => {

  const {offer, currentId} = props;
  const {isPremium, previewImage, price, title, type, rating, isFavorite, id} = offer;

  const clickHandler = () => {
    history.push(`/offer/${offer.id}`)
  };

  return (
    <article onClick={clickHandler} className="near-places__card place-card">

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

export default NearPlaceCard;