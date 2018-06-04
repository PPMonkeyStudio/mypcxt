package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_service_client;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.DO.mypcxt_service_instance;

public interface ServiceDao {
	public List<mypcxt_service_definition> listServiceDefinitionAll();

	public List<mypcxt_service_instance> listServiceInstanceAll();

	public List<mypcxt_service_client> listServiceClientByInstance(String instanceID);

	public int getServiceDefinitionTotalRecords();

	public int getServiceInstanceTotalRecords();

	public mypcxt_service_definition getServiceDefinitionByID(String serviceDefinitionID);

}
