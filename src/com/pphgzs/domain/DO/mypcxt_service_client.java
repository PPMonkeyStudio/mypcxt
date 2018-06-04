package com.pphgzs.domain.DO;

public class mypcxt_service_client {
	private String mypcxt_service_client_id;
	private String service_client_service_instance;
	private String service_client_name;
	private String service_client_sex;
	private String service_client_phone;
	private String service_client_visit;
	private String service_client_gmt_create;
	private String service_client_gmt_modified;

	@Override
	public String toString() {
		return "mypcxt_service_client 【\nmypcxt_service_client_id=" + mypcxt_service_client_id
				+ ", \nservice_client_service_instance=" + service_client_service_instance + ", \nservice_client_name="
				+ service_client_name + ", \nservice_client_sex=" + service_client_sex + ", \nservice_client_phone="
				+ service_client_phone + ", \nservice_client_visit=" + service_client_visit
				+ ", \nservice_client_gmt_create=" + service_client_gmt_create + ", \nservice_client_gmt_modified="
				+ service_client_gmt_modified + "\n】";
	}

	public String getMypcxt_service_client_id() {
		return mypcxt_service_client_id;
	}

	public void setMypcxt_service_client_id(String mypcxt_service_client_id) {
		this.mypcxt_service_client_id = mypcxt_service_client_id;
	}

	public String getService_client_service_instance() {
		return service_client_service_instance;
	}

	public void setService_client_service_instance(String service_client_service_instance) {
		this.service_client_service_instance = service_client_service_instance;
	}

	public String getService_client_name() {
		return service_client_name;
	}

	public void setService_client_name(String service_client_name) {
		this.service_client_name = service_client_name;
	}

	public String getService_client_sex() {
		return service_client_sex;
	}

	public void setService_client_sex(String service_client_sex) {
		this.service_client_sex = service_client_sex;
	}

	public String getService_client_phone() {
		return service_client_phone;
	}

	public void setService_client_phone(String service_client_phone) {
		this.service_client_phone = service_client_phone;
	}

	public String getService_client_visit() {
		return service_client_visit;
	}

	public void setService_client_visit(String service_client_visit) {
		this.service_client_visit = service_client_visit;
	}

	public String getService_client_gmt_create() {
		return service_client_gmt_create;
	}

	public void setService_client_gmt_create(String service_client_gmt_create) {
		this.service_client_gmt_create = service_client_gmt_create;
	}

	public String getService_client_gmt_modified() {
		return service_client_gmt_modified;
	}

	public void setService_client_gmt_modified(String service_client_gmt_modified) {
		this.service_client_gmt_modified = service_client_gmt_modified;
	}

}
