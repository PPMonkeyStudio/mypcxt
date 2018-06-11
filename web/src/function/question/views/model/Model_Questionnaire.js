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
  Tag,
} from 'antd';
//
//
//
import store from '../../../../Store.js';
import * as UserActions from '../../../user/UserActions.js';
import * as QuestionnaireActions from '../../../question/QuestionnaireActions.js';
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
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
      questionnaireModalstate: {}
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
  }
  //
  //
  //
  render() {
    return (<Modal title="业务问卷" visible={this.state.questionnaireModalVisible} onCancel={() => {
        store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionnaireActions.set_questionnaireModalVisible(false));
          }}>返回</Button>,
      ]}></Modal>);
  }
}

export default withRouter(Model_Questionnaire);
