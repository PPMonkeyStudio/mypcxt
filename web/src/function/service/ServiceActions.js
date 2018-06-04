import {UPDATE_SERVICEDEFINITIONVO, UPDATE_SERVICEINSTANCEVO,SET_SERVICEDEFINITION_TABLELOADING,SET_SERVICEINSTANCE_TABLELOADING} from './ServiceActionTypes.js';
//
//
//
export const updateServiceDefinitionVO = (serviceDefinitionVO) => ({type: UPDATE_SERVICEDEFINITIONVO, serviceDefinitionVO: serviceDefinitionVO,})
export const updateServiceInstanceVO = (serviceInstanceVO) => ({type: UPDATE_SERVICEINSTANCEVO, serviceInstanceVO: serviceInstanceVO,})
export const setServiceDefinitionTableLoading = (serviceDefinitionTableLoading) => ({type: SET_SERVICEDEFINITION_TABLELOADING, serviceDefinitionTableLoading: serviceDefinitionTableLoading,})
export const setServiceInstanceTableLoading = (serviceInstanceTableLoading) => ({type: SET_SERVICEINSTANCE_TABLELOADING, serviceInstanceTableLoading: serviceInstanceTableLoading,})
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

export const getServiceInstanceVO = () => {
  return(dispatch) => {
    //
    //
    //
    dispatch(setServiceInstanceTableLoading(true));
    //
    //
    //
    fetch('/mypcxt/Service/getServiceInstanceVO', {
      method: 'POST',
      headers: {},
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          //
          //
          //
          dispatch(updateServiceInstanceVO(responseJson));
          dispatch(setServiceInstanceTableLoading(false));
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
