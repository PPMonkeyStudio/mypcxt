import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

/**
 * css
 * @type {Object}
 */

/**
 * 欢迎页
 * @method IndexPage
 */
const IndexPage = () => {
  return (<div style={{
      width: "100%",
      margin: "0 auto",
      textAlign: "center",

    }}>
    <h1>欢迎使用</h1>
    <h2>萍乡市公安局业务评测系统</h2>
  </div>);
};

export default withRouter(connect()(IndexPage));
