package com.pphgzs.domain.DTO;

import java.util.List;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;

public class QuestionServiceDTO {

	private mypcxt_question question;

	private ServiceDefinitionDTO serviceDefinitionDTO;

	private List<mypcxt_option> optionList;

	@Override
	public String toString() {
		return "QuestionServiceDTO 【\nquestion=" + question + ", \nserviceDefinitionDTO=" + serviceDefinitionDTO
				+ ", \noptionList=" + optionList + "\n】";
	}

	public ServiceDefinitionDTO getServiceDefinitionDTO() {
		return serviceDefinitionDTO;
	}

	public void setServiceDefinitionDTO(ServiceDefinitionDTO serviceDefinitionDTO) {
		this.serviceDefinitionDTO = serviceDefinitionDTO;
	}

	public mypcxt_question getQuestion() {
		return question;
	}

	public void setQuestion(mypcxt_question question) {
		this.question = question;
	}

	public List<mypcxt_option> getOptionList() {
		return optionList;
	}

	public void setOptionList(List<mypcxt_option> optionList) {
		this.optionList = optionList;
	}

}
