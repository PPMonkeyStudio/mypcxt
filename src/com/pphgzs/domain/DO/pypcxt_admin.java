package com.pphgzs.domain.DO;

public class pypcxt_admin {
	private String pypcxt_admin_id;
	private String admin_account;
	private String admin_password;
	private String admin_gmt_create;
	private String admin_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_admin [\npypcxt_admin_id=" + pypcxt_admin_id + ",\nadmin_account=" + admin_account
				+ ",\nadmin_password=" + admin_password + ",\nadmin_gmt_create=" + admin_gmt_create
				+ ",\nadmin_gmt_modified=" + admin_gmt_modified + "\n]";
	}

	public String getPypcxt_admin_id() {
		return pypcxt_admin_id;
	}

	public void setPypcxt_admin_id(String pypcxt_admin_id) {
		this.pypcxt_admin_id = pypcxt_admin_id;
	}

	public String getAdmin_account() {
		return admin_account;
	}

	public void setAdmin_account(String admin_account) {
		this.admin_account = admin_account;
	}

	public String getAdmin_password() {
		return admin_password;
	}

	public void setAdmin_password(String admin_password) {
		this.admin_password = admin_password;
	}

	public String getAdmin_gmt_create() {
		return admin_gmt_create;
	}

	public void setAdmin_gmt_create(String admin_gmt_create) {
		this.admin_gmt_create = admin_gmt_create;
	}

	public String getAdmin_gmt_modified() {
		return admin_gmt_modified;
	}

	public void setAdmin_gmt_modified(String admin_gmt_modified) {
		this.admin_gmt_modified = admin_gmt_modified;
	}
}
