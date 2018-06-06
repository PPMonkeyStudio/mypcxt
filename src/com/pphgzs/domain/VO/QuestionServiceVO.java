package com.pphgzs.domain.VO;

import java.util.List;

import com.pphgzs.domain.DTO.QuestionServiceDTO;

public class QuestionServiceVO {
	private List<QuestionServiceDTO> questionServiceDTOList;

	private int totalRecords = 0;

	@Override
	public String toString() {
		return "QuestionServiceVO 【\nquestionServiceDTOList=" + questionServiceDTOList + ", \ntotalRecords="
				+ totalRecords + "\n】";
	}

	public List<QuestionServiceDTO> getQuestionServiceDTOList() {
		return questionServiceDTOList;
	}

	public void setQuestionServiceDTOList(List<QuestionServiceDTO> questionServiceDTOList) {
		this.questionServiceDTOList = questionServiceDTOList;
	}

	public int getTotalRecords() {
		return totalRecords;
	}

	public void setTotalRecords(int totalRecords) {
		this.totalRecords = totalRecords;
	}

}
