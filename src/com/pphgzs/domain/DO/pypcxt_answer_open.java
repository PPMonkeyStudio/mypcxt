package com.pphgzs.domain.DO;

public class pypcxt_answer_open {
	private String pypcxt_answer_open_id;
	private String answer_open_pypcxt_service_instance;
	private String answer_open_content;
	private String answer_open_question;
	private String answer_open_gmt_create;
	private String answer_open_gmt_modified;

	@Override
	public String toString() {
		return "pypcxt_answer_open [\npypcxt_answer_open_id=" + pypcxt_answer_open_id
				+ ",\nanswer_open_pypcxt_service_instance=" + answer_open_pypcxt_service_instance
				+ ",\nanswer_open_content=" + answer_open_content + ",\nanswer_open_question=" + answer_open_question
				+ ",\nanswer_open_gmt_create=" + answer_open_gmt_create + ",\nanswer_open_gmt_modified="
				+ answer_open_gmt_modified + "\n]";
	}

	public String getPypcxt_answer_open_id() {
		return pypcxt_answer_open_id;
	}

	public void setPypcxt_answer_open_id(String pypcxt_answer_open_id) {
		this.pypcxt_answer_open_id = pypcxt_answer_open_id;
	}

	public String getAnswer_open_pypcxt_service_instance() {
		return answer_open_pypcxt_service_instance;
	}

	public void setAnswer_open_pypcxt_service_instance(String answer_open_pypcxt_service_instance) {
		this.answer_open_pypcxt_service_instance = answer_open_pypcxt_service_instance;
	}

	public String getAnswer_open_content() {
		return answer_open_content;
	}

	public void setAnswer_open_content(String answer_open_content) {
		this.answer_open_content = answer_open_content;
	}

	public String getAnswer_open_question() {
		return answer_open_question;
	}

	public void setAnswer_open_question(String answer_open_question) {
		this.answer_open_question = answer_open_question;
	}

	public String getAnswer_open_gmt_create() {
		return answer_open_gmt_create;
	}

	public void setAnswer_open_gmt_create(String answer_open_gmt_create) {
		this.answer_open_gmt_create = answer_open_gmt_create;
	}

	public String getAnswer_open_gmt_modified() {
		return answer_open_gmt_modified;
	}

	public void setAnswer_open_gmt_modified(String answer_open_gmt_modified) {
		this.answer_open_gmt_modified = answer_open_gmt_modified;
	}
}
