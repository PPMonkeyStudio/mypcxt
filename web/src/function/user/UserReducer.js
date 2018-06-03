import {UPDATE_USERREDUCER_USERVO, UPDATE_USERREDUCER_USERLIST, SET_ADDUSERMODALVISIBLE, SET_USERTABLELOADING, SET_UPDATEUSERMODALVISIBLE} from './UserActionTypes.js';
//
//
//
export default(state = [], action) => {
  switch (action.type) {
    case UPDATE_USERREDUCER_USERVO:
      {
        const newState = Object.assign({}, state);
        //
        newState["userVO"]["user_List"] = action.userVO.user_List;
        newState["userVO"]["totalRecords"] = action.userVO.totalRecords;
        return newState;
      }
    case UPDATE_USERREDUCER_USERLIST:
      {
        const newState = Object.assign({}, state);
        //
        newState["userList"] = action.userList;
        return newState;
      }
    case SET_ADDUSERMODALVISIBLE:
      {
        const newState = Object.assign({}, state);
        //
        //
        newState["addUserModalVisible"] = action.addUserModalVisible;
        return newState;
      }
    case SET_UPDATEUSERMODALVISIBLE:
      {
        const newState = Object.assign({}, state);
        //
        //
        newState["updateUserModalVisible"] = action.updateUserModalVisible;
        return newState;
      }
    case SET_USERTABLELOADING:
      {
        const newState = Object.assign({}, state);
        //
        newState["userTableLoading"] = action.userTableLoading;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
