package com.pphgzs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.QuestionDao;
import com.pphgzs.domain.DO.mypcxt_answer_choice;
import com.pphgzs.domain.DO.mypcxt_answer_open;
import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_unit;

@SuppressWarnings("unchecked")
public class QuestionDaoImpl implements QuestionDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public List<mypcxt_question> list_Question_All() {
		List<mypcxt_question> questionList = new ArrayList<mypcxt_question>();

		Session session = getSession();
		String hql = "from mypcxt_question";
		Query query = session.createQuery(hql);
		questionList = query.list();
		session.clear();

		return questionList;
	}

	@Override
	public List<mypcxt_option> list_Option_byQuestionID(String questionID) {
		List<mypcxt_option> optionList = new ArrayList<mypcxt_option>();

		Session session = getSession();
		String hql = "from mypcxt_option where option_question='" + questionID + "' order by option_sort desc";
		Query query = session.createQuery(hql);
		optionList = query.list();
		session.clear();

		return optionList;
	}

	@Override
	public mypcxt_question get_Question_byID(String questionID) {
		Session session = getSession();
		String hql = "from mypcxt_question where mypcxt_question_id='" + questionID + "'";
		Query query = session.createQuery(hql);
		mypcxt_question question = (mypcxt_question) query.uniqueResult();
		session.clear();
		return question;
	}

	@Override
	public int getQuestionTotalRecords() {
		Session session = getSession();
		String hql = "select count(*) from mypcxt_question";
		Query query = session.createQuery(hql);
		int count = ((Number) query.uniqueResult()).intValue();
		session.clear();
		return count;
	}

	@Override
	public boolean saveQuestion(mypcxt_question question) {
		Session session = getSession();
		try{
			session.save(question);
			session.flush();
			return true;
		}catch(Exception e){
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public int getMaxQuestionSort_byServiceDefinition(String question_service_definition) {

		Session session = getSession();
		//
		String hql = "select question_sort from mypcxt_question where question_service_definition='"
				+ question_service_definition + "' order by question_sort desc";

		Query query = session.createQuery(hql);

		query.setFirstResult(0);

		query.setMaxResults(1);

		List<Integer> maxQuestionSort_onServiceDefinition = query.list();

		session.clear();
		// 返回第一个值（最大值）
		return maxQuestionSort_onServiceDefinition.get(0);

	}

	@Override
	public List<mypcxt_service_definition> listDefinitionAll() {
		List<mypcxt_service_definition> definition_List = new ArrayList<mypcxt_service_definition>();
		Session session = getSession();
		String hql = "from mypcxt_service_definition";
		Query query = session.createQuery(hql);
		definition_List = query.list();
		session.clear();
		return definition_List;
	}

	@Override
	public List<mypcxt_unit> listUnitAll() {
		List<mypcxt_unit> unit_List = new ArrayList<mypcxt_unit>();
		Session session = getSession();
		String hql = "from mypcxt_unit";
		Query query = session.createQuery(hql);
		unit_List = query.list();
		session.clear();
		return unit_List;
	}

	@Override
	public int getMaxOption_Sort_byQuestionID(String option_question) {
		Session session = getSession();
		//
		String hql = "select option_sort from mypcxt_option where option_question='" + option_question
				+ "' order by option_sort desc";

		Query query = session.createQuery(hql);

		query.setFirstResult(0);

		query.setMaxResults(1);

		List<Integer> maxOptionSort_onQuestion = query.list();
		session.clear();
        if(maxOptionSort_onQuestion.size()==0){
        	return 0;
        }else{
        	// 返回第一个值（最大值）
        	return maxOptionSort_onQuestion.get(0);
        }
	}

	@Override
	public void addOption(mypcxt_option option) {
		Session session = getSession();
		session.save(option);
		session.flush();
	}

	@Override
	public mypcxt_option getOpion_QuestionByOptionID(String mypcxt_option_id) {
		Session session = getSession();
		String hql = "from mypcxt_option where mypcxt_option_id='" + mypcxt_option_id + "'";

		Query query = session.createQuery(hql);
		mypcxt_option option = (mypcxt_option) query.uniqueResult();
		return option;
	}

	@Override
	public List<mypcxt_option> getOptionByQuestion(String option_question) {
		Session session = getSession();
		String hql = "from mypcxt_option where option_question='" + option_question + "' order by option_sort desc";

		Query query = session.createQuery(hql);
		List<mypcxt_option> optionList = new ArrayList<mypcxt_option>();
		optionList = query.list();
		return optionList;

	}

	@Override
	public void updateQuestion(mypcxt_question question) {
		Session session = getSession();
		session.update(question);
		session.flush();
	}

	@Override
	public List<mypcxt_question> getQuestionAll() {
		Session session = getSession();
		String hql = "from mypcxt_question ";
		Query query = session.createQuery(hql);
		List<mypcxt_question> question_List = query.list();
		return question_List;
	}

	@Override
	public List<mypcxt_option> getOptionAll() {
		Session session = getSession();
		String hql = "from mypcxt_option ";
		Query query = session.createQuery(hql);
		List<mypcxt_option> option_List = query.list();
		return option_List;
	}

	@Override
	public List<mypcxt_question> getChoiceQuestionAll() {
		Session session = getSession();
		String hql = "from mypcxt_question where question_type = 1 ";
		Query query = session.createQuery(hql);
		List<mypcxt_question> questionList = query.list();
		return questionList;
	}

	@Override
	public mypcxt_option getOptionByQuestion_describe(String option_describe) {
		Session session = getSession();
		String hql = "from mypcxt_option where option_describe ='" + option_describe + "'";
		Query query = session.createQuery(hql);
		mypcxt_option option = (mypcxt_option) query.uniqueResult();
		if(option==null){
			return null;
		}else{
			return option;
		}
	}

	@Override
	public mypcxt_question getQuestionByID(String mypcxt_question_id) {
		Session session = getSession();
		String hql = "from mypcxt_question where mypcxt_question_id = '" + mypcxt_question_id + "'";
		Query query = session.createQuery(hql);
		mypcxt_question question = (mypcxt_question) query.uniqueResult();
		return question;
	}

	@Override
	public String getServiceDefinitionByFatherQuestion(String question_father_question) {
		Session session = getSession();
		String hql = "select question_service_definition from mypcxt_question where question_father_question='"
				+ question_father_question + "'";
		Query query = session.createQuery(hql);
		mypcxt_question question = (mypcxt_question) query.uniqueResult();
		return question.getQuestion_service_definition();
	}

	@Override
	public mypcxt_service_definition getServiceDefinitionByQuestionServiceDefinition(
			String question_service_definition) {
		Session session = getSession();
		String hql = "from mypcxt_service_definition where mypcxt_service_definition_id ='"
				+ question_service_definition + "'";
		Query query = session.createQuery(hql);
		mypcxt_service_definition service_definition = (mypcxt_service_definition) query.uniqueResult();
		return service_definition;
	}

	@Override
	public List<mypcxt_question> list_Question_byDefinitionID(String definitionID) {

		Session session = getSession();
		String hql = "from mypcxt_question where question_service_definition = '" + definitionID
				+ "' order by question_sort desc";
		Query query = session.createQuery(hql);
		List<mypcxt_question> questionList = query.list();
		return questionList;
	}

	@Override
	public void updateOption(mypcxt_option old_option) {
		Session session = getSession();
		session.update(old_option);
		session.flush();
	}

	@Override
	public mypcxt_question getQuestionIdByOption_question(String option_question) {
		Session session = getSession();
		String hql = "from mypcxt_question where mypcxt_question_id = '" + option_question + "' ";
		Query query = session.createQuery(hql);
		mypcxt_question question = (mypcxt_question) query.uniqueResult();
		return question;
	}

	@Override
	public List<mypcxt_question> get_QuestionChangeValueSmall(int question_sort, String question_service_definition) {
		Session session = getSession();
		String hql = "from mypcxt_question where question_service_definition = '" + question_service_definition
				+ "' and question_sort <'" + question_sort + "' order by question_sort desc";
		Query query = session.createQuery(hql);
		query.setFirstResult(0);
		query.setMaxResults(1);
		List<mypcxt_question> questionList = query.list();

		return questionList;
	}

	@Override
	public List<mypcxt_question> get_QuestionChangeValue(int question_sort, String question_service_definition) {
		Session session = getSession();
		String hql = "from mypcxt_question where question_service_definition = '" + question_service_definition
				+ "' and question_sort >'" + question_sort + "' order by question_sort asc";
		Query query = session.createQuery(hql);
		query.setFirstResult(0);
		query.setMaxResults(1);
		List<mypcxt_question> questionList = query.list();

		return questionList;
	}

	@Override
	public List<mypcxt_option> getOptionChangeValue(int option_sort, String option_question) {
		Session session = getSession();
		String hql = "from mypcxt_option where option_question = '" + option_question
				+ "' and option_sort >'" + option_sort + "' order by option_sort asc";
		Query query = session.createQuery(hql);
		query.setFirstResult(0);
		query.setMaxResults(1);
		List<mypcxt_option> optionList = query.list();

		return optionList;
	}

	@Override
	public List<mypcxt_option> getOptionChangeValueSmall(int option_sort, String option_question) {
		Session session = getSession();
		String hql = "from mypcxt_option where option_question = '" + option_question
				+ "' and option_sort <'" + option_sort + "' order by option_sort desc";
		Query query = session.createQuery(hql);
		query.setFirstResult(0);
		query.setMaxResults(1);
		List<mypcxt_option> optionList = query.list();

		return optionList;
	}

	@Override
	public List<mypcxt_answer_choice> getAnswerChoiceByOptionQuestion(String option_question) {
		// TODO Auto-generated method stub
		Session session = getSession();
		String hql = "from mypcxt_answer_choice where answer_choice_question='"+option_question+"'";
		Query query = session.createQuery(hql);
		List<mypcxt_answer_choice> AnswerChoiceList = query.list();
		session.clear();
		return AnswerChoiceList;
	}

	@Override
	public List<mypcxt_answer_open> getAnswerOpenByQuestionId(String QuestionId) {
		// TODO Auto-generated method stub
		Session session =getSession();
		String hql="from mypcxt_answer_open where answer_open_question='"+QuestionId+"'";
		Query query = session.createQuery(hql);
		List<mypcxt_answer_open> AnswerOpenList = query.list();
		return AnswerOpenList;
	}

	@Override
	public void deleteAnswerChoice(mypcxt_answer_choice answerChoice) {
		// TODO Auto-generated method stub
	            Session session = getSession();
	            session.delete(answerChoice);
	            session.flush();
	}

	@Override
	public void deleteOption(mypcxt_option option) {
		// TODO Auto-generated method stub
		Session session = getSession();
		session.delete(option);
		session.flush();
	}

	@Override
	public void deleteQuestion(mypcxt_question question) {
		// TODO Auto-generated method stub
		Session session = getSession();
		session.delete(question);
		session.flush();
	}

	@Override
	public void deleteAnswerOpen(mypcxt_answer_open answerOpen) {
		// TODO Auto-generated method stub
		Session session = getSession();
		session.delete(answerOpen);
		session.flush();
	}

	@Override
	public boolean addAnswerChoice(mypcxt_answer_choice answerChoice) {
		// TODO Auto-generated method stub
		Session session = getSession();
		session.save(answerChoice);
		session.flush();
		return true;
	}

	@Override
	public mypcxt_option getOptionByID(String mypcxt_option_id) {
		Session session = getSession();
		String hql = "from mypcxt_option where mypcxt_option_id='"+mypcxt_option_id+"'";
		Query query = session.createQuery(hql);
		mypcxt_option option = (mypcxt_option) query.uniqueResult();
		return option;
	}

}
