package com.pphgzs.dao;

import com.pphgzs.domain.DO.pypcxt_admin;
import com.pphgzs.domain.DO.pypcxt_user;

public interface LoginAndLogoutDao {
	/**
	 * 
	 * @param account
	 * @return
	 */
	public pypcxt_user getUserByAccount(String account);

	public pypcxt_admin getAdminByAccount(String account);
	/*
	 * 
	 */
}
