import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import { connect } from "react-redux";



const ReviewsList = (props) => {
  const {isAuth, comments} = props;

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

const mapStateToProps = (state) => ({
  comments: state.HOTELS.comments,
  isAuth: state.USER.isAuth,
});

export {ReviewsList};
export default connect(mapStateToProps)(ReviewsList);
