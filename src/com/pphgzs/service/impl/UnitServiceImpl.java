package com.pphgzs.service.impl;

import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.VO.UnitVO;
import com.pphgzs.service.UnitService;

public class UnitServiceImpl implements UnitService {

	private UnitDao unitDao;

	public UnitDao getUnitDao() {
		return unitDao;
	}

	public void setUnitDao(UnitDao unitDao) {
		this.unitDao = unitDao;
	}
	/*
	 * 
	 * 
	 */

	@Override
	public UnitVO getUnitVO() {
		System.out.println("s");
		UnitVO unitVO = new UnitVO();

		unitVO.setUnit_List(unitDao.listUnitAll());
		unitVO.setTotalRecords(unitDao.getUnitTotalRecords());

		return unitVO;
	}

}
