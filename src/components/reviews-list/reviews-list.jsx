import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import ReviewForm from "../review-form/review-form.jsx";

const comments = [
  {
    textComment: "A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    date: "2019-05-08T14:13:56.569Z",
    id: 1,
    rating: 4,
    user: {
      avatarUrl: "img/avatar-max.jpg",
      id: 4,
      isPro: false,
      name: "Max"
    }
  },
  {
    textComment: "1111A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam.",
    date: "2019-05-08T14:13:56.569Z",
    id: 2,
    rating: 3,
    user: {
      avatarUrl: "img/avatar-max.jpg",
      id: 2,
      isPro: false,
      name: "Nikita"
    }
  },
];

const ReviewsList = () => {
  const isAuth = false;

  return (
    
    <React.Fragment>
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment)=> <ReviewsItem key={comment.id} comment={comment}/>).slice(0, 10)}
      </ul>

        {isAuth && <ReviewForm />}
        
      </React.Fragment>
  );
};

ReviewsList.propTypes = {
 
};

export default ReviewsList;
