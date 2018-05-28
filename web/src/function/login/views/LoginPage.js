import React, {Component} from 'react';
import {connect} from 'react-redux';
// import {Image} from 'react-bootstrap';
import {withRouter} from 'react-router-dom';
import {Button, Layout, Input, Card} from 'antd';
//
//
//
import * as LoginActions from '../LoginActions.js';
//
//
//
const {Header, Content, Footer} = Layout;
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
  margin: " 100px auto calc( 100vh - 550px )",
  padding: "20px 30px 40px 30px"
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
  loginState.account = event.target.value;
}
//
function passwordChange(event) {
  loginState.password = event.target.value;
}

//展示组件
const LoginPage = ({login}) => {
  return (<Layout style={{
      height: "100%"
    }}>
    <Card style={PanelStyle}>
      <img src={require('../../../img/logo.png')} style={{
          height: "40px",
          margin: "0 auto"
        }}/>
      <div style={TitleStyle}>公安业务评测分析系统</div>
      <Input type="text" placeholder="账号" onChange={accountChange} style={{
          margin: "10px 0"
        }}/>

      <Input type="password" placeholder="密码" onChange={passwordChange} style={{
          margin: "10px 0 20px"
        }}/>
      <br/>
      <Button type="primary" onClick={login} className="login-form-button" >登录</Button>
    </Card>
    <Footer style={{
        textAlign: 'center'
      }}>
      萍乡市公安局业务评测系统 ©2016 Created by 萍乡学院信息与计算机工程学院
    </Footer>
  </Layout>);
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
