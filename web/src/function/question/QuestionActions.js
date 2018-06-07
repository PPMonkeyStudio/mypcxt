import {UPDATE_QUESTIONVO, SET_QUESTIONDETAILSMODALVISIBLE,} from './QuestionActionTypes.js';

export const updateQuestionVO = (questionServiceVO) => ({type: UPDATE_QUESTIONVO, questionServiceVO: questionServiceVO,})
export const updateServiceDefinitionList = (serviceDefinitionList) => ({type: 'updateServiceDefinitionList', serviceDefinitionList: serviceDefinitionList,})
export const setQuestionDetailsModalVisible = (questionDetailsModalVisible) => ({type: SET_QUESTIONDETAILSMODALVISIBLE, questionDetailsModalVisible: questionDetailsModalVisible,})

export const getServiceDefinitionList = () => {
  return(dispatch) => {
    fetch('/mypcxt/Question/getServiceDefinitionList', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateServiceDefinitionList(responseJson));
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
export const getQuestionServiceVO = () => {
  return(dispatch) => {
    // dispatch(setServiceDefinitionTableLoading(true));
    fetch('/mypcxt/Question/getQuestionServiceVO', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateQuestionVO(responseJson));
          // dispatch(setServiceDefinitionTableLoading(false));
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
export const addQuestion = (addQuestionModelState) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("question.question_describe", addQuestionModelState.question_describe);
    formData.append("question.question_type", addQuestionModelState.question_type);
    formData.append("question.question_service_definition", addQuestionModelState.question_service_definition);
    formData.append("question.question_father_question", addQuestionModelState.question_father_question);
    fetch('/mypcxt/Unit/addQuestion', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(getQuestionServiceVO());
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
export const addOption = (addOptionModelState) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("option.option_describe", addOptionModelState.option_describe);
    formData.append("option.option_question", addOptionModelState.option_question);
    formData.append("option.option_grade", addOptionModelState.option_grade);
    fetch('/mypcxt/Unit/addOption', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(getQuestionServiceVO());
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
