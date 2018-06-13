package com.pphgzs.service;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.VO.UnitVO;

public interface UnitService {

	public UnitVO getUnitVO();

	public boolean saveUnit(mypcxt_unit unit);

	public void deleteUnit(mypcxt_unit unit);

	public void updateUnit(mypcxt_unit newUnit);
    /*
     * 获取所有单位列表
     */
	public List<mypcxt_unit> listUnitAll();

}
