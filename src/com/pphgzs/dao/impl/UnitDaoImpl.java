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
		session.clear();
		return count;
	}

	@Override
	public void saveUnit(mypcxt_unit unit) {
		Session session = getSession();
		session.save(unit);
		session.flush();
	}

	@Override
	public mypcxt_unit getUnitByUnitName(mypcxt_unit unit) {
		Session session = getSession();

		String hql = "from mypcxt_unit where unit_name='" + unit.getUnit_name() + "'";
		Query query = session.createQuery(hql);
		mypcxt_unit newUnit = (mypcxt_unit) query.uniqueResult();
		session.clear();
		return newUnit;
	}

	@Override
	public void deleteUnit(mypcxt_unit unit) {
		Session session = getSession();
		String hql = "delete from mypcxt_unit where mypcxt_unit_id='" + unit.getMypcxt_unit_id() + "'";
		Query query = session.createQuery(hql);
		query.executeUpdate();
		session.flush();
	}

	@Override
	public mypcxt_unit getUnitByUnitID(mypcxt_unit unit) {
		Session session = getSession();
		String hql = "from mypcxt_unit where mypcxt_unit_id='" + unit.getMypcxt_unit_id() + "'";
		Query query = session.createQuery(hql);
		mypcxt_unit newUnit = (mypcxt_unit) query.uniqueResult();
		session.clear();
		return newUnit;
	}

	@Override
	public void updateUnit(mypcxt_unit unit) {
		Session session = getSession();
		session.update(unit);
		session.flush();
	}

}
