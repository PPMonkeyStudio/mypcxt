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
  Jumbotron,
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Well
} from 'react-bootstrap';
//
//
//
import IndexPage from './IndexPage.js';
import ManagePage from '../../manage/views/ManagePage.js';

//
//
//
//
//
//
const title_my = (<span>
  <i class="fa fa-user-circle"></i>
  &nbsp;管理员
</span>);
const NavbarPage = () => {
  return (<div>
    {/************************************************/}
    <Navbar fixedTop="true">
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/NavbarPage/IndexPage">
            公安业务评测系统
          </Link>
        </Navbar.Brand>

      </Navbar.Header>
      <Nav >
        {/************************************************/}
        <NavItem >
          <Link to="/NavbarPage/IndexPage">
            <Navbar.Link href="#">首页</Navbar.Link>
          </Link>
        </NavItem>
        {/************************************************/}
        <NavDropdown title="评测">
          <MenuItem >
            <Link to="#">
              <Navbar.Link href="#">统计</Navbar.Link>
            </Link>
          </MenuItem>
          <MenuItem >
            <Link to="#">
              <Navbar.Link href="#">统计</Navbar.Link>
            </Link>
          </MenuItem>
        </NavDropdown>
        {/************************************************/}
        <NavItem >
          <Link to="#">
            <Navbar.Link href="#">统计</Navbar.Link>
          </Link>
        </NavItem>
        {/************************************************/}
        <NavItem >
          <Link to="/NavbarPage/ManagePage">
            <Navbar.Link href="#">管理</Navbar.Link>
          </Link>
        </NavItem>
        {/************************************************/}
      </Nav>
      {/************************************************/}
      <Nav pullRight="pullRight">
        <NavDropdown title={title_my}>
          <MenuItem>
            <Link to="#">
              <i class="lnr lnr-lock"></i>&nbsp;
              <Navbar.Link href="#">
                修改密码</Navbar.Link>
            </Link>
          </MenuItem>
          <MenuItem >
            <Link to="/LoginPage">
              <i class="lnr lnr-exit"></i>&nbsp;
              <Navbar.Link href="#">
                退出账户</Navbar.Link>
            </Link>
          </MenuItem>
        </NavDropdown>
      </Nav>
      {/************************************************/}
    </Navbar>
    {/************************************************/}
    {/************************************************/}
    {/************************************************/}
    <Route path="/NavbarPage/ManagePage" component={ManagePage}></Route >
    <Route path="/NavbarPage/IndexPage" component={IndexPage}></Route >
    {/************************************************/}
  </div>);
};

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarPage));
