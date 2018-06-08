package com.pphgzs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.QuestionDao;
import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;

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
		String hql = "from mypcxt_option where option_question='" + questionID + "'";
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
	public Object getUserByUserName(String question_describe) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public void saveQuestion(mypcxt_question question) {
		Session session = getSession();
		session.save(question);
		session.flush();
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

}
