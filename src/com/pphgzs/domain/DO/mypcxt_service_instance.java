package com.pphgzs.domain.DO;

public class mypcxt_service_instance {
	private String mypcxt_service_instance_id;

	private String service_instance_service_definition;

	private String service_instance_nid;

	private String service_instance_date;

	private String service_instance_distribution;

	private String service_instance_gmt_create;

	private String service_instance_gmt_modified;

	@Override
	public String toString() {
		return "mypcxt_service_instance 【\nmypcxt_service_instance_id=" + mypcxt_service_instance_id
				+ ", \nservice_instance_service_definition=" + service_instance_service_definition
				+ ", \nservice_instance_nid=" + service_instance_nid + ", \nservice_instance_date="
				+ service_instance_date + ", \nservice_instance_distribution=" + service_instance_distribution
				+ ", \nservice_instance_gmt_create=" + service_instance_gmt_create
				+ ", \nservice_instance_gmt_modified=" + service_instance_gmt_modified + "\n】";
	}

	public String getService_instance_nid() {
		return service_instance_nid;
	}

	public void setService_instance_nid(String service_instance_nid) {
		this.service_instance_nid = service_instance_nid;
	}

	public String getMypcxt_service_instance_id() {
		return mypcxt_service_instance_id;
	}

	public void setMypcxt_service_instance_id(String mypcxt_service_instance_id) {
		this.mypcxt_service_instance_id = mypcxt_service_instance_id;
	}

	public String getService_instance_service_definition() {
		return service_instance_service_definition;
	}

	public void setService_instance_service_definition(String service_instance_service_definition) {
		this.service_instance_service_definition = service_instance_service_definition;
	}

	public String getService_instance_date() {
		return service_instance_date;
	}

	public void setService_instance_date(String service_instance_date) {
		this.service_instance_date = service_instance_date;
	}

	public String getService_instance_distribution() {
		return service_instance_distribution;
	}

	public void setService_instance_distribution(String service_instance_distribution) {
		this.service_instance_distribution = service_instance_distribution;
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
