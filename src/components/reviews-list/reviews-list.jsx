import React from "react";
import PropTypes from "prop-types";
import ReviewsItem from "../reviews-item/reviews-item.jsx";
import ReviewForm from "../review-form/review-form.jsx";
import {connect} from "react-redux";
import {Operation} from "../../reducer/hotels/hotels";

import withComment from "../../hocs/with-comment/with-comment.js";

const ReviewFormCommented = withComment(ReviewForm);

const ReviewsList = (props) => {
  const {isAuth, comments, postNewComment, currentId} = props;

  return (
    
    <React.Fragment>
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment)=> <ReviewsItem key={comment.id} comment={comment}/>).slice(0, 10)}
      </ul>

        {isAuth && <ReviewFormCommented 
          postNewComment = {postNewComment}
          currentId = {currentId}
        />}
        
      </React.Fragment>
  );
};

ReviewsList.propTypes = {
 
};

const mapStateToProps = (state) => ({
  comments: state.HOTELS.comments,
  isAuth: state.USER.isAuth,
});

const mapDispatchToProps = (dispatch) => ({
  postNewComment(userId, commentPost){
    dispatch(Operation.postNewComment(userId, commentPost));
  }
});

export {ReviewsList};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewsList);
