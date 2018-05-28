package com.pphgzs.service;

import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.VO.UnitVO;

public interface UnitService {

	public UnitVO getUnitVO();

	public boolean saveUnit(mypcxt_unit unit);

	public void deleteUnit(mypcxt_unit unit);

}
