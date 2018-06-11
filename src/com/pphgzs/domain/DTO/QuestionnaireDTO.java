package com.pphgzs.domain.DTO;

import java.util.List;

public class QuestionnaireDTO {
	
 private ServiceDefinitionDTO serviceDefinitionDTO;
 
 private List<QuestionServiceDTO> questionServiceDTOList;

public ServiceDefinitionDTO getServiceDefinitionDTO() {
	return serviceDefinitionDTO;
}

public void setServiceDefinitionDTO(ServiceDefinitionDTO serviceDefinitionDTO) {
	this.serviceDefinitionDTO = serviceDefinitionDTO;
}

public List<QuestionServiceDTO> getQuestionServiceDTOList() {
	return questionServiceDTOList;
}

public void setQuestionServiceDTOList(List<QuestionServiceDTO> questionServiceDTOList) {
	this.questionServiceDTOList = questionServiceDTOList;
}

@Override
public String toString() {
	return "QuestionnaireDTO [serviceDefinitionDTO=" + serviceDefinitionDTO + ", questionServiceDTOList="
			+ questionServiceDTOList + "]";
}
 
 
}
