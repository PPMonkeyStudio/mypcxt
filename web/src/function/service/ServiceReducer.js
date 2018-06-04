import {UPDATE_SERVICEDEFINITIONVO, SET_SERVICEDEFINITION_TABLELOADING} from './ServiceActionTypes.js';
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
    case SET_SERVICEDEFINITION_TABLELOADING:
      {
        const newState = Object.assign({}, state);
        
        newState["serviceDefinition"]["serviceDefinitionTableLoading"] = action.serviceDefinitionTableLoading;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
