package com.pphgzs.dao.impl;

import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.ServiceDao;

public class ServiceDaoImpl implements ServiceDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

}
