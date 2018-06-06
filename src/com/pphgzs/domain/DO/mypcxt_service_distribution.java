package com.pphgzs.domain.DO;

public class mypcxt_service_distribution {
	private String mypcxt_service_distribution_id;
	private String service_distribution_judge;
	private String service_distribution_service_instance;
	private String service_distribution_gmt_create;
	private String service_distribution_gmt_modified;

	@Override
	public String toString() {
		return "mypcxt_service_distribution 【\nmypcxt_service_distribution_id=" + mypcxt_service_distribution_id
				+ ", \nservice_distribution_judge=" + service_distribution_judge
				+ ", \nservice_distribution_service_instance=" + service_distribution_service_instance
				+ ", \nservice_distribution_gmt_create=" + service_distribution_gmt_create
				+ ", \nservice_distribution_gmt_modified=" + service_distribution_gmt_modified + "\n】";
	}

	public String getMypcxt_service_distribution_id() {
		return mypcxt_service_distribution_id;
	}

	public void setMypcxt_service_distribution_id(String mypcxt_service_distribution_id) {
		this.mypcxt_service_distribution_id = mypcxt_service_distribution_id;
	}

	public String getService_distribution_judge() {
		return service_distribution_judge;
	}

	public void setService_distribution_judge(String service_distribution_judge) {
		this.service_distribution_judge = service_distribution_judge;
	}

	public String getService_distribution_service_instance() {
		return service_distribution_service_instance;
	}

	public void setService_distribution_service_instance(String service_distribution_service_instance) {
		this.service_distribution_service_instance = service_distribution_service_instance;
	}

	public String getService_distribution_gmt_create() {
		return service_distribution_gmt_create;
	}

	public void setService_distribution_gmt_create(String service_distribution_gmt_create) {
		this.service_distribution_gmt_create = service_distribution_gmt_create;
	}

	public String getService_distribution_gmt_modified() {
		return service_distribution_gmt_modified;
	}

	public void setService_distribution_gmt_modified(String service_distribution_gmt_modified) {
		this.service_distribution_gmt_modified = service_distribution_gmt_modified;
	}

}
