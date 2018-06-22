package com.pphgzs.domain.DO;

public class mypcxt_answer_choice {
private String mypcxt_answer_choice_id;
private String answer_choice_mypcxt_service_instance;//所属业务实例
private String answer_choice_option;//所属选择题选项
private String answer_choice_question;//所属问题表
private String answer_choice_gmt_create;
private String answer_choice_gmt_modified;
public String getMypcxt_answer_choice_id() {
	return mypcxt_answer_choice_id;
}
public void setMypcxt_answer_choice_id(String mypcxt_answer_choice_id) {
	this.mypcxt_answer_choice_id = mypcxt_answer_choice_id;
}
public String getAnswer_choice_mypcxt_service_instance() {
	return answer_choice_mypcxt_service_instance;
}
public void setAnswer_choice_mypcxt_service_instance(String answer_choice_mypcxt_service_instance) {
	this.answer_choice_mypcxt_service_instance = answer_choice_mypcxt_service_instance;
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
@Override
public String toString() {
	return "mypcxt_answer_choice [mypcxt_answer_choice_id=" + mypcxt_answer_choice_id
			+ ", answer_choice_mypcxt_service_instance=" + answer_choice_mypcxt_service_instance
			+ ", answer_choice_option=" + answer_choice_option + ", answer_choice_question=" + answer_choice_question
			+ ", answer_choice_gmt_create=" + answer_choice_gmt_create + ", answer_choice_gmt_modified="
			+ answer_choice_gmt_modified + "]";
}

}
