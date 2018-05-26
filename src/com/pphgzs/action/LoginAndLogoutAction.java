package com.pphgzs.action;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;

import com.opensymphony.xwork2.ActionSupport;
import com.pphgzs.service.LoginAndLogoutService;

@SuppressWarnings("serial")
public class LoginAndLogoutAction extends ActionSupport implements ServletResponseAware, ServletRequestAware {

	private LoginAndLogoutService loginAndLogoutService;
	private HttpServletResponse http_response;
	private HttpServletRequest http_request;
	/*
	 * 
	 */

	private String account;
	private String password;

	public void login() {
		System.out.println(account);
		System.out.println(password);
		Object userOrAdmin = loginAndLogoutService.login(account, password);
		System.out.println(userOrAdmin.getClass());
		if (userOrAdmin != null) {
			if (userOrAdmin.getClass().equals("com.pphgzs.domain.DO.pypcxt_user")) {

			} else if (userOrAdmin.getClass().equals("com.pphgzs.domain.DO.pypcxt_admin")) {

			} else {

			}
		}

	}

	public void logout() {

	}

	public void getSession() {
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

	public LoginAndLogoutService getLoginAndLogoutService() {
		return loginAndLogoutService;
	}

	public void setLoginAndLogoutService(LoginAndLogoutService loginAndLogoutService) {
		this.loginAndLogoutService = loginAndLogoutService;
	}

	public String getAccount() {
		return account;
	}

	public void setAccount(String account) {
		this.account = account;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/*
	 * 
	 */
}
