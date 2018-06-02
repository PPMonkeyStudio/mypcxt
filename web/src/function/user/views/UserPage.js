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
  Tag,
  Select
} from 'antd';
import * as UserActions from '../UserActions.js';
//
//
//
//
//
//
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;
//

/**
  *
  */

let addUserModelState = {
  user_name: "",
  user_password: "",
};
let updateUserModelState = {
  mypcxt_user_id: "",
  user_name: "",
  user_Jurisdiction_evaluate: "",
  user_Jurisdiction_statistics: "",
  user_Jurisdiction_review: "",
};
class UserPage extends Component {
  constructor(props) {
    super(props);

    this.storeChanged = this.storeChanged.bind(this);
    this.addUserModal = this.addUserModal.bind(this);
    this.addUserOk = this.addUserOk.bind(this);
    this.addUserCancel = this.addUserCancel.bind(this);

    this.updateUserModal = this.updateUserModal.bind(this);
    this.updateUserOk = this.updateUserOk.bind(this);
    this.updateUserCancel = this.updateUserCancel.bind(this);

    this.state = {
      'userVO': {
        'user_List': [],
        'totalRecords': 0
      },
      'addUserModalVisible': false,
      'updateUserModalVisible': false,
      'userTableLoading': false
    };
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(UserActions.getUserVO());
  }
  storeChanged() {
    //setState是异步的
    if (this.state.userVO !== store.getState()["UserReducer"]["userVO"]) {
      this.setState({
        userVO: store.getState()["UserReducer"]["userVO"]
      });
    }
    if (this.state.addUserModalVisible !== store.getState()["UserReducer"]["addUserModalVisible"]) {
      this.setState({
        addUserModalVisible: store.getState()["UserReducer"]["addUserModalVisible"]
      });
    }
    if (this.state.updateUserModalVisible !== store.getState()["UserReducer"]["updateUserModalVisible"]) {
      this.setState({
        updateUserModalVisible: store.getState()["UserReducer"]["updateUserModalVisible"]
      });
    }
    if (this.state.userTableLoading !== store.getState()["UserReducer"]["userTableLoading"]) {
      this.setState({
        userTableLoading: store.getState()["UserReducer"]["userTableLoading"]
      });
    }
  }

  addUserModal = () => {
    store.dispatch(UserActions.setAddUserModalVisible(true));
  }

  updateUserModal = () => {
    store.dispatch(UserActions.setUpdateUserModalVisible(true));
  }

  addUserOk = () => {
    store.dispatch(UserActions.addUser(addUserModelState.user_password, addUserModelState.user_name));
    // this.setState({addUserModalVisible: false});
  }

  addUserCancel = () => {
    store.dispatch(UserActions.setAddUserModalVisible(false));
  }

  updateUserOk = () => {
    store.dispatch(UserActions.updateUser(updateUserModelState.mypcxt_user_id, updateUserModelState.user_name, updateUserModelState.user_Jurisdiction_evaluate, updateUserModelState.user_Jurisdiction_statistics, updateUserModelState.user_Jurisdiction_review));
    // this.setState({addUserModalVisible: false});
  }

  updateUserCancel = () => {
    store.dispatch(UserActions.setUpdateUserModalVisible(false));
  }

  deleteUser = (mypcxt_user_id) => {
    store.dispatch(UserActions.deleteUser(mypcxt_user_id));
  }

  render() {

    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0"
        }}>
        <Button onClick={this.addUserModal}>
          <Icon type="plus"/>
          &nbsp;添加警员
        </Button>
      </div>
      <Table bordered={true} dataSource={this.state.userVO.user_List} loading={this.state.userTableLoading} title={() => (<h2>警员列表</h2>)} footer={() => (<div>
          <div style={{
              margin: "0 auto 10px",
              width: "200px",
              textAlign: "center",
            }}>共{this.state.userVO.totalRecords}条记录</div>
        </div>)}>
        <Column title="警号" dataIndex="user_account" align="center"/>
        <Column title="姓名" dataIndex="user_name" align="center"/>
        <Column title="测评权限" dataIndex="user_Jurisdiction_evaluate" align="center" render={(text, record) => {
            return (<div>
              {
                (text === "have")
                  ? <Tag color="#108ee9">有</Tag>
                  : <Tag color="#777777">无</Tag>
              }
            </div>);
          }}/>
        <Column title="统计权限" dataIndex="user_Jurisdiction_statistics" align="center" render={(text, record) => {
            return (<div>
              {
                (text === "have")
                  ? <Tag color="#108ee9">有</Tag>
                  : <Tag color="#777777">无</Tag>
              }
            </div>);
          }}/>
        <Column title="审核整改权限" dataIndex="user_Jurisdiction_review" align="center" render={(text, record) => {
            return (<div>
              {
                (text === "have")
                  ? <Tag color="#108ee9">有</Tag>
                  : <Tag color="#777777">无</Tag>
              }
            </div>);
          }}/>
        <Column title="操作" dataIndex="operation" align="center" render={(text, record) => {
            return ((<div>
              <Tooltip title="修改">
                <a onClick={() => {
                    store.dispatch(UserActions.setUpdateUserModalVisible(true));
                    updateUserModelState.mypcxt_user_id = record.mypcxt_user_id;
                    updateUserModelState.user_account = record.user_account;
                    updateUserModelState.user_name = record.user_name;
                    updateUserModelState.user_Jurisdiction_evaluate = record.user_Jurisdiction_evaluate;
                    updateUserModelState.user_Jurisdiction_statistics = record.user_Jurisdiction_statistics;
                    updateUserModelState.user_Jurisdiction_review = record.user_Jurisdiction_review;
                  }}><Icon type="edit"/></a>
              </Tooltip><Divider type="vertical"/>
              <Tooltip title="重置密码">
                <a>
                  <Icon type="tool"/>
                </a>
              </Tooltip>
              <Divider type="vertical"/>
              <Popconfirm title="确认删除吗?删除后，将删除所有此警员的数据及记录，无法恢复，是否继续？" okText="确认删除" cancelText="放弃" okType="danger" onConfirm={() => this.deleteUser(record.mypcxt_user_id)}>
                <Tooltip title="删除">
                  <a>
                    <Icon type="delete"/>
                  </a>
                </Tooltip>
              </Popconfirm>
            </div>));
          }}/>
      </Table>
      <Modal title="添加一个警员" visible={this.state.addUserModalVisible} onOk={this.addUserOk} onCancel={this.addUserCancel} okText="确认添加" cancelText="取消">
        <Form>
          <FormItem label="警号">
            <Input onChange={(event) => {
                addUserModelState.user_password = event.target.value;
              }}/>
          </FormItem>
          <FormItem label="姓名">
            <Input onChange={(event) => {
                addUserModelState.user_name = event.target.value;
              }}/>
          </FormItem>
        </Form>
      </Modal>
      <Modal title="修改" visible={this.state.updateUserModalVisible} onOk={this.updateUserOk} onCancel={this.updateUserCancel} okText="修改" cancelText="取消">
        <Form>
          <h3>警号：{updateUserModelState.user_account}</h3>
          <FormItem label="名称">
            <Input onChange={(event) => {
                updateUserModelState.user_name = event.target.value;
              }} value={updateUserModelState.user_name}/>
          </FormItem>
          <FormItem label="测评权限">
            <Select defaultValue={updateUserModelState.user_Jurisdiction_evaluate} onChange={(value) => {
                updateUserModelState.user_Jurisdiction_evaluate = value;
              }}>
              <Option value="have">有</Option>
              <Option value="none">无</Option>
            </Select>
          </FormItem>
          <FormItem label="统计权限">
            <Select defaultValue={updateUserModelState.user_Jurisdiction_statistics} onChange={(value) => {
                updateUserModelState.user_Jurisdiction_statistics = value;
              }}>
              <Option value="have">有</Option>
              <Option value="none">无</Option>
            </Select>
          </FormItem>
          <FormItem label="审核整改权限">
            <Select defaultValue={updateUserModelState.user_Jurisdiction_review} onChange={(value) => {
                updateUserModelState.user_Jurisdiction_review = value;
              }}>
              <Option value="have">有</Option>
              <Option value="none">无</Option>
            </Select>
          </FormItem>
        </Form>
      </Modal>
    </div>);
  }
}

export default withRouter(UserPage);
