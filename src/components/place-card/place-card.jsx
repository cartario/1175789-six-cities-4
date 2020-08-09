import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import {history} from "../../history.js";

class PlaceCard extends React.Component{
  constructor(props){
    super(props);
    this._activeHoverHandle = this._activeHoverHandle.bind(this);
    this._currentIdClickHandler = this._currentIdClickHandler.bind(this);
  }

  _activeHoverHandle() {
    this.props.placeCardHoverHandler(this.props.offer);    
  }

  _currentIdClickHandler() {
    
    this.props.currentIdClickHandler(this.props.offer.id);
    
    history.push(`/offer/${this.props.offer.id}`)
  }

  render(){    
    const {offer} = this.props;

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
      <article className="cities__place-card place-card" 
        onMouseEnter = {this._activeHoverHandle}
        onClick = {this._currentIdClickHandler}
        >
        {isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>}
  
        <div className="cities__image-wrapper place-card__image-wrapper">
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
              <span style={{width: `${rating}%`}}></span>
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
  }
};

// const PlaceCard = (props) => {
//   const {offer, placeCardHoverHandler, currentIdClickHandler} = props;

//   const {
//     isPremium,
//     previewImage,
//     price,
//     title,
//     type,
//     rating,
//     isFavorite,
//     id,

//   } = offer;

//   return (
//     <article className="cities__place-card place-card" 
//       onMouseEnter = {() =>{placeCardHoverHandler(offer)}}
//       onClick = {() => {currentIdClickHandler(id)}}
//       >
//       {isPremium &&
//         <div className="place-card__mark">
//           <span>Premium</span>
//         </div>}

//       <div className="cities__image-wrapper place-card__image-wrapper">
//         <a href="#">
//           <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
//         </a>
//       </div>
//       <div className="place-card__info">
//         <div className="place-card__price-wrapper">
//           <div className="place-card__price">
//             <b className="place-card__price-value">€{price}</b>
//             <span className="place-card__price-text">/&nbsp;night</span>
//           </div>

//           {isFavorite
//             ? <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
//               <svg className="place-card__bookmark-icon" width="18" height="19">
//                 <use xlinkHref="#icon-bookmark">
//                 </use>
//               </svg>
//               <span className="visually-hidden">To bookmarks</span>
//             </button>
//             :
//             <button className="place-card__bookmark-button button" type="button">
//               <svg className="place-card__bookmark-icon" width="18" height="19">
//                 <use xlinkHref="#icon-bookmark">
//                 </use>
//               </svg>
//               <span className="visually-hidden">To bookmarks</span>
//             </button>
//           }

//         </div>
//         <div className="place-card__rating rating">
//           <div className="place-card__stars rating__stars">
//             <span style={{width: `${rating}%`}}></span>
//             <span className="visually-hidden">Rating</span>
//           </div>
//         </div>
//         <h2 className="place-card__name">
//           <Link to={`${AppRoutes.ROOM}/${id}`}>{title}</Link>
//         </h2>
//         <p className="place-card__type">{type}</p>
//       </div>
//     </article>
//   );
// };


PlaceCard.propTypes = {
  offer: PropTypes.shape({
    isPremium: PropTypes.bool.isRequired,
    previewImage: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired,
  })
};

export default PlaceCard;
