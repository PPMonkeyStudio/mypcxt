package com.pphgzs.service;

import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.DTO.ServiceDistributionDTO;
import com.pphgzs.domain.DTO.ServiceInstanceDTO;
import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.domain.VO.ServiceDistributionVO;
import com.pphgzs.domain.VO.ServiceInstanceVO;

public interface ServiceService {
	public ServiceDefinitionVO getServiceDefinitionVO();

	public ServiceInstanceVO getServiceInstanceVO();

	public ServiceDistributionVO getServiceDistributionVO();

	public ServiceDefinitionDTO getServiceDefinitionDTO_byServiceDefinitionID(String serviceDefinitionID);

	public ServiceInstanceDTO getServiceInstanceDTO_byServiceInstanceID(String serviceInstanceID);

	public ServiceDistributionDTO getServiceDistributionDTO_byServiceDistributionID(String serviceDistributionID);
}
