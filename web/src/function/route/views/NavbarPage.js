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
import PropTypes from 'prop-types'
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
    return (<div>
      {/************************************************/}

      <Navbar fixedTop="true" fluid="true" style={{
          padding: "0 5%"
        }}>
        <Navbar.Header >
          <Navbar.Brand>
            <Link to="/NavbarPage/IndexPage">
              公安业务评测系统
            </Link>
          </Navbar.Brand>

        </Navbar.Header>
        <Nav >
          {/************************************************/}
          <NavItem onClick={() => {
              this.context.router.history.push("/NavbarPage/IndexPage");
            }}>
            首页
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
          <NavItem onClick={() => {
              this.context.router.history.push("#");
            }}>
            统计
          </NavItem>
          {/************************************************/}
          <NavItem onClick={() => {
              this.context.router.history.push("/NavbarPage/ManagePage");
            }}>
            管理
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
                <Navbar.Link>
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
  }

}

export default withRouter(NavbarPage);
