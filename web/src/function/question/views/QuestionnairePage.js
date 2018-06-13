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
  Tag
} from 'antd';
import * as QuestionActions from '../QuestionActions.js';
import * as UnitActions from '../../unit/UnitActions.js';
import Model_Questionnaire from '../../question/views/model/Model_Questionnaire.js';
import Model_Question from '../../question/views/model/Model_Question.js';
import Model_previewQuestionnair from '../../question/views/model/Model_previewQuestionnair.js';

import * as QuestionnaireActions from '../QuestionnaireActions.js';

const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
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
        totalRecords: 0,
      },
      tableLoading: false,
      previewQuestionnaireModalVisible: false,
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
          margin: "0 0 20px 0"
        }}>
        <Button onClick={() => {}}>
          <Icon type="plus"/>
          &nbsp;创建业务问卷
        </Button>
      </div>
      <Table dataSource={this.state.questionnaireVO.questionnaireDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>业务问卷列表</h2>)}>
        <Column title="业务问卷" dataIndex="serviceDefinitionDTO" align="center" render={(text, record) => {
            return (<a onClick={() => {
                //预览问卷
                store.dispatch(QuestionnaireActions.set_previewQuestionnairModalVisible(true));
                store.dispatch(QuestionnaireActions.set_previewQuestionnairState(record));

              }}>{record.serviceDefinitionDTO.serviceDefinition.service_definition_describe}</a>);
          }}/>
        <Column title="所属单位" dataIndex="serviceDefinitionDTO.unit.unit_name" align="center"/>
        <Column title="操作" dataIndex="mypcxt_option_id" align="center" render={(text, record) => {
            return (<div>
              <a onClick={() => {
                  //组卷
                  store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(true));
                  store.dispatch(QuestionnaireActions.getquestionnaireDTO_byServiceDefinitionID(record.serviceDefinitionDTO.serviceDefinition.mypcxt_service_definition_id));
                  //将添加问题模态框中的所属定义赋值
                  store.dispatch(QuestionActions.set_addQuestionServiceDefinition(record.serviceDefinitionDTO.serviceDefinition.mypcxt_service_definition_id));
                }}><Icon type="edit"/></a>
            </div>);
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center",
        }}>共{this.state.questionnaireVO.totalRecords}条记录</div>
      <Model_Questionnaire/>
      <Model_Question/>
      <Model_previewQuestionnair/> {/* <Modal title="新增一个单位" visible={this.state.addUnitModalVisible} onOk={() => {
          store.dispatch(UnitActions.addUnit(this.state.addUnitModelState.unit_name));
        }} onCancel={() => {
          store.dispatch(QuestionnaireActions.setAddUnitModalVisible(false));
        }} okText="确认添加" cancelText="取消">
        <Form>
          <FormItem label="单位名称">
            <Input onChange={(event) => {
                let addUnitModelState = Object.assign({}, this.state.addUnitModelState);
                addUnitModelState.unit_name = event.target.value;
                this.setState({addUnitModelState: addUnitModelState});
              }}/>
          </FormItem>
        </Form>
      </Modal> */
      }
    </div>);

  }
}
export default withRouter(QuestionnairePage);
