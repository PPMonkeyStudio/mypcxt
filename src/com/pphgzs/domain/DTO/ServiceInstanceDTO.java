package com.pphgzs.domain.DTO;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_service_client;
import com.pphgzs.domain.DO.mypcxt_service_instance;

public class ServiceInstanceDTO {

	private mypcxt_service_instance serviceInstance;

	private ServiceDefinitionDTO serviceDefinitionDTO;

	private List<mypcxt_service_client> serviceClientList;

	@Override
	public String toString() {
		return "ServiceInstanceDTO 【\nserviceInstance=" + serviceInstance + ", \nserviceDefinitionDTO="
				+ serviceDefinitionDTO + ", \nserviceClientList=" + serviceClientList + "\n】";
	}

	public mypcxt_service_instance getServiceInstance() {
		return serviceInstance;
	}

	public void setServiceInstance(mypcxt_service_instance serviceInstance) {
		this.serviceInstance = serviceInstance;
	}

	public ServiceDefinitionDTO getServiceDefinitionDTO() {
		return serviceDefinitionDTO;
	}

	public void setServiceDefinitionDTO(ServiceDefinitionDTO serviceDefinitionDTO) {
		this.serviceDefinitionDTO = serviceDefinitionDTO;
	}

	public List<mypcxt_service_client> getServiceClientList() {
		return serviceClientList;
	}

	public void setServiceClientList(List<mypcxt_service_client> serviceClientList) {
		this.serviceClientList = serviceClientList;
	}

}
