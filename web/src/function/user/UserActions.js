import {
  UPDATE_USERREDUCER_USERVO,
  SET_ADDUSERMODALVISIBLE,
  SET_USERTABLELOADING,
  UPDATE_USER,
  SET_UPDATEUSERMODALVISIBLE,
} from './UserActionTypes.js';
//
//
//
export const updateUserVO = (userVO) => ({type: UPDATE_USERREDUCER_USERVO, userVO: userVO,})
export const setAddUserModalVisible = (addUserModalVisible) => ({type: SET_ADDUSERMODALVISIBLE, addUserModalVisible: addUserModalVisible,})
export const setUpdateUserModalVisible = (updateUserModalVisible) => ({type: SET_UPDATEUSERMODALVISIBLE, updateUserModalVisible: updateUserModalVisible,})
export const setUserTableLoading = (userTableLoading) => ({type: SET_USERTABLELOADING, userTableLoading: userTableLoading,})

export const getUserVO = () => {
  return(dispatch) => {
    //
    //
    //
    dispatch(setUserTableLoading(true));
    //
    //
    //
    fetch('/mypcxt/User/getUserVO', {
      method: 'POST',
      headers: {},
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(updateUserVO(responseJson));
          dispatch(setUserTableLoading(false));
          //
          //
          //
        }).catch((error) => {
          console.err(error);
        });
      } else {
        console.err(response.status);
      }
    }).catch((error) => {
      console.err(error);
    });
    //
    //
    //
  };
}
/**
 * 添加单位
 * @method addUser
 * @param  {[type]} user_name [description]
 */
export const addUser = (user_account, user_name) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("user.user_account", user_account);
    formData.append("user.user_name", user_name);
    fetch('/mypcxt/User/addUser', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          if (JSON.stringify(responseJson) === "1") {
            dispatch(getUserVO());
            dispatch(setAddUserModalVisible(false));
          } else {
            console.err("单位已存在");
          }
          //
          //
          //
        }).catch((error) => {
          console.err(error);
        });
      } else {
        console.err(response.status);
      }
    }).catch((error) => {
      console.err(error);
    });
    //
    //
    //
  };
}

export const deleteUser = (mypcxt_user_id) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("user.mypcxt_user_id", mypcxt_user_id);
    fetch('/mypcxt/User/deleteUser', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(getUserVO());
          //
          //
          //
        }).catch((error) => {
          console.err(error);
        });
      } else {
        console.err(response.status);
      }
    }).catch((error) => {
      console.err(error);
    });
    //
    //
    //
  };
}
export const updateUser = (mypcxt_user_id, user_name, user_Jurisdiction_evaluate, user_Jurisdiction_statistics, user_Jurisdiction_review) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("user.mypcxt_user_id", mypcxt_user_id);
    formData.append("user.user_name", user_name);
    formData.append("user.user_Jurisdiction_evaluate", user_Jurisdiction_evaluate);
    formData.append("user.user_Jurisdiction_statistics", user_Jurisdiction_statistics);
    formData.append("user.user_Jurisdiction_review", user_Jurisdiction_review);
    console.debug(formData);
    fetch('/mypcxt/User/updateUser', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(getUserVO());
          dispatch(setUpdateUserModalVisible(false));
          //
          //
          //
        }).catch((error) => {
          console.err(error);
        });
      } else {
        console.err(response.status);
      }
    }).catch((error) => {
      console.err(error);
    });
    //
    //
    //
  };
}
