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
import * as ServiceActions from '../ServiceActions.js';

const FormItem = Form.Item;
const {Column, ColumnGroup,} = Table;
const Option = Select.Option;

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
        totalRecords: 0,
      },
      tableLoading: false,
    }
  }
  storeChanged() {
    if (this.state.serviceDefinitionVO !== store.getState()["ServiceReducer"]["serviceDefinition"]["serviceDefinitionVO"]) {
      this.setState({
        serviceDefinitionVO: store.getState()["ServiceReducer"]["serviceDefinition"]["serviceDefinitionVO"]
      });
    }
    if (this.state.tableLoading !== store.getState()["ServiceReducer"]["serviceDefinition"]["serviceDefinitionTableLoading"]) {
      this.setState({
        tableLoading: store.getState()["ServiceReducer"]["serviceDefinition"]["serviceDefinitionTableLoading"]
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
      <Table dataSource={this.state.serviceDefinitionVO.serviceDefinitionDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>业务定义列表</h2>)}>
        <Column title="业务名称" dataIndex="serviceDefinition.service_definition_describe" align="center"/>
        <Column title="业务所属单位" dataIndex="unit.unit_name" align="center"/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center"
        }}>共{this.state.serviceDefinitionVO.totalRecords}条记录</div>

    </div>);

  }
}
export default withRouter(ServiceDefinition);
