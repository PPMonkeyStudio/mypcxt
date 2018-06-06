package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DTO.ServiceDistributionDTO;

public class ServiceDistributionVO {

	private List<ServiceDistributionDTO> serviceDistributionDTOList;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "ServiceDistributionVO 【\nserviceDistributionDTOList=" + serviceDistributionDTOList + ", \ntotalRecords="
				+ totalRecords + "\n】";
	}

	public List<ServiceDistributionDTO> getServiceDistributionDTOList() {
		return serviceDistributionDTOList;
	}

	public void setServiceDistributionDTOList(List<ServiceDistributionDTO> serviceDistributionDTOList) {
		this.serviceDistributionDTOList = serviceDistributionDTOList;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
