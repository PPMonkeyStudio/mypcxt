package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_unit;

public interface UnitDao {
	public List<mypcxt_unit> listUnitAll();

	public int getUnitTotalRecords();
}
