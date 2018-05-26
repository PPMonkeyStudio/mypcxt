import {LOGIN_SUCCESS, LOGIN_FAIL} from './LoginActionTypes.js';
import * as RouteActions from '../route/RouteActions.js';
//
//
//
export const login_success = (account, password) => ({type: LOGIN_SUCCESS, account: account, password: password})
export const login_fail = () => ({type: LOGIN_FAIL})

export const login = (account, password) => {
  return(dispatch) => {
    //
    //
    //
    let formData = new FormData();
    formData.append("account", account);
    formData.append("password", password);
    console.debug(formData);

    fetch('/mypcxt/LoginAndLogout/a_login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: formData
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          console.debug(responseJson);
          if (account === '123') {
            dispatch(login_success(account, password));
            dispatch(RouteActions.updateStoreCurrentURL("/SuccessPage"));
          } else {
            dispatch(login_fail());
          }
          //
          //
          //
        }).catch((error) => {
          alert(error);
        });
      } else {
        alert(response.status);
      }
    }).catch((error) => {
      alert(error);
    });
    //
    //
    //
  };
}
