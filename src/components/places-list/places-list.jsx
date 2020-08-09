import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import PlaceCard from "../place-card/place-card.jsx";


class PlacesList extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      activeCard: null,
    };

    
    this.currentIdClickHandler = this.currentIdClickHandler.bind(this);
    this.placeCardHoverHandler = this.placeCardHoverHandler.bind(this);
  }

  currentIdClickHandler(activeId){
    this.props.setCurrentId(activeId);
  }

  placeCardHoverHandler(offer){
    this.setState({
      activeCard: offer,
    })
  }

  render(){
    const {offers} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer)=> <PlaceCard key={offer.id} offer={offer}
          placeCardHoverHandler ={this.placeCardHoverHandler}
          currentIdClickHandler= {this.currentIdClickHandler}
        />)}
      </div>
    );
  }
};

PlacesList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      isPremium: PropTypes.bool.isRequired,
      previewImage: PropTypes.string.isRequired,
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
