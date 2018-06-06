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
class QuestionService extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      questionServiceVO: {
        questionServiceDTOList: [],
        totalRecords: 0,
      },
      tableLoading: false,
    }
  }
  storeChanged() {
    if (this.state.questionServiceVO !== store.getState()["ServiceReducer"]["questionService"]["questionServiceVO"]) {
      this.setState({
        questionServiceVO: store.getState()["ServiceReducer"]["questionService"]["questionServiceVO"]
      });
    }
    if (this.state.tableLoading !== store.getState()["ServiceReducer"]["questionService"]["questionServiceTableLoading"]) {
      this.setState({
        tableLoading: store.getState()["ServiceReducer"]["questionService"]["questionServiceTableLoading"]
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
      <Table dataSource={this.state.questionServiceVO.questionServiceDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>业务定义列表</h2>)}>
        <Column title="业务名称" dataIndex="questionService.service_definition_describe" align="center"/>
        <Column title="业务所属单位" dataIndex="unit.unit_name" align="center"/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center"
        }}>共{this.state.questionServiceVO.totalRecords}条记录</div>

    </div>);

  }
}
export default withRouter(QuestionService);
