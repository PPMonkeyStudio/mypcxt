import {createStore, applyMiddleware, compose, combineReducers,} from 'redux';
import thunkMiddleware from 'redux-thunk'
//
//
//
import LoginReducer from './function/login/LoginReducer.js';
import RouteReducer from './function/route/RouteReducer.js';
import UnitReducer from './function/unit/UnitReducer.js';
import ManageReducer from './function/manage/ManageReducer.js';
//
//
//
const initialState = {
  /**
   * 当前登录状态
   */
  'LoginReducer': {
    'currentUser': {
      'type': 'none',
      'pypcxt_user': {
        'pypcxt_user_id': '',
        'user_account': '',
        'user_password': '',
        'user_name': '',
        'user_Jurisdiction_evaluate': '',
        'user_Jurisdiction_statistics': '',
        'user_gmt_create': '',
        'user_gmt_modified': '',
      },
      'pypcxt_admin': {
        'pypcxt_admin_id': '',
        'admin_account': '',
        'admin_password': '',
        'admin_gmt_create': '',
        'admin_gmt_modified': '',
      },
    }
  },
  /**
   * 当前路由
   * @type {Array}
   */
  'RouteReducer': {
    'currentURL': ''
  },
  /**
   * 所有单位
   * @type {Array}
   */
  'UnitReducer': {
    'unitVO': {
      'unit_List': [],
      'totalRecords': 0,
    },
    'addUnitModalVisible': false,
    'unitTableLoading': false,
  },
  /**
   * [middlewares description]
   * @type {Array}
   */
  'ManageReducer': {
    'ManageCardLoading': true
  }
};

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares));

const reducer = combineReducers({LoginReducer: LoginReducer, RouteReducer: RouteReducer, UnitReducer: UnitReducer, ManageReducer: ManageReducer});

const store = createStore(reducer, initialState, storeEnhancers);

export default store;
