import React, {Component} from 'react';
import {
  Route,
  Switch,
  Link,
  BrowserRouter,
  Router,
  Redirect,
  withRouter
} from 'react-router-dom';
import {Provider} from 'react-redux';
import PropTypes from 'prop-types'
//
//
//
import store from '../../../Store.js';
import * as RouteActions from '../RouteActions.js';
import LoginPage from '../../login/views/LoginPage.js'
import ErrorPage from './ErrorPage.js';
import NavbarPage from './NavbarPage.js';
import IndexPage from './IndexPage.js';
//
//
//
class Routes extends Component {

  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    // this.getStoreCurrentURL = this.getStoreCurrentURL.bind(this);

    this.state = {
      currentURL: ''
    };
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount() {}

  componentDidMount() {
    //先挂载监听
    store.subscribe(this.storeChanged);
    //组件装载时，同步当前URL至store
    store.dispatch(RouteActions.updateStoreCurrentURL(this.context.router.history.location.pathname));
    store.dispatch(RouteActions.updateCurrentNavbarMenuItem(this.context.router.history.location.pathname));
  }

  //store中的路径改变引起
  storeChanged() {
    let currentURL = store.getState()["RouteReducer"]["currentURL"];
    this.setState({
      currentURL: currentURL
    }, () => {
      //回调方法
      //改变路由
      if (this.context.router.history.location.pathname === this.state.currentURL) {
        //
      } else {
        this.context.router.history.push(this.state.currentURL);
      }
    })
    //
  }
  componentWillReceiveProps(nextProps) {
    if (this.context.router.history.location.pathname === store.getState()["RouteReducer"]["currentURL"]) {
      //
    } else {
      store.dispatch(RouteActions.updateStoreCurrentURL(this.context.router.history.location.pathname));

    }

    if(this.context.router.history.location.pathname!==store.getState()["RouteReducer"]["currentNavbarMenuItem"]){
        store.dispatch(RouteActions.updateCurrentNavbarMenuItem(this.context.router.history.location.pathname));
    }
  }


  componentWillUpdate() {}
  componentDIdUpdate() {}
  render() {
    return (<Switch>
      <LoginPage path="/LoginPage" exact="exact"/>
      <NavbarPage path="/NavbarPage"/>
      <ErrorPage path="/ErrorPage" exact="exact"/>
      <IndexPage path="/IndexPage" exact="exact"/>
      <LoginPage path="/" exact="exact"/>
      <ErrorPage path="/*"/>
    </Switch>);
  }

}

export default withRouter(Routes);
