package com.pphgzs.service;

import com.pphgzs.domain.DTO.QuestionServiceDTO;
import com.pphgzs.domain.VO.QuestionServiceVO;

public interface QuestionService {

	public QuestionServiceVO getQuestionServiceVO();

	public QuestionServiceDTO getQuestionServiceDTO_byQuestionID(String questionID);

}
