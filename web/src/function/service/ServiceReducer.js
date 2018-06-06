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
export default(state = [], action) => {
  switch (action.type) {
    case UPDATE_SERVICEDEFINITIONVO:
      {
        const newState = Object.assign({}, state);
        //
        newState["serviceDefinition"]["serviceDefinitionVO"]["serviceDefinitionDTOList"] = action.serviceDefinitionVO.serviceDefinitionDTOList;
        newState["serviceDefinition"]["serviceDefinitionVO"]["totalRecords"] = action.serviceDefinitionVO.totalRecords;
        return newState;
      }
    case UPDATE_SERVICEINSTANCEVO:
      {
        const newState = Object.assign({}, state);
        //
        newState["serviceInstance"]["serviceInstanceVO"]["serviceInstanceDTOList"] = action.serviceInstanceVO.serviceInstanceDTOList;
        newState["serviceInstance"]["serviceInstanceVO"]["totalRecords"] = action.serviceInstanceVO.totalRecords;
        return newState;
      }
    case UPDATE_SERVICEDISTRIBUTIONVO:
      {
        const newState = Object.assign({}, state);
        newState["serviceDistribution"]["serviceDistributionVO"]["serviceDistributionDTOList"] = action.serviceDistributionVO.serviceDistributionDTOList;
        newState["serviceDistribution"]["serviceDistributionVO"]["totalRecords"] = action.serviceDistributionVO.totalRecords;
        return newState;
      }

    case SET_SERVICEDEFINITION_TABLELOADING:
      {
        const newState = Object.assign({}, state);
        newState["serviceDefinition"]["serviceDefinitionTableLoading"] = action.serviceDefinitionTableLoading;
        return newState;
      }
    case SET_SERVICEINSTANCE_TABLELOADING:
      {
        const newState = Object.assign({}, state);
        newState["serviceInstance"]["serviceInstanceTableLoading"] = action.serviceInstanceTableLoading;
        return newState;
      }
    case SET_SERVDISTRIBUTION_TABLELOADING:
      {
        const newState = Object.assign({}, state);
        newState["serviceDistribution"]["serviceDistributionTableLoading"] = action.serviceDistributionTableLoading;
        return newState;
      }

    case SET_SERVICEDISTRIBUTIONTHREADSTATE:
      {
        const newState = Object.assign({}, state);
        newState["ServiceDistribution"]["serviceDistributionThreadState"] = action.serviceDistributionThreadState;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
