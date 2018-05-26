import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
//
//
//
import LoginReducer from './function/login/LoginReducer.js';
import RouteReducer from './function/route/RouteReducer.js';
//
//
//
const initialState = {
  //当前用户
  'LoginReducer': {
    'currentUser': {
      'account': '',
      'password': '',
      'type': ''
    }
  },
  //当前路由
  'RouteReducer': {
    'currentURL': ''
  }

};

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares));

const reducer = combineReducers({LoginReducer: LoginReducer, RouteReducer: RouteReducer});

const store = createStore(reducer, initialState, storeEnhancers);

export default store;
