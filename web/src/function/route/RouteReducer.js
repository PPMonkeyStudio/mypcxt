import {UPDATE_STORE_CURRENTURL, UPDATE_CURRENTNAVBARMENUITEM,} from './RouteActionTypes.js';
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
    case UPDATE_CURRENTNAVBARMENUITEM:
      {
        const newState = Object.assign({}, state);
        if (action.currentURL.startsWith("/NavbarPage/IndexPage")) {
          newState["currentNavbarMenuItem"] = 'IndexPage';
        } else if (action.currentURL.startsWith("/NavbarPage/ManagePage")) {
          newState["currentNavbarMenuItem"] = 'ManagePage';
        }

        return newState;
      }
    default:
      {
        return state;
      }
  }
}
