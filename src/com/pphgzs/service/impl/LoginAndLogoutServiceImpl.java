package com.pphgzs.service.impl;

import com.pphgzs.dao.LoginAndLogoutDao;
import com.pphgzs.domain.DO.pypcxt_admin;
import com.pphgzs.domain.DO.pypcxt_user;
import com.pphgzs.service.LoginAndLogoutService;

public class LoginAndLogoutServiceImpl implements LoginAndLogoutService {
	private LoginAndLogoutDao loginAndLogoutDao;

	public LoginAndLogoutDao getLoginAndLogoutDao() {
		return loginAndLogoutDao;
	}

	public void setLoginAndLogoutDao(LoginAndLogoutDao loginAndLogoutDao) {
		this.loginAndLogoutDao = loginAndLogoutDao;
	}

	@Override
	public Object login(String account, String password) {
		/*
		 * 查询用户
		 */
		pypcxt_user user = loginAndLogoutDao.getUserByAccount(account);

		if (user == null) {
			/*
			 * 查询管理员
			 */
			pypcxt_admin admin = loginAndLogoutDao.getAdminByAccount(account);

			if (admin == null) {
				return null;
			}
			// 验证管理员密码
			else if (admin.getAdmin_password().equals(password)) {
				return admin;
			}
			// 管理员密码不对
			else {
				return null;
			}
		}
		// 验证用户密码
		else if (user.getUser_password().equals(password)) {
			return user;
		}
		// 用户密码不对
		else {
			return null;
		}

	}

}
