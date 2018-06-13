package mypcxt;
import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pphgzs.domain.DO.mypcxt_answer_choice;
import com.pphgzs.domain.DO.mypcxt_option;
import com.pphgzs.domain.DO.mypcxt_question;
import com.pphgzs.domain.DO.mypcxt_service_definition;
import com.pphgzs.service.QuestionService;
import com.pphgzs.service.ServiceService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext*.xml" })
public class test {
	@Resource
	private QuestionService questionService;
	@Resource
    private  ServiceService serviceService;
	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}
    
	public void setServiceService(ServiceService serviceService) {
		this.serviceService = serviceService;
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
		question.setQuestion_describe("你hfhf好sssss");
		question.setQuestion_type("1");
		// String
		// question_service_definition="1aec59e9-f856-4cb3-b356-896d5b140c1d";
		question.setQuestion_service_definition("1aec59e9-f856-4cb3-b356-896d5b140c1d");
		

		questionService.saveQuestion(question);
	}

	@Test
	public void addOption() {
		mypcxt_option option = new mypcxt_option();
		option.setOption_describe("我就想闪出sssssss");
		option.setOption_question("484b1564-69dc-4721-be55-f269d6adf4b3");
		option.setOption_grade("5");
		questionService.addOption(option);
	}
	@Test
	public void updateQuestion(){
		mypcxt_question question = new mypcxt_question();
		question.setMypcxt_question_id("43fbbe80-05e8-4d24-9c19-2e6ea5391793");
		question.setQuestion_describe("胡椒粉合格");
		questionService.updateQuestion(question);
	}
	@Test
	public void deleteQuestion(){
		String QuestionId= "474516fe-498b-4542-b402-1283a8092256,484b1564-69dc-4721-be55-f269d6adf4b3";
		questionService.deleteQuestion(QuestionId);
	}
	@Test
	public void addAnswerChoice(){
		mypcxt_answer_choice answer_choice = new mypcxt_answer_choice();
		answer_choice.setAnswer_choice_option("06f4f8dd-d474-4db2-a433-8f5d1d08619b");
		answer_choice.setAnswer_choice_question("484b1564-69dc-4721-be55-f269d6adf4b3");
		questionService.addAnswerChoice(answer_choice);
	}
	@Test
	public void addServiceDefinition(){
		mypcxt_service_definition service_definition= new mypcxt_service_definition();
		serviceService.addServiceDefinition(service_definition);
	}
}
