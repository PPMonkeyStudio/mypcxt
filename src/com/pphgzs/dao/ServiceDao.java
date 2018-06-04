package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_service_definition;

public interface ServiceDao {
	public List<mypcxt_service_definition> listServiceDefinitionAll();

	public int getServiceDefinitionTotalRecords();

}
