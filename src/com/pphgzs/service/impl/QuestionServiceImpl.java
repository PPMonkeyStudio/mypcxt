package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.QuestionDao;
import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.DTO.QuestionServiceDTO;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.VO.QuestionServiceVO;
import com.pphgzs.service.QuestionService;
import com.pphgzs.service.ServiceService;
import com.pphgzs.util.TimeUtil;
import com.pphgzs.util.uuidUtil;

public class QuestionServiceImpl implements QuestionService {

	private QuestionDao questionDao;
	private UnitDao unitDao;
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

	public UnitDao getUnitDao() {
		return unitDao;
	}

	public void setUnitDao(UnitDao unitDao) {
		this.unitDao = unitDao;
	}

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
		List<mypcxt_service_definition> definitionList = new ArrayList<mypcxt_service_definition>();
		definitionList = questionDao.listDefinitionAll();
		return definitionList;
	}

	@Override
	public List<ServiceDefinitionDTO> getServiceDefinitionDTOList() {
		// TODO Auto-generated method stub
		ServiceDefinitionDTO ServiceDefinitionDTO;
		List<ServiceDefinitionDTO> ServiceDefinitionDTOList = new ArrayList<ServiceDefinitionDTO>();
		List<mypcxt_service_definition> definitionList = new ArrayList<mypcxt_service_definition>();
		definitionList = questionDao.listDefinitionAll();
		for (mypcxt_service_definition serviceDefinition : definitionList) {
			ServiceDefinitionDTO = serviceService
					.getServiceDefinitionDTO_byServiceDefinitionID(serviceDefinition.getMypcxt_service_definition_id());
			ServiceDefinitionDTOList.add(ServiceDefinitionDTO);
		}
		return ServiceDefinitionDTOList;
	}

	@Override
	public boolean addOption(mypcxt_option option) {
		// TODO Auto-generated method stub
		if (option.getOption_question() != null && option.getOption_describe() != null
				&& option.getOption_grade() != null) {
			if (questionDao.getOptionByQuestion_describe(option.getOption_describe()) == null) {
				option.setMypcxt_option_id(uuidUtil.getUuid());
				option.setOption_sort(questionDao.getMaxOption_Sort_byQuestionID(option.getOption_question()) + 1);
				String time = TimeUtil.getStringSecond();
				option.setOption_gmt_create(time);
				option.setOption_gmt_modified(time);
				questionDao.addOption(option);
				return true;
			} else {
				return false;
			}
		} else {
			return false;
		}
	}

	@Override
	public boolean moveOption(int moveOptionAction, String mypcxt_option_id) {
		// TODO Auto-generated method stubmoveOptionAction
		if (mypcxt_option_id != null) {
			/*
			 * 查询对应选择题下的所有选择项
			 */
			mypcxt_option option = questionDao.getOpion_QuestionByOptionID(mypcxt_option_id);
			List<mypcxt_option> optionList = new ArrayList<mypcxt_option>();
			optionList = questionDao.getOptionByQuestion(option.getOption_question());
			if (moveOptionAction == 2) {
				for (mypcxt_option option2 : optionList) {
					int a, b, temp;
					a = option2.getOption_sort();
					b = option.getOption_sort();
					if ((option2.getOption_sort()) - (option.getOption_sort()) == 1) {
						temp = a;
						a = b;
						b = temp;
						option2.setOption_sort(a);
						questionDao.addOption(option2);
						option.setOption_sort(b);
						questionDao.addOption(option);

					}
				}
			} else if (moveOptionAction == 1) {
				for (mypcxt_option option1 : optionList) {
					int a, b, temp;
					a = option1.getOption_sort();
					b = option.getOption_sort();
					if ((option.getOption_sort()) - (option1.getOption_sort()) == 1) {
						temp = a;
						a = b;
						b = temp;
						option1.setOption_sort(a);
						questionDao.addOption(option1);
						option.setOption_sort(b);
						questionDao.addOption(option);
					}
				}

			}
			return true;
		} else {
			return false;
		}
	}

	@Override
	public void updateQuestion(mypcxt_question question) {
		// TODO Auto-generated method stub
		questionDao.updateQuestion(question);

	}

	@Override
	public List<QuestionServiceDTO> getQuestionFatherList() {
		// TODO Auto-generated method stub
		QuestionServiceDTO QuestionServiceDTO;
		List<mypcxt_question> questionList = questionDao.getQuestionAll();
		for (mypcxt_question question : questionList) {
			QuestionServiceDTO = new QuestionServiceDTO();
			QuestionServiceDTO.setQuestion(question);
			
		}
		List<ServiceDefinitionDTO> serviceDefinitionDTOList = getServiceDefinitionDTOList();
		for (ServiceDefinitionDTO serviceDefinitionDTO : serviceDefinitionDTOList) {
			QuestionServiceDTO = new QuestionServiceDTO();
			QuestionServiceDTO.setServiceDefinitionDTO(serviceDefinitionDTO);
		}
		List<mypcxt_option> optionList = questionDao.getOptionAll();
		QuestionServiceDTO = new QuestionServiceDTO();
		QuestionServiceDTO.setOptionList(optionList);
		List<QuestionServiceDTO> QuestionServiceDTOList = new ArrayList<QuestionServiceDTO>();
		QuestionServiceDTOList.add(QuestionServiceDTO);
		return QuestionServiceDTOList;
	}

	@Override
	public List<mypcxt_question> getChoiceQuestionAll() {
		// TODO Auto-generated method stub
		List<mypcxt_question> questionList = questionDao.getChoiceQuestionAll();
		return questionList;
	}
}