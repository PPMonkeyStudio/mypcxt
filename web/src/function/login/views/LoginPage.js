import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Panel,
  ButtonToolbar,
  Button,
  FormGroup,
  FormControl,
  Image
} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
//
//
//
import * as LoginActions from '../LoginActions.js';
//
//
//
let loginState = {
  account: "",
  password: ""
};
//
const PanelStyle = {
  width: "550px",
  margin: " 100px auto",
  padding: "20px 30px 40px 30px"
};
const ImageStyle = {
  height: "40px"
};
const TitleStyle = {
  margin: "10px auto 30px",
  textAlign: "center",
  fontSize: "30px"
};
//
//
//
function accountChange(event) {
  loginState = {
    account: event.target.value
  };
}
//
function passwordChange(event) {
  loginState = {
    password: event.target.value
  };
}

//展示组件
function LoginPage({login}) {
  return (<div> 
    <Panel style={PanelStyle}>
      <Image src={require('../../../img/logo.png')} style={ImageStyle}/>
      <div style={TitleStyle}>公安民意评测系统</div>
      <FormGroup>
        <FormControl type="text" placeholder="账号" onChange={accountChange}/>
      </FormGroup>
      <FormGroup>
        <FormControl type="password" placeholder="密码" onChange={passwordChange}/>
      </FormGroup>
      <br/>
      <Button className="btn-block" bsStyle="primary" onClick={login}>登录</Button>
    </Panel>
  </div>);
}

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

//整个是容器组件
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginPage));
