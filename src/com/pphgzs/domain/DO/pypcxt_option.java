package com.pphgzs.domain.DO;

public class pypcxt_option {
	private String pypcxt_option_id;
	private String option_describe;
	private String option_question;
	private String option_sort;
	private String option_grade;
	private String option_gmt_create;
	private String option_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_option [\npypcxt_option_id=" + pypcxt_option_id + ",\noption_describe=" + option_describe
				+ ",\noption_question=" + option_question + ",\noption_sort=" + option_sort + ",\noption_grade="
				+ option_grade + ",\noption_gmt_create=" + option_gmt_create + ",\noption_gmt_modified="
				+ option_gmt_modified + "\n]";
	}

	public String getPypcxt_option_id() {
		return pypcxt_option_id;
	}

	public void setPypcxt_option_id(String pypcxt_option_id) {
		this.pypcxt_option_id = pypcxt_option_id;
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

	public String getOption_sort() {
		return option_sort;
	}

	public void setOption_sort(String option_sort) {
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
