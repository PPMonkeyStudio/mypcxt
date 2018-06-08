package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.QuestionDao;
import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DTO.QuestionServiceDTO;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.VO.QuestionServiceVO;
import com.pphgzs.service.QuestionService;
import com.pphgzs.service.ServiceService;
import com.pphgzs.util.TimeUtil;
import com.pphgzs.util.uuidUtil;

public class QuestionServiceImpl implements QuestionService {

	private QuestionDao questionDao;
	private ServiceService serviceService;

	public ServiceService getServiceService() {
		return serviceService;
	}

	public void setServiceService(ServiceService serviceService) {
		this.serviceService = serviceService;
	}

	public QuestionDao getQuestionDao() {
		return questionDao;
	}

	public void setQuestionDao(QuestionDao questionDao) {
		this.questionDao = questionDao;
	}
	/*
	 * 
	 * 
	 */

	@Override
	public QuestionServiceVO getQuestionServiceVO() {
		QuestionServiceVO questionServiceVO = new QuestionServiceVO();
		List<mypcxt_question> questionList = questionDao.list_Question_All();

		List<QuestionServiceDTO> questionDTOList = new ArrayList<QuestionServiceDTO>();
		for (mypcxt_question question : questionList) {
			QuestionServiceDTO questionDTO = getQuestionServiceDTO_byQuestionID(question.getMypcxt_question_id());
			questionDTOList.add(questionDTO);
		}
		questionServiceVO.setQuestionServiceDTOList(questionDTOList);
		questionServiceVO.setTotalRecords(questionDao.getQuestionTotalRecords());
		return questionServiceVO;
	}

	@Override
	public QuestionServiceDTO getQuestionServiceDTO_byQuestionID(String questionID) {
		QuestionServiceDTO questionDTO = new QuestionServiceDTO();
		//
		mypcxt_question question = questionDao.get_Question_byID(questionID);
		questionDTO.setQuestion(question);
		//
		ServiceDefinitionDTO serviceDefinitionDTO = serviceService
				.getServiceDefinitionDTO_byServiceDefinitionID(question.getQuestion_service_definition());
		questionDTO.setServiceDefinitionDTO(serviceDefinitionDTO);
		//
		List<mypcxt_option> optionList = questionDao.list_Option_byQuestionID(questionID);
		questionDTO.setOptionList(optionList);
		//
		return questionDTO;
	}

	@Override
	public boolean saveQuestion(mypcxt_question question) {
		// TODO Auto-generated method stub
		if (questionDao.getUserByUserName(question.getQuestion_describe()) == null) {
			question.setMypcxt_question_id(uuidUtil.getUuid());
			List<mypcxt_question> questionList = new ArrayList<mypcxt_question>();
			question.setQuestion_sort(
					questionDao.getMaxQuestionSort_byServiceDefinition(question.getQuestion_service_definition()) + 1);
			String time = TimeUtil.getStringSecond();
			question.setQuestion_gmt_create(time);
			question.setQuestion_gmt_modified(time);
			questionDao.saveQuestion(question);
			return true;
		} else {
			return false;
		}

	}

	@Override
	public List<mypcxt_service_definition> getDefinitionList() {
		// TODO Auto-generated method stub
		List<mypcxt_service_definition> definitionList = new ArrayList<mypcxt_service_definition>();
		definitionList = questionDao.listDefinitionAll();
		return definitionList;
	}

}
