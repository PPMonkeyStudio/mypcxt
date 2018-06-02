package com.pphgzs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.UserDao;
import com.pphgzs.domain.DO.mypcxt_user;

public class UserDaoImpl implements UserDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public List<mypcxt_user> listUserAll() {

		List<mypcxt_user> user_List = new ArrayList<mypcxt_user>();

		Session session = getSession();
		String hql = "from mypcxt_user";
		Query query = session.createQuery(hql);
		user_List = query.list();
		session.clear();

		return user_List;
	}

	@Override
	public int getUserTotalRecords() {
		Session session = getSession();
		String hql = "select count(*) from mypcxt_user";
		Query query = session.createQuery(hql);
		int count = ((Number) query.uniqueResult()).intValue();
		session.clear();
		return count;
	}

	@Override
	public void saveUser(mypcxt_user user) {
		Session session = getSession();
		session.save(user);
		session.flush();
	}

	@Override
	public mypcxt_user getUserByUserName(mypcxt_user user) {
		Session session = getSession();

		String hql = "from mypcxt_user where user_name='" + user.getUser_name() + "'";
		Query query = session.createQuery(hql);
		mypcxt_user newUser = (mypcxt_user) query.uniqueResult();
		session.clear();
		return newUser;
	}

	@Override
	public void deleteUser(mypcxt_user user) {
		Session session = getSession();
		String hql = "delete from mypcxt_user where mypcxt_user_id='" + user.getMypcxt_user_id() + "'";
		Query query = session.createQuery(hql);
		query.executeUpdate();
		session.flush();
	}

	@Override
	public mypcxt_user getUserByUserID(mypcxt_user user) {
		Session session = getSession();
		String hql = "from mypcxt_user where mypcxt_user_id='" + user.getMypcxt_user_id() + "'";
		Query query = session.createQuery(hql);
		mypcxt_user newUser = (mypcxt_user) query.uniqueResult();
		session.clear();
		return newUser;
	}

	@Override
	public void updateUser(mypcxt_user user) {
		Session session = getSession();
		session.update(user);
		session.flush();
	}

}
