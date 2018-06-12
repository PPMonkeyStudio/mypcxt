import * as QuestionnaireActions from '../question/QuestionnaireActions.js';

export const updateQuestionVO = (questionServiceVO) => ({type: 'updateQuestionVO', questionServiceVO: questionServiceVO,})

export const updateServiceDefinitionList = (serviceDefinitionDTOList) => ({type: 'updateServiceDefinitionList', serviceDefinitionDTOList: serviceDefinitionDTOList,})
export const updateQuestionFatherList = (questionFatherList) => ({type: 'updateQuestionFatherList', questionFatherList: questionFatherList,})

export const setQuestionDetailsModalVisible = (questionDetailsModalVisible) => ({type: 'setQuestionDetailsModalVisible', questionDetailsModalVisible: questionDetailsModalVisible,})

export const setQuestionServiceTableLoading = (tableLoading) => ({type: 'setQuestionServiceTableLoading', tableLoading: tableLoading,})

export const getQuestionFatherList = () => {
  return(dispatch) => {
    fetch('/mypcxt/Question/getQuestionFatherList', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateQuestionFatherList(responseJson));
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
    dispatch(setQuestionServiceTableLoading(true));
    fetch('/mypcxt/Question/getQuestionServiceVO', {
      method: 'POST',
      headers: {}
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(updateQuestionVO(responseJson));

          dispatch(setQuestionServiceTableLoading(false));
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
export const updateQuestion = (updateQuestionState) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("question.mypcxt_question_id", updateQuestionState.mypcxt_question_id);
    formData.append("question.question_describe", updateQuestionState.question_describe);
    fetch('/mypcxt/Question/updateQuestion', {
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
export const moveOption = (moveOptionID, moveOptionAction) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("option.mypcxt_option_id", moveOptionID);
    formData.append("moveOptionAction", moveOptionAction);
    fetch('/mypcxt/Question/moveOption', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(QuestionnaireActions.getquestionServiceDTO_byQuestionID(JSON.stringify(responseJson)));
          dispatch(QuestionnaireActions.getQuestionnaireVO());
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
export const moveQuestion = (moveQuestionID, moveQuestionAction) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("question.mypcxt_question_id", moveQuestionID);
    formData.append("moveQuestionAction", moveQuestionAction);
    fetch('/mypcxt/Question/moveQuestion', {
      method: 'POST',
      body: formData,
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          dispatch(QuestionnaireActions.getquestionnaireDTO_byServiceDefinitionID(JSON.stringify(responseJson)));
          dispatch(QuestionnaireActions.getQuestionnaireVO());
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
    formData.append("question.question_father_question", "none");
    fetch('/mypcxt/Question/addQuestion', {
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
    fetch('/mypcxt/Question/addOption', {
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
