package com.pphgzs.dao;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_user;

public interface UserDao {

	public List<mypcxt_user> listUserAll();

	public int getUserTotalRecords();

	public void saveUser(mypcxt_user user);

	public void deleteUser(mypcxt_user user);

	public mypcxt_user getUserByUserID(String userID);

	public mypcxt_user getUserByUserName(mypcxt_user user);

	public void updateUser(mypcxt_user user);
}
