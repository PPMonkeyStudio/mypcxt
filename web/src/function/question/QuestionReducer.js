import {UPDATE_QUESTIONVO, SET_QUESTIONDETAILSMODALVISIBLE,} from './QuestionActionTypes.js';

export default(state = [], action) => {
  switch (action.type) {
    case UPDATE_QUESTIONVO:
      {
        const newState = Object.assign({}, state);
        //
        newState["QuestionService"]["questionServiceVO"]["questionServiceDTOList"] = action.questionServiceVO.questionServiceDTOList;
        newState["QuestionService"]["questionServiceVO"]["totalRecords"] = action.questionServiceVO.totalRecords;
        return newState;
      }
    case SET_QUESTIONDETAILSMODALVISIBLE:
      {
        const newState = Object.assign({}, state);
        newState["QuestionService"]["questionDetailsModalVisible"] = action.questionDetailsModalVisible;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
