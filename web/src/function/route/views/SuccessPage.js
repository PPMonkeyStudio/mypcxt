import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
//
//
//
const successPage = () => {
  return (<div>
    success
  </div>);
};

export default withRouter(connect()(successPage));
