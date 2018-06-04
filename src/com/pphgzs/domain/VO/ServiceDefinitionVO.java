package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DTO.ServiceDefinitionDTO;

public class ServiceDefinitionVO {

	private List<ServiceDefinitionDTO> serviceDefinitionDTOList;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "ServiceDefinitionVO 【\nserviceDefinitionDTOList=" + serviceDefinitionDTOList + ", \ntotalRecords="
				+ totalRecords + "\n】";
	}

	public List<ServiceDefinitionDTO> getServiceDefinitionDTOList() {
		return serviceDefinitionDTOList;
	}

	public void setServiceDefinitionDTOList(List<ServiceDefinitionDTO> serviceDefinitionDTOList) {
		this.serviceDefinitionDTOList = serviceDefinitionDTOList;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
