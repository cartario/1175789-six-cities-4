import React from "react";
import PropTypes from "prop-types";
import {AppRoutes} from "../../const";
import {Link} from "react-router-dom";
import {getUniqCitiesList} from "../../utils.js";

const LIMIT_CITIES_COUNT = 6;

export const Locations = (props) => {
  const {offers} = props;
  const cities = getUniqCitiesList(offers).slice(0, LIMIT_CITIES_COUNT);

  return (
          <>
            <ul className="locations__list tabs__list">
              {cities.map((city) =>               
                <li key={city} className="locations__item">
                  <a className="locations__item-link tabs__item" href="#">
                    <span>{city}</span>
                  </a>
                </li>)}
              
            </ul>
          </> 
  );
};


Locations.propTypes = {
  
};

export default Locations;
