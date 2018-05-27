package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_unit;

public class UnitVO {

	private List<mypcxt_unit> unit_List;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "UnitVO 【\nunit_List=" + unit_List + ", \ntotalRecords=" + totalRecords + "\n】";
	}

	public List<mypcxt_unit> getUnit_List() {
		return unit_List;
	}

	public void setUnit_List(List<mypcxt_unit> unit_List) {
		this.unit_List = unit_List;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
