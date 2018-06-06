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
  Switch,
} from 'antd';
import * as ServiceActions from '../ServiceActions.js';

const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;

//
//
//
//
class ServiceDistribution extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      serviceDistributionVO: {
        serviceDistributionDTOList: [],
        totalRecords: 0,
      },
      serviceDistributionTableLoading: false,
      serviceDistributionThreadState: false,
    }
  }
  storeChanged() {
    if (this.state.serviceDistributionThreadState !== store.getState()["ServiceReducer"]["serviceDistribution"]["serviceDistributionThreadState"]) {
      this.setState({
        serviceDistributionThreadState: store.getState()["ServiceReducer"]["serviceDistribution"]["serviceDistributionThreadState"]
      });
    }
    if (this.state.serviceDistributionVO !== store.getState()["ServiceReducer"]["serviceDistribution"]["serviceDistributionVO"]) {
      this.setState({
        serviceDistributionVO: store.getState()["ServiceReducer"]["serviceDistribution"]["serviceDistributionVO"]
      });
    }
    if (this.state.serviceDistributionTableLoading !== store.getState()["ServiceReducer"]["serviceDistribution"]["serviceDistributionTableLoading"]) {
      this.setState({
        serviceDistributionTableLoading: store.getState()["ServiceReducer"]["serviceDistribution"]["serviceDistributionTableLoading"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    store.dispatch(ServiceActions.getserviceDistributionThreadState());
    store.dispatch(ServiceActions.getServiceDistributionVO());

  }
  render() {
    console.debug(this.state.serviceDistributionVO.serviceDistributionDTOList);
    return (<div>
      <div style={{
          height: "34px",
          margin: "0 0 20px 0",
        }}>
        <Switch checkedChildren="已启动自动分配业务功能" unCheckedChildren="已关闭自动分配业务功能" defaultChecked={this.state.serviceDistributionThreadState} onChange={(checked) => {
            if (checked) {
              store.dispatch(ServiceActions.startServiceDistributionThread());
            } else {
              store.dispatch(ServiceActions.stopServiceDistributionThread());

            }
          }}/>
      </div>
      <Table dataSource={this.state.serviceDistributionVO.serviceDistributionDTOList} loading={this.state.serviceDistributionTableLoading} bordered={true} title={() => (<h2>业务分配列表</h2>)}>
        <Column title="业务编号" dataIndex="serviceInstanceDTO.serviceInstance.service_instance_nid" align="center"/>
        <Column title="测评员" dataIndex="user.user_name" align="center"/>
        <Column title="当事人" dataIndex="serviceInstanceDTO.serviceClientList" align="center" render={(text, record) => {
            return (text.map(function(client) {
              return (<Tooltip title={() => {
                  return (<div>
                    <div>姓名：{client.service_client_name}，性别：{client.service_client_sex}</div>
                    <div>电话：{client.service_client_phone}</div>
                    {
                      (client.service_client_visit === "1")
                        ? <div>未回访</div>
                        : <div>已回访</div>
                    }
                  </div>);
                }}>
                <Tag color="#108ee9">{client.service_client_name}</Tag>
              </Tooltip>);
            }));
          }}/>
        <Column title="办理时间" dataIndex="serviceInstanceDTO.serviceInstance.service_instance_date" align="center"/>
        <Column title="分配时间" dataIndex="serviceDistribution.service_distribution_gmt_create" align="center"/>
        <Column title="是否完成回访" dataIndex="serviceInstanceDTO.serviceClientList" align="center" render={(text, record) => {
            return (text.map(function(client) {
              //如果所有的当事人都回访了，那么回访完毕
            }));
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center",
        }}>共{this.state.serviceDistributionVO.totalRecords}条记录</div>
    </div>);

  }
}
export default withRouter(ServiceDistribution);
