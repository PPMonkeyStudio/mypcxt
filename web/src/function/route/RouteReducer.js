import {UPDATE_STORE_CURRENTURL} from './RouteActionTypes.js';
//
//
//
export default(state = [], action) => {
  switch (action.type) {
    case UPDATE_STORE_CURRENTURL:
      {
        const newState = Object.assign({}, state);
        //
        newState["currentURL"] = action.currentURL;
        return newState;
      }

    default:
      {
        return state;
      }
  }
}
