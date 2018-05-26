package com.pphgzs.dao.impl;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.LoginAndLogoutDao;
import com.pphgzs.domain.DO.pypcxt_admin;
import com.pphgzs.domain.DO.pypcxt_user;

public class LoginAndLogoutDaoImpl implements LoginAndLogoutDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public pypcxt_user getUserByAccount(String account) {
		pypcxt_user user = null;
		Session session = getSession();
		String hql = "from pypcxt_user where pypcxt_user_id='" + account + "'";
		Query query = session.createQuery(hql);
		user = (pypcxt_user) query.uniqueResult();
		session.clear();

		return user;
	}

	@Override
	public pypcxt_admin getAdminByAccount(String account) {
		pypcxt_admin admin = null;
		Session session = getSession();
		String hql = "from pypcxt_admin where pypcxt_admin_id='" + account + "'";
		Query query = session.createQuery(hql);
		admin = (pypcxt_admin) query.uniqueResult();
		session.clear();

		return admin;
	}

}
