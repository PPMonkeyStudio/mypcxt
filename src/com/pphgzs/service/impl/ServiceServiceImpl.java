package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.ServiceDao;
import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.service.ServiceService;

public class ServiceServiceImpl implements ServiceService {

	private ServiceDao serviceDao;
	private UnitDao unitDao;

	public ServiceDao getServiceDao() {
		return serviceDao;
	}

	public void setServiceDao(ServiceDao serviceDao) {
		this.serviceDao = serviceDao;
	}
	/*
	 * 
	 * 
	 */

	public UnitDao getUnitDao() {
		return unitDao;
	}

	public void setUnitDao(UnitDao unitDao) {
		this.unitDao = unitDao;
	}

	@Override
	public ServiceDefinitionVO getServiceDefinitionVO() {

		ServiceDefinitionVO serviceDefinitionVO = new ServiceDefinitionVO();
		ServiceDefinitionDTO serviceDefinitionDTO;
		List<ServiceDefinitionDTO> serviceDefinitionDTOList = new ArrayList<ServiceDefinitionDTO>();
		List<mypcxt_service_definition> serviceDefinitionList = serviceDao.listServiceDefinitionAll();

		for (mypcxt_service_definition serviceDefinition : serviceDefinitionList) {
			serviceDefinitionDTO = new ServiceDefinitionDTO();
			serviceDefinitionDTO.setServiceDefinition(serviceDefinition);
			serviceDefinitionDTO.setUnit(unitDao.getUnitByUnitID(serviceDefinition.getService_definition_unit()));
			serviceDefinitionDTOList.add(serviceDefinitionDTO);
		}

		serviceDefinitionVO.setServiceDefinitionDTOList(serviceDefinitionDTOList);
		serviceDefinitionVO.setTotalRecords(serviceDao.getServiceDefinitionTotalRecords());

		return serviceDefinitionVO;
	}

}
