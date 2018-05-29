package com.pphgzs.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.opensymphony.xwork2.ActionSupport;
import com.pphgzs.domain.DO.mypcxt_unit;
import com.pphgzs.domain.VO.UnitVO;
import com.pphgzs.service.UnitService;

@SuppressWarnings("serial")
public class UnitAction extends ActionSupport implements ServletResponseAware, ServletRequestAware {

	private UnitService unitService;
	private HttpServletResponse http_response;
	private HttpServletRequest http_request;

	/*
	 * 
	 */
	private mypcxt_unit unit;

	/*
	 * 
	 */
	public void getUnitVO() throws IOException {

		UnitVO unitVO = new UnitVO();

		unitVO = unitService.getUnitVO();

		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(unitVO));

	}

	public void addUnit() throws IOException {

		if (unitService.saveUnit(unit)) {
			http_response.setContentType("text/html;charset=utf-8");
			http_response.getWriter().write("1");
		} else {
			http_response.setContentType("text/html;charset=utf-8");
			http_response.getWriter().write("-1");
		}

	}

	public void deleteUnit() throws IOException {
		unitService.deleteUnit(unit);
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write("1");

	}

	public void updateUnit() throws IOException {
		unitService.updateUnit(unit);
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write("1");

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

	public UnitService getUnitService() {
		return unitService;
	}

	public void setUnitService(UnitService unitService) {
		this.unitService = unitService;
	}

	public mypcxt_unit getUnit() {
		return unit;
	}

	public void setUnit(mypcxt_unit unit) {
		this.unit = unit;
	}

	/*
	 * 
	 */
}
