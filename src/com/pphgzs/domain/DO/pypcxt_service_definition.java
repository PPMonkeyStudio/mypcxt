package com.pphgzs.domain.DO;

public class pypcxt_service_definition {
	private String pypcxt_service_definition_id;
	private String service_definition_describe;
	private String service_definition_unit;
	private String service_definition_table;
	private String service_definition_field_num;
	private String service_definition_field_owner_name;
	private String service_definition_field_owner_sex;
	private String service_definition_field_owner_phone;
	private String service_definition_field_handle_date;
	private String service_definition_gmt_create;
	private String service_definition_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_service_definition [\npypcxt_service_definition_id=" + pypcxt_service_definition_id
				+ ",\nservice_definition_describe=" + service_definition_describe + ",\nservice_definition_unit="
				+ service_definition_unit + ",\nservice_definition_table=" + service_definition_table
				+ ",\nservice_definition_field_num=" + service_definition_field_num
				+ ",\nservice_definition_field_owner_name=" + service_definition_field_owner_name
				+ ",\nservice_definition_field_owner_sex=" + service_definition_field_owner_sex
				+ ",\nservice_definition_field_owner_phone=" + service_definition_field_owner_phone
				+ ",\nservice_definition_field_handle_date=" + service_definition_field_handle_date
				+ ",\nservice_definition_gmt_create=" + service_definition_gmt_create
				+ ",\nservice_definition_gmt_modified=" + service_definition_gmt_modified + "\n]";
	}

	public String getPypcxt_service_definition_id() {
		return pypcxt_service_definition_id;
	}

	public void setPypcxt_service_definition_id(String pypcxt_service_definition_id) {
		this.pypcxt_service_definition_id = pypcxt_service_definition_id;
	}

	public String getService_definition_describe() {
		return service_definition_describe;
	}

	public void setService_definition_describe(String service_definition_describe) {
		this.service_definition_describe = service_definition_describe;
	}

	public String getService_definition_unit() {
		return service_definition_unit;
	}

	public void setService_definition_unit(String service_definition_unit) {
		this.service_definition_unit = service_definition_unit;
	}

	public String getService_definition_table() {
		return service_definition_table;
	}

	public void setService_definition_table(String service_definition_table) {
		this.service_definition_table = service_definition_table;
	}

	public String getService_definition_field_num() {
		return service_definition_field_num;
	}

	public void setService_definition_field_num(String service_definition_field_num) {
		this.service_definition_field_num = service_definition_field_num;
	}

	public String getService_definition_field_owner_name() {
		return service_definition_field_owner_name;
	}

	public void setService_definition_field_owner_name(String service_definition_field_owner_name) {
		this.service_definition_field_owner_name = service_definition_field_owner_name;
	}

	public String getService_definition_field_owner_sex() {
		return service_definition_field_owner_sex;
	}

	public void setService_definition_field_owner_sex(String service_definition_field_owner_sex) {
		this.service_definition_field_owner_sex = service_definition_field_owner_sex;
	}

	public String getService_definition_field_owner_phone() {
		return service_definition_field_owner_phone;
	}

	public void setService_definition_field_owner_phone(String service_definition_field_owner_phone) {
		this.service_definition_field_owner_phone = service_definition_field_owner_phone;
	}

	public String getService_definition_field_handle_date() {
		return service_definition_field_handle_date;
	}

	public void setService_definition_field_handle_date(String service_definition_field_handle_date) {
		this.service_definition_field_handle_date = service_definition_field_handle_date;
	}

	public String getService_definition_gmt_create() {
		return service_definition_gmt_create;
	}

	public void setService_definition_gmt_create(String service_definition_gmt_create) {
		this.service_definition_gmt_create = service_definition_gmt_create;
	}

	public String getService_definition_gmt_modified() {
		return service_definition_gmt_modified;
	}

	public void setService_definition_gmt_modified(String service_definition_gmt_modified) {
		this.service_definition_gmt_modified = service_definition_gmt_modified;
	}
}
