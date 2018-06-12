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
		String id="qqqq";
		questionService.getquestionnaireDTO_byServiceDefinitionID(id);
	}
}
