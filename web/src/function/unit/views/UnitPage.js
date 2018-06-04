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
  Tag
} from 'antd';
//
//
//
import * as UnitActions from '../UnitActions.js';
import * as UserActions from '../../user/UserActions.js';

//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;
//
////
////

class UnitPage extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);

    this.state = {
      'unitVO': {
        'unitDTOList': [],
        'totalRecords': 0
      },
      'userList': [],
      'addUnitModalVisible': false,
      'updateUnitModalVisible': false,
      'tableLoading': false,
      'addUnitModelState': {
        'unit_name': ""
      },
      'updateUnitModelState': {
        'mypcxt_unit_id': "",
        'unit_name': "",
        'unit_correction_man': ""
      },
    }

  }

  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(UnitActions.getUnitVO());
    store.dispatch(UserActions.getUserList());
  }

  storeChanged() {
    //setState是异步的
    if (this.state.unitVO !== store.getState()["UnitReducer"]["unitVO"]) {
      this.setState({
        unitVO: store.getState()["UnitReducer"]["unitVO"]
      });
    }
    if (this.state.userList !== store.getState()["UserReducer"]["userList"]) {
      this.setState({
        userList: store.getState()["UserReducer"]["userList"]
      });
    }
    if (this.state.addUnitModalVisible !== store.getState()["UnitReducer"]["addUnitModalVisible"]) {
      this.setState({
        addUnitModalVisible: store.getState()["UnitReducer"]["addUnitModalVisible"]
      });
    }
    if (this.state.updateUnitModalVisible !== store.getState()["UnitReducer"]["updateUnitModalVisible"]) {
      this.setState({
        updateUnitModalVisible: store.getState()["UnitReducer"]["updateUnitModalVisible"]
      });
    }
    if (this.state.tableLoading !== store.getState()["UnitReducer"]["tableLoading"]) {
      this.setState({
        tableLoading: store.getState()["UnitReducer"]["tableLoading"]
      });
    }
  }

  //
  //
  //
  render() {
    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}>
        <Button onClick={() => {
            store.dispatch(UnitActions.setAddUnitModalVisible(true));
          }}>
          <Icon type="plus"/>
          &nbsp;新增一个单位
        </Button>
      </div>
      <Table pagination={false} dataSource={this.state.unitVO.unitDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>单位列表</h2>)}>
        <Column title="单位名称" dataIndex="unit.unit_name" align="center"/>
        <Column title="整改员" dataIndex="unit.unit_correction_man" align="center" render={(text, record) => {
            if (text === "none") {
              return (<Tag color="#777777">无</Tag>);
            } else {
              return (<span>{record.user.user_name}</span>);
            }
          }}/>
        <Column title="创建时间" dataIndex="unit.unit_gmt_create" align="center"/>
        <Column title="修改时间" dataIndex="unit.unit_gmt_modified" align="center"/>
        <Column title="操作" dataIndex="operation" align="center" render={(text, record) => {
            return (<div>
              <Tooltip title="修改">
                <a onClick={() => {
                    store.dispatch(UnitActions.setUpdateUnitModalVisible(true));
                    let updateUnitModelState = this.state.updateUnitModelState;
                    updateUnitModelState.unit_name = record.unit.unit_name;
                    updateUnitModelState.unit_correction_man = record.unit.unit_correction_man;
                    this.setState({updateUnitModelState: updateUnitModelState});
                  }}><Icon type="edit"/></a>
              </Tooltip>
              <Divider type="vertical"/>
              <Popconfirm title="确认删除吗?删除后，将删除所有此单位的数据及记录，无法恢复，是否继续？" okText="确认删除" cancelText="放弃" okType="danger" onConfirm={() => {
                  store.dispatch(UnitActions.deleteUnit(record.unit.mypcxt_unit_id));
                }}>
                <Tooltip title="删除">
                  <a>
                    <Icon type="delete"/>
                  </a>
                </Tooltip>
              </Popconfirm>
            </div>);
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center"
        }}>共{this.state.unitVO.totalRecords}条记录</div>
      <Modal title="新增一个单位" visible={this.state.addUnitModalVisible} onOk={() => {
          store.dispatch(UnitActions.addUnit(this.state.addUnitModelState.unit_name));
        }} onCancel={() => {
          store.dispatch(UnitActions.setAddUnitModalVisible(false));
        }} okText="确认添加" cancelText="取消">
        <Form>
          <FormItem label="单位名称">
            <Input onChange={(event) => {
                let addUnitModelState = this.state.addUnitModelState;
                addUnitModelState.unit_name = event.target.value;
                this.setState({addUnitModelState: addUnitModelState});
              }}/>
          </FormItem>
        </Form>
      </Modal>
      <Modal title="修改" visible={this.state.updateUnitModalVisible} onOk={() => {
          store.dispatch(UnitActions.updateUnit(this.state.updateUnitModelState.mypcxt_unit_id, this.state.updateUnitModelState.unit_name, this.state.updateUnitModelState.unit_correction_man));
        }} onCancel={() => {
          store.dispatch(UnitActions.setUpdateUnitModalVisible(false));
        }} okText="修改" cancelText="取消">
        <Form>
          <FormItem label="单位名称">
            <Input onChange={(event) => {
                let updateUnitModelState = this.state.updateUnitModelState;
                updateUnitModelState.unit_name = event.target.value;
                this.setState({updateUnitModelState: updateUnitModelState});
              }} value={this.state.updateUnitModelState.unit_name}/>
          </FormItem>
          <FormItem label="整改员">
            <Select value={this.state.updateUnitModelState.unit_correction_man} onChange={(value) => {
                let updateUnitModelState = this.state.updateUnitModelState;
                updateUnitModelState.unit_correction_man = value;
                this.setState({updateUnitModelState: updateUnitModelState});
              }}>
              <Option value="none">无</Option>
              {
                this.state.userList.map(function(user) {
                  return <Option value={user.mypcxt_user_id}>{user.user_name}</Option>
                })
              }
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </div>);
  }
}

export default withRouter(UnitPage);
