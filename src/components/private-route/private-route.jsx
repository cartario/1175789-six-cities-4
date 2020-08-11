import React from "react";
import {Route, Redirect} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";

const PrivateRoute = (props) => {
  const {render, path, exact, isAuth} = props;

  return (
    <Route
      path = {path}
      exact = {exact}
      render={({match})=> {
        return (
          isAuth
            ? render({match})
            : <Redirect to="/login" />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  // render: PropTypes.func.isRequired,
  // path: PropTypes.string,
  // exact: PropTypes.bool,
  // isAuth: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isAuth: state.USER.isAuth,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
