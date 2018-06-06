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

const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
const Option = Select.Option;

//
//
//
//
class QuestionServicePage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      questionServiceVO: {
        questionServiceDTOList: [],
        totalRecords: 0,
      },
      tableLoading: false,
      questionDetailsModalVisible: false
    }
  }
  storeChanged() {
    if (this.state.questionServiceVO !== store.getState()["QuestionReducer"]["QuestionService"]["questionServiceVO"]) {
      this.setState({
        questionServiceVO: store.getState()["QuestionReducer"]["QuestionService"]["questionServiceVO"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(QuestionActions.getQuestionServiceVO());
  }
  render() {
    return (<div>
      {/* <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}>
        <Button onClick={() => {}}>
          <Icon type="plus"/>
          &nbsp;创建业务定义
        </Button>
      </div> */
      }
      <Table dataSource={this.state.questionServiceVO.questionServiceDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>问题列表</h2>)}>
        <Column title="问题" dataIndex="question.question_describe" align="center" render={(text, record) => {
            return (<Tooltip title="查看">
              <a onClick={(record) => {}}>{record.question.question_describe}</a>
            </Tooltip>);
          }}/>
        <Column title="问题类型" dataIndex="question.question_type" align="center"/>
        <Column title="所属业务" dataIndex="serviceDefinitionDTO.serviceDefinition.service_definition_describe" align="center"/>
        <Column title="所属单位" dataIndex="serviceDefinitionDTO.unit.unit_name" align="center"/>
        <Column title="操作" dataIndex="question.mypcxt_question_id" align="center" render={(text, record) => {
            return (<Tooltip title="删除">
              <a onClick={(record) => {}}><Icon type="delete"/></a>
            </Tooltip>);
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center"
        }}>共{this.state.questionServiceVO.totalRecords}条记录</div>
      <Modal title="问题详情" visible={this.state.questionDetailsModalVisible} onOk={() => {}} onCancel={() => {}} okText="修改" cancelText="返回">
        <Form>
          <FormItem label="问题描述">
            <Input value={} onChange={(event) => {}}/>
          </FormItem>
        </Form>
      </Modal>
    </div>);

  }
}
export default withRouter(QuestionServicePage);
