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
    if (this.state.QuestionnaireVO !== store.getState()["QuestionReducer"]["Questionnaire"]["questionnaireVO"]) {
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
    store.dispatch(QuestionActions.getQuestionnaireVO());
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
        <Column title="业务问卷" dataIndex="questionnaireDTO" align="center" render={(text, record) => {
            return (<Tooltip title="查看">
              <a onClick={() => {
                  store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(true));
                  store.dispatch(QuestionnaireActions.set_questionnaireModalState(record));
                }}>{record.serviceDefinitionDTO.serviceDefinition.service_definition_describe}</a>
            </Tooltip>);
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center"
        }}>共{this.state.questionnaireVO.totalRecords}条记录</div>
      <Model_Questionnaire/>
    </div>);

  }
}
export default withRouter(QuestionnairePage);
