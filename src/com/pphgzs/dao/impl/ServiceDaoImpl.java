package com.pphgzs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.ServiceDao;
import com.pphgzs.domain.DO.mypcxt_service_client;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_service_distribution;
import com.pphgzs.domain.DO.mypcxt_service_instance;

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

	@Override
	public int getServiceInstanceTotalRecords() {
		Session session = getSession();
		String hql = "select count(*) from mypcxt_service_instance";
		Query query = session.createQuery(hql);
		int count = ((Number) query.uniqueResult()).intValue();
		session.clear();
		return count;
	}

	@Override
	public int getServiceDistributionTotalRecords() {
		Session session = getSession();
		String hql = "select count(*) from mypcxt_service_distribution";
		Query query = session.createQuery(hql);
		int count = ((Number) query.uniqueResult()).intValue();
		session.clear();
		return count;
	}

	@Override
	public List<mypcxt_service_instance> listServiceInstanceAll() {
		List<mypcxt_service_instance> serviceInstanceList = new ArrayList<mypcxt_service_instance>();

		Session session = getSession();
		String hql = "from mypcxt_service_instance";
		Query query = session.createQuery(hql);
		serviceInstanceList = query.list();
		session.clear();

		return serviceInstanceList;
	}

	@Override
	public mypcxt_service_definition getServiceDefinitionByID(String serviceDefinitionID) {
		Session session = getSession();
		String hql = "from mypcxt_service_definition where mypcxt_service_definition_id='" + serviceDefinitionID + "'";
		Query query = session.createQuery(hql);
		mypcxt_service_definition serviceDefinition = (mypcxt_service_definition) query.uniqueResult();
		session.clear();
		return serviceDefinition;
	}

	@Override
	public mypcxt_service_instance getServiceInstanceByID(String serviceInstanceID) {
		Session session = getSession();
		String hql = "from mypcxt_service_instance where mypcxt_service_instance_id='" + serviceInstanceID + "'";
		Query query = session.createQuery(hql);
		mypcxt_service_instance serviceInstance = (mypcxt_service_instance) query.uniqueResult();
		session.clear();
		return serviceInstance;
	}

	@Override
	public mypcxt_service_distribution getServiceDistributionByID(String serviceDistributionID) {
		Session session = getSession();
		String hql = "from mypcxt_service_distribution where mypcxt_service_distribution_id='" + serviceDistributionID
				+ "'";
		Query query = session.createQuery(hql);
		mypcxt_service_distribution serviceDistribution = (mypcxt_service_distribution) query.uniqueResult();
		session.clear();
		return serviceDistribution;
	}

	@Override
	public List<mypcxt_service_client> listServiceClientByInstance(String instanceID) {
		List<mypcxt_service_client> serviceClientList = new ArrayList<mypcxt_service_client>();

		Session session = getSession();
		String hql = "from mypcxt_service_client where service_client_service_instance='" + instanceID + "'";
		Query query = session.createQuery(hql);
		serviceClientList = query.list();
		session.clear();
		return serviceClientList;
	}

	@Override
	public List<mypcxt_service_distribution> listServiceDistributionAll() {
		List<mypcxt_service_distribution> serviceDistributionList = new ArrayList<mypcxt_service_distribution>();
		Session session = getSession();
		String hql = "from mypcxt_service_distribution ";
		Query query = session.createQuery(hql);
		serviceDistributionList = query.list();
		session.clear();
		return serviceDistributionList;
	}

	@Override
	public boolean addServiceDefinition(mypcxt_service_definition serviceDefinition) {
		Session session = getSession();
		session.save(serviceDefinition);
		session.flush();
		return true;
	}

}
