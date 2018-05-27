package com.pphgzs.dao.impl;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;

import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.DO.mypcxt_unit;

public class UnitDaoImpl implements UnitDao {
	private SessionFactory sessionFactory;

	public void setSessionFactory(SessionFactory sessionFactory) {
		this.sessionFactory = sessionFactory;
	}

	public Session getSession() {
		return this.sessionFactory.getCurrentSession();
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
	public int getUnitTotalRecords() {
		Session session = getSession();
		String hql = "select count(*) from mypcxt_unit";
		Query query = session.createQuery(hql);
		int count = ((Number) query.uniqueResult()).intValue();
		return count;
	}

}
