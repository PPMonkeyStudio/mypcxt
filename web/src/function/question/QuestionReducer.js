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
    case 'updateQuestionnaireVO':
      {
        const newState = Object.assign({}, state);
        //
        newState["Questionnaire"]["questionnaireVO"]["questionnaireDTOList"] = action.questionnaireVO.questionnaireDTOList;
        newState["Questionnaire"]["questionnaireVO"]["totalRecords"] = action.questionnaireVO.totalRecords;
        return newState;
      }
    case 'updateServiceDefinitionList':
      {
        const newState = Object.assign({}, state);
        newState["Model_addQuestion"]["serviceDefinitionDTOList"] = action.serviceDefinitionDTOList;
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
    case 'setQuestionnaireTableLoading':
      {
        const newState = Object.assign({}, state);
        newState["Questionnaire"]["tableLoading"] = action.tableLoading;
        return newState;
      }
    case 'setQuestionServiceTableLoading':
      {
        const newState = Object.assign({}, state);
        newState["QuestionService"]["tableLoading"] = action.tableLoading;
        return newState;
      }
    case 'set_questionnaireModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["Model_Questionnaire"]["questionnaireModalVisible"] = action.questionnaireModalVisible;
        return newState;
      }
    case 'set_questionModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["Model_Question"]["questionModalVisible"] = action.questionModalVisible;
        return newState;
      }
    case 'set_addOptionModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["Model_addOption"]["addOptionModalVisible"] = action.addOptionModalVisible;
        return newState;
      }
    case 'set_addQuestionModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["Model_addQuestion"]["addQuestionModalVisible"] = action.addQuestionModalVisible;
        return newState;
      }
    case 'set_questionnaireModalState':
      {

        const newState = Object.assign({}, state);
        newState["Model_Questionnaire"]["questionnaireDTO"] = action.questionnaireDTO;
        return newState;
      }
    case 'set_questionModalState':
      {

        const newState = Object.assign({}, state);
        newState["Model_Question"]["questionDTO"] = action.questionDTO;
        return newState;
      }
    case 'set_addOptionQuestion':
      {

        const newState = Object.assign({}, state);
        newState["Model_addOption"]["option_question"] = action.option_question;
        return newState;
      }
    case 'set_addQuestionServiceDefinition':
      {
        const newState = Object.assign({}, state);
        newState["Model_addQuestion"]["question_service_definition"] = action.question_service_definition;
        return newState;
      }
    case 'set_previewQuestionnairModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["Model_previewQuestionnair"]["previewQuestionnaireModalVisible"] = action.previewQuestionnaireModalVisible;
        return newState;
      }
    case 'set_previewQuestionnairState':
      {
        const newState = Object.assign({}, state);
        newState["Model_previewQuestionnair"]["questionnaireDTO"] = action.questionnaireDTO;
        return newState;
      }
    case 'set_addServiceModalVisible':
      {
        const newState = Object.assign({}, state);
        newState["Model_addService"]["addServiceModalVisible"] = action.addServiceModalVisible;
        return newState;
      }
    default:
      {
        return state;
      }
  }
}
