package com.pphgzs.action;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.opensymphony.xwork2.ActionSupport;
import com.pphgzs.domain.DO.mypcxt_user;
import com.pphgzs.domain.VO.UserVO;
import com.pphgzs.service.UserService;

@SuppressWarnings("serial")
public class UserAction extends ActionSupport implements ServletResponseAware, ServletRequestAware {

	private UserService userService;
	private HttpServletResponse http_response;
	private HttpServletRequest http_request;

	/* 
	 * 
	 */
	private mypcxt_user user;

	/*
	 * 
	 */
	public void getUserVO() throws IOException {

		UserVO userVO = new UserVO();

		userVO = userService.getUserVO();

		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(userVO));

	}

	public void getUserList() throws IOException {

		List<mypcxt_user> userList = new ArrayList<mypcxt_user>();

		userList = userService.getUserList();

		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(userList));

	}

	public void addUser() throws IOException {

		if (userService.saveUser(user)) {
			http_response.setContentType("text/html;charset=utf-8");
			http_response.getWriter().write("1");
		} else {
			http_response.setContentType("text/html;charset=utf-8");
			http_response.getWriter().write("-1");
		}

	}

	public void deleteUser() throws IOException {
		userService.deleteUser(user);
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write("1");

	}

	public void updateUser() throws IOException {
		userService.updateUser(user);
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

	public UserService getUserService() {
		return userService;
	}

	public void setUserService(UserService userService) {
		this.userService = userService;
	}

	public mypcxt_user getUser() {
		return user;
	}

	public void setUser(mypcxt_user user) {
		this.user = user;
	}

	/*
	 * 
	 */
}
