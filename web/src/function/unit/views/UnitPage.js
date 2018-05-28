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
  Modal,
  Form,
  Input
} from 'antd';
//
//
//
import * as UnitActions from '../UnitActions.js';
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
//
////
////
/**
  *
  * @type {[type]}
  */
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name
  })
};
let addUnitModelState = {
  addUnit_unitName: ""
};
/**
 * [UnitPage description]
 * @extends Component
 */

class UnitPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.addUnitModal = this.addUnitModal.bind(this);
    this.addUnitOk = this.addUnitOk.bind(this);
    this.addUnitCancel = this.addUnitCancel.bind(this);
    this.addUnitCancel = this.addUnitCancel.bind(this);
    this.addUnit_UnitName_Channge = this.addUnit_UnitName_Channge.bind(this);

    this.state = {
      'unitVO': {
        'unit_List': [],
        'totalRecords': 0
      },
      'addUnitModalVisible': false,
      'unitTableLoading': false
    }
  }

  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(UnitActions.getUnitVO());
  }

  storeChanged() {
    //setState是异步的
    if (this.state.unitVO !== store.getState()["UnitReducer"]["unitVO"]) {
      this.setState({
        unitVO: store.getState()["UnitReducer"]["unitVO"]
      });
    }
    if (this.state.addUnitModalVisible !== store.getState()["UnitReducer"]["addUnitModalVisible"]) {
      this.setState({
        addUnitModalVisible: store.getState()["UnitReducer"]["addUnitModalVisible"]
      });
    }
    if (this.state.unitTableLoading !== store.getState()["UnitReducer"]["unitTableLoading"]) {
      this.setState({
        unitTableLoading: store.getState()["UnitReducer"]["unitTableLoading"]
      });
    }
  }

  addUnit_UnitName_Channge(event) {
    addUnitModelState.addUnit_unitName = event.target.value;
  }

  /**
   * 打开模态框
   * @method addUnitModal
   */
  addUnitModal = () => {
    store.dispatch(UnitActions.setAddUnitModalVisible(true));
  }

  addUnitOk = () => {
    store.dispatch(UnitActions.addUnit(addUnitModelState.addUnit_unitName));
    // this.setState({addUnitModalVisible: false});
  }

  addUnitCancel = () => {
    store.dispatch(UnitActions.setAddUnitModalVisible(false));
  }

  render() {
    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}>
        <Button onClick={this.addUnitModal}>
          <Icon type="plus"/>
          &nbsp;新增一个单位
        </Button>
        <Modal title="新增一个单位" visible={this.state.addUnitModalVisible} onOk={this.addUnitOk} onCancel={this.addUnitCancel} okText="确认添加" cancelText="取消">
          <Form >
            <FormItem label="单位名称">
              <Input onChange={this.addUnit_UnitName_Channge}/>
            </FormItem>
          </Form>
        </Modal>
      </div>
      <Table rowSelection={rowSelection} size="small" dataSource={this.state.unitVO.unit_List} loading={this.state.unitTableLoading} bordered="true" title={() => (<h2>单位列表</h2>)} footer={() => (<div>
          <div>
            <Button type="danger">
              <Icon type="delete"/>
              &nbsp;删除所选
            </Button>
          </div>
          <div style={{
              margin: "0 auto 10px",
              width: "200px",
              textAlign: "center"
            }}>共{this.state.unitVO.totalRecords}条记录</div>
        </div>)}>
        <Column title="单位名称" dataIndex="unit_name" key="1" align="center"/>
        <Column title="创建时间" dataIndex="unit_gmt_create" key="2" align="center"/>
        <Column title="修改时间" dataIndex="unit_gmt_modified" key="3" align="center"/>
      </Table>
    </div>);
  }
}

export default withRouter(UnitPage);
