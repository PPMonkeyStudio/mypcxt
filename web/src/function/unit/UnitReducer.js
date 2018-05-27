import {UPDATE_UNITREDUCER_UNITVO} from './UnitActionTypes.js';
//
//
//
export default(state = [], action) => {
  switch (action.type) {
    case UPDATE_UNITREDUCER_UNITVO:
      {
        const newState = Object.assign({}, state);
        //
        newState["unitVO"]["unit_List"] = action.unitVO.unit_List;
        newState["unitVO"]["totalRecords"] = action.unitVO.totalRecords;
        return newState;
      }

    default:
      {
        return state;
      }
  }
}
