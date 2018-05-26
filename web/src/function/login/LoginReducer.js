import {LOGIN_SUCCESS, LOGIN_FAIL} from './LoginActionTypes.js';
//
//
//
export default(state = [], action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      {
        const newState = Object.assign({}, state);
        //
        newState["currentUser"]["account"] = action.account;
        return newState;
      }
    case LOGIN_FAIL:
      {
        const newState = Object.assign({}, state);
        //
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
