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

//
//
//
const noStyleLink = {
  color: "ffffff"
};
//
//
//
const NavbarPage = () => {
  return (<div>
    {/************************************************/}
    <Navbar fixedTop="true">
      <Navbar.Header>
        <Navbar.Brand>
          {/* <Image src={require('../../../img/logo.png')} style={{
              height: "40px"
            }}/> */
          }
          <Link to="/NavbarPage/IndexPage">
            公安业务评测系统
          </Link>
        </Navbar.Brand>
      </Navbar.Header>
      <Nav style={{
          width: "calc(100% - 174px)"
        }}>
        {/************************************************/}
        <NavItem eventKey={1}>
          <Link to="/NavbarPage/IndexPage" style={{
              color: "000000"
            }}>
            首页
          </Link>
        </NavItem>
        {/************************************************/}
        <NavDropdown eventKey={2} title="评测">
          <MenuItem eventKey={2.1}>
            <Link to="#">人员管理</Link>
          </MenuItem>
          <MenuItem eventKey={2.1}>
            <Link to="#">单位管理</Link>
          </MenuItem>
        </NavDropdown>
        {/************************************************/}
        <NavItem eventKey={3}>
          <Link to="#">统计
          </Link>
        </NavItem>
        {/************************************************/}
        <NavDropdown eventKey={4} title="管理">
          <MenuItem eventKey={2.1}>
            <Link to="#">人员管理</Link>
          </MenuItem>
          <MenuItem eventKey={2.1}>
            <Link to="#">单位管理</Link>
          </MenuItem>
          <MenuItem divider="divider"/>
          <MenuItem eventKey={2.1}>
            <Link to="#">问题管理</Link>
          </MenuItem>
          <MenuItem eventKey={2.1}>
            <Link to="#">单位管理</Link>
          </MenuItem>
          <MenuItem divider="divider"/>
          <MenuItem eventKey={2.1}>
            <Link to="#">人员管理</Link>
          </MenuItem>
          <MenuItem eventKey={2.1}>
            <Link to="#">单位管理</Link>
          </MenuItem>
        </NavDropdown>
        {/************************************************/}
        <NavDropdown eventKey={3} title="管理员" style={{
            float: "right"
          }}>
          <MenuItem eventKey={3.1}>
            <Link to="#">
              <i class="lnr lnr-lock"></i>修改密码</Link>
          </MenuItem>
          <MenuItem divider="divider"/>
          <MenuItem eventKey={3.2}>
            <Link to="/LoginPage">
              <i class="lnr lnr-exit"></i>退出</Link>
          </MenuItem>
        </NavDropdown>
        {/************************************************/}
      </Nav>
    </Navbar>
    {/************************************************/}
    <IndexPage path="/IndexPage"></IndexPage>
  </div>);
};
function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarPage));
