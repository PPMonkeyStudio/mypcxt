package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.ServiceDao;
import com.pphgzs.dao.UnitDao;
import com.pphgzs.domain.DO.mypcxt_service_client;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_service_instance;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.DTO.ServiceInstanceDTO;
import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.domain.VO.ServiceInstanceVO;
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
		List<ServiceDefinitionDTO> serviceDefinitionDTOList = new ArrayList<ServiceDefinitionDTO>();
		List<mypcxt_service_definition> serviceDefinitionList = serviceDao.listServiceDefinitionAll();

		for (mypcxt_service_definition serviceDefinition : serviceDefinitionList) {
			ServiceDefinitionDTO serviceDefinitionDTO = new ServiceDefinitionDTO();
			serviceDefinitionDTO.setServiceDefinition(serviceDefinition);
			serviceDefinitionDTO.setUnit(unitDao.getUnitByUnitID(serviceDefinition.getService_definition_unit()));
			serviceDefinitionDTOList.add(serviceDefinitionDTO);
		}

		serviceDefinitionVO.setServiceDefinitionDTOList(serviceDefinitionDTOList);
		serviceDefinitionVO.setTotalRecords(serviceDao.getServiceDefinitionTotalRecords());

		return serviceDefinitionVO;
	}

	@Override
	public ServiceInstanceVO getServiceInstanceVO() {

		ServiceInstanceVO serviceInstanceVO = new ServiceInstanceVO();
		List<ServiceInstanceDTO> serviceInstanceDTOList = new ArrayList<ServiceInstanceDTO>();
		List<mypcxt_service_instance> serviceInstanceList = serviceDao.listServiceInstanceAll();
		for (mypcxt_service_instance serviceInstance : serviceInstanceList) {
			ServiceInstanceDTO serviceInstanceDTO = new ServiceInstanceDTO();
			serviceInstanceDTO.setServiceInstance(serviceInstance);
			mypcxt_service_definition serviceDefinition = serviceDao
					.getServiceDefinitionByID(serviceInstance.getService_instance_service_definition());
			serviceInstanceDTO.setServiceDefinition(serviceDefinition);
			serviceInstanceDTO.setUnit(unitDao.getUnitByUnitID(serviceDefinition.getService_definition_unit()));
			List<mypcxt_service_client> serviceClientList = serviceDao
					.listServiceClientByInstance(serviceInstance.getMypcxt_service_instance_id());
			serviceInstanceDTO.setServiceClientList(serviceClientList);
			serviceInstanceDTOList.add(serviceInstanceDTO);
		}

		serviceInstanceVO.setServiceInstanceDTOList(serviceInstanceDTOList);
		serviceInstanceVO.setTotalRecords(serviceDao.getServiceInstanceTotalRecords());

		return serviceInstanceVO;
	}

}
