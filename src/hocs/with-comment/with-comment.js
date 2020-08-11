import React from "react";
import {extend} from "../../utils.js";
import PropTypes from "prop-types";

const LIMIT_TEXT_COMMENT = {
  MIN: 50,
  MAX: 300,
};

export const withComment = (Component) => {
  class WithComment extends React.PureComponent {
    constructor(props) {
      super(props);

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);

      this.state = {
        comment: ``,
        rating: 0,        
      };

      this.isValidForm = false;
    }

    handleChange(e) {
      const {name} = e.target;
      if (name === `rating`) {
        this.setState(extend(this.state, {rating: Number(e.target.value)}));
      }
      if (name === `review`) {
        this.setState(extend(this.state, {comment: e.target.value}));
      }

      this.isValidForm = (this.state.rating > 0 && 
        this.state.comment.length >= LIMIT_TEXT_COMMENT.MIN && 
        this.state.comment.length <= LIMIT_TEXT_COMMENT.MAX);
    }

    handleSubmit(e) {
      e.preventDefault();
      
      const {postNewComment, currentId} = this.props;     
      
      if(this.isValidForm) {
        postNewComment(currentId, {        
          comment: this.state.comment,
          rating: this.state.rating,
        });
  
        this.setState({
          comment: ``,
          rating: 0, 
        });
      }
      
    }

    render() {
      return <Component        
        onChange = {this.handleChange}
        onSubmit = {this.handleSubmit}
        comment = {this.state.comment}
        rating = {this.state.rating}
        isValidForm = {this.isValidForm}
        {...this.props}
      />;
    }
  }
  WithComment.propTypes = {
    // postNewComment: PropTypes.func.isRequired,
    // userId: PropTypes.string.isRequired,    
  };
  return WithComment;
};

export default withComment;