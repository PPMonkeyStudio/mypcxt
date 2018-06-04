package com.pphgzs.domain.DTO;

import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_unit;

public class ServiceDefinitionDTO {
	private mypcxt_service_definition serviceDefinition;
	private mypcxt_unit unit;

	@Override
	public String toString() {
		return "ServiceDefinitionDTO 【\nserviceDefinition=" + serviceDefinition + ", \nunit=" + unit + "\n】";
	}

	public mypcxt_service_definition getServiceDefinition() {
		return serviceDefinition;
	}

	public void setServiceDefinition(mypcxt_service_definition serviceDefinition) {
		this.serviceDefinition = serviceDefinition;
	}

	public mypcxt_unit getUnit() {
		return unit;
	}

	public void setUnit(mypcxt_unit unit) {
		this.unit = unit;
	}

}
