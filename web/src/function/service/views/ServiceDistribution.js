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
      serviceDistributionThreadState: false
    }
  }
  storeChanged() {
    if (this.state.serviceDistributionThreadState !== store.getState()["ServiceReducer"]["ServiceDistribution"]["serviceDistributionThreadState"]) {
      this.setState({
        serviceDistributionThreadState: store.getState()["ServiceReducer"]["ServiceDistribution"]["serviceDistributionThreadState"]
      });
    }
  }
  componentDidMount() {
    store.subscribe(this.storeChanged);
    //
    //加载数据
    store.dispatch(ServiceActions.getserviceDistributionThreadState());
  }
  render() {
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
    </div>);

  }
}
export default withRouter(ServiceDistribution);
