package com.pphgzs.domain.DO;

public class mypcxt_user {
	private String mypcxt_user_id;
	private String user_account;
	private String user_password;
	private String user_name;
	private String user_Jurisdiction_evaluate;
	private String user_Jurisdiction_statistics;
	private String user_gmt_create;
	private String user_gmt_modified;

	@Override
	public String toString() {
		return "mypcxt_user [\nmypcxt_user_id=" + mypcxt_user_id + ",\nuser_account=" + user_account
				+ ",\nuser_password=" + user_password + ",\nuser_name=" + user_name + ",\nuser_Jurisdiction_evaluate="
				+ user_Jurisdiction_evaluate + ",\nuser_Jurisdiction_statistics=" + user_Jurisdiction_statistics
				+ ",\nuser_gmt_create=" + user_gmt_create + ",\nuser_gmt_modified=" + user_gmt_modified + "\n]";
	}

	public String getMypcxt_user_id() {
		return mypcxt_user_id;
	}

	public void setMypcxt_user_id(String mypcxt_user_id) {
		this.mypcxt_user_id = mypcxt_user_id;
	}

	public String getUser_account() {
		return user_account;
	}

	public void setUser_account(String user_account) {
		this.user_account = user_account;
	}

	public String getUser_password() {
		return user_password;
	}

	public void setUser_password(String user_password) {
		this.user_password = user_password;
	}

	public String getUser_name() {
		return user_name;
	}

	public void setUser_name(String user_name) {
		this.user_name = user_name;
	}

	public String getUser_Jurisdiction_evaluate() {
		return user_Jurisdiction_evaluate;
	}

	public void setUser_Jurisdiction_evaluate(String user_Jurisdiction_evaluate) {
		this.user_Jurisdiction_evaluate = user_Jurisdiction_evaluate;
	}

	public String getUser_Jurisdiction_statistics() {
		return user_Jurisdiction_statistics;
	}

	public void setUser_Jurisdiction_statistics(String user_Jurisdiction_statistics) {
		this.user_Jurisdiction_statistics = user_Jurisdiction_statistics;
	}

	public String getUser_gmt_create() {
		return user_gmt_create;
	}

	public void setUser_gmt_create(String user_gmt_create) {
		this.user_gmt_create = user_gmt_create;
	}

	public String getUser_gmt_modified() {
		return user_gmt_modified;
	}

	public void setUser_gmt_modified(String user_gmt_modified) {
		this.user_gmt_modified = user_gmt_modified;
	}
}
