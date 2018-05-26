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
import {
  Panel,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  Image,
  Jumbotron
} from 'react-bootstrap';
//
//
//
const JumbotronStyle = {
  width: "700px",
  margin: " 100px auto",
  padding: "50px"
};
//
//
//
const ErrorPage = () => {
  return (<Jumbotron style={JumbotronStyle}>
    <h1>页面不存在</h1>
    <p>请确定您的路径是否正确，若系统出现问题，则烦请记录问题发生的过程，并及时反馈给开发者。</p>
    <p>
      <Link to="/NavbarPage/IndexPage" bsStyle="primary">返回首页
      </Link>
    </p>
  </Jumbotron>);
};

export default withRouter(connect()(ErrorPage));
