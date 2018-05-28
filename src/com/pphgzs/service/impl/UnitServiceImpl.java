package com.pphgzs.service.impl;

import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.VO.UnitVO;
import com.pphgzs.service.UnitService;
import com.pphgzs.util.TimeUtil;
import com.pphgzs.util.uuidUtil;

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
		UnitVO unitVO = new UnitVO();

		unitVO.setUnit_List(unitDao.listUnitAll());
		unitVO.setTotalRecords(unitDao.getUnitTotalRecords());

		return unitVO;
	}

	@Override
	public boolean saveUnit(mypcxt_unit unit) {

		if (unitDao.getUnitByUnitName(unit.getUnit_name()) == null) {
			unit.setMypcxt_unit_id(uuidUtil.getUuid());
			String time = TimeUtil.getStringSecond();
			unit.setUnit_gmt_create(time);
			unit.setUnit_gmt_modified(time);
			unitDao.saveUnit(unit);
			return true;
		} else {
			return false;
		}

	}

	@Override
	public void deleteUnit(mypcxt_unit unit) {
		unitDao.deleteUnit(unit);

	}

}
