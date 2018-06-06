import {
  UPDATE_SERVICEDEFINITIONVO,
  UPDATE_SERVICEINSTANCEVO,
  UPDATE_SERVICEDISTRIBUTIONVO,

  SET_SERVICEDEFINITION_TABLELOADING,
  SET_SERVICEINSTANCE_TABLELOADING,
  SET_SERVDISTRIBUTION_TABLELOADING,

  SET_SERVICEDISTRIBUTIONTHREADSTATE,
} from './ServiceActionTypes.js';
//
//
//
export const updateServiceDefinitionVO = (serviceDefinitionVO) => ({type: UPDATE_SERVICEDEFINITIONVO, serviceDefinitionVO: serviceDefinitionVO})
export const updateServiceInstanceVO = (serviceInstanceVO) => ({type: UPDATE_SERVICEINSTANCEVO, serviceInstanceVO: serviceInstanceVO})
export const updateServiceDistributionVO = (serviceDistributionVO) => ({type: UPDATE_SERVICEDISTRIBUTIONVO, serviceDistributionVO: serviceDistributionVO})

export const setServiceDefinitionTableLoading = (serviceDefinitionTableLoading) => ({type: SET_SERVICEDEFINITION_TABLELOADING, serviceDefinitionTableLoading: serviceDefinitionTableLoading})
export const setServiceInstanceTableLoading = (serviceInstanceTableLoading) => ({type: SET_SERVICEINSTANCE_TABLELOADING, serviceInstanceTableLoading: serviceInstanceTableLoading})
export const setServiceDistributionTableLoading = (serviceDistributionTableLoading) => ({type: SET_SERVDISTRIBUTION_TABLELOADING, serviceDistributionTableLoading: serviceDistributionTableLoading})

export const setServiceDistributionThreadState = (serviceDistributionThreadState) => ({type: SET_SERVICEDISTRIBUTIONTHREADSTATE, serviceDistributionThreadState: serviceDistributionThreadState})

export const getServiceDefinitionVO = () => {
  return(dispatch) => {
    dispatch(setServiceDefinitionTableLoading(true));
    fetch('/mypcxt/Service/getServiceDefinitionVO', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateServiceDefinitionVO(responseJson));
          dispatch(setServiceDefinitionTableLoading(false));
        }).catch((error) => {
          console.error(error);
        });
      } else {
        console.error(response.status);
      }
    }).catch((error) => {
      console.error(error);
    });
  };
}

export const getServiceInstanceVO = () => {
  return(dispatch) => {
    dispatch(setServiceInstanceTableLoading(true));
    fetch('/mypcxt/Service/getServiceInstanceVO', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateServiceInstanceVO(responseJson));
          dispatch(setServiceInstanceTableLoading(false));
        }).catch((error) => {
          console.error(error);
        });
      } else {
        console.error(response.status);
      }
    }).catch((error) => {
      console.error(error);
    });
  };
}
export const getServiceDistributionVO = () => {
  return(dispatch) => {
    dispatch(setServiceDistributionTableLoading(true));
    fetch('/mypcxt/Service/getServiceDistributionVO', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateServiceDistributionVO(responseJson));
          dispatch(setServiceDistributionTableLoading(false));
        }).catch((error) => {
          console.error(error);
        });
      } else {
        console.error(response.status);
      }
    }).catch((error) => {
      console.error(error);
    });
  };
}

export const getserviceDistributionThreadState = () => {
  return(dispatch) => {
    fetch('/mypcxt/Service/getServiceDistributionThreadState', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          if (responseJson === "stop") {
            dispatch(setServiceDistributionThreadState(false));
          } else {
            dispatch(setServiceDistributionThreadState(true));
          }

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
export const startServiceDistributionThread = () => {
  return(dispatch) => {
    fetch('/mypcxt/Service/startServiceDistributionThread', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(setServiceDistributionThreadState(true));
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
export const stopServiceDistributionThread = () => {
  return(dispatch) => {
    fetch('/mypcxt/Service/stopServiceDistributionThread', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(setServiceDistributionThreadState(false));
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
