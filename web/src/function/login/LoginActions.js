import {LOGIN_SUCCESS, LOGIN_FAIL} from './LoginActionTypes.js';
import * as RouteActions from '../route/RouteActions.js';
//
//
//
export const login_success = (account, password) => ({type: LOGIN_SUCCESS, account: account, password: password})
export const login_fail = () => ({type: LOGIN_FAIL})

export const login = (account, password) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("account", account);
    formData.append("password", password);

    fetch('/mypcxt/LoginAndLogout/login', {
      method: 'POST',
      body: formData
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          if (responseJson === 1) {
            //用户
            dispatch(login_success(account, password));
            dispatch(RouteActions.updateStoreCurrentURL("/NavbarPage/IndexPage"));
          } else if (responseJson === 2) {
            //管理员
            dispatch(login_success(account, password));
            dispatch(RouteActions.updateStoreCurrentURL("/NavbarPage/IndexPage"));
          } else {
            //登录失败
            dispatch(login_fail());
          }
        }).catch((error) => {
          alert(error);
        });
      } else {
        alert(response.status);
      }
    }).catch((error) => {
      alert(error);
    });
  };
}
export const logout = () => {
  return(dispatch) => {
    fetch('/mypcxt/LoginAndLogout/logout', {
      method: 'POST',
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {

        }).catch((error) => {
          alert(error);
        });
      } else {
        alert(response.status);
      }
    }).catch((error) => {
      alert(error);
    });
  };
}
