import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';

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
//
//
//
import store from '../../../../Store.js';
import * as UserActions from '../../../user/UserActions.js';
import * as QuestionnaireActions from '../../../question/QuestionnaireActions.js';
import * as QuestionActions from '../../../question/QuestionActions.js';
import Model_addQuestion from './Model_addQuestion.js';
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;
//
////
////

class Model_Questionnaire extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      questionnaireModalVisible: false,
      questionnaireDTO: {
        serviceDefinitionDTO: {
          serviceDefinition: {},
          unit: {}
        },
        questionServiceDTOList: [],
      },
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);

  }

  storeChanged() {
    if (this.state.questionnaireModalVisible !== store.getState()["QuestionReducer"]["Model_Questionnaire"]["questionnaireModalVisible"]) {
      this.setState({
        questionnaireModalVisible: store.getState()["QuestionReducer"]["Model_Questionnaire"]["questionnaireModalVisible"]
      });
    }
    if (this.state.questionnaireDTO !== store.getState()["QuestionReducer"]["Model_Questionnaire"]["questionnaireDTO"]) {
      this.setState({
        questionnaireDTO: store.getState()["QuestionReducer"]["Model_Questionnaire"]["questionnaireDTO"]
      });
    }
  }
  //
  //
  //
  render() {
    return (<Modal mask={false} width="960px" title="问卷详情" visible={this.state.questionnaireModalVisible} onCancel={() => {
        store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(false));
          }}>返回</Button>,
        <Button onClick={() => {
            store.dispatch(QuestionActions.set_addQuestionModalVisible(true));

          }}>添加一个新问题到此问卷</Button>,
      ]}>
      {
        (typeof this.state.questionnaireDTO.serviceDefinitionDTO === "undefined")
          ? <div></div>
          : <div>
              <div>所属单位：{this.state.questionnaireDTO.serviceDefinitionDTO.unit.unit_name}</div>
              <br/>
              <div>所属业务：{this.state.questionnaireDTO.serviceDefinitionDTO.serviceDefinition.service_definition_describe}</div>
              <br/>
            </div>
      }
      {
        (typeof this.state.questionnaireDTO.questionServiceDTOList === "undefined")
          ? <div></div>
          : <Table width="1000px" size="small" bordered={true} pagination={false} dataSource={this.state.questionnaireDTO.questionServiceDTOList}>
              <Column title="问题" dataIndex="question.question_describe" align="center" render={(text, record) => {
                  return (<div>
                    {text}
                  </div>);
                }}/>
              <Column title="问题类型" dataIndex="question.question_type" align="center" render={(text, record) => {
                  return (<div>
                    {
                      (text === "1")
                        ? <Tag color="#108ee9">选择题</Tag>
                        : <Tag color="#87d068">开放题</Tag>
                    }
                  </div>);
                }}/>
              <Column title="操作" dataIndex="question.mypcxt_question_id" align="center" render={(text, record) => {
                  return (<div>
                    <a onClick={() => {
                        store.dispatch(QuestionnaireActions.set_questionModalVisible(true));
                        store.dispatch(QuestionnaireActions.getquestionServiceDTO_byQuestionID(record.question.mypcxt_question_id));
                        //将添加选项模态框中的所属问题赋值
                        store.dispatch(QuestionActions.set_addOptionQuestion(record.question.mypcxt_question_id));
                      }}><Icon type="edit"/></a>
                    <Divider type="vertical"/>
                    <a onClick={() => {
                        store.dispatch(QuestionActions.moveQuestion(text, 2));
                      }}><Icon type="arrow-up"/></a>
                    <Divider type="vertical"/>
                    <a onClick={() => {
                        store.dispatch(QuestionActions.moveQuestion(text, 1));
                      }}><Icon type="arrow-down"/></a>
                    <Divider type="vertical"/>
                    <a onClick={() => {}}><Icon type="delete"/></a>
                  </div>);
                }}/>
            </Table>
      }
      <Model_addQuestion/>
    </Modal>);
  }
}

export default withRouter(Model_Questionnaire);
