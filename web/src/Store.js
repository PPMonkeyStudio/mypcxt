import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunkMiddleware from 'redux-thunk'
//
//
//
import LoginReducer from './function/login/LoginReducer.js';
import RouteReducer from './function/route/RouteReducer.js';
import UnitReducer from './function/unit/UnitReducer.js';
import UserReducer from './function/user/UserReducer.js';
import ManageReducer from './function/manage/ManageReducer.js';
import ServiceReducer from './function/service/ServiceReducer.js';
//
//
//
const initialState = {
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
        'user_gmt_modified': ''
      },
      'pypcxt_admin': {
        'pypcxt_admin_id': '',
        'admin_account': '',
        'admin_password': '',
        'admin_gmt_create': '',
        'admin_gmt_modified': ''
      }
    }
  },
  'RouteReducer': {
    'currentURL': '',
    'currentNavbarMenuItem': '',
  },
  'UnitReducer': {
    'unitVO': {
      'unitDTOList': [],
      'totalRecords': 0,
    },

    'addUnitModalVisible': false,
    'updateUnitModalVisible': false,
    'unitTableLoading': false,
  },
  'UserReducer': {
    'userVO': {
      'user_List': [],
      'totalRecords': 0
    },
    'userList': [],
    'addUserModalVisible': false,
    'updateUserModalVisible': false,
    'userTableLoading': false
  },
  'ManageReducer': {
    'ManageCardLoading': true
  },
  'ServiceReducer': {
    //
    //
    //
    'serviceDefinition': {
      'serviceDefinitionVO': {
        serviceDefinitionDTOList: [],
        totalRecords: 0,
      },
      serviceDefinitionTableLoading: false,
    }
    //
    //
    //
  }
};

const middlewares = [thunkMiddleware];

const storeEnhancers = compose(applyMiddleware(...middlewares));

const reducer = combineReducers({
  LoginReducer: LoginReducer,
  RouteReducer: RouteReducer,
  UnitReducer: UnitReducer,
  UserReducer: UserReducer,
  ManageReducer: ManageReducer,
  ServiceReducer: ServiceReducer,
});

const store = createStore(reducer, initialState, storeEnhancers);

export default store;
