package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DTO.ServiceInstanceDTO;

public class ServiceInstanceVO {

	private List<ServiceInstanceDTO> serviceInstanceDTOList;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "ServiceInstanceVO 【\nserviceInstanceDTOList=" + serviceInstanceDTOList + ", \ntotalRecords="
				+ totalRecords + "\n】";
	}

	public List<ServiceInstanceDTO> getServiceInstanceDTOList() {
		return serviceInstanceDTOList;
	}

	public void setServiceInstanceDTOList(List<ServiceInstanceDTO> serviceInstanceDTOList) {
		this.serviceInstanceDTOList = serviceInstanceDTOList;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
