import React from "react";
import PropTypes from "prop-types";
import {getRatingProcent} from "../../utils.js";

const ReviewsItem = (props) => {
  const {comment} = props;
  const {avatarUrl, user, textComment, date, rating} = comment;
  
  return (
        <li className="reviews__item">
          <div className="reviews__user user">
            <div className="reviews__avatar-wrapper user__avatar-wrapper">
              <img className="reviews__avatar user__avatar" src={`/${user.avatarUrl}`} width="54" height="54" alt="Reviews avatar"/>
            </div>
            <span className="reviews__user-name">
              {user.name}
            </span>
          </div>
          <div className="reviews__info">
            <div className="reviews__rating rating">
              <div className="reviews__stars rating__stars">
                <span style={{width: `${getRatingProcent(rating)}%`}}></span>
                <span className="visually-hidden">Rating</span>
              </div>
            </div>
            <p className="reviews__text">
              {textComment}
            </p>
  <time className="reviews__time" dateTime={date}>{date}</time>
          </div>
        </li>
  );
};

ReviewsItem.propTypes = {
 
};

export default ReviewsItem;
