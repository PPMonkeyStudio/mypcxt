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
      questionModalVisible: false,
      questionDTO: {
        question: {},
        serviceDefinitionDTO: {},
        optionList: [],
      },
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
    if (this.state.questionDTO !== store.getState()["QuestionReducer"]["Model_Question"]["questionDTO"]) {
      this.setState({
        questionDTO: store.getState()["QuestionReducer"]["Model_Question"]["questionDTO"]
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
      ]}>
      <div>
        <div>{this.state.questionDTO.question.question_describe}</div>
        {
          (typeof this.state.questionDTO.optionList === "undefined")
            ? <div></div>
            : <Table width="1000px" size="small" bordered={true} pagination={false} dataSource={this.state.questionnaireDTO.questionServiceDTOList}>
                <Column title="问题" dataIndex="question.question_describe" align="center" render={(text, record) => {
                    return (<div>
                      <a onClick={() => {
                          store.dispatch(QuestionnaireActions.set_questionModalVisible(true));
                        }}>{text}</a>
                    </div>);
                  }}/>
              </Table>
        }
      </div>
    </Modal>);
  }
}

export default withRouter(Model_Question);
