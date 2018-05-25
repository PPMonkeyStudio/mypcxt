package com.pphgzs.domain.DO;

public class pypcxt_answer_choice {
	private String pypcxt_answer_choice_id;
	private String answer_choice_pypcxt_service_instance;
	private String answer_choice_option;
	private String answer_choice_question;
	private String answer_choice_gmt_create;
	private String answer_choice_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_answer_choice [\npypcxt_answer_choice_id=" + pypcxt_answer_choice_id
				+ ",\nanswer_choice_pypcxt_service_instance=" + answer_choice_pypcxt_service_instance
				+ ",\nanswer_choice_option=" + answer_choice_option + ",\nanswer_choice_question="
				+ answer_choice_question + ",\nanswer_choice_gmt_create=" + answer_choice_gmt_create
				+ ",\nanswer_choice_gmt_modified=" + answer_choice_gmt_modified + "\n]";
	}

	public String getPypcxt_answer_choice_id() {
		return pypcxt_answer_choice_id;
	}

	public void setPypcxt_answer_choice_id(String pypcxt_answer_choice_id) {
		this.pypcxt_answer_choice_id = pypcxt_answer_choice_id;
	}

	public String getAnswer_choice_pypcxt_service_instance() {
		return answer_choice_pypcxt_service_instance;
	}

	public void setAnswer_choice_pypcxt_service_instance(String answer_choice_pypcxt_service_instance) {
		this.answer_choice_pypcxt_service_instance = answer_choice_pypcxt_service_instance;
	}

	public String getAnswer_choice_option() {
		return answer_choice_option;
	}

	public void setAnswer_choice_option(String answer_choice_option) {
		this.answer_choice_option = answer_choice_option;
	}

	public String getAnswer_choice_question() {
		return answer_choice_question;
	}

	public void setAnswer_choice_question(String answer_choice_question) {
		this.answer_choice_question = answer_choice_question;
	}

	public String getAnswer_choice_gmt_create() {
		return answer_choice_gmt_create;
	}

	public void setAnswer_choice_gmt_create(String answer_choice_gmt_create) {
		this.answer_choice_gmt_create = answer_choice_gmt_create;
	}

	public String getAnswer_choice_gmt_modified() {
		return answer_choice_gmt_modified;
	}

	public void setAnswer_choice_gmt_modified(String answer_choice_gmt_modified) {
		this.answer_choice_gmt_modified = answer_choice_gmt_modified;
	}
}
