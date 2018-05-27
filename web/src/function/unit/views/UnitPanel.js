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
//
////
////
/**
  *
  * @type {[type]}
  */

const UnitTableColumns = [
  {
    align: "center",
    title: '单位名称',
    dataIndex: 'unit_name',
    key: 'unit_name'
  }, {
    align: "center",
    title: '创建时间',
    dataIndex: 'unit_gmt_create',
    key: 'unit_gmt_create'
  }, {
    align: "center",
    title: '修改时间',
    dataIndex: 'unit_gmt_modified',
    key: 'unit_gmt_modified'
  }
];
/**
 * [UnitPage description]
 * @extends Component
 */
class UnitPanel extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.addUnitModal = this.addUnitModal.bind(this);
    this.addUnitOk = this.addUnitOk.bind(this);
    this.addUnitCancel = this.addUnitCancel.bind(this);
    this.state = {
      addUnitModalVisible: false
    }
  }

  componentDidMount() {
    store.subscribe(this.storeChanged);
    store.dispatch(UnitActions.getUnitVO());
  }

  storeChanged() {
    //setState是异步的
    let unitVO = store.getState()["unitVO"];

    this.forceUpdate();
    //
  }
  /**
   * 打开模态框
   * @method addUnitModal
   */
  addUnitModal = () => {
    this.setState({addUnitModalVisible: true});
  }

  addUnitOk = () => {
    this.setState({addUnitModalVisible: false});
  }

  addUnitCancel = () => {
    this.setState({addUnitModalVisible: false});
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
          <Form>
            <FormItem label="单位名称">
              <Input/>
            </FormItem>
          </Form>
        </Modal>
      </div>
      <Table size="small" columns={UnitTableColumns} dataSource={store.getState()["UnitReducer"]["unitVO"]["unit_List"]}/>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}>
        <Button type="danger" style={{
            float: "right",
            margin: "0 10px"
          }}>
          <Icon type="delete"/>
          &nbsp;删除所选
        </Button>
      </div>
    </div>);
  }
}

export default withRouter(UnitPanel);
