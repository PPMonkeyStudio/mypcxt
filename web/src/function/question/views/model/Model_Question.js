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
import * as QuestionActions from '../../../question/QuestionActions.js';
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
const Option = Select.Option;
//
////
////

class Model_Question extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      questionModalVisible: false
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);

  }

  storeChanged() {
    if (this.state.questionModalVisible !== store.getState()["QuestionReducer"]["Model_Question"]["questionModalVisible"]) {
      this.setState({
        questionModalVisible: store.getState()["QuestionReducer"]["Model_Question"]["questionModalVisible"]
      });
    }
  }
  //
  //
  //
  render() {
    return (<Modal width="960px" title="业务问卷" visible={this.state.questionModalVisible} onCancel={() => {
        store.dispatch(QuestionnaireActions.set_questionModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionnaireActions.set_questionModalVisible(false));
          }}>返回</Button>,
      ]}></Modal>);
  }
}

export default withRouter(Model_Question);
