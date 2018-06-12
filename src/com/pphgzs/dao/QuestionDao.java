package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_unit;

public interface QuestionDao {
    /*
     * 获得所有问题列表
     */
	public List<mypcxt_question> list_Question_All();
     /*
      * 根据问题ID得到该问题下的选择题选项列表
      */
	public List<mypcxt_option> list_Option_byQuestionID(String questionID);
      /*
       * 根据问题id得到该问题的一条记录
       */
	public mypcxt_question get_Question_byID(String questionID);
      /*
       * 得到问题总数
       */
	public int getQuestionTotalRecords();
    /*
     * 保存一条问题记录
     */
	public void saveQuestion(mypcxt_question question);
     /*
      * 通过业务ID得到该业务下的问题，问题排序的最大值
      */
	public int getMaxQuestionSort_byServiceDefinition(String question_service_definition);
      /*
       * 获得业务定义列表
       */
	public List<mypcxt_service_definition> listDefinitionAll();
     /*
      * 获得单位列表
      */
	public List<mypcxt_unit> listUnitAll();
    /*
     * 获得选择题选项最大的排序值
     */
	public int getMaxOption_Sort_byQuestionID(String option_question);
    /*
     * 保存一条选择题选项记录
     */
	public void addOption(mypcxt_option option);
   /*
    * 根据选择题选项ID得到该选项
    */
	public mypcxt_option getOpion_QuestionByOptionID(String mypcxt_option_id);
     /*
      * 通过问题ID得到该问题下的所有选项
      */
	public List<mypcxt_option> getOptionByQuestion(String option_question);
     /*
      * 更新问题
      */
	public void updateQuestion(mypcxt_question question);
     /*
      * 获得所有问题
      */
	public List<mypcxt_question> getQuestionAll();
     /*
      * 获得所有选择题选项
      */
	public List<mypcxt_option> getOptionAll();
    /*
     * 获得所有选择题
     */
	public List<mypcxt_question> getChoiceQuestionAll();
    /*
     * 根据选项描述判断问题是否已存在此选项
     */
	public Object getOptionByQuestion_describe(String option_describe);
       /*
        * 根据问题ID得到一条问题记录
        */
	public mypcxt_question getQuestionByID(String mypcxt_question_id);
       /*
        * 根据问题的父问题得到父问题的所属业务定义ID。即为该问题的所属业务定义ID
        */
	public String getServiceDefinitionByFatherQuestion(String question_father_question);
     /*
      * 通过问题所属业务定义得到业务定义的一条记录
      */
	public mypcxt_service_definition getServiceDefinitionByQuestionServiceDefinition(
			String question_service_definition);
     /*
      * 通过业务定义ID得到所有改业务定义下的所有问题
      */
	public List<mypcxt_question> list_Question_byDefinitionID(String definitionID);
	/*
	 * 更新选择题选项
	 */
	public void updateOption(mypcxt_option old_option);
	/*
	 * 根据选项的所属问题得到问题记录
	 */
	public mypcxt_question getQuestionIdByOption_question(String option_question);
	/*
	 * 根据业务Id得到业务下的一条比该问题排序小一的问题
	 */
	public List<mypcxt_question> get_QuestionChangeValueSmall(int question_sort , String question_service_definition);
	/*
	 * 根据业务Id得到业务下的一条比该问题排序大一的问题
	 */
public	List<mypcxt_question> get_QuestionChangeValue(int question_sort, String question_service_definition);
public List<mypcxt_option> getOptionChangeValue(int option_sort, String option_question);
	
	


}
