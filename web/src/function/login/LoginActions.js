import {LOGIN_SUCCESS, LOGIN_FAIL} from './LoginActionTypes.js';
import * as RouteActions from '../route/RouteActions.js';
//
//
//
export const login_success = (account, password) => ({type: LOGIN_SUCCESS, account: account, password: password})
export const login_fail = () => ({type: LOGIN_FAIL})

export const login = (account, password) => {
  return(dispatch) => {
    if (account === '123') {
      dispatch(login_success(account, password));
      dispatch(RouteActions.updateStoreCurrentURL("/SuccessPage"));
    } else {
      dispatch(login_fail());
    }

  };
}
