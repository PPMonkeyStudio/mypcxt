import {UPDATE_UNITREDUCER_UNITVO, SET_ADDUNITMODALVISIBLE, SET_UNITTABLELOADING, UPDATE_UNIT,} from './UnitActionTypes.js';
//
//
//
export const updateUnitVO = (unitVO) => ({type: UPDATE_UNITREDUCER_UNITVO, unitVO: unitVO,})
export const setAddUnitModalVisible = (addUnitModalVisible) => ({type: SET_ADDUNITMODALVISIBLE, addUnitModalVisible: addUnitModalVisible,})
export const setUnitTableLoading = (unitTableLoading) => ({type: SET_UNITTABLELOADING, unitTableLoading: unitTableLoading,})

export const getUnitVO = () => {
  return(dispatch) => {
    //
    //
    //
    dispatch(setUnitTableLoading(true));
    //
    //
    //
    fetch('/mypcxt/Unit/getUnitVO', {
      method: 'POST',
      headers: {},
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(updateUnitVO(responseJson));
          dispatch(setUnitTableLoading(false));
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
/**
 * 添加单位
 * @method addUnit
 * @param  {[type]} unit_name [description]
 */
export const addUnit = (unit_name) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("unit.unit_name", unit_name);
    fetch('/mypcxt/Unit/addUnit', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          if (JSON.stringify(responseJson) === "1") {
            dispatch(getUnitVO());
            dispatch(setAddUnitModalVisible(false));
          } else {
            alert("单位已存在");
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

export const deleteUnit = (mypcxt_unit_id) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("unit.mypcxt_unit_id", mypcxt_unit_id);
    fetch('/mypcxt/Unit/deleteUnit', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(getUnitVO());
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
export const updateUnit = (mypcxt_unit_id, unit_name) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("unit.mypcxt_unit_id", mypcxt_unit_id);
    formData.append("unit.unit_name", unit_name);
    fetch('/mypcxt/Unit/updateUnit', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(getUnitVO());
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
