import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {Card} from 'antd';
/**
 * css
 * @type {Object}
 */

/**
 * 欢迎页
 * @method IndexPage
 */
const IndexPage = () => {
  return (<Card style={{
      width: "100%",
      margin: "0 auto",
      padding: "100px 0 200px",
      textAlign: "center",
    }}>
    <h1>欢迎使用</h1>
  <h1>萍乡市公安局业务分析测评系统</h1>
  </Card>);
};

export default withRouter(connect()(IndexPage));
