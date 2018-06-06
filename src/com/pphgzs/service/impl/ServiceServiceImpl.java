package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.ServiceDao;
import com.pphgzs.dao.UnitDao;
import com.pphgzs.dao.UserDao;
import com.pphgzs.domain.DO.mypcxt_service_client;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_service_distribution;
import com.pphgzs.domain.DO.mypcxt_service_instance;
import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.DO.mypcxt_user;
import com.pphgzs.domain.DTO.ServiceDefinitionDTO;
import com.pphgzs.domain.DTO.ServiceDistributionDTO;
import com.pphgzs.domain.DTO.ServiceInstanceDTO;
import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.domain.VO.ServiceDistributionVO;
import com.pphgzs.domain.VO.ServiceInstanceVO;
import com.pphgzs.service.ServiceService;

public class ServiceServiceImpl implements ServiceService {

	private ServiceDao serviceDao;
	private UnitDao unitDao;
	private UserDao userDao;

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

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
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
			serviceDefinitionDTOList.add(
					getServiceDefinitionDTO_byServiceDefinitionID(serviceDefinition.getMypcxt_service_definition_id()));
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
		// 根据实例查询实例DTO
		for (mypcxt_service_instance serviceInstance : serviceInstanceList) {
			ServiceInstanceDTO serviceInstanceDTO = getServiceInstanceDTO_byServiceInstanceID(
					serviceInstance.getMypcxt_service_instance_id());
			serviceInstanceDTOList.add(serviceInstanceDTO);
		}
		serviceInstanceVO.setServiceInstanceDTOList(serviceInstanceDTOList);
		serviceInstanceVO.setTotalRecords(serviceDao.getServiceInstanceTotalRecords());
		return serviceInstanceVO;
	}

	@Override
	public ServiceDistributionVO getServiceDistributionVO() {
		ServiceDistributionVO serviceDistributionVO = new ServiceDistributionVO();
		List<ServiceDistributionDTO> serviceDistributionDTOList = new ArrayList<ServiceDistributionDTO>();
		List<mypcxt_service_distribution> serviceDistributionList = serviceDao.listServiceDistributionAll();
		for (mypcxt_service_distribution serviceDistribution : serviceDistributionList) {
			ServiceDistributionDTO serviceDistributionDTO = getServiceDistributionDTO_byServiceDistributionID(
					serviceDistribution.getMypcxt_service_distribution_id());
			serviceDistributionDTOList.add(serviceDistributionDTO);
		}
		serviceDistributionVO.setServiceDistributionDTOList(serviceDistributionDTOList);
		serviceDistributionVO.setTotalRecords(serviceDao.getServiceDistributionTotalRecords());
		return serviceDistributionVO;
	}

	@Override
	public ServiceDefinitionDTO getServiceDefinitionDTO_byServiceDefinitionID(String serviceDefinitionID) {
		ServiceDefinitionDTO serviceDefinitionDTO = new ServiceDefinitionDTO();
		//
		mypcxt_service_definition serviceDefinition = serviceDao.getServiceDefinitionByID(serviceDefinitionID);
		serviceDefinitionDTO.setServiceDefinition(serviceDefinition);
		//
		mypcxt_unit unit = unitDao.getUnitByUnitID(serviceDefinition.getService_definition_unit());
		serviceDefinitionDTO.setUnit(unit);
		//
		return serviceDefinitionDTO;
	}

	@Override
	public ServiceInstanceDTO getServiceInstanceDTO_byServiceInstanceID(String serviceInstanceID) {
		ServiceInstanceDTO serviceInstanceDTO = new ServiceInstanceDTO();
		// 根据ID获取实例
		mypcxt_service_instance serviceInstance = serviceDao.getServiceInstanceByID(serviceInstanceID);
		serviceInstanceDTO.setServiceInstance(serviceInstance);
		// 实例中的定义DTO
		ServiceDefinitionDTO serviceDefinitionDTO = getServiceDefinitionDTO_byServiceDefinitionID(
				serviceInstanceDTO.getServiceInstance().getService_instance_service_definition());
		serviceInstanceDTO.setServiceDefinitionDTO(serviceDefinitionDTO);
		// 实例的当事人列表
		List<mypcxt_service_client> serviceClientList = serviceDao
				.listServiceClientByInstance(serviceInstance.getMypcxt_service_instance_id());
		serviceInstanceDTO.setServiceClientList(serviceClientList);
		//
		return serviceInstanceDTO;
	}

	@Override
	public ServiceDistributionDTO getServiceDistributionDTO_byServiceDistributionID(String serviceDistributionID) {
		ServiceDistributionDTO serviceDistributionDTO = new ServiceDistributionDTO();
		// 分配
		mypcxt_service_distribution serviceDistribution = serviceDao.getServiceDistributionByID(serviceDistributionID);
		serviceDistributionDTO.setServiceDistribution(serviceDistribution);
		// 分配中的测评员
		mypcxt_user user = userDao.getUserByUserID(serviceDistribution.getService_distribution_judge());
		serviceDistributionDTO.setUser(user);
		// 分配中的业务实例
		ServiceInstanceDTO serviceInstanceDTO = getServiceInstanceDTO_byServiceInstanceID(
				serviceDistribution.getService_distribution_service_instance());
		serviceDistributionDTO.setServiceInstanceDTO(serviceInstanceDTO);
		//
		return serviceDistributionDTO;
	}

}
