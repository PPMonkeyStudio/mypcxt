package com.pphgzs.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.opensymphony.xwork2.ActionSupport;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.domain.VO.ServiceDefinitionVO;
import com.pphgzs.domain.VO.ServiceDistributionVO;
import com.pphgzs.domain.VO.ServiceInstanceVO;
import com.pphgzs.service.ServiceService;
import com.pphgzs.thread.ServiceDistributionThread;

@SuppressWarnings("serial")
public class ServiceAction extends ActionSupport implements ServletResponseAware, ServletRequestAware {

	private ServiceService serviceService;
	private HttpServletResponse http_response;
	private HttpServletRequest http_request;
    private mypcxt_service_definition ServiceDefinition;
	/* 
	 * 
	 */
	ServiceDefinitionVO serviceDefinitionVO;
	ServiceInstanceVO serviceInstanceVO;
	ServiceDistributionVO serviceDistributionVO;
    
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

	/**
	 * 查询业务分配的VO类
	 * 
	 * @throws IOException
	 */
	public void getServiceDistributionVO() throws IOException {
		serviceDistributionVO = serviceService.getServiceDistributionVO();
		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(serviceDistributionVO));
	}

	public void getServiceDistributionThreadState() throws IOException {
		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(ServiceDistributionThread.getServiceDistributionThreadState()));
	}

	public void startServiceDistributionThread() throws IOException {
		ServiceDistributionThread.startServiceDistributionThread();
		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson("1"));
	}

	public void stopServiceDistributionThread() throws IOException {
		ServiceDistributionThread.stopServiceDistributionThread();
		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson("1"));
	}
	/*
	 * 创建业务定义
	 */
	public void addServiceDefinition() throws IOException{
		if(serviceService.addServiceDefinition(ServiceDefinition)){
			http_response.setContentType("text/html;charset=utf-8");
			http_response.getWriter().write("1");
		}else{
			http_response.setContentType("text/html;charset=utf-8");
			http_response.getWriter().write("-1");
		}
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

	public void setServiceInstanceVO(ServiceInstanceVO serviceInstanceVO) {
		this.serviceInstanceVO = serviceInstanceVO;
	}

	public void setServiceDistributionVO(ServiceDistributionVO serviceDistributionVO) {
		this.serviceDistributionVO = serviceDistributionVO;
	}

	public mypcxt_service_definition getServiceDefinition() {
		return ServiceDefinition;
	}

	public void setServiceDefinition(mypcxt_service_definition serviceDefinition) {
		ServiceDefinition = serviceDefinition;
	}

	/*
	 * 
	 */
}
