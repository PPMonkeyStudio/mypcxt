import React from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Switch,
  Link,
  BrowserRouter,
  Router,
  Redirect,
  withRouter
} from 'react-router-dom';
//
//
//
//
//
//
const ErrorPage = () => {
  return (<div style={{
      width: "100%",
      margin: "0 auto",
      textAlign: "center"
    }}>
    <h1>页面不存在</h1>
    <p>请确定您的路径是否正确，若系统出现问题，则烦请记录问题发生的过程，并及时反馈给开发者。</p>
    <p>
      <Link to="/NavbarPage/IndexPage">返回首页
      </Link>
    </p>
  </div>);
};

export default withRouter(connect()(ErrorPage));
