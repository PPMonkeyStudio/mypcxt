import React, {Component} from 'react';
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
// import {
//   Panel,
//   ButtonToolbar,
//   FormGroup,
//   FormControl,
//   Image,
//   Jumbotron,
//   Navbar,
//   Nav,
//   NavItem,
//   NavDropdown,
//   MenuItem,
//   Well
// } from 'react-bootstrap';
import PropTypes from 'prop-types'
/**
 * antd
 * @type {[type]}
 */
import {Button, Menu, Layout, Breadcrumb} from 'antd';

//
//
//
import IndexPage from './IndexPage.js';
import ManagePage from '../../manage/views/ManagePage.js';

//
//
//
//
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer} = Layout;
//
//
const title_my = (<span>
  <i class="fa fa-user-circle"></i>
  &nbsp;管理员
</span>);

const clickChild = (e) => {
  e.target.firstElementChild.click();
  alert(e.target.firstElementChild.innerHTML);
}

class NavbarPage extends Component {

  constructor(props, context) {
    super(props, context);

  }

  static contextTypes = {
    router: PropTypes.object
  }

  render() {
    return (<Layout >
      <Header style={{
          position: 'fixed',
          width: '100%'
        }}>
        <div style={{
            margin: "0 50px 0 0",
            float: "left"
          }}>公安业务评测系统</div>
        <Menu mode="horizontal" style={{
            lineHeight: '64px'
          }}>
          <Menu.Item key="1" onClick={() => {
              this.context.router.history.push("/NavbarPage/IndexPage");
            }}>首页</Menu.Item>
          <Menu.Item key="2">业务评测</Menu.Item>
          <Menu.Item key="3">数据统计</Menu.Item>
          <Menu.Item key="4" onClick={() => {
              this.context.router.history.push("/NavbarPage/ManagePage");
            }}>管理</Menu.Item>
          <Menu.Item key="5" style={{
              float: "right"
            }}>管理员</Menu.Item>
        </Menu>
      </Header>
      <Content style={{
          padding: '0 50px',
          margin: "64px 0 0 0"
        }}>

        <Breadcrumb path="/NavbarPage/ManagePage" style={{
            margin: '30px 0'
          }}>
          <Breadcrumb.Item>首页</Breadcrumb.Item>
          <Breadcrumb.Item path="/NavbarPage/ManagePage">管理</Breadcrumb.Item>
          <Switch>
            <Breadcrumb.Item path="/NavbarPage/ManagePage/UnitPanel">
              单位管理
            </Breadcrumb.Item>
            <Breadcrumb.Item path="/NavbarPage/ManagePage">
              管理
            </Breadcrumb.Item>
          </Switch>
        </Breadcrumb>

        <Switch>
          {/************************************************/}
          <Route path="/NavbarPage/ManagePage" component={ManagePage}></Route >
          <Route path="/NavbarPage/IndexPage" component={IndexPage}></Route >
          {/************************************************/}
        </Switch>
      </Content>
      <Footer style={{
          textAlign: 'center'
        }}>
        萍乡市公安局业务评测系统 ©2016 Created by 萍乡学院信息与计算机工程学院
      </Footer>
    </Layout>);
  }

}

export default withRouter(NavbarPage);
