package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_unit;

public interface UnitDao {

	public List<mypcxt_unit> listUnitAll();

	public int getUnitTotalRecords();

	public void saveUnit(mypcxt_unit unit);

	public mypcxt_unit getUnitByUnitName(String unit_name);

	public void deleteUnit(mypcxt_unit unit);
}
