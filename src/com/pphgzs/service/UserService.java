package com.pphgzs.service;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_user;
import com.pphgzs.domain.VO.UserVO;

public interface UserService {

	public UserVO getUserVO();

	public boolean saveUser(mypcxt_user user);

	public void deleteUser(mypcxt_user user);

	public void updateUser(mypcxt_user newUser);

	public List<mypcxt_user> getUserList();

}
