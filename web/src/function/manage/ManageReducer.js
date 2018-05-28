import {SET_MANAGECARDLOADING} from './ManageActionTypes.js';
//
//
//
export default(state = [], action) => {
  switch (action.type) {
    case SET_MANAGECARDLOADING:
      {
        const newState = Object.assign({}, state);
        //
        newState["ManageCardLoading"] = action.ManageCardLoading;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
