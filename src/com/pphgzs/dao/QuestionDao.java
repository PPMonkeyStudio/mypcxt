package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_unit;

public interface QuestionDao {

	public List<mypcxt_question> list_Question_All();

	public List<mypcxt_option> list_Option_byQuestionID(String questionID);

	public mypcxt_question get_Question_byID(String questionID);

	public int getQuestionTotalRecords();

	public Object getUserByUserName(String question_describe);

	public void saveQuestion(mypcxt_question question);

	public int getMaxQuestionSort_byServiceDefinition(String question_service_definition);

	public List<mypcxt_service_definition> listDefinitionAll();

	public List<mypcxt_unit> listUnitAll();
    /*
     * 获得最大的选择题选项排序值
     */
	public int getMaxOption_Sort_byQuestionID(String option_question);
    
	public void addOption(mypcxt_option option);

	public mypcxt_option getOpion_QuestionByOptionID(String mypcxt_option_id);

	public List<mypcxt_option> getOptionByQuestion(String option_question);

	public void updateQuestion(mypcxt_question question);

	public List<mypcxt_question> getQuestionAll();

	public List<mypcxt_option> getOptionAll();
    /*
     * 获得选择题
     */
	public List<mypcxt_question> getChoiceQuestionAll();
    /*
     * 根据选项描述判断问题是否已存在此选项
     */
	public Object getOptionByQuestion_describe(String option_describe);

	public mypcxt_question getQuestionByID(String mypcxt_question_id);

	public String getServiceDefinitionByFatherQuestion(String question_father_question);


}
