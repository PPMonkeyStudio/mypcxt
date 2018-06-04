package com.pphgzs.service.impl;

import java.util.ArrayList;
import java.util.List;

import com.pphgzs.dao.UserDao;
import com.pphgzs.domain.DO.mypcxt_user;
import com.pphgzs.domain.VO.UserVO;
import com.pphgzs.service.UserService;
import com.pphgzs.util.TimeUtil;
import com.pphgzs.util.uuidUtil;

public class UserServiceImpl implements UserService {

	private UserDao userDao;

	public UserDao getUserDao() {
		return userDao;
	}

	public void setUserDao(UserDao userDao) {
		this.userDao = userDao;
	}
	/*
	 * 
	 * 
	 */

	@Override
	public UserVO getUserVO() {
		UserVO userVO = new UserVO();
		userVO.setUser_List(userDao.listUserAll());
		userVO.setTotalRecords(userDao.getUserTotalRecords());
		return userVO;
	}

	@Override
	public List<mypcxt_user> getUserList() {
		List<mypcxt_user> userList = new ArrayList<mypcxt_user>();
		userList = userDao.listUserAll();
		return userList;
	}

	@Override
	public boolean saveUser(mypcxt_user user) {
		if (userDao.getUserByUserName(user.getUser_name()) == null) {
			user.setMypcxt_user_id(uuidUtil.getUuid());
			user.setUser_password(user.getUser_account());
			user.setUser_Jurisdiction_evaluate("none");
			user.setUser_Jurisdiction_statistics("none");
			user.setUser_Jurisdiction_review("none");
			String time = TimeUtil.getStringSecond();
			user.setUser_gmt_create(time);
			user.setUser_gmt_modified(time);
			userDao.saveUser(user);
			return true;
		} else {
			return false;
		}
	}

	@Override
	public void deleteUser(mypcxt_user user) {
		userDao.deleteUser(user);
	}

	@Override
	public void updateUser(mypcxt_user newUser) {
		mypcxt_user oldUser = userDao.getUserByUserID(newUser.getMypcxt_user_id());
		oldUser.setUser_name(newUser.getUser_name());
		oldUser.setUser_Jurisdiction_evaluate(newUser.getUser_Jurisdiction_evaluate());
		oldUser.setUser_Jurisdiction_statistics(newUser.getUser_Jurisdiction_statistics());
		oldUser.setUser_Jurisdiction_review(newUser.getUser_Jurisdiction_review());
		oldUser.setUser_gmt_modified(TimeUtil.getStringSecond());
		userDao.updateUser(oldUser);
	}

}
