package mypcxt;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.service.QuestionService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext*.xml" })
public class test {
	@Resource
	private QuestionService questionService;

	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}

	@Test
	public void moveQuestion() {
		int moveQuestionAction;
		String id = "e8a96761-f190-47c1-ad13-92ffbf21b54e";
		String ServiceDefinitionId = questionService.moveQuestion(2, id);
		System.out.println(ServiceDefinitionId);
	}

	@Test
	public void addQuestion() {
		mypcxt_question question = new mypcxt_question();
		question.setQuestion_describe("你好");
		question.setQuestion_type("1");
		// String
		// question_service_definition="1aec59e9-f856-4cb3-b356-896d5b140c1d";
		question.setQuestion_service_definition("1aec59e9-f856-4cb3-b356-896d5b140c1d");
		question.setQuestion_father_question("none");

		questionService.saveQuestion(question);
	}

	@Test
	public void addOption() {
		mypcxt_option option = new mypcxt_option();
		option.setOption_describe("HHHHH");
		option.setOption_question("e8a96761-f190-47c1-ad13-92ffbf21b54e");
		option.setOption_grade("5");
		questionService.addOption(option);
	}
}
