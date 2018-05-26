package com.pphgzs.dao;

import com.pphgzs.domain.DO.mypcxt_admin;
import com.pphgzs.domain.DO.mypcxt_user;

public interface LoginAndLogoutDao {
	/**
	 * 
	 * @param account
	 * @return
	 */
	public mypcxt_user getUserByAccount(String account);

	public mypcxt_admin getAdminByAccount(String account);
	/*
	 * 
	 */
}
