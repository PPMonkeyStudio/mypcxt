export default(state = [], action) => {
  switch (action.type) {
    case 'updateQuestionVO':
      {
        const newState = Object.assign({}, state);
        //
        newState["QuestionService"]["questionServiceVO"]["questionServiceDTOList"] = action.questionServiceVO.questionServiceDTOList;
        newState["QuestionService"]["questionServiceVO"]["totalRecords"] = action.questionServiceVO.totalRecords;
        return newState;
      }
    case 'updateServiceDefinitionList':
      {
        const newState = Object.assign({}, state);
        newState["QuestionService"]["serviceDefinitionDTOList"] = action.serviceDefinitionDTOList;
        return newState;
      }
    case 'updateQuestionFatherList':
      {
        const newState = Object.assign({}, state);
        newState["QuestionService"]["questionFatherList"] = action.questionFatherList;
        return newState;
      }
    case 'setQuestionDetailsModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["QuestionService"]["questionDetailsModalVisible"] = action.questionDetailsModalVisible;
        return newState;
      }

    case 'setQuestionServiceTableLoading':
      {
        const newState = Object.assign({}, state);
        newState["QuestionService"]["tableLoading"] = action.tableLoading;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
