package com.pphgzs.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.opensymphony.xwork2.ActionSupport;
import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.domain.VO.ServiceInstanceVO;
import com.pphgzs.service.ServiceService;

@SuppressWarnings("serial")
public class ServiceAction extends ActionSupport implements ServletResponseAware, ServletRequestAware {

	private ServiceService serviceService;
	private HttpServletResponse http_response;
	private HttpServletRequest http_request;

	/* 
	 * 
	 */
	ServiceDefinitionVO serviceDefinitionVO;
	ServiceInstanceVO serviceInstanceVO;

	/**
	 * 查询业务定义VO类
	 * 
	 * @throws IOException
	 */
	public void getServiceDefinitionVO() throws IOException {

		serviceDefinitionVO = serviceService.getServiceDefinitionVO();

		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(serviceDefinitionVO));
	}

	/**
	 * 查询业务实例的VO类
	 * 
	 * @throws IOException
	 */
	public void getServiceInstanceVO() throws IOException {

		serviceInstanceVO = serviceService.getServiceInstanceVO();

		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(serviceInstanceVO));
	}

	/*
	 * 
	 */
	@Override
	public void setServletRequest(HttpServletRequest http_request) {
		this.http_request = http_request;
	}

	@Override
	public void setServletResponse(HttpServletResponse http_response) {
		this.http_response = http_response;

	}

	public HttpServletResponse getHttp_response() {
		return http_response;
	}

	public void setHttp_response(HttpServletResponse http_response) {
		this.http_response = http_response;
	}

	public HttpServletRequest getHttp_request() {
		return http_request;
	}

	public void setHttp_request(HttpServletRequest http_request) {
		this.http_request = http_request;
	}

	public ServiceService getServiceService() {
		return serviceService;
	}

	public void setServiceService(ServiceService serviceService) {
		this.serviceService = serviceService;
	}

	public void setServiceDefinitionVO(ServiceDefinitionVO serviceDefinitionVO) {
		this.serviceDefinitionVO = serviceDefinitionVO;
	}

	/*
	 * 
	 */
}
