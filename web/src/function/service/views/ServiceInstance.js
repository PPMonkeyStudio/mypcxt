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
import * as ServiceActions from '../ServiceActions.js';

const FormItem = Form.Item;
const {Column, ColumnGroup} = Table;
const Option = Select.Option;

//
//
//
//
class ServiceInstance extends Component {
  constructor(props, context) {
    super(props, context);
    this.storeChanged = this.storeChanged.bind(this);
    this.state = {
      serviceInstanceVO: {
        serviceInstanceDTOList: [],
        totalRecords: 0
      },
      tableLoading: false
    }
  }
  storeChanged() {
    if (this.state.serviceInstanceVO !== store.getState()["ServiceReducer"]["serviceInstance"]["serviceInstanceVO"]) {
      this.setState({
        serviceInstanceVO: store.getState()["ServiceReducer"]["serviceInstance"]["serviceInstanceVO"]
      });
    }
    if (this.state.tableLoading !== store.getState()["ServiceReducer"]["serviceInstance"]["serviceInstanceTableLoading"]) {
      this.setState({
        tableLoading: store.getState()["ServiceReducer"]["serviceInstance"]["serviceInstanceTableLoading"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    //
    store.dispatch(ServiceActions.getServiceInstanceVO());
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
      <Table dataSource={this.state.serviceInstanceVO.serviceInstanceDTOList} loading={this.state.tableLoading} bordered={true} title={() => (<h2>业务实例列表</h2>)}>
        <Column title="业务编号" dataIndex="serviceInstance.service_instance_nid" align="center"/>
        <Column title="业务类型" dataIndex="serviceDefinitionDTO.serviceDefinition.service_definition_describe" align="center"/>
        <Column title="所属单位" dataIndex="serviceDefinitionDTO.unit.unit_name" align="center"/>
        <Column title="当事人" dataIndex="serviceClientList" align="center" render={(text, record) => {
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
        <Column title="办理时间" dataIndex="serviceInstance.service_instance_date" align="center"/>
        <Column title="是否已分配" dataIndex="serviceInstance.service_instance_distribution" align="center" render={(text, record) => {
            return (<div>
              {
                (text === "1")
                  ? <Tag color="#108ee9">是</Tag>
                  : <Tag color="#777777">否</Tag>
              }
            </div>);
          }}/>
      </Table>
      <div style={{
          margin: "20px auto 10px",
          width: "200px",
          textAlign: "center",
        }}>共{this.state.serviceInstanceVO.totalRecords}条记录</div>

    </div>);

  }
}
export default withRouter(ServiceInstance);
