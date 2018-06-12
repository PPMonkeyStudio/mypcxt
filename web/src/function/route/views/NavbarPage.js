import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  Route,
  Switch,
  Link,
  BrowserRouter,
  Router,
  Redirect,
  withRouter,
} from 'react-router-dom';
import PropTypes from 'prop-types'
/**
 * antd
 * @type {[type]}
 */
import {Button, Menu, Layout, Breadcrumb, Icon} from 'antd';

//
//
//
import IndexPage from './IndexPage.js';
import store from '../../../Store.js';
import ManagePage from '../../manage/views/ManagePage.js';
import * as RouteActions from '../RouteActions.js';
//
//
//
//
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const {Header, Content, Footer,} = Layout;
//
//
const title_my = (<span>
  <i class="fa fa-user-circle"></i>
  &nbsp;管理员
</span>);

class NavbarPage extends Component {

  constructor(props, context) {
    super(props, context);

    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      currentNavbarMenuItem: []
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  storeChanged() {
    this.setState({
      currentNavbarMenuItem: store.getState()["RouteReducer"]["currentNavbarMenuItem"]
    });
  }

  componentDidMount() {
    //先挂载监听
    store.subscribe(this.storeChanged);
    //组件装载时，同步当前URL至store

  }

  render() {
    return (<Layout >
      <Header style={{
          position: 'fixed',
          width: '100%',
        }}>
        <div style={{
            margin: "0 50px 0 0",
            float: "left",
          }}>公安业务分析测评系统</div>
        <Menu mode="horizontal" selectedKeys={this.state.currentNavbarMenuItem} style={{
            lineHeight: '64px'
          }}>
          <Menu.Item key="IndexPage" onClick={() => {
              this.context.router.history.push("/NavbarPage/IndexPage");
            }}><Icon type="home"/>首页</Menu.Item>
          <Menu.Item key="2"><Icon type="global"/>测评业务</Menu.Item>
          <Menu.Item key="3"><Icon type="pie-chart"/>统计数据</Menu.Item>
          <Menu.Item key="ManagePage" onClick={() => {
              if (this.context.router.history.location.pathname.includes("/NavbarPage/ManagePage")) {} else {
                this.context.router.history.push("/NavbarPage/ManagePage");
              }
            }}><Icon type="setting"/>管理数据</Menu.Item>
          <Menu.Item key="5" style={{
              float: "right"
            }}><Icon type="user"/>管理员</Menu.Item>
        </Menu>
      </Header>
      <Content style={{
          padding: '50px 50px 0',
          margin: "64px 0 0 0",
        }}>

        {/************************************************/}
        <Route path="/NavbarPage/ManagePage" component={ManagePage}></Route>
        <Route path="/NavbarPage/IndexPage" component={IndexPage}></Route>
        {/************************************************/}
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
