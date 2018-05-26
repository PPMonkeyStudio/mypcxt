import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//
//
//
const ErrorPage = () => {
  return (<div>
    页面不存在
  </div>);
};

export default withRouter(connect()(ErrorPage));
