package com.pphgzs.service;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DTO.QuestionServiceDTO;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.VO.QuestionServiceVO;

public interface QuestionService {

	public QuestionServiceVO getQuestionServiceVO();

	public QuestionServiceDTO getQuestionServiceDTO_byQuestionID(String questionID);

	public boolean saveQuestion(mypcxt_question question);

	public List<mypcxt_service_definition> getDefinitionList();

	public List<ServiceDefinitionDTO> getServiceDefinitionDTOList();
      /*
       * 创建选择题选项
       */
	public boolean addOption(mypcxt_option option);

	public boolean moveOption(int moveOptionAction, String mypcxt_option_id);

	public void updateQuestion(mypcxt_question question);

	public List<QuestionServiceDTO> getQuestionFatherList();

}
