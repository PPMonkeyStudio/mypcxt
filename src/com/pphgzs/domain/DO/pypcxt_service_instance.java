package com.pphgzs.domain.DO;

public class pypcxt_service_instance {
	private String pypcxt_service_instance_id;
	private String service_instance_unit;
	private String service_instance_service_definition;
	private String service_instance_service_num;
	private String service_instance_owner_name;
	private String service_instance_owner_sex;
	private String service_instance_owner_phone;
	private String service_instance_handle_date;
	private String service_instance_if_return;
	private String service_instance_gmt_create;
	private String service_instance_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_service_instance [\npypcxt_service_instance_id=" + pypcxt_service_instance_id
				+ ",\nservice_instance_unit=" + service_instance_unit + ",\nservice_instance_service_definition="
				+ service_instance_service_definition + ",\nservice_instance_service_num="
				+ service_instance_service_num + ",\nservice_instance_owner_name=" + service_instance_owner_name
				+ ",\nservice_instance_owner_sex=" + service_instance_owner_sex + ",\nservice_instance_owner_phone="
				+ service_instance_owner_phone + ",\nservice_instance_handle_date=" + service_instance_handle_date
				+ ",\nservice_instance_if_return=" + service_instance_if_return + ",\nservice_instance_gmt_create="
				+ service_instance_gmt_create + ",\nservice_instance_gmt_modified=" + service_instance_gmt_modified
				+ "\n]";
	}

	public String getPypcxt_service_instance_id() {
		return pypcxt_service_instance_id;
	}

	public void setPypcxt_service_instance_id(String pypcxt_service_instance_id) {
		this.pypcxt_service_instance_id = pypcxt_service_instance_id;
	}

	public String getService_instance_unit() {
		return service_instance_unit;
	}

	public void setService_instance_unit(String service_instance_unit) {
		this.service_instance_unit = service_instance_unit;
	}

	public String getService_instance_service_definition() {
		return service_instance_service_definition;
	}

	public void setService_instance_service_definition(String service_instance_service_definition) {
		this.service_instance_service_definition = service_instance_service_definition;
	}

	public String getService_instance_service_num() {
		return service_instance_service_num;
	}

	public void setService_instance_service_num(String service_instance_service_num) {
		this.service_instance_service_num = service_instance_service_num;
	}

	public String getService_instance_owner_name() {
		return service_instance_owner_name;
	}

	public void setService_instance_owner_name(String service_instance_owner_name) {
		this.service_instance_owner_name = service_instance_owner_name;
	}

	public String getService_instance_owner_sex() {
		return service_instance_owner_sex;
	}

	public void setService_instance_owner_sex(String service_instance_owner_sex) {
		this.service_instance_owner_sex = service_instance_owner_sex;
	}

	public String getService_instance_owner_phone() {
		return service_instance_owner_phone;
	}

	public void setService_instance_owner_phone(String service_instance_owner_phone) {
		this.service_instance_owner_phone = service_instance_owner_phone;
	}

	public String getService_instance_handle_date() {
		return service_instance_handle_date;
	}

	public void setService_instance_handle_date(String service_instance_handle_date) {
		this.service_instance_handle_date = service_instance_handle_date;
	}

	public String getService_instance_if_return() {
		return service_instance_if_return;
	}

	public void setService_instance_if_return(String service_instance_if_return) {
		this.service_instance_if_return = service_instance_if_return;
	}

	public String getService_instance_gmt_create() {
		return service_instance_gmt_create;
	}

	public void setService_instance_gmt_create(String service_instance_gmt_create) {
		this.service_instance_gmt_create = service_instance_gmt_create;
	}

	public String getService_instance_gmt_modified() {
		return service_instance_gmt_modified;
	}

	public void setService_instance_gmt_modified(String service_instance_gmt_modified) {
		this.service_instance_gmt_modified = service_instance_gmt_modified;
	}
}
