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
class ServicePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'serviceVO': {
        'service_List': [],
        'totalRecords': 0,
      }

    };
  }
  render() {

    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}></div>
      <Table bordered={true} size="small" dataSource={this.state.serviceVO.service_List} title={() => (<h2>业务定义</h2>)} footer={() => (<div>
          <div style={{
              margin: "0 auto 10px",
              width: "200px",
              textAlign: "center",
            }}>共0条记录</div>
        </div>)}>
        <Column title="业务描述" dataIndex="service_definition_describe" align="center"/>
        <Column title="业务所属单位" dataIndex="service_definition_unit" align="center"/>
        <Column title="表名（业务）" dataIndex="service_definition_table" align="center"/>
        <Column title="字段名（业务唯一识别编号）" dataIndex="service_definition_field_num" align="center"/>
        <Column title="字段名（业务所属者姓名）" dataIndex="service_definition_field_owner_name" align="center"/>
        <Column title="字段名（业务所属者性别）" dataIndex="service_definition_field_owner_sex" align="center"/>
        <Column title="字段名（业务所属者电话）" dataIndex="service_definition_field_owner_phone" align="center"/>
        <Column title="字段名（业务办理时间）" dataIndex="service_definition_field_handle_date" align="center"/>
        <Column title="操作" dataIndex="operation" align="center" render={(text, record) => {
            return (<div></div>);
          }}/>
      </Table>
    </div>);
  }
}

export default withRouter(ServicePage);
