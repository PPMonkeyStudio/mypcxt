package com.pphgzs.service;

import java.util.List;

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

	/**
	 * 
	 * @param serviceDefinitionID
	 * @return
	 */
	public ServiceDefinitionDTO getServiceDefinitionDTO_byServiceDefinitionID(String serviceDefinitionID);

	public ServiceInstanceDTO getServiceInstanceDTO_byServiceInstanceID(String serviceInstanceID);

	public ServiceDistributionDTO getServiceDistributionDTO_byServiceDistributionID(String serviceDistributionID);

	public List<ServiceDefinitionDTO> listServiceDefinitionDTO_all();
}
