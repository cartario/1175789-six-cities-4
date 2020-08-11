import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";

const Sort = () => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom">
        <li className="places__option places__option--active" tabIndex="0">Popular</li>
        <li className="places__option" tabIndex="0">Price: low to high</li>
        <li className="places__option" tabIndex="0">Price: high to low</li>
        <li className="places__option" tabIndex="0">Top rated first</li>
      </ul>
      
      <select className="places__sorting-type" id="places-sorting">
        <option className="places__option" defaultValue="popular" >Popular</option>
        <option className="places__option" defaultValue="to-high">Price: low to high</option>
        <option className="places__option" defaultValue="to-low">Price: high to low</option>
        <option className="places__option" defaultValue="top-rated">Top rated first</option>
      </select>
      
    </form>
  );
};

Sort.propTypes = {
 
};

export default Sort;
