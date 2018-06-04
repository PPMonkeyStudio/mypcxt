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
const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;
import * as ServiceActions from '../ServiceActions.js';
//
//
//
//
class ServiceDefinition extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      serviceDefinitionVO: {
        serviceDefinitionDTOList: [],
        totalRecords: 0
      },
      tableLoading: false
    }
  }
  storeChanged() {
    if (this.state.serviceDefinitionVO !== store.getState()["ServiceReducer"]["serviceDefinition"]["serviceDefinitionVO"]) {
      this.setState({
        serviceDefinitionVO: store.getState()["ServiceReducer"]["serviceDefinition"]["serviceDefinitionVO"]
      });
    }
    if (this.state.tableLoading !== store.getState()["ServiceReducer"]["serviceDefinitionTableLoading"]) {
      this.setState({
        tableLoading: store.getState()["ServiceReducer"]["serviceDefinitionTableLoading"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(ServiceActions.getServiceDefinitionVO());
  }
  render() {
    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0",
        }}>
        <Button onClick={() => {}}>
          <Icon type="plus"/>
          &nbsp;创建业务定义
        </Button>
      </div>
      <Table pagination={false} dataSource={this.state.serviceDefinitionVO.serviceDefinitionDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>业务定义列表</h2>)}>
        <Column title="业务名称" dataIndex="unit.unit_name" align="center"/>
        <Column title="业务所属单位" dataIndex="unit.unit_gmt_create" align="center"/>
        <Column title="操作" dataIndex="operation" align="center" render={(text, record) => {
            return (<div>
              <Tooltip title="修改">
                <a onClick={() => {}}><Icon type="edit"/></a>
              </Tooltip>
              <Divider type="vertical"/>
              <Popconfirm title="确认删除吗?删除后，将删除所有此单位的数据及记录，无法恢复，是否继续？" okText="确认删除" cancelText="放弃" okType="danger" onConfirm={() => {}}>
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
          textAlign: "center",
        }}>共{this.state.serviceDefinitionVO.totalRecords}条记录</div>

    </div>);

  }
}
export default withRouter(ServiceDefinition);
