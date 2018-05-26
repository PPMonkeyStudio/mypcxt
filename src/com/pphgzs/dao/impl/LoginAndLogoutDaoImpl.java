package com.pphgzs.dao.impl;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.LoginAndLogoutDao;
import com.pphgzs.domain.DO.mypcxt_admin;
import com.pphgzs.domain.DO.mypcxt_user;

public class LoginAndLogoutDaoImpl implements LoginAndLogoutDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public mypcxt_user getUserByAccount(String account) {
		mypcxt_user user = null;
		Session session = getSession();
		String hql = "from mypcxt_user where user_account='" + account + "'";
		Query query = session.createQuery(hql);
		user = (mypcxt_user) query.uniqueResult();
		session.clear();
		return user;

	}

	@Override
	public mypcxt_admin getAdminByAccount(String account) {
		mypcxt_admin admin = null;
		Session session = getSession();
		String hql = "from mypcxt_admin where admin_account='" + account + "'";
		Query query = session.createQuery(hql);
		admin = (mypcxt_admin) query.uniqueResult();
		session.clear();
		return admin;
	}

}
