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
