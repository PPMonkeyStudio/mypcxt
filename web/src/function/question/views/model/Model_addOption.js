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
//
////
////

class Model_addOption extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      addOptionModalVisible: false,
      addOptionModelState: {
        option_describe: "",
        option_question: "",
        option_grade: 1,
      },
      option_question: "",
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);

  }

  storeChanged() {
    if (this.state.addOptionModalVisible !== store.getState()["QuestionReducer"]["Model_addOption"]["addOptionModalVisible"]) {
      this.setState({
        addOptionModalVisible: store.getState()["QuestionReducer"]["Model_addOption"]["addOptionModalVisible"]
      });
    }
    if (this.state.option_question !== store.getState()["QuestionReducer"]["Model_addOption"]["option_question"]) {
      this.setState({
        option_question: store.getState()["QuestionReducer"]["Model_addOption"]["option_question"]
      });
    }
  }
  //
  //
  //
  render() {
    return (<Modal mask={false} title="添加选项" visible={this.state.addOptionModalVisible} onCancel={() => {
        store.dispatch(QuestionActions.set_addOptionModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionActions.set_addOptionModalVisible(false));
          }}>返回</Button>,
        <Button onClick={() => {
            this.state.addOptionModelState.option_question = this.state.option_question;
            store.dispatch(QuestionActions.addOption(this.state.addOptionModelState));

          }}>确认添加</Button>,
      ]}>
      <Form>
        <FormItem label="描述">
          <Input onChange={(event) => {
              let addOptionModelState = Object.assign({}, this.state.addOptionModelState);
              addOptionModelState.option_describe = event.target.value;
              this.setState({addOptionModelState: addOptionModelState});
            }}/>
        </FormItem>
        <FormItem label="分值">
          <InputNumber value={this.state.addOptionModelState.option_grade} onChange={(value) => {
              let addOptionModelState = Object.assign({}, this.state.addOptionModelState);
              addOptionModelState.option_grade = value;
              this.setState({addOptionModelState: addOptionModelState});
            }}/>
        </FormItem>
      </Form>
    </Modal>);
  }
}

export default withRouter(Model_addOption);
