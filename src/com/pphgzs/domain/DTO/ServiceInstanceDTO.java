package com.pphgzs.domain.DTO;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_service_client;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_service_instance;
import com.pphgzs.domain.DO.mypcxt_unit;

public class ServiceInstanceDTO {

	private mypcxt_service_instance serviceInstance;

	private mypcxt_service_definition serviceDefinition;

	private mypcxt_unit unit;

	private List<mypcxt_service_client> serviceClientList;

	@Override
	public String toString() {
		return "ServiceInstanceDTO 【\nserviceInstance=" + serviceInstance + ", \nserviceDefinition=" + serviceDefinition
				+ ", \nunit=" + unit + ", \nserviceClientList=" + serviceClientList + "\n】";
	}

	public mypcxt_unit getUnit() {
		return unit;
	}

	public void setUnit(mypcxt_unit unit) {
		this.unit = unit;
	}

	public mypcxt_service_instance getServiceInstance() {
		return serviceInstance;
	}

	public void setServiceInstance(mypcxt_service_instance serviceInstance) {
		this.serviceInstance = serviceInstance;
	}

	public mypcxt_service_definition getServiceDefinition() {
		return serviceDefinition;
	}

	public void setServiceDefinition(mypcxt_service_definition serviceDefinition) {
		this.serviceDefinition = serviceDefinition;
	}

	public List<mypcxt_service_client> getServiceClientList() {
		return serviceClientList;
	}

	public void setServiceClientList(List<mypcxt_service_client> serviceClientList) {
		this.serviceClientList = serviceClientList;
	}

}
