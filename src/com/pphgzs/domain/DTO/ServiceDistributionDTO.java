package com.pphgzs.domain.DTO;

import com.pphgzs.domain.DO.mypcxt_service_distribution;
import com.pphgzs.domain.DO.mypcxt_user;

public class ServiceDistributionDTO {
	private mypcxt_user user;
	private mypcxt_service_distribution serviceDistribution;
	private ServiceInstanceDTO serviceInstanceDTO;

	public mypcxt_user getUser() {
		return user;
	}

	public void setUser(mypcxt_user user) {
		this.user = user;
	}

	public mypcxt_service_distribution getServiceDistribution() {
		return serviceDistribution;
	}

	public void setServiceDistribution(mypcxt_service_distribution serviceDistribution) {
		this.serviceDistribution = serviceDistribution;
	}

	@Override
	public String toString() {
		return "ServiceDistributionDTO 【\nuser=" + user + ", \nserviceDistribution=" + serviceDistribution
				+ ", \nserviceInstanceDTO=" + serviceInstanceDTO + "\n】";
	}

	public ServiceInstanceDTO getServiceInstanceDTO() {
		return serviceInstanceDTO;
	}

	public void setServiceInstanceDTO(ServiceInstanceDTO serviceInstanceDTO) {
		this.serviceInstanceDTO = serviceInstanceDTO;
	}

}
