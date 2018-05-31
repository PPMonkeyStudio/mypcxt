package com.pphgzs.domain.DO;

public class mypcxt_unit {

	private String mypcxt_unit_id;
	private String unit_name;
	private String unit_gmt_create;
	private String unit_gmt_modified;
	private String unit_correction_man;

	public String getUnit_correction_man() {
		return unit_correction_man;
	}

	@Override
	public String toString() {
		return "mypcxt_unit 【\nmypcxt_unit_id=" + mypcxt_unit_id + ", \nunit_name=" + unit_name + ", \nunit_gmt_create="
				+ unit_gmt_create + ", \nunit_gmt_modified=" + unit_gmt_modified + ", \nunit_correction_man="
				+ unit_correction_man + "\n】";
	}

	public void setUnit_correction_man(String unit_correction_man) {
		this.unit_correction_man = unit_correction_man;
	}

	public String getMypcxt_unit_id() {
		return mypcxt_unit_id;
	}

	public void setMypcxt_unit_id(String mypcxt_unit_id) {
		this.mypcxt_unit_id = mypcxt_unit_id;
	}

	public String getUnit_name() {
		return unit_name;
	}

	public void setUnit_name(String unit_name) {
		this.unit_name = unit_name;
	}

	public String getUnit_gmt_create() {
		return unit_gmt_create;
	}

	public void setUnit_gmt_create(String unit_gmt_create) {
		this.unit_gmt_create = unit_gmt_create;
	}

	public String getUnit_gmt_modified() {
		return unit_gmt_modified;
	}

	public void setUnit_gmt_modified(String unit_gmt_modified) {
		this.unit_gmt_modified = unit_gmt_modified;
	}

}
