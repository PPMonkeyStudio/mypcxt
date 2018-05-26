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
import IndexPage from './IndexPage.js';

//
//
//
const NavbarPage = () => {
  return (<nav>
    <ul>
      <li>
        <Link to="/LoginPage">LoginPage</Link>
      </li>
      <li>
        <Link to="/NavbarPage/IndexPage">IndexPage</Link>
      </li>
    </ul>
    <IndexPage path="/IndexPage"></IndexPage>
  </nav>);
};

function mapStateToProps(state, ownProps) {
  return {}
}

function mapDispatchToProps(dispatch, ownProps) {
  return {}
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavbarPage));
