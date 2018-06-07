import {UPDATE_QUESTIONVO,SET_QUESTIONDETAILSMODALVISIBLE} from './QuestionActionTypes.js';

export const updateQuestionVO = (questionServiceVO) => ({type: UPDATE_QUESTIONVO, questionServiceVO: questionServiceVO})
export const setQuestionDetailsModalVisible = (questionDetailsModalVisible) => ({type: SET_QUESTIONDETAILSMODALVISIBLE, questionDetailsModalVisible: questionDetailsModalVisible})

export const getQuestionServiceVO = () => {
  return(dispatch) => {
    // dispatch(setServiceDefinitionTableLoading(true));
    fetch('/mypcxt/Question/getQuestionServiceVO', {
      method: 'POST',
      headers: {},
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
export const addOption = (addOptionModelState) => {
  return(dispatch) => {
    let formData = new FormData();
    formData.append("option.option_describe", addOptionModelState.option_describe);
    formData.append("option.option_question", addOptionModelState.option_question);
    formData.append("option.option_grade", addOptionModelState.option_grade);
    fetch('/mypcxt/Unit/addOption', {
      method: 'POST',
      body: formData
    }).then((response) => {
      if (response.status === 200) {
        response.json().then((responseJson) => {
          if (JSON.stringify(responseJson) === "1") {
            dispatch(getQuestionServiceVO());
          } else {
            console.error("单位已存在");
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
  };
}
