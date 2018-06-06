package com.pphgzs.domain.DO;

public class mypcxt_option {
	private String mypcxt_option_id;

	private String option_describe;
	private String option_question;
	private int option_sort;
	private String option_grade;
	private String option_gmt_create;
	private String option_gmt_modified;

	@Override
	public String toString() {
		return "mypcxt_option 【\nmypcxt_option_id=" + mypcxt_option_id + ", \noption_describe=" + option_describe
				+ ", \noption_question=" + option_question + ", \noption_sort=" + option_sort + ", \noption_grade="
				+ option_grade + ", \noption_gmt_create=" + option_gmt_create + ", \noption_gmt_modified="
				+ option_gmt_modified + "\n】";
	}

	public String getMypcxt_option_id() {
		return mypcxt_option_id;
	}

	public void setMypcxt_option_id(String mypcxt_option_id) {
		this.mypcxt_option_id = mypcxt_option_id;
	}

	public String getOption_describe() {
		return option_describe;
	}

	public void setOption_describe(String option_describe) {
		this.option_describe = option_describe;
	}

	public String getOption_question() {
		return option_question;
	}

	public void setOption_question(String option_question) {
		this.option_question = option_question;
	}

	public int getOption_sort() {
		return option_sort;
	}

	public void setOption_sort(int option_sort) {
		this.option_sort = option_sort;
	}

	public String getOption_grade() {
		return option_grade;
	}

	public void setOption_grade(String option_grade) {
		this.option_grade = option_grade;
	}

	public String getOption_gmt_create() {
		return option_gmt_create;
	}

	public void setOption_gmt_create(String option_gmt_create) {
		this.option_gmt_create = option_gmt_create;
	}

	public String getOption_gmt_modified() {
		return option_gmt_modified;
	}

	public void setOption_gmt_modified(String option_gmt_modified) {
		this.option_gmt_modified = option_gmt_modified;
	}

}
