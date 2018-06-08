package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;

public interface QuestionDao {

	public List<mypcxt_question> list_Question_All();

	public List<mypcxt_option> list_Option_byQuestionID(String questionID);

	public mypcxt_question get_Question_byID(String questionID);

	public int getQuestionTotalRecords();

	public Object getUserByUserName(String question_describe);

	public void saveQuestion(mypcxt_question question);

	public List<mypcxt_question> getMaxQuestion_sort(String question_service_definition);

	public List<mypcxt_service_definition> listDefinitionAll();
}
