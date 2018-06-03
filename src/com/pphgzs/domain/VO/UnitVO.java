package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DTO.UnitDTO;

public class UnitVO {

	private List<UnitDTO> unitDTOList;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "UnitVO 【\nunitDTOList=" + unitDTOList + ", \ntotalRecords=" + totalRecords + "\n】";
	}

	public List<UnitDTO> getUnitDTOList() {
		return unitDTOList;
	}

	public void setUnitDTOList(List<UnitDTO> unitDTOList) {
		this.unitDTOList = unitDTOList;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
