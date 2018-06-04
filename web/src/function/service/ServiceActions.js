import {UPDATE_SERVICEDEFINITIONVO, SET_SERVICEDEFINITION_TABLELOADING} from './ServiceActionTypes.js';
//
//
//
export const updateServiceDefinitionVO = (serviceDefinitionVO) => ({type: UPDATE_SERVICEDEFINITIONVO, serviceDefinitionVO: serviceDefinitionVO,})
export const setServiceDefinitionTableLoading = (serviceDefinitionTableLoading) => ({type: SET_SERVICEDEFINITION_TABLELOADING, serviceDefinitionTableLoading: serviceDefinitionTableLoading,})

export const getServiceDefinitionVO = () => {
  return(dispatch) => {
    //
    //
    //
    dispatch(setServiceDefinitionTableLoading(true));
    //
    //
    //
    fetch('/mypcxt/Service/getServiceDefinitionVO', {
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
          console.error(error);
        });
      } else {
        console.error(response.status);
      }
    }).catch((error) => {
      console.error(error);
    });
    //
    //
    //
  };
}
