package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.QuestionDao;
import com.pphgzs.dao.ServiceDao;
import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DTO.QuestionServiceDTO;
import com.pphgzs.domain.DTO.QuestionnaireDTO;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.VO.QuestionServiceVO;
import com.pphgzs.domain.VO.QuestionnaireVO;
import com.pphgzs.service.QuestionService;
import com.pphgzs.service.ServiceService;
import com.pphgzs.util.TimeUtil;
import com.pphgzs.util.uuidUtil;

public class QuestionServiceImpl implements QuestionService {

	private QuestionDao questionDao;
	private UnitDao unitDao;
	private ServiceService serviceService;
	private ServiceDao serviceDao;

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

	public ServiceDao getServiceDao() {
		return serviceDao;
	}

	public void setServiceDao(ServiceDao serviceDao) {
		this.serviceDao = serviceDao;
	}

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

		question.setMypcxt_question_id(uuidUtil.getUuid());
		List<mypcxt_question> questionList = new ArrayList<mypcxt_question>();
		question.setQuestion_sort(
				questionDao.getMaxQuestionSort_byServiceDefinition(question.getQuestion_service_definition()) + 1);
		String time = TimeUtil.getStringSecond();
		question.setQuestion_gmt_create(time);
		question.setQuestion_gmt_modified(time);
		if (question.getQuestion_father_question() != "none") {
			question.setQuestion_service_definition(
					questionDao.getServiceDefinitionByFatherQuestion(question.getQuestion_father_question()));
		}
		questionDao.saveQuestion(question);
		return true;

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
	public String moveOption(int moveOptionAction, String mypcxt_option_id) {
		// TODO Auto-generated method stubmoveOptionAction
		if (mypcxt_option_id != null) {
			
			mypcxt_option option = questionDao.getOpion_QuestionByOptionID(mypcxt_option_id);
			List<mypcxt_option> optionList = new ArrayList<mypcxt_option>();
			if (moveOptionAction == 2) {
				optionList = questionDao.getOptionChangeValue(option.getOption_sort(),option.getOption_question());
				for (mypcxt_option option2 : optionList) {
					int a, b, temp;
					a = option2.getOption_sort();
					b = option.getOption_sort();
						temp = a;
						a = b;
						b = temp;
						option2.setOption_sort(a);
						questionDao.updateOption(option2);
						option.setOption_sort(b);
						questionDao.updateOption(option);

					
				}
			} else if (moveOptionAction == 1) {
				optionList = questionDao.getOptionChangeValueSmall(option.getOption_sort(),option.getOption_question());
				for (mypcxt_option option1 : optionList) {
					int a, b, temp;
					a = option1.getOption_sort();
					b = option.getOption_sort();
						temp = a;
						a = b;
						b = temp;
						option1.setOption_sort(a);
						questionDao.updateOption(option1);
						option.setOption_sort(b);
						questionDao.updateOption(option);
					
				}

			}
			return option.getOption_question();
		} else {
			return null;
		}
	}

	@Override
	public String updateQuestion(mypcxt_question question) {
		// TODO Auto-generated method stub
		mypcxt_question oldQuestion = questionDao.getQuestionByID(question.getMypcxt_question_id());
		oldQuestion.setQuestion_describe(question.getQuestion_describe());
		// oldQuestion.setQuestion_father_question(question.getQuestion_father_question());
		String time = TimeUtil.getStringSecond();
		oldQuestion.setQuestion_gmt_modified(time);
		questionDao.updateQuestion(oldQuestion);
		return questionDao.getServiceDefinitionByQuestionServiceDefinition(oldQuestion.getQuestion_service_definition())
				.getMypcxt_service_definition_id();
		// mypcxt_service_definition service_definition =
		// questionDao.getServiceDefinitionByQuestionServiceDefinition()
		// return "";
	}

	@Override
	public List<QuestionServiceDTO> getQuestionFatherList() {
		// TODO Auto-generated method stub
		QuestionServiceDTO QuestionServiceDTO;
		List<QuestionServiceDTO> QuestionServiceDTOList = new ArrayList<QuestionServiceDTO>();
		List<mypcxt_question> questionList = questionDao.getQuestionAll();
		for (mypcxt_question question : questionList) {
			QuestionServiceDTO = new QuestionServiceDTO();
			QuestionServiceDTO.setQuestion(question);
			QuestionServiceDTO.setOptionList(questionDao.getOptionByQuestion(question.getMypcxt_question_id()));
			mypcxt_service_definition service_definition = questionDao
					.getServiceDefinitionByQuestionServiceDefinition(question.getQuestion_service_definition());
			ServiceDefinitionDTO serviceDefinitionDTO = new ServiceDefinitionDTO();
			serviceDefinitionDTO = serviceService.getServiceDefinitionDTO_byServiceDefinitionID(
					service_definition.getMypcxt_service_definition_id());
			QuestionServiceDTO.setServiceDefinitionDTO(serviceDefinitionDTO);
			QuestionServiceDTOList.add(QuestionServiceDTO);
		}
		return QuestionServiceDTOList;
	}

	@Override
	public List<mypcxt_question> getChoiceQuestionAll() {
		// TODO Auto-generated method stub
		List<mypcxt_question> questionList = questionDao.getChoiceQuestionAll();
		return questionList;
	}

	@Override
	public List<QuestionServiceDTO> listQuestionDTO_byDefinitionID(String DefinitionID) {

		List<QuestionServiceDTO> questionServiceDTOList = new ArrayList<QuestionServiceDTO>();

		List<mypcxt_question> questionList = questionDao.list_Question_byDefinitionID(DefinitionID);

		for (mypcxt_question question : questionList) {
			QuestionServiceDTO questionServiceDTO = getQuestionServiceDTO_byQuestionID(
					question.getMypcxt_question_id());

			questionServiceDTOList.add(questionServiceDTO);
		}

		return questionServiceDTOList;
	}

	@Override
	public QuestionnaireVO getQuestionnaireVO() {
		// TODO Auto-generated method stub
		/* 页面问卷VO */
		QuestionnaireVO questionnaireVO = new QuestionnaireVO();
		/* 业务问卷DTO */
		List<QuestionnaireDTO> questionnaireDTOList = new ArrayList<QuestionnaireDTO>();

		/* 查询所有业务 */
		List<ServiceDefinitionDTO> serviceDefinitionDTOList = serviceService.listServiceDefinitionDTO_all();

		for (ServiceDefinitionDTO serviceDefinitionDTO : serviceDefinitionDTOList) {
			QuestionnaireDTO questionnaireDTO = new QuestionnaireDTO();
			// 装载业务定义进问卷
			questionnaireDTO.setServiceDefinitionDTO(serviceDefinitionDTO);
			// 查询所有该业务定义下的问题，并装载进问卷
			List<QuestionServiceDTO> questionDTOList = listQuestionDTO_byDefinitionID(
					serviceDefinitionDTO.getServiceDefinition().getMypcxt_service_definition_id());
			questionnaireDTO.setQuestionServiceDTOList(questionDTOList);
			// 将问卷装进问卷列表中
			questionnaireDTOList.add(questionnaireDTO);
		}
		questionnaireVO.setQuestionnaireDTOList(questionnaireDTOList);

		questionnaireVO.setTotalRecords(serviceDao.getServiceDefinitionTotalRecords());

		return questionnaireVO;
	}

	@Override
	public QuestionnaireDTO getquestionnaireDTO_byServiceDefinitionID(String ServiceDefinitionID) {
		QuestionnaireDTO questionnaireDTO = new QuestionnaireDTO();
		// 查询所有该业务定义下的问题，并装载进问卷
		List<QuestionServiceDTO> questionDTOList = listQuestionDTO_byDefinitionID(ServiceDefinitionID);
		questionnaireDTO.setQuestionServiceDTOList(questionDTOList);
		ServiceDefinitionDTO serviceDefinitionDTO = serviceService
				.getServiceDefinitionDTO_byServiceDefinitionID(ServiceDefinitionID);
		questionnaireDTO.setServiceDefinitionDTO(serviceDefinitionDTO);
		return questionnaireDTO;
	}

	@Override
	public String moveQuestion(int moveQuestionAction, String mypcxt_question_id) {
		if (mypcxt_question_id != null) {
			/*
			 * 查询对应ID的问题记录
			 */
			mypcxt_question question = questionDao.get_Question_byID(mypcxt_question_id);
			List<mypcxt_question> questionList = new ArrayList<mypcxt_question>();
			
			
			if (moveQuestionAction == 2) {
				/*
				 * 查询
				 */
			questionList = questionDao.get_QuestionChangeValue(question.getQuestion_sort(),question.getQuestion_service_definition());	
			System.out.println("下移questionList"+questionList);	
			for (mypcxt_question question2 : questionList) {
					int a, b, temp;
					a = question2.getQuestion_sort();
					b = question.getQuestion_sort();
						temp = a;
						a = b;
						b = temp;
						question2.setQuestion_sort(a);
						questionDao.updateQuestion(question2);
						question.setQuestion_sort(b);
						questionDao.updateQuestion(question);

				}
			} else if (moveQuestionAction == 1) {
				questionList = questionDao.get_QuestionChangeValueSmall(question.getQuestion_sort(),question.getQuestion_service_definition());	
				for (mypcxt_question question1 : questionList) {
					
					int a, b, temp;
					a = question1.getQuestion_sort();
					b = question.getQuestion_sort();
						temp = a;
						a = b;
						b = temp;
						question1.setQuestion_sort(a);
						questionDao.updateQuestion(question1);
						question.setQuestion_sort(b);
						questionDao.updateQuestion(question);
				}

			}
			return question.getQuestion_service_definition();
		} else {
			return null;
		}
	}

	@Override
	public String updateOption(mypcxt_option option) {
		mypcxt_option old_option = questionDao.getOpion_QuestionByOptionID(option.getMypcxt_option_id());
		old_option.setOption_describe(option.getOption_describe());
		old_option.setOption_sort(option.getOption_sort());
		String time = TimeUtil.getStringSecond();
		old_option.setOption_gmt_modified(time);
		questionDao.updateOption(old_option);
		mypcxt_question question = questionDao.getQuestionIdByOption_question(old_option.getOption_question());
		String service_definition_id = question.getQuestion_service_definition();
		return service_definition_id;
	}
}