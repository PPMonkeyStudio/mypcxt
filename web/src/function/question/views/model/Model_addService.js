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

class Model_addService extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      addServiceModalVisible: false,
      addServiceModelState: {},
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);

  }

  storeChanged() {
    if (this.state.addServiceModalVisible !== store.getState()["QuestionReducer"]["Model_addService"]["addServiceModalVisible"]) {
      this.setState({
        addServiceModalVisible: store.getState()["QuestionReducer"]["Model_addService"]["addServiceModalVisible"]
      });
    }
  }
  //
  //
  //
  render() {
    return (<Modal title="创建一个新的业务问卷" visible={this.state.addServiceModalVisible} onCancel={() => {
        store.dispatch(QuestionnaireActions.set_addServiceModalVisible(false));
      }} footer={[
        <Button onClick={() => {
            store.dispatch(QuestionnaireActions.set_addServiceModalVisible(false));
          }}>返回</Button>,
        <Button onClick={() => {}}>确认创建</Button>,
      ]}>
      <Form>
        <FormItem label="业务名">
          <Input onChange={(event) => {
              let addServiceModelState = Object.assign({}, this.state.addServiceModelState);
              addServiceModelState.service_definition_describe = event.target.value;
              this.setState({addServiceModelState: addServiceModelState});
            }}/>
        </FormItem>
        <FormItem label="所属单位">
          <Input onChange={(event) => {
              let addServiceModelState = Object.assign({}, this.state.addServiceModelState);
              this.setState({addServiceModelState: addServiceModelState});
            }}/>
        </FormItem>
      </Form>
    </Modal>);
  }
}

export default withRouter(Model_addService);
