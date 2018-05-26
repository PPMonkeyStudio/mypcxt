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
import LoginPage from '../../login/views/LoginPage.js'
import BoxPage from '../../route/views/BoxPage.js';
import ErrorPage from '../../route/views/ErrorPage.js';
import * as RouteActions from '../RouteActions.js';
//
//
//
class Routes extends Component {

  constructor(props, context) {
    super(props, context);
    this.storeURLChanged = this.storeURLChanged.bind(this);
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
    store.subscribe(this.storeURLChanged);
    //组件装载时，同步当前URL至store
    store.dispatch(RouteActions.updateStoreCurrentURL(this.context.router.history.location.pathname));
  }

  //获取StoreCurrentURL
  // getStoreCurrentURL() {
  //   console.debug("getStoreCurrentURL:" + store.getState()["currentURL"]);
  //   return (store.getState()["currentURL"]);
  // }

  //store中的路径改变引起
  storeURLChanged() {
    //setState是异步的
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
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }

  componentWillUpdate() {}
  componentDIdUpdate() {}
  render() {
    return (<div>
      {/* <Link to="/LoginPage">LoginPage</Link>
      <br/>
      <Link to="/BoxPage">BoxPage</Link>
      <br/>
      <Link to="/ErrorPage">ErrorPage</Link>
      <br/> */}
      <Switch>
        <Route path="/LoginPage" component={LoginPage}/>
        <Route path="/BoxPage" component={BoxPage}/>
        <Route path="/ErrorPage" component={ErrorPage}/>
        <Route path="/" component={LoginPage}/>
      </Switch>
    </div>);
  }

}

export default withRouter(Routes);
