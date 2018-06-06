package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;

public interface QuestionDao {

	public List<mypcxt_question> list_Question_All();

	public List<mypcxt_option> list_Option_byQuestionID(String questionID);

	public mypcxt_question get_Question_byID(String questionID);

	public int getQuestionTotalRecords();
}
