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
import * as QuestionnaireActions from '../../QuestionnaireActions.js';
import * as QuestionActions from '../../QuestionActions.js';
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;
const {TextArea} = Input;
//
////
////

class Model_addQuestion extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      addQuestionModalVisible: false,
      addQuestionModelState: {
        question_describe: "",
        question_type: "",
        question_service_definition: "",
      },
      question_service_definition: "",
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);
  }

  storeChanged() {
    if (this.state.addQuestionModalVisible !== store.getState()["QuestionReducer"]["Model_addQuestion"]["addQuestionModalVisible"]) {
      this.setState({
        addQuestionModalVisible: store.getState()["QuestionReducer"]["Model_addQuestion"]["addQuestionModalVisible"]
      });
    }
    if (this.state.question_service_definition !== store.getState()["QuestionReducer"]["Model_addQuestion"]["question_service_definition"]) {
      this.setState({
        question_service_definition: store.getState()["QuestionReducer"]["Model_addQuestion"]["question_service_definition"]
      });
    }
  }
  //
  //
  //
  render() {
    return (<Modal mask={false} title="添加问题到此问卷" visible={this.state.addQuestionModalVisible} onCancel={() => {
        store.dispatch(QuestionActions.set_addQuestionModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionActions.set_addQuestionModalVisible(false));
          }}>返回</Button>,
        <Button onClick={() => {
            this.state.addQuestionModelState.question_service_definition = this.state.question_service_definition;
            store.dispatch(QuestionActions.addQuestion(this.state.addQuestionModelState));
          }}>确认添加</Button>,
      ]}>
      <Form>
        <FormItem label="问题描述">
          <TextArea autosize={true} onChange={(event) => {
              let addQuestionModelState = Object.assign({}, this.state.addQuestionModelState);
              addQuestionModelState.question_describe = event.target.value;
              this.setState({addQuestionModelState: addQuestionModelState});
            }}></TextArea>
        </FormItem>
        <FormItem label="类型">
          <Select  onChange={(value) => {
              let addQuestionModelState = this.state.addQuestionModelState;
              addQuestionModelState.question_type = value;
              this.setState({addQuestionModelState: addQuestionModelState});
            }}>
            <Option value="1">选择题</Option>
            <Option value="2">开放题</Option>
          </Select>
        </FormItem>

      </Form>
    </Modal>);
  }
}

export default withRouter(Model_addQuestion);
