package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.UnitDao;
import com.pphgzs.dao.UserDao;
import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.DTO.UnitDTO;
import com.pphgzs.domain.VO.UnitVO;
import com.pphgzs.service.UnitService;
import com.pphgzs.util.TimeUtil;
import com.pphgzs.util.uuidUtil;

public class UnitServiceImpl implements UnitService {

	private UnitDao unitDao;
	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}

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

		UnitDTO unitDTO;
		List<UnitDTO> unitDTOList = new ArrayList<UnitDTO>();
		List<mypcxt_unit> unitList = unitDao.listUnitAll();

		for (mypcxt_unit unit : unitList) {
			unitDTO = new UnitDTO();
			unitDTO.setUnit(unit);
			unitDTO.setUser(userDao.getUserByUserID(unit.getUnit_correction_man()));
			unitDTOList.add(unitDTO);
		}

		unitVO.setUnitDTOList(unitDTOList);
		unitVO.setTotalRecords(unitDao.getUnitTotalRecords());

		return unitVO;
	}

	@Override
	public boolean saveUnit(mypcxt_unit unit) {

		if (unitDao.getUnitByUnitName(unit) == null) {
			unit.setMypcxt_unit_id(uuidUtil.getUuid());
			unit.setUnit_correction_man("none");
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

	@Override
	public void updateUnit(mypcxt_unit newUnit) {
		System.out.println(newUnit);
		mypcxt_unit oldUnit = unitDao.getUnitByUnitID(newUnit.getMypcxt_unit_id());
		oldUnit.setUnit_name(newUnit.getUnit_name());
		oldUnit.setUnit_correction_man(newUnit.getUnit_correction_man());
		oldUnit.setUnit_gmt_modified(TimeUtil.getStringSecond());

		unitDao.updateUnit(oldUnit);

	}

	@Override
	public List<mypcxt_unit> listUnitAll() {
		List<mypcxt_unit> unitList = unitDao.listUnitAll();
		return unitList;
	}

}
