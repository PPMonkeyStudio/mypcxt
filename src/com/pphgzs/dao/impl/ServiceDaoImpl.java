package com.pphgzs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.ServiceDao;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_user;

public class ServiceDaoImpl implements ServiceDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
	}

	@Override
	public List<mypcxt_service_definition> listServiceDefinitionAll() {
		List<mypcxt_service_definition> serviceDefinitionList = new ArrayList<mypcxt_service_definition>();

		Session session = getSession();
		String hql = "from mypcxt_service_definition";
		Query query = session.createQuery(hql);
		serviceDefinitionList = query.list();
		session.clear();

		return serviceDefinitionList;
	}

	@Override
	public int getServiceDefinitionTotalRecords() {
		Session session = getSession();
		String hql = "select count(*) from mypcxt_service_definition";
		Query query = session.createQuery(hql);
		int count = ((Number) query.uniqueResult()).intValue();
		session.clear();
		return count;
	}

}
