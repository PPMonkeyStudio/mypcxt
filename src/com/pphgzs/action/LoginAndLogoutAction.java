package com.pphgzs.action;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.struts2.interceptor.ServletRequestAware;
import org.apache.struts2.interceptor.ServletResponseAware;
import org.hibernate.mapping.Map;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.opensymphony.xwork2.ActionContext;
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

	public void login() throws IOException {
		http_response.setContentType("text/html;charset=utf-8");
		/*
		 * 
		 */
		Object userOrAdmin = loginAndLogoutService.login(account, password);
		if (userOrAdmin != null) {
			if (userOrAdmin.getClass().toString().equals("class com.pphgzs.domain.DO.mypcxt_user")) {
				/*
				 * 用户权限
				 */
				ActionContext.getContext().getSession().remove("currentUser.type");
				ActionContext.getContext().getSession().put("currentUser.type", "user");
				ActionContext.getContext().getSession().put("currentUser.pypcxt_user", userOrAdmin);
				http_response.getWriter().write("1");
			} else if (userOrAdmin.getClass().toString().equals("class com.pphgzs.domain.DO.mypcxt_admin")) {
				/*
				 * 管理员权限
				 */
				ActionContext.getContext().getSession().remove("currentUser.type");
				ActionContext.getContext().getSession().put("currentUser.type", "admin");
				ActionContext.getContext().getSession().put("currentUser.pypcxt_admin", userOrAdmin);
				http_response.getWriter().write("2");
			} else {
				http_response.getWriter().write("-1");
			}
		} else {
			http_response.getWriter().write("-1");
		}
		/*
		 * 
		 */
	}

	public void logout() throws IOException {
		http_response.setContentType("text/html;charset=utf-8");
		if(ActionContext.getContext().getSession().get("currentUser.type")!=null && ActionContext.getContext().getSession().get("currentUser.pypcxt_user")!=null){
			ActionContext.getContext().getSession().remove("currentUser.type");
			ActionContext.getContext().getSession().remove("currentUser.pypcxt_user");
			http_response.getWriter().write("1");
		}else if(ActionContext.getContext().getSession().get("currentUser.type")!=null && ActionContext.getContext().getSession().get("currentUser.pypcxt_admin")!=null){
			ActionContext.getContext().getSession().remove("currentUser.type");
			ActionContext.getContext().getSession().remove("currentUser.pypcxt_admin");
			http_response.getWriter().write("2");
		}
	}

	public void getSession() {
		http_response.setContentType("text/html;charset=utf-8");
		/*
		 * 
		 */

		/*
		 * 
		 */
	}
     /*
      * 获取当前session信息的currentUser
      */
	public void getCurrentUser() throws IOException{
		Map session = (Map) ActionContext.getContext().getSession();
		GsonBuilder gsonBuilder = new GsonBuilder();
		gsonBuilder.setPrettyPrinting();// 格式化json数据
		Gson gson = gsonBuilder.create();
		http_response.setContentType("text/html;charset=utf-8");
		http_response.getWriter().write(gson.toJson(session));
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
