import {UPDATE_UNITREDUCER_UNITVO, SET_ADDUNITMODALVISIBLE, SET_UNITTABLELOADING, UPDATE_UNIT, SET_UPDATEUNITMODALVISIBLE} from './UnitActionTypes.js';
import * as UserActions from '../user/UserActions.js';
//
//
//
export const updateServiceDefinitionVO = (unitVO) => ({type: UPDATE_UNITREDUCER_UNITVO, unitVO: unitVO,})
export const setServiceDefinitionTableLoading = (unitTableLoading) => ({type: SET_UNITTABLELOADING, unitTableLoading: unitTableLoading,})

export const getServiceDefinitionVO = () => {
  return(dispatch) => {
    //
    //
    //
    dispatch(setServiceDefinitionTableLoading(true));
    //
    //
    //
    fetch('/mypcxt/service/getServiceDefinitionVO', {
      method: 'POST',
      headers: {},
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(updateServiceDefinitionVO(responseJson));
          dispatch(setServiceDefinitionTableLoading(false));
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
