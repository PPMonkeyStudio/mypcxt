import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
// import {
//   ButtonToolbar,
//   FormGroup,
//   FormControl,
//   Image,
//   Jumbotron,
//   Table,
//   Tab
// } from 'react-bootstrap';
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
} from 'antd';
//
//
//
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
//
////

//
////
////
/**
  *
  */
/**
 * [ServicePage description]
 * @extends Component
 */
class UserPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'userVO' : {
  'user_List': [],
  'totalRecords': 0
}
    };
  }
  render() {

    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}></div>
      <Table bordered={true}  dataSource={this.state.userVO.user_List} title={() => (<h2>人员列表</h2>)} footer={() => (<div>
          <div style={{
              margin: "0 auto 10px",
              width: "200px",
              textAlign: "center",
            }}>共{this.state.userVO.totalRecords}条记录</div>
        </div>)}>
        <Column title="账号" dataIndex="user_account" align="center"/>
        <Column title="姓名" dataIndex="user_name" align="center"/>
        <Column title="测评权限" dataIndex="user_Jurisdiction_evaluate" align="center"/>
        <Column title="统计权限" dataIndex="user_Jurisdiction_statistics" align="center"/>
        <Column title="操作" dataIndex="operation" align="center" render={(text, record) => {
            return (<div></div>);
          }}/>
      </Table>
    </div>);
  }
}

export default withRouter(UserPage);
