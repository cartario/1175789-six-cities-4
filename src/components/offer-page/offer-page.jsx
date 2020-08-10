import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";

import {getRatingProcent} from "../../utils.js";

import Header from "../header/header.jsx";
import OfferPageFooter from "../offer-page-footer/offer-page-footer.jsx";
import ReviewsList from "../reviews-list/reviews-list.jsx";

const IMAGE_PAGE_LIMIT = 6;

class OfferPage extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const {match, loadComments} = this.props;
    const currentId = Number(match.params.id);
    loadComments(currentId);
  }

  render(){
    const {offers, match} = this.props;    
    const currentId = Number(match.params.id);
    const currentOffer = offers.find((offer) => offer.id === currentId);
  
  const {
    images,
    isPremium,
    title,
    isFavorite,
    rating,
    type,
    bedrooms,
    maxAdults,
    price,
    goods,
    host,
    description,
  } = currentOffer;
  
    return (
      <>
    <Header />
    <main className="page__main page__main--property">

          <section className="property">            
          <div className="property__gallery-container container">
            <div className="property__gallery">
             {images.map((image) =>  
              <div key={image} className="property__image-wrapper">
                <img className="property__image" src={image} alt="Photo studio"/>
              </div>).slice(0, IMAGE_PAGE_LIMIT)}              
            </div>
          </div>

          <div className="property__container container">
            <div className="property__wrapper">
                {isPremium &&               
                <div className="property__mark">
                  <span>Premium</span>
                </div>}

                
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                
                {isFavorite 
                ?
                <button className="property__bookmark-button property__bookmark-button--active button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
                :
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>}

              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${getRatingProcent(rating)}%`}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>


              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">€{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What's inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good)=> <li key={good} className="property__inside-item">
                    {good}
                  </li>)}                  
                </ul>
              </div>
              
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <ReviewsList />
              </section>
            </div>
          </div>
          <section className="property__map map">
          </section>
        </section>

      <OfferPageFooter />
    </main>
    </>
    );
  }
  
}

// const OfferPage = (props) => {
//   const {offers, match, loadComments} = props;
  
//   const currentId = Number(match.params.id);
//   const currentOffer = offers.find((offer) => offer.id === currentId);
  
//   const {
//     images,
//     isPremium,
//     title,
//     isFavorite,
//     rating,
//     type,
//     bedrooms,
//     maxAdults,
//     price,
//     goods,
//     host,
//     description,
//   } = currentOffer;

//   return (
//     <>
//     <Header />
//     <main className="page__main page__main--property">

//           <section className="property">            
//           <div className="property__gallery-container container">
//             <div className="property__gallery">
//              {images.map((image) =>  
//               <div key={image} className="property__image-wrapper">
//                 <img className="property__image" src={image} alt="Photo studio"/>
//               </div>).slice(0, IMAGE_PAGE_LIMIT)}              
//             </div>
//           </div>

//           <div className="property__container container">
//             <div className="property__wrapper">
//                 {isPremium &&               
//                 <div className="property__mark">
//                   <span>Premium</span>
//                 </div>}

                
//               <div className="property__name-wrapper">
//                 <h1 className="property__name">
//                   {title}
//                 </h1>
                
//                 {isFavorite 
//                 ?
//                 <button className="property__bookmark-button property__bookmark-button--active button" type="button">
//                   <svg className="property__bookmark-icon" width="31" height="33">
//                     <use xlinkHref="#icon-bookmark"></use>
//                   </svg>
//                   <span className="visually-hidden">To bookmarks</span>
//                 </button>
//                 :
//                 <button className="property__bookmark-button button" type="button">
//                   <svg className="property__bookmark-icon" width="31" height="33">
//                     <use xlinkHref="#icon-bookmark"></use>
//                   </svg>
//                   <span className="visually-hidden">To bookmarks</span>
//                 </button>}

//               </div>
//               <div className="property__rating rating">
//                 <div className="property__stars rating__stars">
//                   <span style={{width: `${getRatingProcent(rating)}%`}}></span>
//                   <span className="visually-hidden">Rating</span>
//                 </div>
//                 <span className="property__rating-value rating__value">{rating}</span>
//               </div>


//               <ul className="property__features">
//                 <li className="property__feature property__feature--entire">
//                   {type}
//                 </li>
//                 <li className="property__feature property__feature--bedrooms">
//                   {bedrooms} Bedrooms
//                 </li>
//                 <li className="property__feature property__feature--adults">
//                   Max {maxAdults} adults
//                 </li>
//               </ul>
//               <div className="property__price">
//                 <b className="property__price-value">€{price}</b>
//                 <span className="property__price-text">&nbsp;night</span>
//               </div>
//               <div className="property__inside">
//                 <h2 className="property__inside-title">What's inside</h2>
//                 <ul className="property__inside-list">
//                   {goods.map((good)=> <li key={good} className="property__inside-item">
//                     {good}
//                   </li>)}                  
//                 </ul>
//               </div>
              
//               <div className="property__host">
//                 <h2 className="property__host-title">Meet the host</h2>
//                 <div className="property__host-user user">
//                   <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
//                     <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
//                   </div>
//                   <span className="property__user-name">
//                     {host.name}
//                   </span>
//                 </div>
//                 <div className="property__description">
//                   <p className="property__text">
//                     {description}
//                   </p>
//                 </div>
//               </div>
//               <section className="property__reviews reviews">
//                 <ReviewsList />
//               </section>
//             </div>
//           </div>
//           <section className="property__map map">
//           </section>
//         </section>

//       <OfferPageFooter />
//     </main>
//     </>
//   );
// };

OfferPage.propTypes = {  
  offers: PropTypes.array.isRequired,
};

export default OfferPage;
