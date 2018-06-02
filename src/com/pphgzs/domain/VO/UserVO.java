package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_user;

public class UserVO {

	private List<mypcxt_user> user_List;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "UserVO 【\nuser_List=" + user_List + ", \ntotalRecords=" + totalRecords + "\n】";
	}

	public List<mypcxt_user> getUser_List() {
		return user_List;
	}

	public void setUser_List(List<mypcxt_user> user_List) {
		this.user_List = user_List;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
