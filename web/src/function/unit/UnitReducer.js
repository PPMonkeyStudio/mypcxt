import {UPDATE_UNITREDUCER_UNITVO, SET_ADDUNITMODALVISIBLE, SET_UNITTABLELOADING, SET_UPDATEUNITMODALVISIBLE,} from './UnitActionTypes.js';
//
//
//
export default(state = [], action) => {
  switch (action.type) {
    case UPDATE_UNITREDUCER_UNITVO:
      {
        const newState = Object.assign({}, state);
        //
        newState["unitVO"]["unitDTOList"] = action.unitVO.unitDTOList;
        newState["unitVO"]["totalRecords"] = action.unitVO.totalRecords;
        return newState;
      }
    case SET_ADDUNITMODALVISIBLE:
      {
        const newState = Object.assign({}, state);
        //
        newState["addUnitModalVisible"] = action.addUnitModalVisible;
        return newState;
      }
    case SET_UPDATEUNITMODALVISIBLE:
      {
        const newState = Object.assign({}, state);
        //
        newState["updateUnitModalVisible"] = action.updateUnitModalVisible;
        return newState;
      }
    case SET_UNITTABLELOADING:
      {
        const newState = Object.assign({}, state);
        //
        newState["unitTableLoading"] = action.unitTableLoading;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
