package com.pphgzs.domain.DO;

public class pypcxt_question {
	private String pypcxt_question_id;
	private String question_describe;
	private String question_type;
	private String question_service_definition;
	private String question_sort;
	private String question_father_question;
	private String question_gmt_create;
	private String question_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_question [\npypcxt_question_id=" + pypcxt_question_id + ",\nquestion_describe="
				+ question_describe + ",\nquestion_type=" + question_type + ",\nquestion_service_definition="
				+ question_service_definition + ",\nquestion_sort=" + question_sort + ",\nquestion_father_question="
				+ question_father_question + ",\nquestion_gmt_create=" + question_gmt_create
				+ ",\nquestion_gmt_modified=" + question_gmt_modified + "\n]";
	}

	public String getPypcxt_question_id() {
		return pypcxt_question_id;
	}

	public void setPypcxt_question_id(String pypcxt_question_id) {
		this.pypcxt_question_id = pypcxt_question_id;
	}

	public String getQuestion_describe() {
		return question_describe;
	}

	public void setQuestion_describe(String question_describe) {
		this.question_describe = question_describe;
	}

	public String getQuestion_type() {
		return question_type;
	}

	public void setQuestion_type(String question_type) {
		this.question_type = question_type;
	}

	public String getQuestion_service_definition() {
		return question_service_definition;
	}

	public void setQuestion_service_definition(String question_service_definition) {
		this.question_service_definition = question_service_definition;
	}

	public String getQuestion_sort() {
		return question_sort;
	}

	public void setQuestion_sort(String question_sort) {
		this.question_sort = question_sort;
	}

	public String getQuestion_father_question() {
		return question_father_question;
	}

	public void setQuestion_father_question(String question_father_question) {
		this.question_father_question = question_father_question;
	}

	public String getQuestion_gmt_create() {
		return question_gmt_create;
	}

	public void setQuestion_gmt_create(String question_gmt_create) {
		this.question_gmt_create = question_gmt_create;
	}

	public String getQuestion_gmt_modified() {
		return question_gmt_modified;
	}

	public void setQuestion_gmt_modified(String question_gmt_modified) {
		this.question_gmt_modified = question_gmt_modified;
	}
}