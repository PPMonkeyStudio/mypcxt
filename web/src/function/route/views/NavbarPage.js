import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//
//
//
function NavbarPage =() => {
  return (<div>
    NavbarPage
  </div>);
};

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    login: () => {
      dispatch(LoginActions.login(loginState.account, loginState.password));
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarPage));
