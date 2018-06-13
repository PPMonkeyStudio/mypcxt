import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import store from '../../../Store.js';
import {
  Button,
  Menu,
  Layout,
  Breadcrumb,
  Tabs,
  Icon,
  Table,
  Checkbox,
  InputNumber,
  Modal,
  Form,
  Input,
  Popconfirm,
  Divider,
  Tooltip,
  Pagination,
  Select,
  Tag,
} from 'antd';
import * as QuestionActions from '../QuestionActions.js';
import Model_Questionnaire from '../../question/views/model/Model_Questionnaire.js';
import Model_Question from '../../question/views/model/Model_Question.js';
import * as QuestionnaireActions from '../QuestionnaireActions.js';

const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
const Option = Select.Option;
const {TextArea} = Input;
//
//
//
//
class QuestionnairePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      questionnaireVO: {
        questionnaireDTOList: [],
        totalRecords: 0
      },
      tableLoading: false
    }
    //
    //
    //
  }
  storeChanged() {
    if (this.state.questionnaireVO !== store.getState()["QuestionReducer"]["Questionnaire"]["questionnaireVO"]) {
      this.setState({
        questionnaireVO: store.getState()["QuestionReducer"]["Questionnaire"]["questionnaireVO"]
      });
    }
    if (this.state.tableLoading !== store.getState()["QuestionReducer"]["Questionnaire"]["tableLoading"]) {
      this.setState({
        tableLoading: store.getState()["QuestionReducer"]["Questionnaire"]["tableLoading"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    store.dispatch(QuestionnaireActions.getQuestionnaireVO());
  }
  render() {
    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0",
        }}>
        <Button onClick={() => {}}>
          <Icon type="plus"/>
          &nbsp;创建业务问卷
        </Button>
      </div>
      <Table dataSource={this.state.questionnaireVO.questionnaireDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>业务问卷列表</h2>)}>
        <Column title="业务问卷" dataIndex="serviceDefinitionDTO" align="center" render={(text, record) => {
            return (<a onClick={() => {
                store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(true));
                store.dispatch(QuestionnaireActions.getquestionnaireDTO_byServiceDefinitionID(record.serviceDefinitionDTO.serviceDefinition.mypcxt_service_definition_id));

            }}>{record.serviceDefinitionDTO.serviceDefinition.service_definition_describe}</a>);
          }}/>
        <Column title="所属单位" dataIndex="serviceDefinitionDTO.unit.unit_name" align="center"/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center"
        }}>共{this.state.questionnaireVO.totalRecords}条记录</div>
      <Model_Questionnaire/>
      <Model_Question/>
    </div>);

  }
}
export default withRouter(QuestionnairePage);
