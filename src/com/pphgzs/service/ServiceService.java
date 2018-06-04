package com.pphgzs.service;

import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.domain.VO.ServiceInstanceVO;

public interface ServiceService {
	public ServiceDefinitionVO getServiceDefinitionVO();

	public ServiceInstanceVO getServiceInstanceVO();
}
