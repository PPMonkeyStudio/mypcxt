package mypcxt;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.pphgzs.service.QuestionService;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(locations = { "classpath:applicationContext*.xml" })
public class test {
	@Resource
    private QuestionService questionService;

	public void setQuestionService(QuestionService questionService) {
		this.questionService = questionService;
	}@Test
	public void moveQuestion(){
		int moveQuestionAction;
		String id="e8a96761-f190-47c1-ad13-92ffbf21b54e";
		String ServiceDefinitionId = questionService.moveQuestion(2, id);
		System.out.println(ServiceDefinitionId);
	}
}
