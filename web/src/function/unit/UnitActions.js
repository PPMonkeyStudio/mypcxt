import {UPDATE_UNITREDUCER_UNITVO} from './UnitActionTypes.js';
//
//
//
export const updateUnitVO = (unitVO) => ({type: UPDATE_UNITREDUCER_UNITVO, unitVO: unitVO})

export const getUnitVO = () => {
  return(dispatch) => {

    fetch('/mypcxt/Unit/getUnitVO', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(updateUnitVO(responseJson));
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
